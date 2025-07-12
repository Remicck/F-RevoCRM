<?php
$Vtiger_Utils_Log = true;
include_once('vtlib/Vtiger/Menu.php');
include_once('vtlib/Vtiger/Module.php');
include_once('include/utils/CommonUtils.php');

class UpdateDBSchema {
    private $db;
    private $schemaFile = 'doc/schema.md';
    
    public function __construct() {
        $this->db = PearDatabase::getInstance();
        global $log;
        $log->debug("UpdateDBSchema: Initializing database schema documentation tool");
    }
    
    public function generateSchemaDocumentation() {
        global $log;
        $log->debug("UpdateDBSchema: Starting schema documentation generation");
        
        $schema = $this->analyzeDatabase();
        $markdownContent = $this->convertToMarkdown($schema);
        $this->writeSchemaFile($markdownContent);
        
        echo "データベーススキーマドキュメントが正常に更新されました！\n";
        echo "スキーマ情報の保存先: " . $this->schemaFile . "\n";
        
        $log->debug("UpdateDBSchema: Schema documentation generation completed");
    }
    
    private function analyzeDatabase() {
        global $log;
        $log->debug("UpdateDBSchema: Analyzing database structure");
        
        $schema = array(
            'metadata' => $this->getDatabaseMetadata(),
            'tables' => array(),
            'modules' => array()
        );
        
        // Get all vtiger tables
        $result = $this->db->pquery("SHOW TABLES LIKE 'vtiger_%'", array());
        $tables = array();
        
        while ($row = $this->db->fetchByAssoc($result)) {
            $tableName = current($row);
            $tables[] = $tableName;
        }
        
        // Analyze each table
        foreach ($tables as $tableName) {
            $schema['tables'][$tableName] = $this->analyzeTable($tableName);
        }
        
        // Get module information
        $schema['modules'] = $this->getModuleInformation();
        
        return $schema;
    }
    
    private function getDatabaseMetadata() {
        $metadata = array(
            'generated_at' => date('Y-m-d H:i:s'),
            'database_name' => '',
            'total_tables' => 0,
            'total_modules' => 0
        );
        
        // Get database name
        $result = $this->db->pquery("SELECT DATABASE() as db_name", array());
        if ($row = $this->db->fetchByAssoc($result)) {
            $metadata['database_name'] = $row['db_name'];
        }
        
        // Count vtiger tables
        $result = $this->db->pquery("SELECT COUNT(*) as table_count FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME LIKE 'vtiger_%'", array());
        if ($row = $this->db->fetchByAssoc($result)) {
            $metadata['total_tables'] = $row['table_count'];
        }
        
        // Count active modules
        $result = $this->db->pquery("SELECT COUNT(*) as module_count FROM vtiger_tab WHERE presence = 0", array());
        if ($row = $this->db->fetchByAssoc($result)) {
            $metadata['total_modules'] = $row['module_count'];
        }
        
        return $metadata;
    }
    
    private function analyzeTable($tableName) {
        $tableInfo = array(
            'columns' => array(),
            'indexes' => array(),
            'foreign_keys' => array(),
            'engine' => '',
            'charset' => '',
            'comment' => ''
        );
        
        // Get table structure
        $result = $this->db->pquery("DESCRIBE `$tableName`", array());
        while ($row = $this->db->fetchByAssoc($result)) {
            $tableInfo['columns'][] = array(
                'field' => $row['Field'],
                'type' => $row['Type'],
                'null' => $row['Null'],
                'key' => $row['Key'],
                'default' => $row['Default'],
                'extra' => $row['Extra']
            );
        }
        
        // Get indexes
        $result = $this->db->pquery("SHOW INDEX FROM `$tableName`", array());
        while ($row = $this->db->fetchByAssoc($result)) {
            $keyName = $row['Key_name'];
            if (!isset($tableInfo['indexes'][$keyName])) {
                $tableInfo['indexes'][$keyName] = array(
                    'unique' => !$row['Non_unique'],
                    'columns' => array()
                );
            }
            $tableInfo['indexes'][$keyName]['columns'][] = $row['Column_name'];
        }
        
        // Get table status (engine, charset, comment)
        $result = $this->db->pquery("SHOW TABLE STATUS LIKE '$tableName'", array());
        if ($row = $this->db->fetchByAssoc($result)) {
            $tableInfo['engine'] = $row['Engine'];
            $tableInfo['charset'] = $row['Collation'];
            $tableInfo['comment'] = $row['Comment'];
        }
        
        return $tableInfo;
    }
    
