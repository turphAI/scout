'use client';

import React, { useState } from 'react';
import { Briefcase, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeaderInput from './HeaderInput';
import EnhancedSmartSuggestPanelV2 from './EnhancedSmartSuggestPanelV2';
import LogoutDropdown from './LogoutDropdown';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export type HeaderProps = {
  variant: 'full' | 'short';
  onLogout?: () => void;
  onNavSelect?: (navKey: string) => void;
  onSmartSuggestOpen?: () => void;
  homeHref?: string;
  showOverlayPanel?: boolean;
  isOverlayOpen?: boolean;
  onOverlayClose?: () => void;
  panelContext?: 'portfolio-summary' | 'portfolio-positions' | 'default';
};

export default function Header({
  variant = 'full',
  onLogout,
  onNavSelect,
  onSmartSuggestOpen,
  homeHref = '/',
  showOverlayPanel = true,
  isOverlayOpen,
  onOverlayClose,
  panelContext = 'default',
}: HeaderProps) {
  const [isSmartSuggestOpen, setIsSmartSuggestOpen] = useState(false);

  const handleSmartSuggestOpen = () => {
    setIsSmartSuggestOpen(true);
    onSmartSuggestOpen?.();
  };

  const handleSmartSuggestClose = () => {
    setIsSmartSuggestOpen(false);
    onOverlayClose?.();
  };

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top row: logo/company (left), actions (right) */}
      <div className="flex w-full items-center justify-between gap-2 px-4 py-2">
        <Link 
          href={homeHref} 
          className="flex items-center gap-2 font-bold text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Briefcase className="w-6 h-6" />
          <span>Finance Company</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="flex items-center gap-1">
            <User className="w-4 h-4" /> Profile
          </Button>
          <Button variant="ghost">Open an account</Button>
          <LogoutDropdown onLogout={onLogout} />
        </div>
      </div>

      {/* Bottom row: navigation (only for full variant) */}
      {variant === 'full' && (
        <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Accounts
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem onClick={() => {
                      console.log('Portfolio Summary clicked');
                      window.location.href = '/enhancedSS/panelV2/portfolio-summary';
                    }}>
                      Portfolio Summary
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {
                      console.log('Portfolio Positions clicked');
                      window.location.href = '/enhancedSS/panelV2/portfolio-positions';
                    }}>
                      Portfolio Positions
                    </DropdownMenuItem>
                  </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" onClick={() => onNavSelect?.('planning')}>
              Planning
            </Button>
            <Button variant="ghost" onClick={() => onNavSelect?.('research')}>
              Research
            </Button>
            <Button variant="ghost" onClick={() => onNavSelect?.('products')}>
              Products & Services
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <HeaderInput onSmartSuggestOpen={handleSmartSuggestOpen} />
          </div>
        </div>
      )}
      
      {/* Enhanced Smart Suggest Panel - Overlay Mode */}
      {showOverlayPanel && (isSmartSuggestOpen || !!isOverlayOpen) && (
        <EnhancedSmartSuggestPanelV2
          isOpen={isSmartSuggestOpen || !!isOverlayOpen}
          onClose={handleSmartSuggestClose}
          onSmartSuggestOpen={handleSmartSuggestOpen}
          mode="overlay"
          title="Scout Discovery"
          context={panelContext}
        />
      )}
    </header>
  );
}
