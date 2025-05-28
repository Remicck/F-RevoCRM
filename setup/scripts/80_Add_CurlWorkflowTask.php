<?php
$Vtiger_Utils_Log = true;
include_once('vtlib/Vtiger/Menu.php');
include_once('vtlib/Vtiger/Module.php');
include_once('modules/PickList/DependentPickListUtils.php');
include_once('modules/ModTracker/ModTracker.php');
include_once('include/utils/CommonUtils.php');
include_once('includes/Loader.php');
include_once('includes/runtime/BaseModel.php');
include_once('includes/runtime/LanguageHandler.php');
include_once('modules/Vtiger/models/Record.php');
include_once('includes/runtime/Globals.php');
include_once('modules/Vtiger/models/Record.php');
include_once('modules/Vtiger/models/Module.php');
include_once('modules/com_vtiger_workflow/VTTaskManager.inc');

$taskType = array(
    "name" => "VTExecuteCurlTask",
    "label" => "Execute Curl",
    "classname" => "VTExecuteCurlTask", 
    "classpath" => "modules/com_vtiger_workflow/tasks/VTExecuteCurlTask.inc",
    "templatepath" => "modules/Settings/Workflows/Tasks/VTExecuteCurlTask.tpl",
    "modules" => array(),
    "sourcemodule" => ''
);
VTTaskType::registerTaskType($taskType);