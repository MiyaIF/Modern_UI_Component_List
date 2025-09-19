import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

const Docs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block`}>
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">ドキュメント</h1>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">概要</h2>
                <p className="text-muted-foreground mb-4">
                  このUIカタログは、TypeScript、Tailwind CSS、そして現代的なアクセシビリティ基準で構築された
                  127個以上のプロダクション対応Reactコンポーネントの包括的なコレクションです。
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">🚀 完璧なセットアップ手順（まっさらな状態から）</h2>
                
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
                  <p className="text-red-800 dark:text-red-200 font-bold text-lg mb-2">
                    ⚠️ 絶対に間違えてはいけない重要事項
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-red-700 dark:text-red-300">
                    <li><code className="bg-red-100 dark:bg-red-800 px-2 py-1 rounded">shadcn-ui</code> は使用禁止（非推奨）</li>
                    <li><code className="bg-red-100 dark:bg-red-800 px-2 py-1 rounded">shadcn</code> を使用する</li>
                    <li>Node.js 18以上が必要</li>
                  </ul>
                </div>
                
                <div className="space-y-8">
                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">📋 事前準備</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <p className="text-blue-800 dark:text-blue-200 font-semibold mb-2">必要なソフトウェア:</p>
                        <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
                          <li>Node.js 18.0.0 以上</li>
                          <li>npm または yarn</li>
                          <li>Git（推奨）</li>
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
                    <h3 className="text-xl font-bold mb-4 text-primary">1️⃣ 新しいReactプロジェクトを作成</h3>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block whitespace-pre-line">
{`# 新しいプロジェクトを作成（TypeScript）
npm create vite@latest my-ui-catalog -- --template react-ts

# プロジェクトディレクトリに移動
cd my-ui-catalog

# 依存関係をインストール
npm install`}
                        </code>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                        <p className="text-green-800 dark:text-green-200 text-sm">
                          ✅ 成功すると「my-ui-catalog」フォルダが作成されます
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">2️⃣ Tailwind CSSをセットアップ</h3>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block whitespace-pre-line">
{`# Tailwind CSS と関連パッケージをインストール
npm install -D tailwindcss postcss autoprefixer

# Tailwind CSS の設定ファイルを生成
npx tailwindcss init -p`}
                        </code>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">📝 tailwind.config.js を編集:</p>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm block whitespace-pre-line">
{`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                          </code>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">📝 src/index.css を編集（既存の内容を置き換え）:</p>
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
                    <h3 className="text-xl font-bold mb-4 text-primary">3️⃣ shadcn/ui を初期化（最重要）</h3>
                    <div className="space-y-4">
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                        <p className="text-yellow-800 dark:text-yellow-200 font-bold mb-2">
                          🔥 絶対に間違えてはいけないコマンド:
                        </p>
                        <p className="text-yellow-700 dark:text-yellow-300">
                          <code className="bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded">npx shadcn@latest init</code>
                        </p>
                        <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-2">
                          ❌ <del>npx shadcn-ui@latest init</del> は使用禁止
                        </p>
                      </div>
                      
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block whitespace-pre-line">
{`# 正しいコマンド
npx shadcn@latest init`}
                        </code>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">📋 初期化時の質問に対する推奨回答:</p>
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
                    <h3 className="text-xl font-bold mb-4 text-primary">4️⃣ 基本コンポーネントを追加</h3>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">必要に応じて以下のコンポーネントを追加してください:</p>
                      
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
                    <h3 className="text-xl font-bold mb-4 text-primary">5️⃣ 追加の依存関係をインストール</h3>
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

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">6️⃣ プロジェクト構造を作成</h3>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block whitespace-pre-line">
{`# ディレクトリ構造を作成
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/pages
mkdir -p src/lib
mkdir -p src/hooks
mkdir -p src/providers
mkdir -p src/types`}
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-primary">7️⃣ 動作確認</h3>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <code className="text-sm block whitespace-pre-line">
{`# 開発サーバーを起動
npm run dev`}
                        </code>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">📝 src/App.tsx でテスト:</p>
                        <div className="bg-muted p-4 rounded-lg">
                          <code className="text-sm block whitespace-pre-line">
{`import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function App() {
  return (
    <div className="p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>セットアップ完了！</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>動作確認</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App`}
                          </code>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <p className="text-green-800 dark:text-green-200 font-bold mb-2">
                          🎉 成功の確認方法:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-green-700 dark:text-green-300">
                          <li>ブラウザで http://localhost:5173 が開く</li>
                          <li>カードとボタンが正しく表示される</li>
                          <li>スタイルが適用されている</li>
                          <li>エラーがコンソールに表示されない</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-200">🚨 トラブルシューティング</h3>
                    <div className="space-y-4 text-red-700 dark:text-red-300">
                      <div>
                        <p className="font-semibold mb-2">Q: 「shadcn-ui is deprecated」エラーが出る</p>
                        <p className="text-sm mb-2">A: <code className="bg-red-100 dark:bg-red-800 px-1 rounded">npx shadcn@latest init</code> を使用する</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">Q: コンポーネントが見つからない</p>
                        <p className="text-sm mb-2">A: tsconfig.json のパス設定を確認、vite.config.ts のエイリアス設定を確認</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">Q: スタイルが適用されない</p>
                        <p className="text-sm mb-2">A: src/index.css に Tailwind のディレクティブが含まれているか確認</p>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-2">Q: Node.js バージョンエラー</p>
                        <p className="text-sm">A: Node.js 18以上をインストール、nvm use node でバージョン切り替え</p>
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
                    <div className="bg-muted p-4 rounded-lg">
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