    private function getModuleInformation() {
        $modules = array();
        
        $result = $this->db->pquery("SELECT * FROM vtiger_tab WHERE presence = 0 ORDER BY name", array());
        while ($row = $this->db->fetchByAssoc($result)) {
            $moduleName = $row['name'];
            $modules[$moduleName] = array(
                'tabid' => $row['tabid'],
                'name' => $row['name'],
                'parent' => $row['parent'],
                'ownedby' => $row['ownedby'],
                'tabtitle' => $row['tabtitle'],
                'customized' => $row['customized'],
                'isentitytype' => $row['isentitytype'],
                'fields' => array(),
                'related_tables' => array()
            );
            
            // Get module fields
            $fieldResult = $this->db->pquery(
                "SELECT f.*, b.blocklabel 
                 FROM vtiger_field f 
                 INNER JOIN vtiger_blocks b ON f.block = b.blockid 
                 WHERE f.tabid = ? 
                 ORDER BY b.sequence, f.sequence", 
                array($row['tabid'])
            );
            
            while ($fieldRow = $this->db->fetchByAssoc($fieldResult)) {
                $modules[$moduleName]['fields'][] = array(
                    'fieldname' => $fieldRow['fieldname'],
                    'fieldlabel' => $fieldRow['fieldlabel'],
                    'tablename' => $fieldRow['tablename'],
                    'columnname' => $fieldRow['columnname'],
                    'uitype' => $fieldRow['uitype'],
                    'typeofdata' => $fieldRow['typeofdata'],
                    'block' => $fieldRow['blocklabel']
                );
            }
            
            // Get related tables for this module
            $relatedResult = $this->db->pquery(
                "SELECT DISTINCT tablename 
                 FROM vtiger_field 
                 WHERE tabid = ? AND tablename != ''", 
                array($row['tabid'])
            );
            
            while ($relatedRow = $this->db->fetchByAssoc($relatedResult)) {
                $modules[$moduleName]['related_tables'][] = $relatedRow['tablename'];
            }
        }
        
        return $modules;
    }
    
