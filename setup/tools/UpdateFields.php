<?php
$Vtiger_Utils_Log = true;
include_once('vtlib/Vtiger/Menu.php');
include_once('vtlib/Vtiger/Module.php');
include_once('include/utils/CommonUtils.php');

class UpdateFields {
    private $db;
    private $fieldsFile = 'doc/fields.md';
    
    public function __construct() {
        $this->db = PearDatabase::getInstance();
        global $log;
        $log->debug("UpdateFields: Initializing vtiger_field documentation tool");
    }
    
    public function generateFieldsDocumentation() {
        global $log;
        $log->debug("UpdateFields: Starting vtiger_field documentation generation");
        
        $fieldsData = $this->analyzeFields();
        $markdownContent = $this->convertToMarkdown($fieldsData);
        $this->writeFieldsFile($markdownContent);
        
        echo "フィールドドキュメントが正常に更新されました！\n";
        echo "フィールド情報の保存先: " . $this->fieldsFile . "\n";
        
        $log->debug("UpdateFields: Fields documentation generation completed");
    }
    
    private function analyzeFields() {
        global $log;
        $log->debug("UpdateFields: Analyzing vtiger_field structure");
        
        $fieldsData = array(
            'metadata' => $this->getFieldsMetadata(),
            'modules' => array(),
            'ui_types' => array(),
            'field_statistics' => array()
        );
        
        // Get all modules with their fields
        $moduleResult = $this->db->pquery(
            "SELECT t.tabid, t.name as module_name, t.tablabel, t.parent 
             FROM vtiger_tab t 
             WHERE t.presence = 0 
             ORDER BY t.name", 
            array()
        );
        
        while ($moduleRow = $this->db->fetchByAssoc($moduleResult)) {
            $moduleFields = $this->getModuleFields($moduleRow['tabid']);
            if (!empty($moduleFields)) {
                $fieldsData['modules'][$moduleRow['module_name']] = array(
                    'tabid' => $moduleRow['tabid'],
                    'tablabel' => $moduleRow['tablabel'],
                    'parent' => $moduleRow['parent'],
                    'fields' => $moduleFields,
                    'field_count' => count($moduleFields)
                );
            }
        }
        
        // Analyze UI types
        $fieldsData['ui_types'] = $this->analyzeUITypes();
        
        // Generate field statistics
        $fieldsData['field_statistics'] = $this->generateFieldStatistics();
        
        return $fieldsData;
    }
    
    private function getFieldsMetadata() {
        $metadata = array(
            'generated_at' => date('Y-m-d H:i:s'),
            'total_fields' => 0,
            'total_modules' => 0,
            'custom_fields' => 0
        );
        
        // Count total fields
        $result = $this->db->pquery("SELECT COUNT(*) as field_count FROM vtiger_field", array());
        if ($row = $this->db->fetchByAssoc($result)) {
            $metadata['total_fields'] = $row['field_count'];
        }
        
        // Count active modules
        $result = $this->db->pquery("SELECT COUNT(*) as module_count FROM vtiger_tab WHERE presence = 0", array());
        if ($row = $this->db->fetchByAssoc($result)) {
            $metadata['total_modules'] = $row['module_count'];
        }
        
        // Count custom fields
        $result = $this->db->pquery("SELECT COUNT(*) as custom_count FROM vtiger_field WHERE generatedtype = 2", array());
        if ($row = $this->db->fetchByAssoc($result)) {
            $metadata['custom_fields'] = $row['custom_count'];
        }
        
        return $metadata;
    }
    
