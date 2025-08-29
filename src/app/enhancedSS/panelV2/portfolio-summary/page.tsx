'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/core/Header';
import { AccountSidebar, mockAccountGroups, Account } from '@/components/core/AccountSidebar';
import PortfolioTabs from '@/components/core/PortfolioTabs';
import ScoutGhostButton from '@/components/core/ScoutGhostButton';

export default function PortfolioSummaryPage() {
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  const handleNavSelect = (navKey: string) => {
    console.log('Navigation selected:', navKey);
    
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
    console.log('Selected account:', account);
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
            <ScoutGhostButton onClick={() => console.log('Scout button clicked')}>
              Scout Assistant
            </ScoutGhostButton>
          </div>
          
          <PortfolioTabs />
          
          {/* Content will be added here as we progress */}
          <div className="text-gray-600 mt-6">
            Portfolio summary content will be developed here.
          </div>
        </div>
      </div>
    </div>
  );
}
