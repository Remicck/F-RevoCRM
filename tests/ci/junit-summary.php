<?php

declare(strict_types=1);

/*
 * PHPUnit の JUnit XML を集計し、GitHub Actions のジョブサマリに表で書き出す。
 * .github/workflows/phpunit.yml の Unit / Integration の両ジョブから使う。
 *
 * 使い方: php tests/ci/junit-summary.php <junit.xml> <見出し>
 * GITHUB_STEP_SUMMARY が無ければ標準出力に書く。
 */

$path = $argv[1] ?? '';
$title = $argv[2] ?? 'PHPUnit';
$summary = getenv('GITHUB_STEP_SUMMARY');
$summary = is_string($summary) && $summary !== '' ? $summary : 'php://stdout';

$write = static function (string $markdown) use ($summary): void {
    file_put_contents($summary, $markdown . "\n", FILE_APPEND);
};

if (!is_file($path)) {
    $write("⚠️ {$title}: junit.xml が見つかりませんでした（テスト実行前に失敗した可能性）");
    exit(0);
}

$xml = simplexml_load_file($path);
$root = $xml !== false ? ($xml->testsuite[0] ?? null) : null;
if ($root === null) {
    $write("⚠️ {$title}: junit.xml を解析できませんでした");
    exit(0);
}

$tests = (int) $root['tests'];
$assertions = (int) $root['assertions'];
$failures = (int) $root['failures'];
$errors = (int) $root['errors'];
$skipped = (int) $root['skipped'];
$seconds = round((float) $root['time'], 2);
$passed = $tests - $failures - $errors - $skipped;
$icon = ($failures + $errors) > 0 ? '❌' : '✅';

$write(implode("\n", [
    "## {$icon} {$title}",
    '',
    '| ✅ passed | ❌ failed | 💥 errors | ⏭️ skipped | 🔍 assertions | ⏱️ duration |',
    '|---:|---:|---:|---:|---:|---:|',
    "| {$passed} | {$failures} | {$errors} | {$skipped} | {$assertions} | {$seconds}s |",
    '',
]));
