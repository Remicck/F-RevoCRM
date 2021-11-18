<?php
$Vtiger_Utils_Log = true;
include_once('vtlib/Vtiger/Menu.php');
include_once('vtlib/Vtiger/Module.php');
include_once('modules/PickList/DependentPickListUtils.php');
include_once('modules/ModTracker/ModTracker.php');
include_once('include/utils/CommonUtils.php');

require_once('setup/utils/FRFieldSetting.php');
require_once('setup/utils/FRFilterSetting.php');

/*モジュール：Vtiger*/
$db = PearDatabase::getInstance();

echo "001---Add ElasticsearchHandler Table Start:".PHP_EOL;
// モジュール情報保存時時の前処理
$sqlStr = "INSERT INTO vtiger_eventhandlers(event_name, handler_path, handler_class, cond, is_active, dependent_on) ".
            "VALUES ('vtiger.entity.aftersave.final', 'modules/Vtiger/handlers/ElasticsearchHandler.php', 'ElasticSearchHandler', '', 1, '[]')";
$db->query($sqlStr);

echo "001---Add ElasticsearchHandler Table End:".PHP_EOL;