    private function convertToMarkdown($schema) {
        $md = "# F-RevoCRM データベーススキーマドキュメント\n\n";
        
        // Metadata section
        $md .= "## データベース情報\n\n";
        $md .= "- **生成日時:** " . $schema['metadata']['generated_at'] . "\n";
        $md .= "- **データベース:** " . $schema['metadata']['database_name'] . "\n";
        $md .= "- **総テーブル数:** " . $schema['metadata']['total_tables'] . "\n";
        $md .= "- **アクティブモジュール数:** " . $schema['metadata']['total_modules'] . "\n\n";
        
        // Table of contents
        $md .= "## 目次\n\n";
        $md .= "1. [モジュール](#modules)\n";
        $md .= "2. [データベーステーブル](#database-tables)\n";
        $md .= "3. [テーブル詳細](#table-details)\n\n";
        
        // Modules section
        $md .= "## モジュール\n\n";
        $md .= "| モジュール | タブID | 親モジュール | エンティティタイプ | カスタム |\n";
        $md .= "|--------|--------|--------|-------------|--------|\n";
        
        foreach ($schema['modules'] as $moduleName => $moduleInfo) {
            $isEntity = $moduleInfo['isentitytype'] ? 'Yes' : 'No';
            $isCustom = $moduleInfo['customized'] ? 'Yes' : 'No';
            $parent = $moduleInfo['parent'] ?: 'None';
            
            $md .= "| {$moduleName} | {$moduleInfo['tabid']} | {$parent} | {$isEntity} | {$isCustom} |\n";
        }
        $md .= "\n";
        
        // Database tables overview
        $md .= "## データベーステーブル\n\n";
        $md .= "| テーブル名 | カラム数 | エンジン | 文字セット |\n";
        $md .= "|------------|---------|--------|---------|\n";
        
        foreach ($schema['tables'] as $tableName => $tableInfo) {
            $columnCount = count($tableInfo['columns']);
            $engine = $tableInfo['engine'] ?: 'Unknown';
            $charset = $tableInfo['charset'] ?: 'Unknown';
            
            $md .= "| {$tableName} | {$columnCount} | {$engine} | {$charset} |\n";
        }
        $md .= "\n";
        
        // Detailed module information
        $md .= "## モジュール詳細\n\n";
        
        foreach ($schema['modules'] as $moduleName => $moduleInfo) {
            $md .= "### {$moduleName}\n\n";
            
            if (!empty($moduleInfo['fields'])) {
                $md .= "#### フィールド\n\n";
                $md .= "| フィールド名 | ラベル | テーブル | カラム | UIタイプ | データタイプ | ブロック |\n";
                $md .= "|------------|-------|-------|--------|---------|-----------|-------|\n";
                
                foreach ($moduleInfo['fields'] as $field) {
                    $md .= "| {$field['fieldname']} | {$field['fieldlabel']} | {$field['tablename']} | {$field['columnname']} | {$field['uitype']} | {$field['typeofdata']} | {$field['block']} |\n";
                }
                $md .= "\n";
            }
            
            if (!empty($moduleInfo['related_tables'])) {
                $md .= "#### 関連テーブル\n\n";
                foreach ($moduleInfo['related_tables'] as $table) {
                    $md .= "- {$table}\n";
                }
                $md .= "\n";
            }
        }
        
        // Table details section
        $md .= "## テーブル詳細\n\n";
        
        foreach ($schema['tables'] as $tableName => $tableInfo) {
            $md .= "### {$tableName}\n\n";
            
            if ($tableInfo['comment']) {
                $md .= "**コメント:** {$tableInfo['comment']}\n\n";
            }
            
            // Columns
            $md .= "#### カラム\n\n";
            $md .= "| カラム | タイプ | NULL許可 | キー | デフォルト | 追加情報 |\n";
            $md .= "|--------|------|------|-----|---------|-------|\n";
            
            foreach ($tableInfo['columns'] as $column) {
                $null = $column['null'] === 'YES' ? 'Yes' : 'No';
                $default = $column['default'] ?: 'None';
                $extra = $column['extra'] ?: '';
                
                $md .= "| {$column['field']} | {$column['type']} | {$null} | {$column['key']} | {$default} | {$extra} |\n";
            }
            $md .= "\n";
            
            // Indexes
            if (!empty($tableInfo['indexes'])) {
                $md .= "#### インデックス\n\n";
                $md .= "| インデックス名 | タイプ | カラム |\n";
                $md .= "|------------|------|----------|\n";
                
                foreach ($tableInfo['indexes'] as $indexName => $indexInfo) {
                    $type = $indexInfo['unique'] ? 'Unique' : 'Index';
                    $columns = implode(', ', $indexInfo['columns']);
                    
                    $md .= "| {$indexName} | {$type} | {$columns} |\n";
                }
                $md .= "\n";
            }
        }
        
        $md .= "\n---\n";
        $md .= "*UpdateDBSchema.phpツールによって生成*\n";
        
        return $md;
    }
    
    private function writeSchemaFile($content) {
        $filePath = $this->schemaFile;
        
        if (!is_dir(dirname($filePath))) {
            mkdir(dirname($filePath), 0755, true);
        }
        
        if (file_put_contents($filePath, $content) === false) {
            throw new Exception("Failed to write schema file: " . $filePath);
        }
    }
}

// Execute the schema update
try {
    $schemaUpdater = new UpdateDBSchema();
    $schemaUpdater->generateSchemaDocumentation();
    echo "スクリプト完了\n";
} catch (Exception $e) {
    echo "エラー: " . $e->getMessage() . "\n";
    exit(1);
}
?>