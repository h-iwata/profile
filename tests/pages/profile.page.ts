import { Page } from '@playwright/test';

export class ProfilePage {
  constructor(private page: Page) {}

  // ナビゲーション
  async goto() {
    await this.page.goto('/profile/');
  }

  // セクションへのナビゲーション
  async navigateToSection(section: 'about' | 'experience' | 'projects' | 'contact') {
    await this.page.locator(`a[href="#${section}"]`).click();
  }

  // セクションの取得
  getHeroSection() {
    return this.page.locator('.hero');
  }

  getAboutSection() {
    return this.page.locator('#about');
  }

  getExperienceSection() {
    return this.page.locator('#experience');
  }

  getProjectsSection() {
    return this.page.locator('#projects');
  }

  getContactSection() {
    return this.page.locator('#contact');
  }
}