    private function getModuleFields($tabid) {
        $fields = array();
        
        $result = $this->db->pquery(
            "SELECT f.*, b.blocklabel, b.sequence as block_sequence
             FROM vtiger_field f
             INNER JOIN vtiger_blocks b ON f.block = b.blockid
             WHERE f.tabid = ?
             ORDER BY b.sequence, f.sequence",
            array($tabid)
        );
        
        while ($row = $this->db->fetchByAssoc($result)) {
            $fields[] = array(
                'fieldid' => $row['fieldid'],
                'fieldname' => $row['fieldname'],
                'fieldlabel' => $row['fieldlabel'],
                'tablename' => $row['tablename'],
                'columnname' => $row['columnname'],
                'uitype' => $row['uitype'],
                'typeofdata' => $row['typeofdata'],
                'generatedtype' => $row['generatedtype'],
                'defaultvalue' => $row['defaultvalue'],
                'block' => $row['blocklabel'],
                'block_sequence' => $row['block_sequence'],
                'sequence' => $row['sequence'],
                'displaytype' => $row['displaytype'],
                'quickcreate' => $row['quickcreate'],
                'quicksequence' => $row['quicksequence'],
                'summaryfield' => $row['summaryfield'],
                'masseditable' => $row['masseditable'],
                'info_type' => $row['info_type']
            );
        }
        
        return $fields;
    }
    
    private function analyzeUITypes() {
        $uiTypes = array();
        
        $result = $this->db->pquery(
            "SELECT uitype, COUNT(*) as count, 
                    GROUP_CONCAT(DISTINCT tablename ORDER BY tablename) as tables
             FROM vtiger_field 
             GROUP BY uitype 
             ORDER BY uitype",
            array()
        );
        
        while ($row = $this->db->fetchByAssoc($result)) {
            $uiTypes[$row['uitype']] = array(
                'count' => $row['count'],
                'tables' => $row['tables'],
                'description' => $this->getUITypeDescription($row['uitype'])
            );
        }
        
        return $uiTypes;
    }
    
    private function getUITypeDescription($uitype) {
        $descriptions = array(
            '1' => 'Text Field',
            '2' => 'Text Field',
            '3' => 'Number Field',
            '4' => 'Phone Number',
            '5' => 'Date Field', 
            '6' => 'Time Field',
            '7' => 'Decimal Field',
            '8' => 'Email Field',
            '9' => 'Percent Field',
            '10' => 'Related To (uitype 10)',
            '11' => 'Phone Number',
            '13' => 'Email Field',
            '14' => 'Date & Time',
            '15' => 'Picklist',
            '16' => 'Multi-select Picklist',
            '17' => 'Website/URL',
            '19' => 'Text Area',
            '20' => 'Long Text Area',
            '21' => 'Text Area',
            '22' => 'Text Area',
            '23' => 'Date Field',
            '24' => 'Date & Time',
            '25' => 'Date & Time',
            '26' => 'Related To (uitype 26)',
            '27' => 'File Upload',
            '28' => 'File Upload',
            '50' => 'Date Field',
            '51' => 'Related To (uitype 51)',
            '52' => 'User (uitype 52)',
            '53' => 'Related To (uitype 53)',
            '55' => 'Date & Time',
            '56' => 'Checkbox',
            '57' => 'Contact Name',
            '58' => 'Campaign',
            '59' => 'Related To (uitype 59)',
            '61' => 'File Upload',
            '62' => 'Related To (uitype 62)',
            '63' => 'Starrating',
            '64' => 'Long Text Area',
            '65' => 'Related To (uitype 65)',
            '66' => 'Related To (uitype 66)',
            '67' => 'Related To (uitype 67)',
            '68' => 'Related To (uitype 68)',
            '69' => 'Image',
            '70' => 'Time Field',
            '71' => 'Currency',
            '72' => 'Currency',
            '73' => 'Related To (uitype 73)',
            '75' => 'Vendor Name',
            '76' => 'Potential Name',
            '77' => 'Related To (uitype 77)',
            '78' => 'Related To (uitype 78)',
            '80' => 'Skype ID',
            '81' => 'Vendor Name',
            '98' => 'Role',
            '99' => 'Password',
            '101' => 'User Name',
            '115' => 'Country Picklist',
            '117' => 'Currency List',
            '120' => 'Shared Owner'
        );
        
        return isset($descriptions[$uitype]) ? $descriptions[$uitype] : 'Unknown UI Type';
    }
    
