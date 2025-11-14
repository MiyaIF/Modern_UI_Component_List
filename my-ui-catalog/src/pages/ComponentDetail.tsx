import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { componentsData } from "@/lib/components-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, ExternalLink, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const component = componentsData.find(c => c.id === id);
  
  if (!component) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">コンポーネントが見つかりません</h1>
          <p className="text-muted-foreground mb-6">お探しのコンポーネントは存在しません。</p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              コンポーネント一覧に戻る
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const copyToClipboard = async (text: string) => {
    try {
      // NOTE: クリップボード操作はブラウザ権限に依存するため例外を捕捉しユーザーへ通知する
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: "Code snippet copied successfully!",
      });
    } catch (error) {
      console.error("Failed to copy component snippet", error);
      toast({
        title: "コピーに失敗しました",
        description: "クリップボードの権限をご確認ください",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              コンポーネント一覧に戻る
            </Link>
          </Button>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{component.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{component.description}</p>
              
              <div className="flex flex-wrap gap-2">
                <Badge>{component.category}</Badge>
                <Badge variant="outline">{component.complexity}</Badge>
                <Badge variant="outline">{component.a11yLevel}</Badge>
                <Badge variant="outline">{component.status}</Badge>
                {component.isPopular && <Badge variant="secondary">人気</Badge>}
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button asChild>
                <Link to={`/playground?component=${component.id}`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  プレイグラウンドで試す
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <Tabs defaultValue="examples" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="examples">使用例</TabsTrigger>
            <TabsTrigger value="props">Props</TabsTrigger>
            <TabsTrigger value="usage">使用方法</TabsTrigger>
            <TabsTrigger value="accessibility">アクセシビリティ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="examples" className="space-y-6">
            {component.examples.map((example, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{example.title}</CardTitle>
                      <CardDescription>{example.description}</CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(example.code)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{example.code}</code>
                  </pre>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="props">
            <Card>
              <CardHeader>
                <CardTitle>コンポーネントのProps</CardTitle>
                <CardDescription>
                  {component.name}コンポーネントで利用可能なProps
                </CardDescription>
              </CardHeader>
              <CardContent>
                {component.props && component.props.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-3 font-semibold">名前</th>
                          <th className="text-left p-3 font-semibold">型</th>
                          <th className="text-left p-3 font-semibold">デフォルト</th>
                          <th className="text-left p-3 font-semibold">必須</th>
                          <th className="text-left p-3 font-semibold">説明</th>
                        </tr>
                      </thead>
                      <tbody>
                        {component.props.map((prop, index) => (
                          <tr key={index} className="border-b border-border">
                            <td className="p-3 font-mono text-sm">{prop.name}</td>
                            <td className="p-3 font-mono text-sm text-muted-foreground">{prop.type}</td>
                            <td className="p-3 font-mono text-sm">{prop.default || '-'}</td>
                            <td className="p-3">
                            <Badge variant={prop.required ? "destructive" : "secondary"}>
                              {prop.required ? "はい" : "いいえ"}
                            </Badge>
                            </td>
                            <td className="p-3 text-sm">{prop.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted-foreground">このコンポーネントのPropsはドキュメント化されていません。</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="usage">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>インストールと使用方法</CardTitle>
                    <CardDescription>プロジェクトでこのコンポーネントを使用する方法</CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(component.usage)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{component.usage}</code>
                </pre>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="accessibility">
            <Card>
              <CardHeader>
                <CardTitle>アクセシビリティ</CardTitle>
                <CardDescription>
                  アクセシビリティレベル：{component.a11yLevel}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {component.a11yNotes && component.a11yNotes.length > 0 ? (
                  <ul className="space-y-2">
                    {component.a11yNotes.map((note, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-success mt-1">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">
                    このコンポーネントのアクセシビリティに関する注記はありません。
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ComponentDetail;