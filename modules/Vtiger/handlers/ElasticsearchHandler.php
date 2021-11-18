<?php
/* +***********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 * *********************************************************************************** */
require_once 'include/events/VTEventHandler.inc';

class ElasticSearchHandler extends VTEventHandler {

	function handleEvent($eventName, $data) {
		global $adb, $log;

		if ($eventName == 'vtiger.entity.aftersave.final') {
			$record = $data->getId();
			$module = $data->getModuleName();

			if($module == 'Users'){
				return ;
			}

			error_log("fooo\n", 3, "/var/www/html/fooo.log");


			// 値をすべてElasticSearchに登録する
			require_once("libraries/elasticsearch-php/vendor/autoload.php");
			$client = Elasticsearch\ClientBuilder::create()
			->setHosts(['elasticsearch:9200'])
			->build();

			$params = [
				'index' => 'my_index',
				'id'    => 'my_id',
				'body'  => ['testField' => 'abc']
			];

			$response = $client->index($params);
			error_log(print_r($response, true)."\n", 3, "/var/www/html/fooo.log");

			// $params = [
			// 	'index' => 'my_index',
			// 	'id'    => 'my_id'
			// ];
			// $response = $client->get($params);
			// error_log(print_r($response, true)."\n", 3, "/var/www/html/fooo.log");


			// すべての項目とその値を取得する


		}
	}
}