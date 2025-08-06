<?php
/*+***********************************************************************************
 * Simple Text Widget for F-RevoCRM Dashboard
 * A simple widget that displays user-defined text on the dashboard
 *************************************************************************************/

class Home_SimpleText_Dashboard extends Vtiger_IndexAjax_View {
	
	public function process(Vtiger_Request $request, $widget=NULL) {
		$viewer = $this->getViewer($request);
		$moduleName = $request->getModule();
		$currentUser = Users_Record_Model::getCurrentUserModel();
		
		// Initialize Widget to the right-state of information
		if ($widget && !$request->has('widgetid')) {
			$widgetId = $widget->get('id');
		} else {
			$widgetId = $request->get('widgetid');
		}
		
		// Get or create widget instance
		$widget = Home_SimpleText_Model::getUserInstance($widgetId);
		
		// Handle save mode
		$mode = $request->get('mode');
		if ($mode == 'save') {
			$widget->save($request);
		}
		
		// Assign variables to template
		$viewer->assign('WIDGET', $widget);
		$viewer->assign('MODULE_NAME', $moduleName);
		$viewer->assign('CURRENT_USER', $currentUser);
		
		// Render content only or full widget
		$content = $request->get('content');
		if(!empty($content)) {
			$viewer->view('dashboards/SimpleTextContents.tpl', $moduleName);
		} else {
			$viewer->view('dashboards/SimpleText.tpl', $moduleName);
		}
	}
}