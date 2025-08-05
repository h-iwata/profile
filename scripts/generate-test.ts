#!/usr/bin/env tsx

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, basename } from 'path';

const specDir = join(process.cwd(), 'tests', 'specs');
const outputDir = join(process.cwd(), 'tests', 'generated');

// 出力ディレクトリを作成
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// specファイルからテストを生成
const generateTestFromSpec = (specFile: string) => {
  const specContent = readFileSync(specFile, 'utf-8');
  const testName = basename(specFile, '.test.md').replace('.test', '');
  
  // マークダウンからテストケースを抽出
  const testCases = specContent.match(/### ケース\d+:.+/g) || [];
  
  let testContent = `import { test, expect } from '@playwright/test';
import { ProfilePage } from '../pages/profile.page';

test.describe('${testName}テスト (自動生成)', () => {
`;

  testCases.forEach((testCase) => {
    const caseName = testCase.replace(/### ケース\d+:\s*/, '');
    testContent += `
  test('${caseName}', async ({ page }) => {
    const profilePage = new ProfilePage(page);
    await profilePage.goto();
    
    // TODO: テストロジックを実装
    console.log('Testing: ${caseName}');
  });
`;
  });

  testContent += `});`;

  const outputFile = join(outputDir, `${testName}.spec.ts`);
  writeFileSync(outputFile, testContent);
  console.log(`✅ Generated: ${outputFile}`);
};

// メイン処理
const main = () => {
  if (!existsSync(specDir)) {
    console.error('❌ specs directory not found');
    process.exit(1);
  }

  const specFiles = require('fs').readdirSync(specDir)
    .filter((file: string) => file.endsWith('.test.md'));

  if (specFiles.length === 0) {
    console.log('⚠️  No spec files found');
    return;
  }

  specFiles.forEach((file: string) => {
    generateTestFromSpec(join(specDir, file));
  });

  console.log(`\n🎉 Generated ${specFiles.length} test files`);
};

main();