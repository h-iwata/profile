# h-iwata Developer Profile

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/h-iwata/profile/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/h-iwata/profile/tree/main)

Jekyllベースの開発者プロフィールサイトです。

🌐 **本番サイト**: https://h-iwata.github.io/profile/

## 🚀 使用技術

### コア技術

- **Jekyll 4.4.1** - 静的サイトジェネレーター
- **Liquid** - Jekyllテンプレートエンジン
- **Sass/SCSS** - CSSプリプロセッサー

### 開発ツール

- **Playwright** - E2Eテストフレームワーク
- **TypeScript** - テストコードの型安全性
- **pnpm** - 高速なパッケージマネージャー
- **CircleCI** - CI/CDパイプライン
- **GitHub Actions** - 自動デプロイ

## 📋 必要環境

### 必須

- **Ruby 3.4.5** (rbenv推奨、`.ruby-version`で管理)
- **Node.js v24.5.0** (nvm推奨、`.node-version`で管理)
- **pnpm 10.14.0** - パッケージマネージャー

### セットアップ

```bash
# Ruby環境（rbenv使用）
rbenv install 3.4.5
gem install bundler

# Node.js環境（nvm使用）
nvm install 24.5.0
npm install -g pnpm

# Playwrightブラウザのインストール
pnpm exec playwright install
```

### Submodule（プライベートリポジトリ）

このプロジェクトでは、機密情報を含むオファー関連ファイルを別のプライベートリポジトリで管理しています：

- **リポジトリ**: `h-iwata/profile-offers`（プライベート）
- **ローカルパス**: `profile-offers/`
- **管理方式**: Git Submodule

## 🛠️ ローカル環境構築手順

### 1. リポジトリのクローンと依存関係のインストール

```bash
# リポジトリのクローン（submoduleも含む）
git clone --recursive https://github.com/h-iwata/profile.git
cd profile

# 既存のリポジトリでsubmoduleを取得する場合
git submodule update --init --recursive

# Ruby依存関係
bundle install

# Node.js依存関係
pnpm install
```

**注意**: `profile-offers/` フォルダはプライベートリポジトリのため、適切なアクセス権限が必要です。

### 2. 開発サーバーの起動

```bash
# Jekyllサーバー起動
bundle exec jekyll serve

# ライブリロード付き
bundle exec jekyll serve --livereload
```

アクセスURL: http://localhost:4000/profile/

### 3. テストの実行

```bash
# E2Eテスト実行
pnpm test

# UIモードでテスト
pnpm test:ui

# デバッグモード
pnpm test:debug
```

## 📁 プロジェクト構造

```
profile/
├── _config.yml          # Jekyll設定ファイル
├── _data/
│   ├── experience.yml   # 職歴データ
│   ├── personal_projects.yml # 個人プロジェクトデータ
│   └── projects.yml     # 主要プロジェクトデータ
├── _includes/           # 再利用可能なHTMLコンポーネント
│   ├── about.html       # 自己紹介セクション
│   ├── contact.html     # 連絡先セクション
│   ├── experience.html  # 職歴セクション
│   ├── hero.html        # ヒーローセクション
│   ├── personal_projects.html # 個人プロジェクトセクション
│   └── projects.html    # プロジェクトセクション
├── _layouts/            # レイアウトテンプレート
│   └── default.html     # デフォルトレイアウト
├── assets/              # 静的アセット
│   ├── css/            # Sassファイルとコンパイル済みCSS
│   │   ├── _variables.scss  # 変数定義
│   │   ├── _mixins.scss     # ミックスイン
│   │   ├── _base.scss       # ベーススタイル
│   │   ├── _components.scss # コンポーネント
│   │   ├── _responsive.scss # レスポンシブ
│   │   └── style.scss       # メインファイル
│   ├── images/         # 画像ファイル
│   │   ├── projects/   # プロジェクト関連画像
│   │   └── .gitkeep
│   └── js/             # JavaScriptファイル
│       └── .gitkeep
├── profile-offers/      # 【プライベートsubmodule】オファー管理
│   ├── current/        # 現在のオファー
│   ├── forkwell/       # Forkwell経由のオファー
│   ├── lapras/         # LAPRAS経由のオファー
│   ├── interview/      # 面談関連資料
│   └── AGENTS.md       # オファー分析用ガイダンス
├── _site/              # ビルド出力ディレクトリ（自動生成）
├── .circleci/          # CircleCI設定
│   └── config.yml      # CI/CDパイプライン定義
├── .github/            # GitHub設定
│   └── workflows/      # GitHub Actions
│       └── jekyll.yml  # 自動デプロイ設定
├── tests/              # Playwrightテスト
│   ├── manual/         # E2Eテストスイート
│   ├── pages/          # ページオブジェクト
│   └── specs/          # テスト仕様書
├── scripts/            # 開発用スクリプト
│   ├── generate-test.ts # テスト自動生成
│   ├── run-test.ts     # テスト実行
│   ├── setup.ts        # セットアップスクリプト
│   └── watch-specs.ts  # 仕様監視
├── .vscode/            # VSCode/Cursor設定
│   ├── settings.json   # エディタ設定
│   ├── extensions.json # 推奨拡張機能
│   └── tasks.json      # タスク定義
├── .gitmodules         # Git submodule設定
├── .ruby-version       # Rubyバージョン指定
├── .node-version       # Node.jsバージョン指定
├── .gitignore          # Git除外設定
├── .htmlhintrc         # HTMLHint設定
├── .stylelintrc.json   # Stylelint設定
├── playwright.config.ts # Playwright設定
├── package.json        # Node.js依存関係とスクリプト
├── pnpm-lock.yaml      # pnpm依存関係ロック
├── pnpm-workspace.yaml # pnpmワークスペース設定
├── tsconfig.json       # TypeScript設定
├── Gemfile             # Ruby依存関係
├── Gemfile.lock        # Ruby依存関係ロック
├── CLAUDE.md           # Claude Code用ガイダンス
├── robots.txt          # 検索エンジン制御
├── index.html          # メインページ
└── README.md
```