    private function generateFieldStatistics() {
        $stats = array();
        
        // Fields by UI type
        $result = $this->db->pquery(
            "SELECT uitype, COUNT(*) as count 
             FROM vtiger_field 
             GROUP BY uitype 
             ORDER BY count DESC 
             LIMIT 10",
            array()
        );
        
        $stats['top_ui_types'] = array();
        while ($row = $this->db->fetchByAssoc($result)) {
            $stats['top_ui_types'][] = array(
                'uitype' => $row['uitype'],
                'count' => $row['count'],
                'description' => $this->getUITypeDescription($row['uitype'])
            );
        }
        
        // Fields by table
        $result = $this->db->pquery(
            "SELECT tablename, COUNT(*) as count 
             FROM vtiger_field 
             WHERE tablename != '' 
             GROUP BY tablename 
             ORDER BY count DESC 
             LIMIT 10",
            array()
        );
        
        $stats['top_tables'] = array();
        while ($row = $this->db->fetchByAssoc($result)) {
            $stats['top_tables'][] = array(
                'table' => $row['tablename'],
                'count' => $row['count']
            );
        }
        
        // Custom vs System fields
        $result = $this->db->pquery(
            "SELECT 
                SUM(CASE WHEN generatedtype = 1 THEN 1 ELSE 0 END) as system_fields,
                SUM(CASE WHEN generatedtype = 2 THEN 1 ELSE 0 END) as custom_fields
             FROM vtiger_field",
            array()
        );
        
        if ($row = $this->db->fetchByAssoc($result)) {
            $stats['field_types'] = array(
                'system_fields' => $row['system_fields'],
                'custom_fields' => $row['custom_fields']
            );
        }
        
        return $stats;
    }
    
