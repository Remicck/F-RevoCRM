<?php
/**
 * F-RevoCRM マイグレーション基底クラス
 * 
 * マイグレーションの実行状態は com_vtiger_migrations テーブルで管理
 */

require_once 'include/database/PearDatabase.php';

abstract class FRMigrationClass {
    
    protected $db;
    protected $migrationName;
    
    /**
     * コンストラクタ
     */
    public function __construct() {
        global $adb;
        $this->db = PearDatabase::getInstance();
        
        // クラス名からマイグレーション名を取得
        $this->migrationName = get_class($this);
        
        // マイグレーションテーブルが存在することを確認
        $this->ensureMigrationsTableExists();
    }
    
    /**
     * 子クラスで実装される抽象メソッド
     * 実際のマイグレーション処理を記述する
     */
    abstract public function process();
    
    /**
     * マイグレーションを実行する
     * マイグレーションが既に実行済みかどうかをチェックする
     * 
     * @return boolean 実行に成功した場合はtrue、既に実行済みの場合はfalse
     * @throws Exception マイグレーションが失敗した場合
     */
    public function execute() {
        try {
            // マイグレーションが既に実行済みかチェック
            if ($this->isExecuted()) {
                echo "マイグレーション {$this->migrationName} は既に実行済みです。スキップします。\n";
                return false;
            }
            
            echo "マイグレーションを実行中: {$this->migrationName}\n";
            
            // トランザクション開始
            $this->db->database->StartTrans();
            
            // マイグレーション実行
            $this->process();
            
            // 実行済みとしてマーク
            $this->markAsExecuted();
            
            // トランザクションコミット
            $this->db->database->CompleteTrans();
            
            echo "マイグレーション {$this->migrationName} が正常に実行されました。\n";
            return true;
            
        } catch (Exception $e) {
            // トランザクションロールバック
            $this->db->database->FailTrans();
            $this->db->database->CompleteTrans();
            
            echo "マイグレーション {$this->migrationName} が失敗しました: " . $e->getMessage() . "\n";
            throw $e;
        }
    }
    
    /**
     * マイグレーションが実行済みかどうかをチェックする
     * 
     * @return boolean
     */
    protected function isExecuted() {
        $query = "SELECT migration_name FROM com_vtiger_migrations WHERE migration_name = ?";
        $result = $this->db->pquery($query, array($this->migrationName));
        
        return ($this->db->num_rows($result) > 0);
    }
    
    /**
     * マイグレーションを実行済みとしてマークする
     */
    protected function markAsExecuted() {
        $query = "INSERT INTO com_vtiger_migrations (migration_name, executed_at) VALUES (?, NOW())";
        $this->db->pquery($query, array($this->migrationName));
    }
    
    /**
     * マイグレーション追跡テーブルが存在することを確認する
     */
    protected function ensureMigrationsTableExists() {
        $tableExists = $this->checkTableExists('com_vtiger_migrations');
        
        // テーブルがなければ作る
        if (!$tableExists) {
            $this->createMigrationsTable();
        }
    }
    
    /**
     * テーブルが存在するかどうかをチェックする
     * 
     * @param string $tableName テーブル名
     * @return boolean
     */
    protected function checkTableExists($tableName) {
        $query = "SHOW TABLES LIKE ?";
        $result = $this->db->pquery($query, array($tableName));
        
        return ($this->db->num_rows($result) > 0);
    }
    
    /**
     * マイグレーション追跡テーブルを作成する
     */
    protected function createMigrationsTable() {
        $createTableSQL = "
            CREATE TABLE com_vtiger_migrations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                migration_name VARCHAR(255) NOT NULL UNIQUE,
                executed_at DATETIME NOT NULL,
                INDEX idx_migration_name (migration_name),
                INDEX idx_executed_at (executed_at)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8
        ";
        
        $this->db->pquery($createTableSQL, array());
        echo "com_vtiger_migrations テーブルを作成しました。\n";
    }
    
    /**
     * マイグレーションメッセージをログに出力するヘルパーメソッド
     * 
     * @param string $message メッセージ
     */
    protected function log($message) {
        echo "[" . date('Y-m-d H:i:s') . "] {$this->migrationName}: {$message}\n";
    }
}
