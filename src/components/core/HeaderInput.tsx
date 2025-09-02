'use client';

import React from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface HeaderInputProps {
  onFocus?: () => void;
  onSmartSuggestOpen?: () => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  className?: string;
  hideBadge?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export default function HeaderInput({
  onFocus,
  onSmartSuggestOpen,
  onSubmit,
  placeholder = "What do you want to know...",
  className = "",
  hideBadge = false,
  value,
  onChange
}: HeaderInputProps) {
  
  const handleFocus = () => {
    onFocus?.();
    onSmartSuggestOpen?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmit) {
      onSubmit(e.currentTarget.value);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        className={`pl-10 w-full ${hideBadge ? 'pr-3' : 'pr-20'}`}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {!hideBadge && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <button
            type="button"
            onClick={onSmartSuggestOpen}
            className="focus:outline-none"
            aria-label="Open Scout panel"
          >
            <Badge 
              className="flex items-center gap-1 text-white border-0 cursor-pointer"
              style={{ backgroundColor: '#cf89e1' }}
            >
              <Sparkles className="h-3 w-3" />
              Scout
            </Badge>
          </button>
        </div>
      )}
    </div>
  );
}
