'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeaderInput from './HeaderInput';
import EnhancedSmartSuggestPanelV2 from './EnhancedSmartSuggestPanelV2';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
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
}: HeaderProps) {
  const router = useRouter();
  const [isSmartSuggestOpen, setIsSmartSuggestOpen] = useState(false);

  const handleLogout = () => {
    router.push('/');
    onLogout?.();
  };

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
          <Button variant="ghost" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </div>

      {/* Bottom row: navigation (only for full variant) */}
      {variant === 'full' && (
        <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => onNavSelect?.('accounts')}>
                  Accounts
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => onNavSelect?.('planning')}>
                  Planning
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => onNavSelect?.('research')}>
                  Research
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => onNavSelect?.('products')}>
                  Products & Services
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
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
        />
      )}
    </header>
  );
}
