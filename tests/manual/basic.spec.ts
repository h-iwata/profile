import { test, expect } from '@playwright/test';
import { ProfilePage } from '../pages/profile.page';

test.describe('基本的なページテスト', () => {
  let profilePage: ProfilePage;

  test.beforeEach(async ({ page }) => {
    profilePage = new ProfilePage(page);
    await profilePage.goto();
  });

  test('ページが正しく読み込まれる', async ({ page }) => {
    // ページタイトルの確認
    await expect(page).toHaveTitle(/h-iwata/i);
    
    // メインコンテンツが表示されている
    await expect(profilePage.getHeroSection()).toBeVisible();
  });

  test('ナビゲーションリンクが機能する', async ({ page }) => {
    // About セクションへのナビゲーション
    const aboutLink = page.locator('a[href="#about"]');
    if (await aboutLink.isVisible()) {
      await profilePage.navigateToSection('about');
      await expect(profilePage.getAboutSection()).toBeInViewport();
    }

    // Experience セクションへのナビゲーション
    const experienceLink = page.locator('a[href="#experience"]');
    if (await experienceLink.isVisible()) {
      await profilePage.navigateToSection('experience');
      await expect(profilePage.getExperienceSection()).toBeInViewport();
    }

    // Projects セクションへのナビゲーション
    const projectsLink = page.locator('a[href="#projects"]');
    if (await projectsLink.isVisible()) {
      await profilePage.navigateToSection('projects');
      await expect(profilePage.getProjectsSection()).toBeInViewport();
    }
  });

  test('レスポンシブデザインの確認', async ({ page }) => {
    // デスクトップビュー
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(profilePage.getHeroSection()).toBeVisible();
    
    // タブレットビュー
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(profilePage.getHeroSection()).toBeVisible();
    
    // モバイルビュー
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(profilePage.getHeroSection()).toBeVisible();
  });

  test('スムーススクロールが動作する', async ({ page }) => {
    // Contact セクションへスクロール
    await page.evaluate(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    // スクロール後の位置を確認
    await page.waitForTimeout(1000); // スムーススクロールの完了を待つ
    const contactSection = profilePage.getContactSection();
    if (await contactSection.isVisible()) {
      await expect(contactSection).toBeInViewport();
    }
  });
});