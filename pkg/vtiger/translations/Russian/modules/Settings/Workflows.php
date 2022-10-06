<?php
/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.0
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  vtiger CRM Open Source
 * The Initial Developer of the Original Code is vtiger.
 * Portions created by vtiger are Copyright (C) vtiger.
 * All Rights Reserved.
 ************************************************************************************/
$languageStrings = array(
    'LBL_NEW'                      => 'Новые'                  ,
    'LBL_WORKFLOW'                 => 'Рабочий процесс'                    ,
    'LBL_CREATING_WORKFLOW'        => 'Создание WorkFlow'           ,
    'LBL_NEXT'                     => 'следующий'          , // KEY 5.x: LNK_LIST_NEXT
    'LBL_STEP_1'                   => 'Шаг 1'                      ,
    'LBL_ENTER_BASIC_DETAILS_OF_THE_WORKFLOW' => 'Введите основные детали Рабочий процесс',
    'LBL_SPECIFY_WHEN_TO_EXECUTE'  => 'Укажите, когда следует выполнять эту Рабочий процесс',
    'ON_FIRST_SAVE'                => 'Только после первого сохранения', // KEY 5.x: LBL_ONLY_ON_FIRST_SAVE
    'ONCE'                         => 'Пока не будет достигнуто условие', // KEY 5.x: LBL_UNTIL_FIRST_TIME_CONDITION_TRUE
    'ON_EVERY_SAVE'                => 'После каждого сохранения записи', // KEY 5.x: LBL_EVERYTIME_RECORD_SAVED
    'ON_MODIFY'                    => 'После каждого изменения записи', // KEY 5.x: LBL_ON_MODIFY
    'MANUAL'                       => 'Система'                      ,
    'SCHEDULE_WORKFLOW'            => 'Расписание рабочего процесса'           ,
    'ADD_CONDITIONS'               => 'Добавить Условия'              ,
    'ADD_TASKS'                    => 'Добавить Задачи'                   ,
    'LBL_EXPRESSION'               => 'Выражение'                  ,
    'LBL_FIELD_NAME'               => 'Loading...'                       ,
    'LBL_SET_VALUE'                => 'Заданное значение'                   ,
    'LBL_USE_FIELD'                => 'Использование поле'                   ,
    'LBL_USE_FUNCTION'             => 'Используйте функцию'                ,
    'LBL_RAW_TEXT'                 => 'Сырье текст'                    ,
    'LBL_ENABLE_TO_CREATE_FILTERS' => 'Включить создавать фильтры'    ,
    'LBL_CREATED_IN_OLD_LOOK_CANNOT_BE_EDITED' => 'Этот рабочий процесс был создан в старой вид. Условия, созданные в старых взгляд не может быть изменен. Вы можете выбрать воссоздать условия, или использовать существующие условия без изменения их.',
    'LBL_USE_EXISTING_CONDITIONS'  => 'Используйте существующие условия'     ,
    'LBL_RECREATE_CONDITIONS'      => 'Воссоздать условия'         ,
    'LBL_SAVE_AND_CONTINUE'        => 'Сохранить и Продолжить'             ,
    'LBL_ACTIVE'                   => 'Активен'              ,
    'LBL_TASK_TYPE'                => 'Тип действия'     ,
    'LBL_TASK_TITLE'               => 'Название действия',
    'LBL_ADD_TASKS_FOR_WORKFLOW'   => 'Добавить действие для Workflow',
    'LBL_EXECUTE_TASK'             => 'Выполнить Действие',
    'LBL_SELECT_OPTIONS'           => 'Выберите Функции'              ,
    'LBL_ADD_FIELD'                => 'Создать Пользовательское Поле',
    'LBL_ADD_TIME'                 => 'Добавить время'                    ,
    'LBL_TITLE'                    => 'Заголовок'          ,
    'LBL_PRIORITY'                 => 'приоритет'          ,
    'LBL_ASSIGNED_TO'              => 'Ответственный'  ,
    'LBL_TIME'                     => 'Время'                  ,
    'LBL_DUE_DATE'                 => 'Дата Платежа'     ,
    'LBL_THE_SAME_VALUE_IS_USED_FOR_START_DATE' => 'То же самое значение используется для даты начала',
    'LBL_EVENT_NAME'               => 'Название события'                  ,
    'LBL_TYPE'                     => 'Тип'                      ,
    'LBL_METHOD_NAME'              => 'Имя метода'                 ,
    'LBL_RECEPIENTS'               => 'Получателям'                  ,
    'LBL_ADD_FIELDS'               => 'Добавление полей'                  ,
    'LBL_SMS_TEXT'                 => 'Текст SMS'                    ,
    'LBL_SET_FIELD_VALUES'         => 'Набор Значения полей'            ,
    'LBL_IN_ACTIVE'                => 'В активность'                   ,
    'LBL_SEND_NOTIFICATION'        => 'Отправить уведомление'           ,
    'LBL_START_TIME'               => 'время начала'     , // KEY 5.x: Start Time
    'LBL_START_DATE'               => 'Дата Начала'       ,
    'LBL_END_TIME'                 => 'время окончания', // KEY 5.x: End Time
    'LBL_END_DATE'                 => 'Дата Окончания' ,
    'LBL_ENABLE_REPEAT'            => 'Включить Repeat'               ,
    'LBL_NO_METHOD_IS_AVAILABLE_FOR_THIS_MODULE' => 'Ни один метод не доступен для этого модуля',
    'LBL_FINISH'                   => 'Финиш'                  ,
    'LBL_NO_TASKS_ADDED'           => 'Нет действия'     ,
    'LBL_CANNOT_DELETE_DEFAULT_WORKFLOW' => 'Вы не можете удалять умолчанию рабочий процесс',
    'LBL_MODULES_TO_CREATE_RECORD' => 'Создание записи в',
    'LBL_EXAMPLE_EXPRESSION'       => 'Выражение'                  ,
    'LBL_EXAMPLE_RAWTEXT'          => 'Rawtext'                     ,
    'LBL_VTIGER'                   => 'Vtiger'                      ,
    'LBL_EXAMPLE_FIELD_NAME'       => 'Поле'                       ,
    'LBL_NOTIFY_OWNER'             => 'notify_owner'                ,
    'LBL_ANNUAL_REVENUE'           => 'annual_revenue'              ,
    'LBL_EXPRESSION_EXAMPLE2'      => 'если mailingcountry == \'Индия \', то Concat (имя, \'\', фамилия) еще Concat (фамилия, \'\', Имя) конец',
    'LBL_FROM' => 'От',
    'Optional' => 'Необязательный',
    'LBL_ADD_TASK'                 => 'Добавить действие',
    'Portal Pdf Url' =>'Портал для клиентов Pdf ссылка',
    'LBL_ADD_TEMPLATE' => 'Добавить шаблон',
    'LBL_LINEITEM_BLOCK_GROUP' => 'Блок LineItems для налоговой группы',
    'LBL_LINEITEM_BLOCK_INDIVIDUAL' => 'Блок LineItems для индивидуального налога',
    'LBL_ADD_PDF' => 'Добавить PDF',

    //Translation for module
    'Calendar'						=> 'Делать'				,
    'Send Mail'					   => 'Написать письмо'		,
    'Invoke Custom Function'	   => 'Вызов пользовательской функции'	,
    'Create Todo'				   => 'Создать Todo'					,
    'Create Event'				   => 'Создать событие'					,
    'Update Fields'				   => 'Обновление полей'				,
    'Create Entity'                => 'Создать запись' ,
    'SMS Task'					   => 'SMS Задача'						,
    'Mobile Push Notification'	   => 'Мобильная рассылки уведомлений'	,
    'LBL_ACTION_TYPE' => 'Тип действия (посещение Граф)',
    'LBL_VTEmailTask' => 'E-mail',
    'LBL_VTEntityMethodTask' => 'Пользовательские функции',
    'LBL_VTCreateTodoTask' => 'Задача',
    'LBL_VTCreateEventTask' => 'Событие',
    'LBL_VTUpdateFieldsTask' => 'Поле Обновление',
    'LBL_VTSMSTask' => 'СМС',
    'LBL_VTPushNotificationTask' => 'Мобильные уведомления',
    'LBL_VTCreateEntityTask' => 'Создать запись',
    'LBL_MAX_SCHEDULED_WORKFLOWS_EXCEEDED' => 'Максимальное количество (%s) запланированных рабочих процессов был превышен',

  'LBL_EDITING_WORKFLOW' => 'Рабочий Процесс Редактирования',
  'LBL_ADD_RECORD' => 'Новый Рабочий Процесс',
  'ON_SCHEDULE' => 'Расписание',
  'LBL_RUN_WORKFLOW' => 'Запуск Рабочего Процесса',
  'LBL_AT_TIME' => 'На Время',
  'LBL_HOURLY' => 'Почасовой',
  'ENTER_FROM_EMAIL_ADDRESS' => 'Введите адрес Эл. почты',
  'LBL_DAILY' => 'Ежедневно',
  'LBL_WEEKLY' => 'Еженедельно',
  'LBL_ON_THESE_DAYS' => 'В эти дни',
  'LBL_MONTHLY_BY_DATE' => 'Ежемесячно по дате',
  'LBL_MONTHLY_BY_WEEKDAY' => 'Ежемесячно по дням недели',
  'LBL_YEARLY' => 'Ежегодно',
  'LBL_SPECIFIC_DATE' => 'На Определенную Дату',
  'LBL_CHOOSE_DATE' => 'Выбрать Дату',
  'LBL_SELECT_MONTH_AND_DAY' => 'Выберите месяц и дату',
  'LBL_SELECTED_DATES' => 'Выбранной Даты',
  'LBL_EXCEEDING_MAXIMUM_LIMIT' => 'Максимальный лимит превысил',
  'LBL_NEXT_TRIGGER_TIME' => 'Следующий триггер времени на',
  'LBL_MESSAGE' => 'Сообщение',
  'LBL_WORKFLOW_NAME' => 'Имя Рабочего Процесса',
  'LBL_TARGET_MODULE' => 'Целевой Модуль',
  'LBL_WORKFLOW_TRIGGER' => 'Рабочий Процесс Триггер',
  'LBL_TRIGGER_WORKFLOW_ON' => 'Запустить Бизнес На',
  'LBL_RECORD_CREATION' => 'При Создании Записи',
  'LBL_RECORD_UPDATE' => 'Обновление Записи',
  'LBL_TIME_INTERVAL' => 'Временной Интервал',
  'LBL_RECURRENCE' => 'Повторение',
  'LBL_FIRST_TIME_CONDITION_MET' => 'Только первый раз условий',
  'LBL_EVERY_TIME_CONDITION_MET' => 'Каждый раз условия будут соблюдены',
  'LBL_WORKFLOW_CONDITION' => 'Условий Документооборота',
  'LBL_WORKFLOW_ACTIONS' => 'Действия Рабочего Процесса',
  'LBL_DELAY_ACTION' => 'Задержка Действий',
  'LBL_FREQUENCY' => 'Частота',
  'LBL_SELECT_FIELDS' => 'Выберите Поля',
  'LBL_INCLUDES_CREATION' => 'Включает В Себя Создание',
  'LBL_ACTION_FOR_WORKFLOW' => 'Действий для рабочего процесса',
  'LBL_WORKFLOW_SEARCH' => 'Поиск по фамилии',

);
$jsLanguageStrings = array(
    'JS_STATUS_CHANGED_SUCCESSFULLY' => 'Статус изменился Успешно' ,
    'JS_TASK_DELETED_SUCCESSFULLY' => 'Действие успешно удален',
    'JS_SAME_FIELDS_SELECTED_MORE_THAN_ONCE' => 'Те же поля выбран более чем один раз',
    'JS_WORKFLOW_SAVED_SUCCESSFULLY' => 'Рабочий процесс успешно сохранены' ,
    'JS_CHECK_START_AND_END_DATE'=>'Дата и время окончания должно быть больше или равно Начните даты и времени',

  'JS_TASK_STATUS_CHANGED' => 'Задача статус успешно изменен.',
  'JS_WORKFLOWS_STATUS_CHANGED' => '"Состояние рабочего процесса" изменено успешно.',
  'VTEmailTask' => 'Отправить Почту',
  'VTEntityMethodTask' => 'Вызвать Пользовательскую Функцию',
  'VTCreateTodoTask' => 'Создание Задачи',
  'VTCreateEventTask' => 'Создать Событие',
  'VTUpdateFieldsTask' => 'Обновление Полей',
  'VTSMSTask' => 'СМС задачи',
  'VTPushNotificationTask' => 'Мобильных Push-Уведомлений',
  'VTCreateEntityTask' => 'Создать Запись',
  'LBL_EXPRESSION_INVALID' => 'Выражение Недействительным',

);
