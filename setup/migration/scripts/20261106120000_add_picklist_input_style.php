<?php
/**
 * マイグレーション: add_picklist_input_style
 * 生成日時: 20261106120000
 *
 * #1677 ピックリスト/複数選択の表示方式カスタマイズ。
 * vtiger_picklist（ピックリスト項目レジストリ。picklistid, name の2列のみ）に
 * 項目単位の表示設定3カラムを追加する。
 *
 *  - input_style : 表示方式。'auto'=自動（選択肢が threshold 以下なら複数=チェックボックス/
 *                  単一=ラジオ、超でドロップダウン）/ NULL=既定（従来ドロップダウン＝opt-in）。
 *  - threshold   : 'auto' のとき、この数以下でチェック/ラジオ・超でドロップダウン。
 *                  NULL はコード側で既定100として扱う。
 *  - columns     : 項目の表示幅（1=標準/半幅、2=フォーム全幅ぶち抜き）。既定1。表示方式に依存しない。
 *                  ※ `columns` は MySQL 予約語かつ紛れやすいので SQL では必ずバッククォートで囲む。
 */

require_once dirname(__FILE__) . '/../FRMigrationClass.php';

class Migration20261106120000_AddPicklistInputStyle extends FRMigrationClass {

    public function process() {
        $this->addColumnIfMissing('input_style', "ALTER TABLE vtiger_picklist ADD COLUMN input_style VARCHAR(20) DEFAULT NULL");
        $this->addColumnIfMissing('threshold',   "ALTER TABLE vtiger_picklist ADD COLUMN threshold INT DEFAULT NULL");
        $this->addColumnIfMissing('columns',     "ALTER TABLE vtiger_picklist ADD COLUMN `columns` TINYINT DEFAULT 1");

        $this->log("vtiger_picklist に input_style/threshold/columns を追加しました");
    }

    /**
     * 既に存在するカラムは追加しない（再実行耐性）。
     */
    private function addColumnIfMissing($columnName, $alterSql) {
        $result = $this->db->pquery("SHOW COLUMNS FROM vtiger_picklist LIKE ?", array($columnName));
        if ($result && $this->db->num_rows($result) > 0) {
            $this->log("vtiger_picklist.$columnName は既に存在するためスキップ");
            return;
        }
        $this->db->query($alterSql);
        $this->log("vtiger_picklist.$columnName を追加");
    }
}
