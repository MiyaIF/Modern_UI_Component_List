import type { ComponentData } from "@/lib/components-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ComponentCardProps {
  component: ComponentData;
  className?: string;
}

const complexityColors = {
  simple: "bg-success text-success-foreground",
  medium: "bg-warning text-warning-foreground", 
  complex: "bg-destructive text-destructive-foreground"
};

const statusColors = {
  stable: "bg-success text-success-foreground",
  beta: "bg-info text-info-foreground",
  new: "bg-primary text-primary-foreground",
  deprecated: "bg-destructive text-destructive-foreground"
};

export function ComponentCard({ component, className }: ComponentCardProps) {
  // NOTE: ステータス情報が欠損している場合でも新着表示の有無を計算できるようにガードを挟む
  const isNew = component.status === "new" || (() => {
    try {
      const updatedDate = new Date(component.updatedAt);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return updatedDate > thirtyDaysAgo;
    } catch (error) {
      console.error("Failed to parse component.updatedAt", error);
      return false;
    }
  })();

  return (
    <Card className={cn(
      "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
      "border-2 hover:border-primary/20",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{component.name}</CardTitle>
              {component.isPopular && (
                <Badge variant="secondary" className="text-xs">
                  Popular
                </Badge>
              )}
              {isNew && (
                <Badge className={statusColors.new}>
                  New
                </Badge>
              )}
            </div>
            <CardDescription className="text-sm">
              {component.description}
            </CardDescription>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {component.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {component.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{component.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Status indicators */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3" />
              <Badge 
                variant="outline" 
                className={cn("text-xs", complexityColors[component.complexity])}
              >
                {component.complexity}
              </Badge>
            </div>
            
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              <span>{component.a11yLevel}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{new Date(component.updatedAt).toLocaleDateString()}</span>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-2 pt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              asChild
            >
              <Link to={`/components/${component.id}`}>
                詳細を見る
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </Button>
            
            <Button 
              size="sm" 
              className="flex-1"
              asChild
            >
              <Link to={`/playground?component=${component.id}`}>
                試してみる
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}