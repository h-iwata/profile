#!/usr/bin/env tsx

import { execSync, spawn } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

const runTests = () => {
  const testPattern = process.argv[2];
  
  // Jekyll サーバーが起動しているかチェック
  try {
    execSync('curl -s http://localhost:4001 > /dev/null', { stdio: 'ignore' });
    console.log('✅ Jekyll server is running');
  } catch {
    console.log('⚠️  Starting Jekyll server...');
    // バックグラウンドでJekyllサーバーを起動 (cross-platform, proper process management)
    const jekyllProcess = spawn('bundle', ['exec', 'jekyll', 'serve', '--port', '4001'], {
      detached: true,
      stdio: 'inherit'
    });
    // サーバーの起動を待つ
    execSync('sleep 5');
  }

  // テストを実行
  const command = testPattern 
    ? `npx playwright test ${testPattern}`
    : 'npx playwright test';

  console.log(`\n🚀 Running: ${command}\n`);
  
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error('❌ Test failed');
    process.exit(1);
  }
};

runTests();