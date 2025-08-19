# CLAUDE.md

このファイルは、このリポジトリでコード作業を行う際のClaude Code (claude.ai/code) へのガイダンスを提供します。

## リポジトリ概要

h-iwataのJekyllベースの開発者プロフィールサイトです。Jekyll、Liquidテンプレート、Sass/SCSSを使用して、職歴、スキル、プロジェクトを紹介する静的サイトジェネレータープロジェクトです。

## 開発コマンド

### ビルドとサーブ

```bash
# Jekyll開発サーバーを起動
bundle exec jekyll serve

# ライブリロード付きで起動
bundle exec jekyll serve --livereload

# 本番用にビルド
bundle exec jekyll build
```

### テスト実行

```bash
# E2Eテスト実行
pnpm test

# UIモードでテスト
pnpm test:ui

# デバッグモード
pnpm test:debug

# ブラウザを表示してテスト
pnpm test:headed
```

### リンティングとコード品質

```bash
# すべてのリンターを実行
pnpm run lint

# HTMLのみチェック
pnpm run lint:html

# SCSSのみチェック
pnpm run lint:scss

# SCSS問題を自動修正
pnpm run lint:fix
```

### 依存関係管理

```bash
# Ruby依存関係をインストール
bundle install

# Node.js依存関係をインストール
pnpm install

# Playwrightブラウザをインストール
pnpm exec playwright install
```

## アーキテクチャと構造

### コア技術

- **Jekyll 4.4.1**: 静的サイトジェネレーター
- **Ruby 3.4.5**: rbenv経由で管理 (.ruby-version)
- **Node.js v24.5.0**: ビルドツールとテスト用 (.node-version)
- **pnpm 10.14.0**: Node.js依存関係のパッケージマネージャー
- **Playwright**: E2Eテストフレームワーク
- **TypeScript**: テストコードの型安全性

### 主要ディレクトリ

#### データレイヤー (`_data/`)

- `experience.yml`: 企業、技術、タスクを含む職歴
- `projects.yml`: 説明とハイライト付きの注目プロジェクト

#### テンプレートシステム

- `_layouts/default.html`: ベースレイアウトテンプレート
- `_includes/`: 再利用可能なコンポーネント (hero、about、experience、projects、contact)
- 動的コンテンツレンダリングにLiquidテンプレートを使用

#### スタイリングアーキテクチャ (`assets/css/`)

- モジュラーSCSS構造:
  - `_variables.scss`: デザイントークン
  - `_mixins.scss`: 再利用可能な関数
  - `_base.scss`: 基礎スタイル
  - `_components.scss`: コンポーネント固有のスタイル
  - `_responsive.scss`: メディアクエリとブレークポイント
  - `style.scss`: すべてのパーシャルをインポートするメインエントリーポイント

#### テストシステム (`tests/`)

- `manual/`: E2Eテストスイート
  - `00-server-check.spec.ts`: サーバー接続テスト
  - `basic.spec.ts`: 基本的なページテスト
- `pages/`: ページオブジェクトパターン
  - `profile.page.ts`: プロフィールページのヘルパー

### CI/CDパイプライン

#### CircleCI (`.circleci/config.yml`)

mainブランチへのプッシュ時に自動実行：

- **lint-html-scss**: HTML/SCSSの構文チェック
- **build-jekyll**: Jekyllビルドの検証
- **playwright-test**: E2Eテストの実行
- **security-scan**: Ruby依存関係の脆弱性スキャン
- **nightly-security-check**: 毎日深夜にセキュリティチェック

#### GitHub Actions (`.github/workflows/jekyll.yml`)

- mainブランチへのマージ時に自動デプロイ
- Jekyll静的サイトビルド
- GitHub Pagesへのデプロイ
- ベースURL: `https://h-iwata.github.io/profile/`

## 重要な設定

### Jekyll設定 (`_config.yml`)

- サイトメタデータと個人情報
- 表示用スキルリスト
- ベースURLとデプロイ設定
- 開発ファイルのビルド除外設定

### 開発ツール

- **HTMLHint**: HTML検証用に設定済み (`.htmlhintrc`)
- **Stylelint**: SCSSリンティング (`.stylelintrc.json`)
- **Playwright**: E2Eテスト (`playwright.config.ts`)
- **EditorConfig**: エディタ設定の統一 (`.editorconfig`)
- Jekyll開発用に最適化されたVS Code設定

## 言語設定

このプロジェクトでClaude Codeとやり取りする際は、日本語で対応してください。

## Cursor/VS Code連携

### Cursor AI設定

- `.cursorrules`: Cursor AI用のプロジェクト固有ルールファイル
  - 日本語でのコミュニケーション設定
  - コーディング規約
  - プロジェクト構造の説明

### エディタ設定

- `.editorconfig`: エディタ共通の設定（インデント、改行コード等）
- `.vscode/extensions.json`: 推奨拡張機能リスト
  - GitHub Copilot
  - Stylelint
  - HTMLHint
  - Ruby/Jekyll関連

### 開発効率化

Cursorを使用する場合、以下の機能が自動的に有効になります：

- プロジェクト固有のコーディングルール適用
- 日本語でのAIアシスタント対応
- Jekyll/Liquidテンプレートの文法サポート
- SCSS/Sassの自動補完とリンティング

## テスト戦略

### E2Eテスト

- **Playwright**を使用した自動化テスト
- Chrome、Firefox、WebKitの3ブラウザでテスト
- ページ読み込み、ナビゲーション、レスポンシブデザインを検証
- CircleCIで自動実行

### ローカルテスト実行

```bash
# 通常のテスト実行
pnpm test

# 特定のブラウザでテスト
pnpm test --project=chromium

# デバッグモード
pnpm test:debug
```

## トラブルシューティング

### よくある問題と解決方法

1. **Sass @import警告**
   - 将来的に`@use`と`@forward`への移行が必要
   - 現時点では警告のみで動作に影響なし

2. **CircleCIでのPlaywrightテスト失敗**
   - サーバー起動とテスト実行を同一ステップで行う必要がある
   - `http-server`でビルド済みサイトを配信

3. **pnpmインストールエラー**
   - Node.js v24.5.0が必要
   - `nvm use`または`.node-version`ファイルを確認
