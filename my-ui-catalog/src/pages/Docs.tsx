// filepath: src/pages/Docs.tsx
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const Docs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ヘッダーはランドマーク要素に */}
      <header>
        <Header
          onMenuClick={() => setSidebarOpen((v) => !v)}
          aria-controls="docs-sidebar"
          aria-expanded={sidebarOpen}
        />
      </header>

      <div className="flex">
        {/* Sidebar は aside + ラベル付け */}
        <aside
          id="docs-sidebar"
          className={`${sidebarOpen ? "block" : "hidden"} md:block`}
          aria-label="ドキュメントナビゲーション"
        >
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6" role="main">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">ドキュメント</h1>

            {/* Typography プラグイン対応: prose-slate を使用 */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">概要</h2>
                <p className="text-muted-foreground mb-4">
                  このUIカタログは、TypeScript、Tailwind CSS、そして現代的なアクセシビリティ基準で構築された
                  20個以上のプロダクション対応Reactコンポーネントの包括的なコレクションです。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  <span aria-hidden="true">🚀</span> セットアップ手順
                </h2>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                  <p className="text-red-800 dark:text-red-200 font-bold text-lg mb-2">
                    ⚠️ 重要事項
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300">
                    <li>Node.js 18以上</li>
                  </ul>
                </div>

                <div className="space-y-8">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      📋 事前準備
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">
                          必要なソフトウェア:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
                          <li>Node.js 18.0.0 以上</li>
                          <li>npm または yarn</li>
                        </ul>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block whitespace-pre-line">
                          {`# Node.jsのバージョンを確認
node --version
npm --version`}
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      2️⃣ Tailwind CSS@3をセットアップ
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block whitespace-pre-line">
                          {`# Tailwind CSS と関連パッケージをインストール
npm install -D tailwindcss@3 postcss autoprefixer @tailwindcss/typography tailwindcss-animate

# Tailwind CSS の設定ファイルを生成
npx tailwindcss init -p`}
                        </code>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">📝 tailwind.config.ts を編集:</p>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm block whitespace-pre-line">
                            {`// このファイル全体の内容は下記の 'tailwind.config.ts' セクションを参照してください。`}
                          </code>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">
                          📝 src/index.css を編集（既存の内容を置き換え）:
                        </p>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm block whitespace-pre-line">
                            {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      3️⃣ shadcn/ui を初期化（最重要）
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block whitespace-pre-line">
                          {`# コマンド
npx shadcn@latest init`}
                        </code>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">
                          📋 初期化時の質問に対する推奨回答:
                        </p>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm block whitespace-pre-line">
                            {`✔ Would you like to use TypeScript (recommended)? › yes
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Where is your global CSS file? › src/index.css
✔ Would you like to use CSS variables for colors? › yes
✔ Where is your tailwind.config.js located? › tailwind.config.ts
✔ Configure the import alias for components? › src/components
✔ Configure the import alias for utils? › src/lib/utils`}
                          </code>
                        </div>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                        <p className="text-green-800 dark:text-green-200 text-sm">
                          ✅ 成功すると components.json、src/lib/utils.ts、更新されたtailwind.config.tsが作成されます
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      4️⃣ 基本コンポーネントを追加
                    </h3>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        必要に応じて以下のコンポーネントを追加してください:
                      </p>

                      <div>
                        <p className="font-semibold mb-2">基本的なコンポーネント:</p>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm block whitespace-pre-line">
                            {`# 基本UI要素
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add label

# レイアウト関連
npx shadcn@latest add separator
npx shadcn@latest add sheet
npx shadcn@latest add dialog

# フォーム関連
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add switch
npx shadcn@latest add textarea

# ナビゲーション
npx shadcn@latest add tabs
npx shadcn@latest add accordion
npx shadcn@latest add dropdown-menu

# フィードバック
npx shadcn@latest add toast
npx shadcn@latest add alert

# その他
npx shadcn@latest add badge
npx shadcn@latest add avatar
npx shadcn@latest add skeleton`}
                          </code>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">一括追加（まとめて実行）:</p>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm block whitespace-pre-line">
                            {`npx shadcn@latest add button card input label separator sheet dialog select checkbox switch textarea tabs accordion dropdown-menu toast alert badge avatar skeleton`}
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      5️⃣ 追加の依存関係をインストール
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-2">ルーティングとデータ管理:</p>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm block whitespace-pre-line">
                            {`npm install react-router-dom @tanstack/react-query`}
                          </code>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">アイコンとテーマ:</p>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm block whitespace-pre-line">
                            {`npm install lucide-react next-themes`}
                          </code>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">開発体験向上:</p>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm block whitespace-pre-line">
                            {`npm install clsx class-variance-authority
npm install -D @types/node`}
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 6️⃣ を新設 */}
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      6️⃣ パスエイリアスとビルド設定
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      `@/` エイリアスを利用できるように tsconfig と Vite を設定します。
                    </p>
                    {/* tsconfig.json */}
                    <div className="bg-muted p-4 rounded-lg not-prose mb-4">
                      <p className="font-semibold mb-2">tsconfig.json</p>
                      <code className="text-sm block whitespace-pre">
{`{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "types": ["node"]
  },
  "include": ["src"]
}`}
                      </code>
                    </div>
                    {/* vite.config.ts */}
                    <div className="bg-muted p-4 rounded-lg not-prose">
                      <p className="font-semibold mb-2">vite.config.ts</p>
                      <code className="text-sm block whitespace-pre">
{`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});`}
                      </code>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      7️⃣ 動作確認
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block whitespace-pre-line">
                          {`# 開発サーバーを起動
npm run dev`}
                        </code>
                      </div>

                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <p className="text-green-800 dark:text-green-200 font-bold mb-2">
                          🎉 成功の確認方法:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
                          <li>ターミナルに表示された URL（例: http://localhost:5173）を開く</li>
                          <li>カードとボタンが正しく表示される</li>
                          <li>スタイルが適用されている</li>
                          <li>エラーがコンソールに表示されない</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-200">
                      🚨 トラブルシューティング
                    </h3>
                    <div className="space-y-4 text-red-700 dark:text-red-300">
                      <div>
                        <p className="font-semibold mb-2">
                          Q: 「shadcn-ui is deprecated」エラーが出る
                        </p>
                        <p className="text-sm mb-2">
                          A: <code className="bg-red-100 dark:bg-red-800 px-1 rounded">npx shadcn@latest init</code> を使用する
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Q: コンポーネントが見つからない</p>
                        <p className="text-sm mb-2">
                          A: tsconfig.json のパス設定を確認、vite.config.ts のエイリアス設定を確認
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Q: スタイルが適用されない</p>
                        <p className="text-sm mb-2">
                          A: src/index.css に Tailwind のディレクティブが含まれているか確認
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Q: Node.js バージョンエラー</p>
                        <p className="text-sm">
                          A: Node.js 18以上をインストール、nvm use node でバージョン切り替え
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">使い方</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">1. コンポーネントの検索</h3>
                    <p className="text-muted-foreground">
                      左側のサイドバーからカテゴリーを選択するか、検索機能を使用してコンポーネントを見つけることができます。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">2. コンポーネントの詳細表示</h3>
                    <p className="text-muted-foreground">
                      各コンポーネントをクリックすると、詳細な仕様、使用例、プロパティ一覧を確認できます。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">3. プレイグラウンド</h3>
                    <p className="text-muted-foreground">
                      プレイグラウンドでは、コンポーネントを実際に試すことができます。
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">4. コンポーネントの使用例</h3>
                    <div className="bg-muted p-4 rounded-lg not-prose">
                      <code className="text-sm whitespace-pre-line">
                        {`import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>カードタイトル</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>クリック</Button>
      </CardContent>
    </Card>
  )
}`}
                      </code>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">技術仕様</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>React 18+ with TypeScript</li>
                  <li>Tailwind CSS for styling</li>
                  <li>Radix UI for accessible components</li>
                  <li>Lucide React for icons</li>
                  <li>Vite for build tooling</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">サポート</h2>
                <p className="text-muted-foreground">
                  ご質問やフィードバックがございましたら、お気軽にお問い合わせください。
                  このコンポーネントライブラリを使用して、効率的で美しいUIを構築しましょう。
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Docs;
