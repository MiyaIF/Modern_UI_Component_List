# Next.js + TypeScript プロジェクト環境構築手順

まっさらな状態から **Next.js + TypeScript** の開発環境を構築する手順例です。  
（パッケージマネージャーは `npm` を想定）

---

## 0. プロジェクト作成

まずはベースとなる Next.js プロジェクトを作成します。

```bash
npx create-next-app@latest my-app --ts --eslint --src-dir --import-alias "@/*"
cd my-app
````

---

## 1. Git 初期化 & 初回コミット

リポジトリを初期化し、初期状態をコミットします。

```bash
git init
printf "node_modules/\n.next/\nout/\n.env*\n.vercel/\n.turbo/\n" >> .gitignore

git add .
git commit -m "chore: bootstrap Next.js app"
```

---

## 2. 必要な依存関係のインストール

主要なライブラリをまとめてインストールします。

```bash
# UI / データテーブル / グラフ / フォームバリデーション など
npm install @tanstack/react-table@latest recharts@latest \
  react-hook-form@latest @hookform/resolvers@latest zod@latest \
  next-themes@latest react-i18next@latest i18next@latest \
  react-intersection-observer@latest @radix-ui/react-focus-scope@latest
```

Next.js 本体と React も念のため最新化します。

```bash
npm install next@latest react@latest react-dom@latest
```

---

## 3. 開発サーバー起動

セットアップが完了したら、開発サーバーを起動します。

```bash
npm run dev
```

ブラウザにアクセスして確認。

---

## 補足

* パッケージ管理に `pnpm` や `yarn` を利用する場合は、`npm install` をそれぞれのコマンドに置き換えてください。
* `.gitignore` はプロジェクトの用途に応じて適宜追記してください。

