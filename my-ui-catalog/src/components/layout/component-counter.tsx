"use client"

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

export function ComponentCounter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Animate count on mount
    const target = 20; // Total components planned
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <Badge 
      variant="secondary" 
      className="text-xs animate-bounce-in"
    >
      {count}+ コンポーネント
    </Badge>
  );
}