'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/core/Header';
import { AccountSidebar, mockAccountGroups, Account } from '@/components/core/AccountSidebar';
import PortfolioTabs from '@/components/core/PortfolioTabs';
import ScoutGhostButton from '@/components/core/ScoutGhostButton';
import EnhancedSmartSuggestPanelV2 from '@/components/core/EnhancedSmartSuggestPanelV2';
import { PortfolioOverviewCard } from '@/components/core/PortfolioOverviewCard';
import { AccountBreakdownCard } from '@/components/core/AccountBreakdownCard';
import { PerformanceMetricsCard } from '@/components/core/PerformanceMetricsCard';

export default function PortfolioSummaryPage() {
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  
  // Enhanced panel state
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isSidecarOpen, setIsSidecarOpen] = useState(false);
  const [panelMode, setPanelMode] = useState<'overlay' | 'sidecar'>('overlay');

  const handleNavSelect = (navKey: string) => {
    switch (navKey) {
      case 'portfolio-summary':
        router.push('/enhancedSS/panelV2/portfolio-summary');
        break;
      case 'portfolio-positions':
        router.push('/enhancedSS/panelV2/portfolio-positions');
        break;
      default:
        console.log('Navigation not implemented for:', navKey);
    }
  };

  const handleAccountSelect = (account: Account) => {
    setSelectedAccount(account);
  };

  // Enhanced panel handlers
  const handleScoutAssistantClick = () => {
    setIsOverlayOpen(true);
    setPanelMode('overlay');
  };

  const handlePanelClose = () => {
    setIsOverlayOpen(false);
    setIsSidecarOpen(false);
    setPanelMode('overlay');
  };

  const handlePanelModeChange = (mode: 'overlay' | 'sidecar') => {
    setPanelMode(mode);
    if (mode === 'sidecar') {
      setIsOverlayOpen(false);
      setIsSidecarOpen(true);
    } else {
      setIsOverlayOpen(true);
      setIsSidecarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        variant="full" 
        onNavSelect={handleNavSelect}
        homeHref="/enhancedSS/panelV2"
      />
      
      {/* Main content with account sidebar */}
      <div className="flex h-screen">
        {/* Account Sidebar */}
        <AccountSidebar
          accountGroups={mockAccountGroups}
          onAccountSelect={handleAccountSelect}
          selectedAccountId={selectedAccount?.id}
        />
        
        {/* Main content area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Portfolio Summary
            </h1>
            <ScoutGhostButton onClick={handleScoutAssistantClick}>
              Scout Assistant
            </ScoutGhostButton>
          </div>
          
          <PortfolioTabs />
          
          {/* Portfolio Overview Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-6">
            {/* Main Portfolio Overview Card with Chart */}
            <div className="lg:col-span-2">
              <PortfolioOverviewCard
                totalBalance={mockAccountGroups.find(g => g.id === 'total')?.totalBalance || 0}
                dailyChange={mockAccountGroups.find(g => g.id === 'total')?.totalDailyChange || 0}
                dailyChangePercent={mockAccountGroups.find(g => g.id === 'total')?.totalDailyChangePercent || 0}
              />
            </div>
            
            {/* Account Breakdown Card */}
            <div className="lg:col-span-1">
              <AccountBreakdownCard accountGroups={mockAccountGroups} />
            </div>
          </div>
          
          {/* Performance Metrics Card */}
          <div className="mt-6">
            <PerformanceMetricsCard
              totalBalance={mockAccountGroups.find(g => g.id === 'total')?.totalBalance || 0}
              dailyChange={mockAccountGroups.find(g => g.id === 'total')?.totalDailyChange || 0}
              dailyChangePercent={mockAccountGroups.find(g => g.id === 'total')?.totalDailyChangePercent || 0}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Panel - rendered for both overlay and sidecar modes */}
      {(isOverlayOpen || isSidecarOpen) && (
        <div className={isSidecarOpen ? "w-96 h-screen border-l border-gray-200 bg-white" : ""}>
          <EnhancedSmartSuggestPanelV2
            isOpen={isOverlayOpen || isSidecarOpen}
            onClose={handlePanelClose}
            mode={isSidecarOpen ? "sidecar" : "overlay"}
            onModeChange={handlePanelModeChange}
            context="portfolio-summary"
            title="Scout Assistant"
          />
        </div>
      )}
    </div>
  );
}
