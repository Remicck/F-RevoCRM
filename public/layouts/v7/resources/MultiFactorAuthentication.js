window.FR_MultiFactorAuthentication_Js = {
    base64ToUint8Array: function(str) {
        var binaryString = atob(str);
        var bytes = new Uint8Array(binaryString.length);
        for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    },

    arrayBufferToBase64: function(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    },

    createCredentials: function(challenge) {
        var userid = $("#passkeyForm input[name='userid']").val();
        var username = $("#passkeyForm input[name='username']").val();
        var hostname = $("#passkeyForm input[name='hostname']").val();
        return navigator.credentials.create({
            publicKey: {
                challenge: challenge,
                rp: {
                    id: hostname,
                    name: "F-RevoCRM",
                },
                user: {
                    id: Uint8Array.from( userid, function(c) { return c.charCodeAt(0); }),
                    name: username,
                    displayName: username,
                },
                pubKeyCredParams: [
                    { type: "public-key", alg: -7 },
                    { type: "public-key", alg: -8 },
                    { type: "public-key", alg: -257 }
                ],
                excludeCredentials: [],
                authenticatorSelection: {
                    authenticatorAttachment: "platform",
                    requireResidentKey: true,
                    userVerification: "required"
                },
                timeout: 180000,
                hints: ["client-device"]
            }
        });
    },

    registerPasskeyEvents: function() {
        var self = this;
        $(document).on("click", "#passkeyAdd", function(e) {
            $(this).prop('disabled', true);
            e.preventDefault();
            $.ajax({
                url: 'index.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    module: 'Users',
                    action: 'ChallengePasskeyAjax'
                },
                success: function(response) {
                    if (response.success) {
                        var challenge = response.result;
                        var challengeBytes = self.base64ToUint8Array(challenge);
                        $('input[name="challenge"]').val(challengeBytes);

                        if (!navigator.credentials || !navigator.credentials.create) {
                            console.error(app.vtranslate('JS_WEBAUTHN_ERROR', 'Users'));
                            return;
                        }

                        self.createCredentials(challengeBytes).then(function(cred) {
                            var clientDataJSON = self.arrayBufferToBase64(cred.response.clientDataJSON);
                            var attestationObject = self.arrayBufferToBase64(cred.response.attestationObject);
                            var rawId = self.arrayBufferToBase64(cred.rawId);

                            var credentialForServer = {
                                id: cred.id,
                                type: cred.type,
                                rawId: rawId,
                                response: {
                                    clientDataJSON: clientDataJSON,
                                    attestationObject: attestationObject
                                },
                                clientExtensionResults: cred.clientExtensionResults
                            };
                            // #passkeyFormをpostする
                            var params = {};
                            var form = $("#passkeyForm");
                            params.url = 'index.php';
                            params.data = {
                                'module': 'Users',
                                'action': 'SaveMultiFactorAuthenticationAjax',
                                'challenge': challengeBytes,
                                'credential': JSON.stringify(credentialForServer),
                                'device_name': form.find('[name="device_name"]').val(),
                                'userid': form.find('[name="userid"]').val(),
                                'username': form.find('[name="username"]').val(),
                                'type': 'passkey'
                            };
                            app.request.post(params).then(function(err, data) {
                                if (err === null) {
                                    if( data.login === 'true' ) {
                                        // link先へリダイレクト
                                        window.location.href = data.link;
                                    }
                                    else
                                    {
                                        app.helper.showSuccessNotification({'message': app.vtranslate('JS_ADD_MULTI_FACTOR_AUTHENTICATION_FINISH')});
                                        app.helper.hideModal();
                                        location.reload();
                                    }
                                    
                                } else {
                                    app.helper.showErrorNotification({"message": err});
                                    $(this).prop('disabled', false);
                                }
                            });
                        }).catch(function(error) {
                            console.error("Error creating credentials:", error);
                            $(this).prop('disabled', false);
                        });
                    }
                },
                error: function(xhr, status, error) {
                    console.error('AJAX Error:', error);
                    $(this).prop('disabled', false);
                }
            });
        });
    },

    registerTotpEvents: function() {
        $(document).on("click", "#totpAdd", function(e) {
            e.preventDefault();
            var form = $("#totpForm");
            var params = {
                url: 'index.php',
                data: {
                    'module': 'Users',
                    'action': 'SaveMultiFactorAuthenticationAjax',
                    'secret' : form.find('[name="secret"]').val(),
                    'view' : form.find('[name="view"]').val(),
                    'userid' : form.find('[name="userid"]').val(),
                    'device_name': form.find('[name="device_name"]').val(),
                    'totp_code': form.find('[name="totp_code"]').val(),
                    'type' : 'totp',
                }
            };
            app.request.post(params).then(function(err, data) {
                if (err === null) {
                    if( data.login === 'true' ) {
                        window.location.href = data.link;
                    } else{
                        app.helper.showSuccessNotification({'message': app.vtranslate('JS_ADD_MULTI_FACTOR_AUTHENTICATION_FINISH', 'Users')});
                        app.helper.hideModal();
                        location.reload();
                    }
                } else {
                    app.helper.showErrorNotification({'message': err});
                }
            });
        });
    },

    createQRCode: function( elementId, qrcodeURL) {
        var qrcode = new QRCode(document.getElementById(elementId), {
            text: qrcodeURL,
            cls: "img-responsive",
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        return qrcode;
    },

    registerDeleteCredentialEvent: function(element) {
		$(document).on('click', '.deleteCredential', function(){
			var $this = $(this);
            $this.prop('disabled', true);
			var credentialId = $(this).data('id');
			if (confirm(app.vtranslate('JS_CONFIRM_DELETE_CREDENTIAL', 'Users'))) {
				$.ajax({
					url: 'index.php',
					type: 'POST',
					data: {
						recordid: $('input[name="record_id"]').val(),
						module: 'Users',
						action: 'DeleteAjax',
						mode: 'credential',
						credentialid: credentialId,
					},
					success: function(response) {
						if (response.success) {
							alert(app.vtranslate('JS_USER_CREDENTIAL_DELETE_SUCCESS', 'Users'));
							location.reload();
						} else {
							alert(app.vtranslate('JS_USER_CREDENTIAL_DELETE_FAILED', 'Users'));
						}
					},
					error: function() {
						alert(app.vtranslate('JS_USER_CREDENTIAL_DELETE_FAILED', 'Users'));
					}
				});
			}
			$this.prop('disabled', false);
		});
	},

    // ログイン処理
    authenticationPasskeyEvent: function() {
        var self = this;
        $(document).on("click", "#passkeyLoginBtn", function(e){
            var $this = $(this);
            $this.prop('disabled', true);
            $.ajax({
                url: 'index.php',
                type: 'POST',
                dataType: 'json',
                data: {
                    module: 'Users',
                    action: 'ChallengePasskeyAjax',
                },
                success: function(response) {
                    if (response.success) {
                        var challenge = response.result;
                        var challengeBytes = self.base64ToUint8Array(challenge);
                        $('input[name="challenge"]').val(challengeBytes);

                        if (!navigator.credentials || !navigator.credentials.create) {
                            app.helper.showErrorNotification({'message': app.vtranslate('JS_WEBAUTHN_ERROR')});
                            $(this).prop('disabled', false);
                            return;
                        }
                        try {
                            navigator.credentials.get({
                                publicKey: {
                                    challenge: challengeBytes,
                                    allowCredentials: response.allowCredentials,
                                    userVerification: 'required'
                                }
                            }).then(function(credential) {
                                var credentialData = JSON.stringify(credential);
                                $('input[name="credential"]').val(credentialData);
                                $('#passkeyForm').submit();
                            }).catch(function(error) {
                                if (error.name === 'NotAllowedError') {
                                    app.helper.showErrorNotification({'message': app.vtranslate('JS_MULTI_FACTOR_AUTHENTICATION_USER_CHANCELED')});
                                } else if (error.name === 'AbortError') {
                                    app.helper.showErrorNotification({'message': app.vtranslate('JS_MULTI_FACTOR_AUTHENTICATION_CHANCELED')});
                                } else {
                                    app.helper.showErrorNotification({'message': app.vtranslate('JS_WEBAUTHN_ERROR')});
                                }
                                
                            });
                        } catch (error) {
                            app.helper.showErrorNotification({'message': app.vtranslate('JS_WEBAUTHN_ERROR')});
                        }
                    }
                    $this.prop('disabled', false);
                }
            });
        });
    },
};