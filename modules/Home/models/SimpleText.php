<?php
/*+***********************************************************************************
 * Simple Text Widget Model for F-RevoCRM Dashboard
 * Handles data operations for the SimpleText widget
 *************************************************************************************/

class Home_SimpleText_Model extends Vtiger_Widget_Model {
	
	/**
	 * Get the text content from widget data
	 * @return string
	 */
	public function getContent() {
		$data = $this->getData();
		if (isset($data['text'])) {
			return $data['text'];
		}
		return '';
	}
	
	/**
	 * Get the last saved date
	 * @return string
	 */
	public function getLastSavedDate() {
		$data = $this->getData();
		if (isset($data['lastSavedOn'])) {
			return $data['lastSavedOn'];
		}
		return '';
	}
	
	/**
	 * Get decoded data
	 * @return array
	 */
	public function getData() {
		$rawData = $this->get('data');
		if ($rawData) {
			return Zend_Json::decode(decode_html($rawData));
		}
		return array();
	}
	
	/**
	 * Save widget content
	 * @param Vtiger_Request $request
	 */
	public function save($request) {
		$db = PearDatabase::getInstance();
		$widgetId = $request->get('widgetid');
		$textContent = $request->get('text');
		
		// If text is sent in data array
		$requestData = $request->get('data');
		if (is_array($requestData) && isset($requestData['text'])) {
			$textContent = $requestData['text'];
		}
		
		$date_var = date("Y-m-d H:i:s");
		$date = $db->formatDate($date_var, true);
		
		$dataValue = array();
		$dataValue['text'] = $textContent;
		$dataValue['lastSavedOn'] = $date;
		
		$data = Zend_Json::encode($dataValue);
		$this->set('data', $data);
		
		// Update in database
		$db->pquery('UPDATE vtiger_module_dashboard_widgets SET data=? WHERE id=?', 
			array($data, $widgetId));
	}
	
	/**
	 * Get user instance of the widget
	 * @param int $widgetId
	 * @return Home_SimpleText_Model
	 */
	public static function getUserInstance($widgetId) {
		$currentUser = Users_Record_Model::getCurrentUserModel();
		$db = PearDatabase::getInstance();
		
		// Get widget data with link URL for Vtiger7 compatibility
		$result = $db->pquery('SELECT vtiger_module_dashboard_widgets.*, vtiger_links.linkurl 
			FROM vtiger_module_dashboard_widgets 
			INNER JOIN vtiger_links ON vtiger_links.linkid = vtiger_module_dashboard_widgets.linkid 
			WHERE linktype = ? AND vtiger_module_dashboard_widgets.id = ? 
			AND vtiger_module_dashboard_widgets.userid = ?', 
			array('DASHBOARDWIDGET', $widgetId, $currentUser->getId()));
		
		$self = new self();
		if($db->num_rows($result)) {
			$row = $db->query_result_rowdata($result, 0);
			$self->setData($row);
		}
		return $self;
	}
}