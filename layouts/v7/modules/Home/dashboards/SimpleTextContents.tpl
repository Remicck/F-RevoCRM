{strip}
<style>
.simpleTextWidgetContainer {
	padding: 15px;
	min-height: 100px;
}
.simpleTextWidgetContainer .textDisplay {
	font-size: 14px;
	line-height: 1.6;
	color: #333;
	white-space: pre-wrap;
	word-wrap: break-word;
}
.simpleTextWidgetContainer .editMode {
	width: 100%;
	min-height: 100px;
}
.simpleTextWidgetContainer .noContent {
	color: #999;
	font-style: italic;
	text-align: center;
	padding: 20px;
}
</style>

<div class="simpleTextWidgetContainer">
	<div class="widget-contents">
		{if $WIDGET}
			{assign var=WIDGET_DATA value=$WIDGET->get('data')}
			{if $WIDGET_DATA}
				{assign var=DECODED_DATA value=$WIDGET_DATA|@json_decode:true}
				{if $DECODED_DATA && $DECODED_DATA.text}
					<div class="textDisplay" data-mode="display">
						{$DECODED_DATA.text|escape:'html'}
					</div>
				{else}
					<div class="noContent">
						{vtranslate('LBL_NO_CONTENT', $MODULE_NAME)}
						<br>
						<small>{vtranslate('LBL_CLICK_TO_ADD_CONTENT', $MODULE_NAME)}</small>
					</div>
				{/if}
			{else}
				<div class="noContent">
					{vtranslate('LBL_NO_CONTENT', $MODULE_NAME)}
					<br>
					<small>{vtranslate('LBL_CLICK_TO_ADD_CONTENT', $MODULE_NAME)}</small>
				</div>
			{/if}
			
			<div class="editMode hide">
				<textarea class="form-control simpleTextEdit" rows="5" placeholder="{vtranslate('LBL_ENTER_TEXT', $MODULE_NAME)}">
					{if $DECODED_DATA && $DECODED_DATA.text}{$DECODED_DATA.text|escape:'html'}{/if}
				</textarea>
				<div class="pull-right marginTop10">
					<button class="btn btn-success saveSimpleText" type="button">
						<strong>{vtranslate('LBL_SAVE', $MODULE_NAME)}</strong>
					</button>
					<button class="btn btn-default cancelSimpleText" type="button">
						{vtranslate('LBL_CANCEL', $MODULE_NAME)}
					</button>
				</div>
				<div class="clearfix"></div>
			</div>
		{else}
			<div class="noContent">
				{vtranslate('LBL_WIDGET_NOT_CONFIGURED', $MODULE_NAME)}
			</div>
		{/if}
	</div>
</div>

<script type="text/javascript">
{literal}
jQuery(document).ready(function() {
	var container = jQuery('.simpleTextWidgetContainer');
	var widgetContainer = container.closest('.dashboardWidget');
	var widgetId = widgetContainer.attr('data-widgetid');
	
	// Enable edit mode on click
	container.on('click', '.textDisplay, .noContent', function() {
		container.find('.textDisplay, .noContent').addClass('hide');
		container.find('.editMode').removeClass('hide');
	});
	
	// Save text
	container.on('click', '.saveSimpleText', function() {
		var textValue = container.find('.simpleTextEdit').val();
		var params = {
			module: 'Home',
			action: 'DashBoard',
			mode: 'saveWidgetData',
			widgetid: widgetId,
			data: {
				text: textValue
			}
		};
		
		app.request.post({data: params}).then(function(err, data) {
			if(!err) {
				// Refresh widget content
				var refreshParams = {
					module: 'Home',
					view: 'ShowWidget',
					name: 'SimpleText',
					widgetid: widgetId,
					content: true
				};
				
				app.request.post({data: refreshParams}).then(function(err, responseData) {
					if(!err) {
						widgetContainer.find('.dashboardWidgetContent').html(responseData);
					}
				});
			}
		});
	});
	
	// Cancel edit
	container.on('click', '.cancelSimpleText', function() {
		container.find('.editMode').addClass('hide');
		container.find('.textDisplay, .noContent').removeClass('hide');
	});
});
{/literal}
</script>
{/strip}