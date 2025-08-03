# h-iwata Developer Profile

個人的な開発者プロフィールサイトです。

## 🚀 使用技術

- **Jekyll** - 静的サイトジェネレーター
- **Liquid** - Jekyllテンプレートエンジン
- **Sass/SCSS** - CSSプリプロセッサー（変数、ミックスイン、ネスト機能）

## 📋 requirements

- **Ruby 3.4.5以上** (rbenv推奨)
- **Bundler**
- **Git**

### Ruby環境のセットアップ

```bash
# rbenvを使用してRubyをインストール
rbenv install 3.4.5

# プロジェクトディレクトリに移動（.ruby-versionが自動で読み込まれます）
cd profile

# Bundlerをインストール
gem install bundler
```

## 🛠️ ローカル環境構築手順

### 1. 依存関係のインストール

```bash
bundle install
```

### 2. ローカルサーバーの起動

```bash
bundle exec jekyll serve
```

以下のURLでアクセス： http://127.0.0.1:4000/profile/

## 📁 プロジェクト構造

```
profile/
├── _config.yml          # Jekyll設定ファイル
├── _data/
│   ├── experience.yml   # 職歴データ
│   └── projects.yml     # 主要プロジェクトデータ
├── _includes/           # 再利用可能なHTMLコンポーネント
│   ├── about.html       # 自己紹介セクション
│   ├── contact.html     # 連絡先セクション
│   ├── experience.html  # 職歴セクション
│   ├── projects.html    # プロジェクトセクション
│   └── hero.html        # ヒーローセクション
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
│   │   └── .gitkeep    
│   └── js/             # JavaScriptファイル
│       └── .gitkeep    
├── _site/              # ビルド出力ディレクトリ（自動生成）
├── .vscode/            # VSCode/Cursor設定
│   ├── settings.json   # エディタ設定
│   ├── extensions.json # 推奨拡張機能
│   └── tasks.json      # タスク定義
├── .ruby-version       # Rubyバージョン指定
├── .node-version       # Node.jsバージョン指定
├── .gitignore          # Git除外設定
├── .htmlhintrc         # HTMLHint設定
├── .stylelintrc.json   # Stylelint設定
├── package.json        # Node.js依存関係とスクリプト
├── pnpm-lock.yaml      # pnpm依存関係ロック
├── pnpm-workspace.yaml # pnpmワークスペース設定
├── Gemfile             # Ruby依存関係
├── Gemfile.lock        # Ruby依存関係ロック
├── robots.txt          # 検索エンジン制御
├── index.html          # メインページ
└── README.md           
```

## 🚀 本番環境へのデプロイ

### GitHub Pagesへのデプロイ

1. **GitHubリポジトリの設定**
   - GitHubでリポジトリを作成
   - リポジトリ名を `h-iwata.github.io` にするか、`profile` などの名前で作成

2. **GitHub Actionsの設定**
   - `.github/workflows/deploy.yml` ファイルを作成（必要に応じて）

3. **手動デプロイ**
   ```bash
   # ビルド
   bundle exec jekyll build
   
   # _siteディレクトリの内容をGitHub Pagesにアップロード
   ```

### カスタムドメインの設定

1. **DNS設定**
   - ドメインのCNAMEレコードを `h-iwata.github.io` に向ける

2. **Jekyll設定**
   - `_config.yml`の`url`を更新
   - `CNAME`ファイルをルートディレクトリに作成

## 📝 開発ガイドライン

### 開発環境

#### **Node.js環境**
- **Node.js**: v24.5.0（最新版）
- **npm**: v11.5.1
- **pnpm**: v10.14.0（パッケージマネージャー）
- **nvm**: Node.jsバージョン管理ツール
- **`.node-version`**: プロジェクトで使用するNode.jsバージョンを指定

#### **Ruby環境**
- **Ruby**: 3.4.5（rbenv管理）
- **Jekyll**: 4.4.1
- **Bundler**: 最新版

#### **Linter設定**
- **HTMLHint**: HTMLの構文チェック
- **Stylelint**: SCSSの構文チェック

### 開発ワークフロー

#### **依存関係の管理**
```bash
# Node.js依存関係のインストール
pnpm install

# Ruby依存関係のインストール
bundle install
```

#### **コード品質チェック**
```bash
# すべてのlinterを実行
pnpm run lint

# HTMLのみチェック
pnpm run lint:html

# SCSSのみチェック
pnpm run lint:scss

# SCSSの自動修正
pnpm run lint:fix

# コードフォーマット
pnpm run format
```

#### **開発サーバー**
```bash
# Jekyllサーバー起動
bundle exec jekyll serve

# LiveReload付きで起動
bundle exec jekyll serve --livereload
```
---
