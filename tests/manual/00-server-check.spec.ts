import { test, expect } from '@playwright/test';

test.describe('サーバー接続テスト', () => {
  test('Jekyllサーバーが起動していることを確認', async ({ page }) => {
    const response = await page.goto('/profile/');
    expect(response?.status()).toBe(200);
    
    // タイトルが設定されていることを確認
    const title = await page.title();
    expect(title).toBeTruthy();
    
    console.log('✅ サーバー接続成功:', {
      status: response?.status(),
      title: title,
      url: page.url()
    });
  });
});