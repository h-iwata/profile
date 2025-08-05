#!/usr/bin/env tsx

import { watch } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const specDir = join(process.cwd(), 'tests', 'specs');

console.log('👀 Watching spec files for changes...');
console.log(`📁 Directory: ${specDir}\n`);

// ファイル変更を監視
watch(specDir, { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith('.test.md')) {
    console.log(`\n🔄 ${eventType}: ${filename}`);
    console.log('🔨 Regenerating tests...');
    
    try {
      execSync('tsx scripts/generate-test.ts', { stdio: 'inherit' });
      console.log('✅ Tests regenerated successfully\n');
    } catch (error) {
      console.error('❌ Failed to regenerate tests');
    }
  }
});

// 初回実行
try {
  execSync('tsx scripts/generate-test.ts', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Initial generation failed');
}

console.log('\nPress Ctrl+C to stop watching...');