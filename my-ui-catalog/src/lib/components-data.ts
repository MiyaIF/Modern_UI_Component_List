export interface ComponentData {
    id: string;
    name: string;
    description: string;
    category: string;
    tags: string[];
    complexity: "simple" | "medium" | "complex";
    a11yLevel: "basic" | "enhanced" | "wcag-aa";
    status: "stable" | "beta" | "new" | "deprecated";
    updatedAt: string;
    isPopular?: boolean;
    examples: {
      title: string;
      description: string;
      code: string;
    }[];
    props?: {
      name: string;
      type: string;
      default?: string;
      required: boolean;
      description: string;
    }[];
    usage: string;
    a11yNotes?: string[];
    dependencies?: string[];
  }
  
  export const componentsData: ComponentData[] = [
    {
      id: "button",
      name: "ボタン",
      description: "複数のバリアントとアクセシビリティ機能を備えた汎用ボタンコンポーネント",
      category: "form",
      tags: ["フォーム", "インタラクション", "CTA"],
      complexity: "simple",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-15",
      isPopular: true,
      examples: [
        {
          title: "基本ボタン",
          description: "プライマリスタイルのデフォルトボタン",
          code: `<Button>クリックしてください</Button>`
        },
        {
          title: "ボタンバリアント",
          description: "さまざまな用途に応じたボタンスタイル",
          code: `<div className="space-x-2">
    <Button variant="default">デフォルト</Button>
    <Button variant="secondary">セカンダリ</Button>
    <Button variant="outline">アウトライン</Button>
    <Button variant="ghost">ゴースト</Button>
    <Button variant="destructive">破壊的</Button>
  </div>`
        },
        {
          title: "ボタンサイズ",
          description: "異なるサイズのボタン",
          code: `<div className="space-x-2 items-center flex">
    <Button size="sm">小</Button>
    <Button size="default">デフォルト</Button>
    <Button size="lg">大</Button>
  </div>`
        }
      ],
      props: [
        {
          name: "variant",
          type: "'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'",
          default: "'default'",
          required: false,
          description: "ボタンの視覚的バリアント"
        },
        {
          name: "size",
          type: "'sm' | 'default' | 'lg'",
          default: "'default'",
          required: false,
          description: "ボタンのサイズ"
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          required: false,
          description: "ボタンが無効かどうか"
        }
      ],
      usage: "import { Button } from '@/components/ui/button';",
      a11yNotes: [
        "EnterキーとSpaceキーによるキーボードナビゲーションをサポート",
        "適切なフォーカス管理と視覚的インジケーターを含む",
        "ARIA属性が自動的に適用される",
        "色コントラストはWCAG AA基準を満たす"
      ]
    },
    {
      id: "input",
      name: "入力フィールド",
      description: "検証状態とアクセシビリティ機能を備えたフォーム入力コンポーネント",
      category: "form",
      tags: ["フォーム", "テキスト", "検証"],
      complexity: "simple",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-10",
      isPopular: true,
      examples: [
        {
          title: "基本入力",
          description: "標準的なテキスト入力フィールド",
          code: `<Input placeholder="お名前を入力してください" />`
        },
        {
          title: "ラベル付き入力",
          description: "アクセシビリティのための適切なラベル付き入力",
          code: `<div className="space-y-2">
    <Label htmlFor="email">メールアドレス</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
  </div>`
        },
        {
          title: "入力状態",
          description: "ユーザーフィードバックのためのさまざまな入力状態",
          code: `<div className="space-y-2">
    <Input placeholder="デフォルト状態" />
    <Input placeholder="エラー状態" className="border-destructive" />
    <Input placeholder="無効状態" disabled />
  </div>`
        }
      ],
      props: [
        {
          name: "type",
          type: "string",
          default: "'text'",
          required: false,
          description: "入力タイプ（text、email、passwordなど）"
        },
        {
          name: "placeholder",
          type: "string",
          required: false,
          description: "プレースホルダーテキスト"
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          required: false,
          description: "入力が無効かどうか"
        }
      ],
      usage: "import { Input } from '@/components/ui/input';",
      a11yNotes: [
        "適切なラベルまたはaria-labelと一緒に使用してください",
        "スクリーンリーダーのアナウンスをサポート",
        "フォーカス管理は自動的に処理される",
        "エラー状態には説明的なメッセージを含める必要がある"
      ]
    },
    {
      id: "card",
      name: "カード",
      description: "関連コンテンツをグループ化するための柔軟なカードコンテナ",
      category: "layout",
      tags: ["コンテナ", "コンテンツ", "レイアウト"],
      complexity: "simple",
      a11yLevel: "basic",
      status: "stable",
      updatedAt: "2024-01-08",
      isPopular: true,
      examples: [
        {
          title: "基本カード",
          description: "コンテンツを含むシンプルなカード",
          code: `<Card>
    <CardHeader>
      <CardTitle>カードタイトル</CardTitle>
      <CardDescription>カードの説明がここに入ります</CardDescription>
    </CardHeader>
    <CardContent>
      <p>カードのコンテンツがここに入ります。</p>
    </CardContent>
  </Card>`
        },
        {
          title: "インタラクティブカード",
          description: "アクションとフッター付きのカード",
          code: `<Card>
    <CardHeader>
      <CardTitle>プロジェクト Alpha</CardTitle>
      <CardDescription>最先端のWebアプリケーション</CardDescription>
    </CardHeader>
    <CardContent>
      <p>このプロジェクトは最新のWeb開発手法を紹介します。</p>
    </CardContent>
    <CardFooter>
      <Button variant="outline">詳細を見る</Button>
      <Button>開始する</Button>
    </CardFooter>
  </Card>`
        }
      ],
      usage: "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';"
    },
    {
      id: "badge",
      name: "バッジ",
      description: "ステータス、カテゴリ、またはメタデータのための小さなラベル",
      category: "data-display",
      tags: ["ステータス", "ラベル", "メタデータ"],
      complexity: "simple",
      a11yLevel: "basic",
      status: "stable",
      updatedAt: "2024-01-12",
      isPopular: true,
      examples: [
        {
          title: "バッジバリアント",
          description: "異なるバッジスタイル",
          code: `<div className="space-x-2">
    <Badge>デフォルト</Badge>
    <Badge variant="secondary">セカンダリ</Badge>
    <Badge variant="outline">アウトライン</Badge>
    <Badge variant="destructive">破壊的</Badge>
  </div>`
        },
        {
          title: "ステータスバッジ",
          description: "異なるステータス用のバッジ",
          code: `<div className="space-x-2">
    <Badge className="bg-success text-success-foreground">アクティブ</Badge>
    <Badge className="bg-warning text-warning-foreground">保留中</Badge>
    <Badge className="bg-destructive text-destructive-foreground">非アクティブ</Badge>
  </div>`
        }
      ],
      usage: "import { Badge } from '@/components/ui/badge';"
    },
    {
      id: "avatar",
      name: "アバター",
      description: "フォールバック対応のユーザープロフィール画像",
      category: "data-display",
      tags: ["ユーザー", "プロフィール", "画像"],
      complexity: "simple",
      a11yLevel: "enhanced",
      status: "stable",
      updatedAt: "2024-01-09",
      isPopular: true,
      examples: [
        {
          title: "画像付きアバター",
          description: "ユーザープロフィール画像を表示するアバター",
          code: `<Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="ユーザー" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>`
        },
        {
          title: "アバターサイズ",
          description: "異なるサイズのアバター",
          code: `<div className="flex items-center space-x-2">
    <Avatar className="h-8 w-8">
      <AvatarFallback>S</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>M</AvatarFallback>
    </Avatar>
    <Avatar className="h-16 w-16">
      <AvatarFallback>L</AvatarFallback>
    </Avatar>
  </div>`
        }
      ],
      usage: "import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';"
    },
    {
      id: "alert",
      name: "アラート",
      description: "ユーザーへの重要なメッセージと通知",
      category: "feedback",
      tags: ["通知", "メッセージ", "ステータス"],
      complexity: "simple",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-11",
      isPopular: true,
      examples: [
        {
          title: "基本アラート",
          description: "標準的な情報アラート",
          code: `<Alert>
    <AlertDescription>
      メッセージが正常に送信されました。
    </AlertDescription>
  </Alert>`
        },
        {
          title: "アイコンとタイトル付きアラート",
          description: "アイコンとタイトルを含む拡張アラート",
          code: `<Alert>
    <Icons.AlertCircle className="h-4 w-4" />
    <AlertTitle>警告</AlertTitle>
    <AlertDescription>
      この操作は元に戻せません。注意して進めてください。
    </AlertDescription>
  </Alert>`
        }
      ],
      usage: "import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';"
    },
    {
      id: "checkbox",
      name: "チェックボックス",
      description: "不確定状態をサポートするバイナリ入力コントロール",
      category: "form",
      tags: ["フォーム", "入力", "選択"],
      complexity: "simple",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-14",
      examples: [
        {
          title: "基本チェックボックス",
          description: "ラベル付きのシンプルなチェックボックス",
          code: `<div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <label htmlFor="terms">利用規約に同意する</label>
  </div>`
        },
        {
          title: "不確定チェックボックス",
          description: "混合状態のチェックボックス",
          code: `<Checkbox checked={undefined} />`
        }
      ],
      usage: "import { Checkbox } from '@/components/ui/checkbox';"
    },
    {
      id: "select",
      name: "セレクト",
      description: "検索と複数選択機能を備えたドロップダウン選択コンポーネント",
      category: "form",
      tags: ["フォーム", "ドロップダウン", "選択"],
      complexity: "medium",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-13",
      isPopular: true,
      examples: [
        {
          title: "基本セレクト",
          description: "シンプルなドロップダウン選択",
          code: `<Select>
    <SelectTrigger>
      <SelectValue placeholder="選択肢を選んでください" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option1">選択肢 1</SelectItem>
      <SelectItem value="option2">選択肢 2</SelectItem>
      <SelectItem value="option3">選択肢 3</SelectItem>
    </SelectContent>
  </Select>`
        }
      ],
      usage: "import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';"
    },
    {
      id: "slider",
      name: "スライダー",
      description: "数値を選択するためのレンジ入力コンポーネント",
      category: "form",
      tags: ["フォーム", "レンジ", "数値"],
      complexity: "medium",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-12",
      examples: [
        {
          title: "基本スライダー",
          description: "単一値スライダー",
          code: `<Slider defaultValue={[50]} max={100} step={1} />`
        },
        {
          title: "レンジスライダー",
          description: "デュアルハンドルレンジスライダー",
          code: `<Slider defaultValue={[25, 75]} max={100} step={1} />`
        }
      ],
      usage: "import { Slider } from '@/components/ui/slider';"
    },
    {
      id: "progress",
      name: "プログレス",
      description: "タスク完了または読み込み状態の視覚的インジケーター",
      category: "data-display",
      tags: ["読み込み", "進捗", "インジケーター"],
      complexity: "simple",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-10",
      examples: [
        {
          title: "基本プログレス",
          description: "線形プログレスインジケーター",
          code: `<Progress value={75} />`
        },
        {
          title: "アニメーション付きプログレス",
          description: "アニメーション付きプログレス",
          code: `<Progress value={33} className="animate-pulse" />`
        }
      ],
      usage: "import { Progress } from '@/components/ui/progress';"
    },
    {
      id: "skeleton",
      name: "スケルトン",
      description: "コンテンツのプレースホルダー読み込みアニメーション",
      category: "data-display",
      tags: ["読み込み", "プレースホルダー", "アニメーション"],
      complexity: "simple",
      a11yLevel: "basic",
      status: "stable",
      updatedAt: "2024-01-09",
      isPopular: true,
      examples: [
        {
          title: "基本スケルトン",
          description: "シンプルなコンテンツプレースホルダー",
          code: `<div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
  </div>`
        },
        {
          title: "カードスケルトン",
          description: "複雑なレイアウトスケルトン",
          code: `<Card>
    <CardHeader>
      <Skeleton className="h-6 w-1/3" />
      <Skeleton className="h-4 w-2/3" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-32 w-full" />
    </CardContent>
  </Card>`
        }
      ],
      usage: "import { Skeleton } from '@/components/ui/skeleton';"
    },
    {
      id: "table",
      name: "テーブル",
      description: "ソート、フィルタリング、選択機能を備えたデータテーブル",
      category: "data-display",
      tags: ["データ", "テーブル", "グリッド"],
      complexity: "complex",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-15",
      isPopular: true,
      examples: [
        {
          title: "基本テーブル",
          description: "シンプルなデータテーブル",
          code: `<Table>
    <TableHeader>
      <TableRow>
        <TableHead>名前</TableHead>
        <TableHead>メールアドレス</TableHead>
        <TableHead>役職</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>田中太郎</TableCell>
        <TableCell>tanaka@example.com</TableCell>
        <TableCell>管理者</TableCell>
      </TableRow>
    </TableBody>
  </Table>`
        }
      ],
      usage: "import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';"
    },
    {
      id: "tabs",
      name: "タブ",
      description: "コンテンツを整理するためのタブ付きインターフェース",
      category: "navigation",
      tags: ["ナビゲーション", "コンテンツ", "タブ"],
      complexity: "medium",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-14",
      isPopular: true,
      examples: [
        {
          title: "基本タブ",
          description: "シンプルなタブ付きインターフェース",
          code: `<Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">タブ 1</TabsTrigger>
      <TabsTrigger value="tab2">タブ 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      タブ 1 のコンテンツ
    </TabsContent>
    <TabsContent value="tab2">
      タブ 2 のコンテンツ
    </TabsContent>
  </Tabs>`
        }
      ],
      usage: "import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';"
    },
    {
      id: "accordion",
      name: "アコーディオン",
      description: "アニメーション付きの折り畳み可能なコンテンツセクション",
      category: "data-display",
      tags: ["折り畳み", "コンテンツ", "展開"],
      complexity: "medium",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-13",
      examples: [
        {
          title: "基本アコーディオン",
          description: "折り畳み可能なコンテンツセクション",
          code: `<Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>セクション 1</AccordionTrigger>
      <AccordionContent>
        セクション 1 のコンテンツ
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>セクション 2</AccordionTrigger>
      <AccordionContent>
        セクション 2 のコンテンツ
      </AccordionContent>
    </AccordionItem>
  </Accordion>`
        }
      ],
      usage: "import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';"
    },
    {
      id: "dialog",
      name: "ダイアログ",
      description: "オーバーレイとフォーカス管理を備えたモーダルダイアログ",
      category: "feedback",
      tags: ["モーダル", "ポップアップ", "オーバーレイ"],
      complexity: "medium",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-12",
      isPopular: true,
      examples: [
        {
          title: "基本ダイアログ",
          description: "シンプルなモーダルダイアログ",
          code: `<Dialog>
    <DialogTrigger asChild>
      <Button>ダイアログを開く</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>ダイアログタイトル</DialogTitle>
        <DialogDescription>
          ダイアログの説明がここに入ります。
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        ダイアログコンテンツ
      </div>
      <DialogFooter>
        <Button variant="outline">キャンセル</Button>
        <Button>確認</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>`
        }
      ],
      usage: "import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';"
    },
    {
      id: "toast",
      name: "トースト",
      description: "一時的な通知メッセージ",
      category: "feedback",
      tags: ["通知", "一時的", "メッセージ"],
      complexity: "medium",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-11",
      examples: [
        {
          title: "基本トースト",
          description: "シンプルな通知",
          code: `<Button onClick={() => toast({ title: "成功", description: "操作が正常に完了しました！" })}>
    トーストを表示
  </Button>`
        },
        {
          title: "アクション付きトースト",
          description: "アクションボタン付きトースト",
          code: `<Button onClick={() => toast({
    title: "変更を元に戻しますか？",
    description: "未保存の変更があります。",
    action: (
      <ToastAction altText="元に戻す">元に戻す</ToastAction>
    ),
  })}>
    アクション付きトーストを表示
  </Button>`
        }
      ],
      usage: "import { toast } from '@/hooks/use-toast';"
    },
    {
      id: "tooltip",
      name: "ツールチップ",
      description: "ホバーまたはフォーカス時の文脈情報",
      category: "data-display",
      tags: ["ホバー", "情報", "ヘルプ"],
      complexity: "simple",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-10",
      examples: [
        {
          title: "基本ツールチップ",
          description: "ホバー時のシンプルなツールチップ",
          code: `<TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">ホバーしてください</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>これはツールチップです</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>`
        }
      ],
      usage: "import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';"
    },
    {
      id: "popover",
      name: "ポップオーバー",
      description: "ユーザーインタラクションによってトリガーされるフローティングコンテンツコンテナ",
      category: "data-display",
      tags: ["ポップアップ", "フローティング", "コンテンツ"],
      complexity: "medium",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-09",
      examples: [
        {
          title: "基本ポップオーバー",
          description: "コンテンツ付きのシンプルなポップオーバー",
          code: `<Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">ポップオーバーを開く</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">サイズ</h4>
          <p className="text-sm text-muted-foreground">
            レイヤーのサイズを設定します。
          </p>
        </div>
      </div>
    </PopoverContent>
  </Popover>`
        }
      ],
      usage: "import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';"
    },
    {
      id: "breadcrumb",
      name: "パンくずリスト",
      description: "現在のページ位置を示すナビゲーション補助",
      category: "navigation",
      tags: ["ナビゲーション", "階層", "位置"],
      complexity: "simple",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-08",
      examples: [
        {
          title: "基本パンくずリスト",
          description: "シンプルなナビゲーションパンくずリスト",
          code: `<Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">ホーム</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">コンポーネント</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>パンくずリスト</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>`
        }
      ],
      usage: "import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';"
    },
    {
      id: "pagination",
      name: "ページネーション",
      description: "複数ページのコンテンツ間のナビゲーション",
      category: "navigation",
      tags: ["ナビゲーション", "ページ", "ページング"],
      complexity: "medium",
      a11yLevel: "wcag-aa",
      status: "stable",
      updatedAt: "2024-01-07",
      examples: [
        {
          title: "基本ページネーション",
          description: "シンプルなページナビゲーション",
          code: `<Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>`
        }
      ],
      usage: "import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';"
    },
    {
      id: "separator",
      name: "セパレーター",
      description: "コンテンツセクション間の視覚的分割線",
      category: "layout",
      tags: ["分割線", "セパレーター", "線"],
      complexity: "simple",
      a11yLevel: "basic",
      status: "stable",
      updatedAt: "2024-01-06",
      examples: [
        {
          title: "水平セパレーター",
          description: "水平コンテンツ分割線",
          code: `<div className="space-y-4">
    <div>上部のコンテンツ</div>
    <Separator />
    <div>下部のコンテンツ</div>
  </div>`
        },
        {
          title: "垂直セパレーター",
          description: "垂直コンテンツ分割線",
          code: `<div className="flex h-5 items-center space-x-4 text-sm">
    <div>項目 1</div>
    <Separator orientation="vertical" />
    <div>項目 2</div>
    <Separator orientation="vertical" />
    <div>項目 3</div>
  </div>`
        }
      ],
      usage: "import { Separator } from '@/components/ui/separator';"
    }
  ];
  
  export const getComponentsByCategory = (category: string): ComponentData[] => {
    if (category === "all") return componentsData;
    if (category === "popular") return componentsData.filter(c => c.isPopular);
    if (category === "new") return componentsData.filter(c => {
      const updatedDate = new Date(c.updatedAt);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return updatedDate > thirtyDaysAgo;
    });
    return componentsData.filter(c => c.category === category);
  };
  
  export const searchComponents = (query: string): ComponentData[] => {
    if (!query) return componentsData;
    
    const lowercaseQuery = query.toLowerCase();
    return componentsData.filter(component => 
      component.name.toLowerCase().includes(lowercaseQuery) ||
      component.description.toLowerCase().includes(lowercaseQuery) ||
      component.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      component.category.toLowerCase().includes(lowercaseQuery)
    );
  };