<?php

declare(strict_types=1);
/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.1
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is:  F-RevoCRM Open Source
 * The Initial Developer of the Original Code is F-RevoCRM.
 * Portions created by thinkingreed are Copyright (C) F-RevoCRM.
 * All Rights Reserved.
 ************************************************************************************/

namespace Tests\Unit\Fields;

use PHPUnit\Framework\TestCase;
use PicklistDisplayConfig;

/**
 * ピックリスト表示方式の実効スタイル解決（#1677）の純粋ロジック回帰テスト。
 *
 * 仕様: 表示方式は「自動 / ドロップダウン」の2択。
 *  - 'auto' のときだけ、選択肢数 <= しきい値 で一覧表示（複数=checkbox / 単一=radio）、超でドロップダウン。
 *  - null（既定）/ 'dropdown' は常にドロップダウン（既定の見た目を変えない opt-in）。
 * resolveEffectiveStyle は DB に触れない純粋関数のため、DB なしで検証できる。
 */
final class PicklistDisplayConfigTest extends TestCase
{
    public static function setUpBeforeClass(): void
    {
        require_once dirname(__DIR__, 3) . '/include/fields/PicklistDisplayConfig.php';
    }

    /**
     * @return array{0:int,1:array{input_style:?string,threshold:int,columns:int},2:int,3:string}[]
     */
    public static function styleCases(): array
    {
        $cfg = static function (?string $style, int $threshold = 100): array {
            return ['input_style' => $style, 'threshold' => $threshold, 'columns' => 1];
        };

        return [
            // 複数選択(33)
            '33 auto 閾値ちょうど→checkbox' => [33, $cfg('auto', 100), 100, 'checkbox'],
            '33 auto 閾値以下→checkbox'     => [33, $cfg('auto', 100), 50, 'checkbox'],
            '33 auto 閾値超→dropdown'       => [33, $cfg('auto', 100), 101, 'dropdown'],
            '33 auto 0件→checkbox'          => [33, $cfg('auto', 100), 0, 'checkbox'],
            '33 null既定→dropdown'          => [33, $cfg(null, 100), 10, 'dropdown'],
            '33 dropdown明示→dropdown'      => [33, $cfg('dropdown', 100), 10, 'dropdown'],
            // 単一選択(15/16)
            '15 auto 閾値以下→radio'        => [15, $cfg('auto', 100), 20, 'radio'],
            '15 auto 閾値ちょうど→radio'    => [15, $cfg('auto', 5), 5, 'radio'],
            '15 auto 閾値超→dropdown'       => [15, $cfg('auto', 5), 6, 'dropdown'],
            '15 null既定→dropdown'          => [15, $cfg(null, 100), 3, 'dropdown'],
            '16 auto 閾値以下→radio'        => [16, $cfg('auto', 100), 4, 'radio'],
            '16 null既定→dropdown'          => [16, $cfg(null, 100), 4, 'dropdown'],
            // 対象外 uitype
            '1 非picklist→dropdown'         => [1, $cfg('auto', 100), 2, 'dropdown'],
        ];
    }

    /**
     * @dataProvider styleCases
     * @param array{input_style:?string,threshold:int,columns:int} $config
     */
    public function testResolveEffectiveStyle(int $uitype, array $config, int $optionCount, string $expected): void
    {
        $this->assertSame(
            $expected,
            PicklistDisplayConfig::resolveEffectiveStyle($uitype, $config, $optionCount)
        );
    }
}
