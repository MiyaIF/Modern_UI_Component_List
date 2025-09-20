import { 
    FormInput, 
    Layout, 
    Navigation, 
    MessageSquare, 
    Grid3X3, 
    Image, 
    BarChart3, 
    Zap, 
    Wrench,
    Blocks,
    Sparkles,
    Star
  } from "lucide-react";
  import { Link } from "react-router-dom";
  import { cn } from "@/lib/utils";
  import { Button } from "@/components/ui/button";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { Badge } from "@/components/ui/badge";
  import { getComponentsByCategory } from "@/lib/components-data";
  
  interface SidebarProps {
    className?: string;
    selectedCategory?: string;
    onCategorySelect?: (category: string) => void;
  }
  
  const getCategoryCount = (categoryId: string): number => {
    return getComponentsByCategory(categoryId).length;
  };
  
  const categories = [
    {
      name: "すべてのコンポーネント",
      icon: Blocks,
      id: "all",
      description: "完全なコレクション"
    },
    {
      name: "人気",
      icon: Star,
      id: "popular",
      description: "最もよく使われるコンポーネント"
    },
    {
      name: "新着",
      icon: Sparkles,
      id: "new",
      description: "最近追加されたもの"
    },
    {
      name: "フォーム",
      icon: FormInput,
      id: "form",
      description: "入力と検証"
    },
    {
      name: "データ表示",
      icon: Grid3X3,
      id: "data-display",
      description: "テーブル、リスト、コンテンツ"
    },
    {
      name: "ナビゲーション",
      icon: Navigation,
      id: "navigation",
      description: "メニューとルーティング"
    },
    {
      name: "フィードバック",
      icon: MessageSquare,
      id: "feedback",
      description: "アラートと通知"
    },
    {
      name: "レイアウト",
      icon: Layout,
      id: "layout",
      description: "コンテナとグリッド"
    }
  ];
  
  export function Sidebar({ className, selectedCategory = "all", onCategorySelect }: SidebarProps) {
    return (
      <div className={cn("w-64 border-r bg-muted/20", className)}>
        <ScrollArea className="h-full py-6">
          <div className="px-4 space-y-2">
            <h2 className="mb-4 text-lg font-semibold">カテゴリー</h2>
            
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              const count = getCategoryCount(category.id);
              
              return (
                <Button
                  key={category.id}
                  variant={isSelected ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start h-auto p-3 text-left",
                    isSelected && "bg-primary/10 text-primary border border-primary/20"
                  )}
                  onClick={() => onCategorySelect?.(category.id)}
                >
                  <div className="flex items-center gap-3 w-full">
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium truncate">{category.name}</span>
                        <Badge 
                          variant={isSelected ? "default" : "secondary"}
                          className="text-xs px-1.5 py-0.5"
                        >
                          {count}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 truncate">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Button>
              );
            })}
          </div>
          
          <div className="px-4 mt-8">
            <div className="rounded-lg bg-gradient-primary p-4 text-white">
              <h3 className="font-semibold mb-2">プレイグラウンド</h3>
              <p className="text-sm text-white/90 mb-3">
                ライブコード編集でコンポーネントをテスト
              </p>
              <Button 
                size="sm" 
                variant="secondary"
                className="w-full"
                asChild
              >
                <Link to="/playground">プレイグラウンドを開く</Link>
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>
    );
  }