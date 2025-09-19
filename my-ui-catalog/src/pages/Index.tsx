import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { ComponentGrid } from "@/components/component-grid";
import { componentsData, getComponentsByCategory, searchComponents } from "@/lib/components-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Shield } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredComponents = useMemo(() => {
    if (searchQuery) {
      return searchComponents(searchQuery);
    }
    return getComponentsByCategory(selectedCategory);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearchChange={setSearchQuery}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block`}>
          <Sidebar 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Hero Section */}
          {selectedCategory === "all" && !searchQuery && (
            <div className="mb-12 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="h-4 w-4" />
                  127+ プロダクション対応コンポーネント
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
                  モダンUIコンポーネントで
                  <br />
                  より速く構築する
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  アクセシブル、カスタマイズ可能、そして美しいReactコンポーネントの包括的なコレクション。
                  TypeScript、Tailwind CSS、そして現代的なベストプラクティスで構築されています。
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  <Button size="lg" className="group" asChild>
                    <a href="#components">
                      コンポーネントを探索
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/playground">プレイグラウンドを試す</Link>
                  </Button>
                </div>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">アクセシブル</h3>
                    <p className="text-sm text-muted-foreground">WCAG 2.2 AA準拠、完全なキーボードナビゲーション対応</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3">
                      <Target className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-1">TypeScript</h3>
                    <p className="text-sm text-muted-foreground">完全な型付けと優れた開発者体験</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mb-3">
                      <Sparkles className="h-6 w-6 text-success" />
                    </div>
                    <h3 className="font-semibold mb-1">カスタマイズ可能</h3>
                    <p className="text-sm text-muted-foreground">CSS変数とTailwindによるテーマシステム</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Components Section */}
          <div id="components">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  {searchQuery ? `"${searchQuery}"の検索結果` : 
                   selectedCategory === "all" ? "すべてのコンポーネント" :
                   selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace("-", " ")}
                </h2>
                <p className="text-muted-foreground mt-1">
                  {filteredComponents.length}個のコンポーネントが見つかりました
                </p>
              </div>
            </div>
            
            <ComponentGrid 
              components={filteredComponents}
              searchQuery={searchQuery}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