    private function convertToMarkdown($fieldsData) {
        $md = "# F-RevoCRM フィールドドキュメント\n\n";
        
        // Metadata section
        $md .= "## フィールド情報\n\n";
        $md .= "- **生成日時:** " . $fieldsData['metadata']['generated_at'] . "\n";
        $md .= "- **総フィールド数:** " . $fieldsData['metadata']['total_fields'] . "\n";
        $md .= "- **アクティブモジュール数:** " . $fieldsData['metadata']['total_modules'] . "\n";
        $md .= "- **カスタムフィールド数:** " . $fieldsData['metadata']['custom_fields'] . "\n\n";
        
        // Table of contents
        $md .= "## 目次\n\n";
        $md .= "1. [フィールド統計](#field-statistics)\n";
        $md .= "2. [UIタイプリファレンス](#ui-types-reference)\n";
        $md .= "3. [モジュールフィールド](#module-fields)\n\n";
        
        // Field Statistics
        $md .= "## フィールド統計\n\n";
        
        if (isset($fieldsData['field_statistics']['field_types'])) {
            $md .= "### システムフィールド vs カスタムフィールド\n\n";
            $stats = $fieldsData['field_statistics']['field_types'];
            $md .= "- **システムフィールド:** " . $stats['system_fields'] . "\n";
            $md .= "- **カスタムフィールド:** " . $stats['custom_fields'] . "\n\n";
        }
        
        if (isset($fieldsData['field_statistics']['top_ui_types'])) {
            $md .= "### 最も使用されているUIタイプ\n\n";
            $md .= "| UIタイプ | 説明 | 使用数 |\n";
            $md .= "|---------|-------------|-------|\n";
            
            foreach ($fieldsData['field_statistics']['top_ui_types'] as $uiType) {
                $md .= "| {$uiType['uitype']} | {$uiType['description']} | {$uiType['count']} |\n";
            }
            $md .= "\n";
        }
        
        if (isset($fieldsData['field_statistics']['top_tables'])) {
            $md .= "### フィールド数が最も多いテーブル\n\n";
            $md .= "| テーブル名 | フィールド数 |\n";
            $md .= "|------------|-------------|\n";
            
            foreach ($fieldsData['field_statistics']['top_tables'] as $table) {
                $md .= "| {$table['table']} | {$table['count']} |\n";
            }
            $md .= "\n";
        }
        
        // UI Types Reference
        $md .= "## UIタイプリファレンス\n\n";
        $md .= "| UIタイプ | 説明 | 使用数 | テーブル |\n";
        $md .= "|---------|-------------|-------------|--------|\n";
        
        foreach ($fieldsData['ui_types'] as $uitype => $info) {
            $tables = strlen($info['tables']) > 50 ? substr($info['tables'], 0, 50) . '...' : $info['tables'];
            $md .= "| {$uitype} | {$info['description']} | {$info['count']} | {$tables} |\n";
        }
        $md .= "\n";
        
        // Module Fields
        $md .= "## モジュールフィールド\n\n";
        
        foreach ($fieldsData['modules'] as $moduleName => $moduleInfo) {
            $md .= "### {$moduleName} (Tab ID: {$moduleInfo['tabid']})\n\n";
            $md .= "**親モジュール:** " . ($moduleInfo['parent'] ?: 'なし') . " | ";
            $md .= "**フィールド数:** {$moduleInfo['field_count']}\n\n";
            
            if (!empty($moduleInfo['fields'])) {
                $md .= "| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック | 順序 |\n";
                $md .= "|------------|-------|-------|--------|---------|-----------|-------|-----|\n";
                
                foreach ($moduleInfo['fields'] as $field) {
                    $label = str_replace('|', '\\|', $field['fieldlabel']);
                    $md .= "| {$field['fieldname']} | {$label} | {$field['tablename']} | {$field['columnname']} | {$field['uitype']} | {$field['typeofdata']} | {$field['block']} | {$field['sequence']} |\n";
                }
                $md .= "\n";
                
                // Group fields by block
                $blockGroups = array();
                foreach ($moduleInfo['fields'] as $field) {
                    $blockGroups[$field['block']][] = $field;
                }
                
                if (count($blockGroups) > 1) {
                    $md .= "#### ブロック別フィールド\n\n";
                    foreach ($blockGroups as $blockName => $blockFields) {
                        $md .= "**{$blockName}:** " . implode(', ', array_map(function($f) { return $f['fieldname']; }, $blockFields)) . "\n\n";
                    }
                }
                
                // Show custom fields if any
                $customFields = array_filter($moduleInfo['fields'], function($f) { return $f['generatedtype'] == 2; });
                if (!empty($customFields)) {
                    $md .= "#### カスタムフィールド (" . count($customFields) . ")

";
                    foreach ($customFields as $field) {
                        $md .= "- **{$field['fieldname']}** ({$field['fieldlabel']}) - UIタイプ: {$field['uitype']}\n";
                    }
                    $md .= "\n";
                }
            }
        }
        
        $md .= "\n---\n";
        $md .= "*UpdateFields.phpツールによって生成*\n";
        
        return $md;
    }
    
    private function writeFieldsFile($content) {
        $filePath = $this->fieldsFile;
        
        if (!is_dir(dirname($filePath))) {
            mkdir(dirname($filePath), 0755, true);
        }
        
        if (file_put_contents($filePath, $content) === false) {
            throw new Exception("Failed to write fields file: " . $filePath);
        }
    }
}

// Execute the fields update
try {
    $fieldsUpdater = new UpdateFields();
    $fieldsUpdater->generateFieldsDocumentation();
    echo "スクリプト完了\n";
} catch (Exception $e) {
    echo "エラー: " . $e->getMessage() . "\n";
    exit(1);
}
?>