## 🚀 本番環境へのデプロイ

### GitHub Pagesへのデプロイ

**本番URL**: https://h-iwata.github.io/profile/

1. **GitHubリポジトリの設定**
   - リポジトリ: `h-iwata/profile`
   - GitHub Pages: mainブランチからの自動デプロイ設定済み

2. **GitHub Actionsによる自動デプロイ**
   - `.github/workflows/jekyll.yml` で設定済み
   - mainブランチへのプッシュ時に自動的にビルド・デプロイ

3. **手動デプロイ**

   ```bash
   # ビルド
   bundle exec jekyll build

   # mainブランチにプッシュすると自動デプロイ
   git push origin main
   ```

### カスタムドメインの設定

1. **DNS設定**
   - ドメインのCNAMEレコードを `h-iwata.github.io` に向ける

2. **Jekyll設定**
   - `_config.yml`の`url`を更新
   - `CNAME`ファイルをルートディレクトリに作成

## 🔄 CI/CD

### CircleCI

mainブランチへのプッシュ時に以下を自動実行：

- HTML/SCSSリンティング
- Jekyllビルド検証
- Playwrightによ��E2Eテスト
- セキュリティスキャン

### GitHub Actions

mainブランチへのマージ時に自動デプロイ：

- Jekyll静的サイトビルド
- GitHub Pagesへのデプロイ

## 🔐 Submodule管理

### profile-offersフォルダでの作業

```bash
# profile-offersフォルダに移動
cd profile-offers/

# 通常のGit操作
git add .
git commit -m "新しいオファー情報を追加"
git push origin main
```

### メインプロジェクトでのsubmodule更新

```bash
# メインプロジェクトルートで
git add profile-offers/
git commit -m "profile-offers submodule updated"
git push origin main
```

### 他の開発者向けの注意事項

- `profile-offers/` はプライベートリポジトリのため、適切なアクセス権限が必要
- 公開クローン時はこのフォルダは空になります
- 機密情報（企業オファー、面談資料等）は完全に分離管理されています

## 📝 開発ガイドライン

### コード品質

- **Linter**: HTMLHint、Stylelint
- **テスト**: Playwright E2Eテスト
- **型チェック**: TypeScript（テストコード）

### 利用可能なスクリプト

```bash
# 開発
pnpm run dev          # 開発サーバー起動
pnpm run build        # プロダクションビルド

# テスト
pnpm test             # E2Eテスト実行
pnpm test:ui          # UIモードでテスト
pnpm test:debug       # デバッグモード
pnpm test:headed      # ブラウザを表示してテスト

# コード品質
pnpm run lint         # すべてのリンター実行
pnpm run lint:html    # HTMLリント
pnpm run lint:scss    # SCSSリント
pnpm run lint:fix     # SCSS自動修正
pnpm run format       # コードフォーマット
```

## 📄 ライセンス

このプロジェクトは個人プロフィールサイトです。

---
