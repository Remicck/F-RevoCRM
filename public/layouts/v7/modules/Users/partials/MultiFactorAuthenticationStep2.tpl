{*+**********************************************************************************
* Lucide License
* ISC License
* Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
* Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
* THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
************************************************************************************}
<div name="massEditContainer">
    <div class="modal-body">
        {if isset($ERROR)}
            <div class="failureMessage">{vtranslate($ERROR, "Users")}</div>
        {/if}
        {if $TYPE == 'passkey'}
            <div class="form-horizontal">
                <form id="passkeyForm">
                    <div class="passkey-container">
                        <input type="hidden" name="hostname" value="{$HOSTNAME}">
                        <input type="hidden" name="view" value="{$VIEW}">
                        <input type="hidden" name="userid" value="{$USERID}">
                        <input type="hidden" name="username" value="{$USERNAME}">
                        <input type="hidden" name="type" value="{$TYPE}">
                        <input type="hidden" name="mode" value="{$MODE}">
                        <div class="passkey-first-input">
                            <div class="passkey-flex-row">
                                <div class="circle_number">1</div><div class="passkey-step-messase"><span>{vtranslate('LBL_ADD_DEVICE_NAME','Users')}</span></div>
                            </div>
                            <div class="passkey-form-group">
                                <label for="device_name">{vtranslate('LBL_USER_CREDENTIAL_DEVICE_NAME','Users')}</label>
                                <input type="text" name="device_name" class="form-control inputElement">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        {else}
            <form id="totpForm">
                <div class="totp-container">
                    <input type="hidden" name="secret" value="{$SECRET}">
                    <input type="hidden" name="view" value="{$VIEW}">
                    <input type="hidden" name="userid" value="{$USERID}">
                    <input type="hidden" name="type" value="{$TYPE}">

                    <div class="totp-left-content">
                        <div class="totp-first-input">
                            <div class="totp-flex-row">
                                <div class="circle_number">1</div><div class="totp-step-message"><span>{vtranslate('LBL_ADD_DEVICE_NAME','Users')}</span></div>
                            </div>
                            <div class="totp-form-group">
                                <label for="device_name">{vtranslate('LBL_USER_CREDENTIAL_DEVICE_NAME','Users')}</label>
                                <input type="text" name="device_name" class="form-control inputElement">
                            </div>
                        </div>
                        <div class="totp-second-input">
                            <div class="totp-flex-row">
                                <div class="circle_number">2</div><div class="totp-step-message"><span>{vtranslate('LBL_QR_CODE_READING_MESSAGE1','Users')}{vtranslate('LBL_CREADENTIAL_APPLICATION','Users')}{vtranslate('LBL_QR_CODE_READING_MESSAGE2','Users')}</span></div>
                            </div>
                            <div class="totp-form-group-mobile">
                                <div id="qrcode-mobile" class="text-center"></div>
                                <div class="qrcode-text-message">
                                    <span>{vtranslate('LBL_TOTP_CAMERA_OR_SECRET_INPUT_MESSAGE','Users')}</span>
                                </div>
                                <div class="totp-secret-code">
                                    <span>{$SECRET}</span>
                                </div>
                            </div>
                        </div>
                        <div class="totp-third-input">
                            <div class="totp-flex-row">
                                <div class="circle_number">3</div><div class="totp-step-message"><span>{vtranslate('LBL_TOTP_CODE_INPUT_MESSAGE','Users')}</span></div>
                            </div>
                            <div class="totp-form-group">
                                <label for="totp_code">{vtranslate('LBL_TOTP_SIX_CODE','Users')}</label>
                                <input type="text" name="totp_code" class="form-control inputElement">
                            </div>
                        </div>
                    </div>
                    <div class="totp-right-content">
                        <div id="qrcode" class="text-center"></div>
                        <div class="qrcode-text-message">
                            <span>{vtranslate('LBL_TOTP_CAMERA_OR_SECRET_INPUT_MESSAGE','Users')}</span>
                        </div>
                        <div class="totp-secret-code">
                            <span>{$SECRET}</span>
                        </div>
                    </div>
                </div>
            </form>
        {/if}
    </div>
</div>