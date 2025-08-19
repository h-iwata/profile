const { chromium } = require('playwright');

async function takeScreenshots() {
  const browser = await chromium.launch();
  
  try {
    // PC版スクリーンショット (1280px幅)
    const desktopPage = await browser.newPage();
    await desktopPage.setViewportSize({ width: 1280, height: 720 });
    
    console.log('PC版でページにアクセス中...');
    await desktopPage.goto('https://inbox-to-action.vercel.app/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // ページが完全に読み込まれるまで少し待機
    await desktopPage.waitForTimeout(2000);
    
    console.log('PC版スクリーンショットを撮影中...');
    await desktopPage.screenshot({ 
      path: 'assets/images/inbox-to-action-desktop.png',
      fullPage: true
    });
    console.log('PC版スクリーンショット保存完了: assets/images/inbox-to-action-desktop.png');
    
    await desktopPage.close();
    
    // モバイル版スクリーンショット (375px幅 - iPhone SE相当)
    const mobilePage = await browser.newPage();
    await mobilePage.setViewportSize({ width: 375, height: 667 });
    
    console.log('モバイル版でページにアクセス中...');
    await mobilePage.goto('https://inbox-to-action.vercel.app/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // ページが完全に読み込まれるまで少し待機
    await mobilePage.waitForTimeout(2000);
    
    console.log('モバイル版スクリーンショットを撮影中...');
    await mobilePage.screenshot({ 
      path: 'assets/images/inbox-to-action-mobile.png',
      fullPage: true
    });
    console.log('モバイル版スクリーンショット保存完了: assets/images/inbox-to-action-mobile.png');
    
    await mobilePage.close();
    
  } catch (error) {
    console.error('スクリーンショット撮影中にエラーが発生しました:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

takeScreenshots()
  .then(() => {
    console.log('すべてのスクリーンショットが正常に撮影されました！');
  })
  .catch((error) => {
    console.error('スクリーンショット撮影に失敗しました:', error);
    process.exit(1);
  });