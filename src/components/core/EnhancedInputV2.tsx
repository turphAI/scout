'use client';

import React, { useState } from 'react';
import { Search, Sparkles, ArrowUpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

interface EnhancedInputV2Props {
  onFocus?: () => void;
  onSmartSuggestOpen?: () => void;
  onSubmit?: (value: string) => void;
  className?: string;
  hideBadge?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  mode?: 'overlay' | 'sidecar';
}

export default function EnhancedInputV2({
  onFocus,
  onSmartSuggestOpen,
  onSubmit,
  className = "",
  hideBadge = false,
  value,
  onChange,
  mode = 'overlay'
}: EnhancedInputV2Props) {
  console.log('EnhancedInputV2 rendered with mode:', mode);
  const [activeTab, setActiveTab] = useState("ticker");
  
  const handleFocus = () => {
    onFocus?.();
    onSmartSuggestOpen?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSubmit) {
      onSubmit(e.currentTarget.value);
    }
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const handleSubmit = () => {
    // Handle text submission
    if (value && onSubmit) {
      onSubmit(value);
    }
  };

  return (
    <div className={`relative ${className} ${mode === 'sidecar' ? 'px-6' : ''}`}>
      {/* Main input container - taller */}
      <div 
        className="w-full rounded-2xl border-2 p-2"
        style={{
          borderColor: '#f1c4fc',
          backgroundColor: '#fdf6ff',
          minHeight: '90px'
        }}
      >
        {/* Input area - moved to top */}
        <div className="relative mb-2">
          <Input
            placeholder={activeTab === "ticker" ? "Enter ticker symbol..." : "Ask anything..."}
            className="w-full border-0 bg-transparent pl-3 pr-3 h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
            style={{
              '--tw-ring-color': mode === 'overlay' ? '#cf89e1' : '#a855f7',
              fontSize: '16px'
            } as React.CSSProperties}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            onClick={handleInputClick}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
          />
        </div>

        {/* Combined tabs and action row */}
        <div className="flex items-center justify-between">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" onClick={(e) => e.stopPropagation()}>
            <TabsList className="grid w-32 grid-cols-2 h-8" style={{ backgroundColor: '#F4E7F8' }}>
              <TabsTrigger 
                value="ticker" 
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-purple-700"
              >
                Ticker
              </TabsTrigger>
              <TabsTrigger 
                value="ask" 
                className="text-xs data-[state=active]:bg-white data-[state=active]:text-purple-700"
              >
                Ask
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleSubmit();
              }}
              className="h-8 w-8 p-0 rounded-full"
              style={{ backgroundColor: '#cf89e1' }}
            >
              <ArrowUpCircle className="h-4 w-4 text-white" />
            </Button>
          </div>
        </div>

        {/* Scout badge row */}
        <div className="flex items-center justify-start mt-2 pt-2">
          {!hideBadge && (
            <Badge 
              className="flex items-center gap-1 text-white border-0"
              style={{ backgroundColor: '#cf89e1' }}
            >
              <Sparkles className="h-3 w-3" />
              Scout
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
