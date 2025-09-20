import { Search, Menu, Github, BookOpen, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";
import { ComponentCounter } from "./component-counter";

interface HeaderProps {
  onSearchChange?: (value: string) => void;
  onMenuClick?: () => void;
}

export function Header({ onSearchChange, onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={onMenuClick}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <Palette className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                UI カタログ
              </h1>
              <ComponentCounter />
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden flex-1 max-w-md mx-8 md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="コンポーネントを検索..."
              className="pl-10 pr-4"
              onChange={(e) => onSearchChange?.(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button> */}
          
          <Button variant="ghost" size="sm" asChild>
            <Link to="/docs" aria-label="Documentation">
              <BookOpen className="h-4 w-4" />
            </Link>
          </Button>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}