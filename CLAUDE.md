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
```

## アーキテクチャと構造

### コア技術
- **Jekyll 4.4.1**: 静的サイトジェネレーター
- **Ruby 3.4.5**: rbenv経由で管理 (.ruby-version)
- **Node.js v24.5.0**: ビルドツールとリンティング用 (.node-version)
- **pnpm**: Node.js依存関係のパッケージマネージャー

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

### デプロイメント
- GitHub Actionsワークフロー (`.github/workflows/jekyll.yml`) による自動デプロイ
- mainブランチへのプッシュ時にGitHub Pagesにデプロイ
- ベースURL: `https://h-iwata.github.io/profile/`

## 重要な設定

### Jekyll設定 (`_config.yml`)
- サイトメタデータと個人情報
- 表示用スキルリスト
- ベースURLとデプロイ設定
- 開発ファイルのビルド除外設定

### 開発ツール
- **HTMLHint**: HTML検証用に設定済み
- **Stylelint**: 標準設定でのSCSSリンティング
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