#!/usr/bin/env tsx

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const setup = async () => {
  console.log('🚀 Setting up test environment...\n');

  // 必要なディレクトリを作成
  const dirs = [
    'tests/specs',
    'tests/manual',
    'tests/generated',
    'tests/pages',
    'test-results',
    'playwright-report'
  ];

  dirs.forEach(dir => {
    const path = join(process.cwd(), dir);
    if (!existsSync(path)) {
      mkdirSync(path, { recursive: true });
      console.log(`✅ Created: ${dir}`);
    }
  });

  // Playwrightをインストール
  console.log('\n📦 Installing Playwright browsers...');
  try {
    execSync('npx playwright install', { stdio: 'inherit' });
    console.log('✅ Playwright browsers installed');
  } catch (error) {
    console.error('❌ Failed to install Playwright browsers');
    process.exit(1);
  }

  // Ruby依存関係をチェック
  console.log('\n💎 Checking Ruby dependencies...');
  try {
    execSync('bundle check', { stdio: 'inherit' });
    console.log('✅ Ruby dependencies are installed');
  } catch {
    console.log('📦 Installing Ruby dependencies...');
    execSync('bundle install', { stdio: 'inherit' });
  }

  console.log('\n✨ Setup complete!');
  console.log('\n📝 Next steps:');
  console.log('  1. Start Jekyll server: bundle exec jekyll serve');
  console.log('  2. Run tests: pnpm test');
  console.log('  3. View test report: pnpm test:report');
};

setup();