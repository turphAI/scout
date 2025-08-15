'use client';

import React from 'react';
import { Search, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface EnhancedInputProps {
  onFocus?: () => void;
  onSmartSuggestOpen?: () => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  className?: string;
  hideBadge?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  mode?: 'overlay' | 'sidecar';
}

export default function EnhancedInput({
  onFocus,
  onSmartSuggestOpen,
  onSubmit,
  placeholder = "What would you like to know?",
  className = "",
  hideBadge = false,
  value,
  onChange,
  mode = 'overlay'
}: EnhancedInputProps) {
  
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
    <div className={`relative ${className} ${mode === 'sidecar' ? 'px-6' : ''}`}>
      <Search className={`absolute top-1/2 -translate-y-1/2 ${mode === 'sidecar' ? 'left-9 h-4 w-4' : 'left-3 h-[21px] w-[21px]'}`} style={{ color: '#cf89e1' }} />
      <Input
        placeholder={placeholder}
        className={`w-full rounded-2xl ${hideBadge ? 'pr-3' : 'pr-20'} ${mode === 'sidecar' ? 'pl-10 h-10 text-sm' : 'pl-10 h-12 text-lg md:text-lg'}`}
        style={{
          borderColor: '#f1c4fc',
          backgroundColor: '#fdf6ff',
          '--tw-ring-color': mode === 'overlay' ? '#cf89e1' : '#a855f7'
        } as React.CSSProperties}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
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
