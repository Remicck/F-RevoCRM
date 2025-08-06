{strip}
<div class="dashboardWidgetHeader">
	{include file="dashboards/WidgetHeader.tpl"|@vtemplate_path:$MODULE_NAME}
</div>
<div class="dashboardWidgetContent">
	{include file="dashboards/SimpleTextContents.tpl"|@vtemplate_path:$MODULE_NAME}
</div>
<div class="widgeticons dashBoardWidgetFooter">
	<div class="footerIcons pull-right">
		{include file="dashboards/DashboardFooterIcons.tpl"|@vtemplate_path:$MODULE_NAME}
	</div>
</div>
{/strip}