'use client';

import React from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface HeaderInputProps {
  onFocus?: () => void;
  onSmartSuggestOpen?: () => void;
  placeholder?: string;
  className?: string;
  hideBadge?: boolean;
}

export default function HeaderInput({
  onFocus,
  onSmartSuggestOpen,
  placeholder = "What do you want to know...",
  className = "",
  hideBadge = false
}: HeaderInputProps) {
  
  const handleFocus = () => {
    onFocus?.();
    onSmartSuggestOpen?.();
  };

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        className={`pl-10 w-full ${hideBadge ? 'pr-3' : 'pr-20'}`}
        onFocus={handleFocus}
      />
      {!hideBadge && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Badge 
            className="flex items-center gap-1 text-white border-0"
            style={{ backgroundColor: '#cf89e1' }}
          >
            <Sparkles className="h-3 w-3" />
            Scout
          </Badge>
        </div>
      )}
    </div>
  );
}
