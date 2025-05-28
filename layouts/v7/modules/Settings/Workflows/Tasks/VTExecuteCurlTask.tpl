{*<!--
/*********************************************************************************
** The contents of this file are subject to the vtiger CRM Public License Version 1.0
* ("License"); You may not use this file except in compliance with the License
* The Original Code is: vtiger CRM Open Source
* The Initial Developer of the Original Code is vtiger.
* Portions created by vtiger are Copyright (C) vtiger.
* All Rights Reserved.
*
********************************************************************************/
-->*}
{strip}
    <div class="form-group">
		<label class="col-sm-3 control-label">
			{vtranslate('LBL_URL', $QUALIFIED_MODULE)}<span class="redColor">*</span>
		</label>
		<div class="col-sm-6">
			<input type="text" name="url" class="form-control" value="{$TASK_OBJECT->url}" required />
		</div>
	</div>

	<div class="form-group">
		<label class="col-sm-3 control-label">
			{vtranslate('LBL_METHOD', $QUALIFIED_MODULE)}<span class="redColor">*</span>
		</label>
		<div class="col-sm-6">
			<select name="method" class="select2 form-control" required>
				<option value="GET" {if $TASK_OBJECT->method eq 'GET'}selected{/if}>GET</option>
				<option value="POST" {if $TASK_OBJECT->method eq 'POST'}selected{/if}>POST</option>
				<option value="PUT" {if $TASK_OBJECT->method eq 'PUT'}selected{/if}>PUT</option>
				<option value="DELETE" {if $TASK_OBJECT->method eq 'DELETE'}selected{/if}>DELETE</option>
				<option value="PATCH" {if $TASK_OBJECT->method eq 'PATCH'}selected{/if}>PATCH</option>
			</select>
		</div>
	</div>

	<div class="form-group">
		<label class="col-sm-3 control-label">
			{vtranslate('LBL_HEADERS', $QUALIFIED_MODULE)}
		</label>
		<div class="col-sm-6">
			<div id="headersContainer">
				{foreach from=$TASK_OBJECT->headers item=header}
				<div class="header-row row">
					<div class="col-sm-5">
						<input type="text" name="header_key[]" class="form-control" placeholder="Key" value="{$header.key}" />
					</div>
					<div class="col-sm-5">
						<input type="text" name="header_value[]" class="form-control" placeholder="Value" value="{$header.value}" />
					</div>
					<div class="col-sm-2">
						<button type="button" class="btn btn-danger remove-header"><i class="fa fa-trash"></i></button>
					</div>
				</div>
				{/foreach}
			</div>
			<button type="button" class="btn btn-default" id="addHeaderBtn">
				{vtranslate('LBL_ADD_HEADER', $QUALIFIED_MODULE)}
			</button>
		</div>
	</div>

	<div class="form-group">
		<label class="col-sm-3 control-label">
			{vtranslate('LBL_BODY', $QUALIFIED_MODULE)}
		</label>
		<div class="col-sm-6">
			<textarea name="body" class="form-control" rows="5">{$TASK_OBJECT->body}</textarea>
		</div>
	</div>

	<div class="form-group">
		<label class="col-sm-3 control-label">
			{vtranslate('LBL_TIMEOUT', $QUALIFIED_MODULE)}
		</label>
		<div class="col-sm-6">
			<input type="number" name="timeout" class="form-control" value="{$TASK_OBJECT->timeout|default:30}" min="1" />
		</div>
	</div>

	<div class="form-group">
		<label class="col-sm-3 control-label">
			{vtranslate('LBL_VERIFY_SSL', $QUALIFIED_MODULE)}
		</label>
		<div class="col-sm-6">
			<input type="checkbox" name="verify_ssl" {if $TASK_OBJECT->verify_ssl}checked{/if} />
		</div>
	</div>
{/strip}

<script type="text/javascript">
	jQuery(document).ready(function() {
		// ヘッダー追加ボタンの処理
		jQuery('#addHeaderBtn').on('click', function() {
			var headerRow = '<div class="header-row row">' +
				'<div class="col-sm-5">' +
				'<input type="text" name="header_key[]" class="form-control" placeholder="Key" />' +
				'</div>' +
				'<div class="col-sm-5">' +
				'<input type="text" name="header_value[]" class="form-control" placeholder="Value" />' +
				'</div>' +
				'<div class="col-sm-2">' +
				'<button type="button" class="btn btn-danger remove-header"><i class="fa fa-trash"></i></button>' +
				'</div>' +
				'</div>';
			jQuery('#headersContainer').append(headerRow);
		});

		// ヘッダー削除ボタンの処理
		jQuery(document).on('click', '.remove-header', function() {
			jQuery(this).closest('.header-row').remove();
		});
	});
</script>
