import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Play, Share, Download, Code } from "lucide-react";
import * as Icons from "lucide-react";
import { componentsData } from "@/lib/components-data";
import { toast } from "@/hooks/use-toast";
import { LiveProvider, LivePreview, LiveError } from "react-live";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar } from "@/components/ui/calendar";
import { Command, CommandDialog as CmdDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

const Playground = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>("button");
  const [code, setCode] = useState<string>("");
  const [runCode, setRunCode] = useState<string>("");
  
  useEffect(() => {
    const component = componentsData.find(c => c.id === selectedComponent);
    if (component && component.examples.length > 0) {
      setCode(component.examples[0].code);
    }
  }, [selectedComponent]);

  const handleShare = () => {
    const url = `${window.location.origin}/playground?component=${selectedComponent}&code=${encodeURIComponent(code)}`;
    navigator.clipboard.writeText(url);
    toast({
      title: "Shared!",
      description: "Playground URL copied to clipboard",
    });
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedComponent}-example.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const selectedComponentData = componentsData.find(c => c.id === selectedComponent);

  const scope = {
    React,
    useState,
    useEffect,
    // Common UI components
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
    Badge,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Input,
    Textarea,
    Checkbox,
    RadioGroup,
    RadioGroupItem,
    Label,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Switch,
    Slider,
    Progress,
    Separator,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    Popover,
    PopoverTrigger,
    PopoverContent,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    Sheet,
    SheetTrigger,
    SheetContent,
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    Avatar,
    AvatarImage,
    AvatarFallback,
    Alert,
    AlertDescription,
    AlertTitle,
    Calendar,
    Command,
    CmdDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    Skeleton,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    ToggleGroup,
    ToggleGroupItem,
    Toggle,
    AspectRatio,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    Drawer,
    DrawerContent,
    DrawerTrigger,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
    ScrollArea,
    ScrollBar,
    SonnerToaster,
    Toast,
    ToastAction,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
    Toaster,
    useToast,
    toast,
    // Icons
    Icons,
    ArrowLeft,
    Play,
    Share,
    Download,
    Code,
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
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">コンポーネントプレイグラウンド</h1>
              <p className="text-muted-foreground">
                コンポーネントをリアルタイムでテスト・実験できます
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleShare}>
                <Share className="mr-2 h-4 w-4" />
                共有
              </Button>
              <Button variant="outline" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                ダウンロード
              </Button>
            </div>
          </div>
          
          {/* Component Selector */}
          <div className="flex items-center gap-4">
            <Select value={selectedComponent} onValueChange={setSelectedComponent}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="コンポーネントを選択" />
              </SelectTrigger>
              <SelectContent>
                {componentsData.map((component) => (
                  <SelectItem key={component.id} value={component.id}>
                    {component.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {selectedComponentData && (
              <div className="flex gap-2">
                <Badge>{selectedComponentData.category}</Badge>
                <Badge variant="outline">{selectedComponentData.complexity}</Badge>
              </div>
            )}
          </div>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-300px)]">
          {/* Code Editor */}
          <Card className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  コードエディタ
                </CardTitle>
                <Button size="sm" variant="outline" onClick={() => setRunCode(code)}>
                  <Play className="mr-2 h-4 w-4" />
                  実行
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <div className="h-full bg-muted/50 rounded-lg">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full p-4 bg-transparent border-none resize-none font-mono text-sm focus:outline-none"
                  placeholder="コンポーネントのコードをここに入力..."
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Preview */}
          <Card className="flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle>ライブプレビュー</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="h-full bg-background border rounded-lg p-6 flex flex-col">
                <LiveProvider code={runCode} scope={scope}>
                  <div className="flex-1 overflow-auto">
                    <LivePreview />
                  </div>
                  <LiveError className="mt-4 text-sm text-destructive" />
                </LiveProvider>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Component Examples */}
        {selectedComponentData && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">{selectedComponentData.name}の使用例</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedComponentData.examples.map((example, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">{example.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground mb-3">{example.description}</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => setCode(example.code)}
                    >
                      例を読み込む
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Playground;