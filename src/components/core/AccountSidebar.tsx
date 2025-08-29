'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';


// Account data interface
export interface Account {
  id: string;
  name: string;
  type: 'investment' | 'retirement' | 'professionally-managed';
  balance: number;
  dailyChange: number;
  dailyChangePercent: number;
  accountNumber?: string;
  institution?: string;
  isActive?: boolean;
}

// Account group interface
export interface AccountGroup {
  id: string;
  label?: string; // undefined for "Total" group
  accounts: Account[];
  totalBalance: number;
  totalDailyChange: number;
  totalDailyChangePercent: number;
}

interface AccountSidebarProps {
  className?: string;
  accountGroups: AccountGroup[];
  onAccountSelect?: (account: Account) => void;
  selectedAccountId?: string;
}

export function AccountSidebar({ 
  className, 
  accountGroups, 
  onAccountSelect, 
  selectedAccountId 
}: AccountSidebarProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };





  return (
    <aside className={cn(
      "w-80 bg-white border-r border-gray-200 p-4 overflow-y-auto",
      className
    )}>
      <div className="space-y-6">
        {accountGroups.map((group) => (
          <div key={group.id} className="space-y-3">

            {/* Account Items */}
            <div className="space-y-2">
              {group.id === 'total' ? (
                // Special card for Total group
                <Card className="p-3 bg-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-700">
                      All accounts
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {formatCurrency(group.totalBalance)}
                    </div>
                  </div>
                </Card>
              ) : (
                // Regular account cards for other groups
                group.accounts.map((account) => (
                  <Card
                    key={account.id}
                    className={cn(
                      "p-3 cursor-pointer transition-all hover:shadow-md",
                      selectedAccountId === account.id 
                        ? "ring-2 ring-blue-500 bg-blue-50" 
                        : "hover:bg-gray-50"
                    )}
                    onClick={() => onAccountSelect?.(account)}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-left">
                        <div className="text-sm font-medium text-gray-900">
                          {account.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {account.accountNumber || 'x21985452'}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {formatCurrency(account.balance)}
                        </div>
                        <div className={cn(
                          "text-xs",
                          account.dailyChange >= 0 
                            ? "text-green-600" 
                            : "text-red-600"
                        )}>
                          {account.dailyChange >= 0 ? '+' : ''}{formatCurrency(account.dailyChange)} ({account.dailyChangePercent.toFixed(2)}%)
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

// Mock data for testing
export const mockAccountGroups: AccountGroup[] = [
  {
    id: 'total',
    accounts: [
      {
        id: 'inv-1',
        name: 'Brokerage',
        type: 'investment',
        balance: 102378.16,
        dailyChange: -25.42,
        dailyChangePercent: -0.02,
        accountNumber: 'x21985452',
        institution: 'Fidelity',
        isActive: true,
      },
      {
        id: 'ret-1',
        name: 'Rollover IRA',
        type: 'retirement',
        balance: 117889.07,
        dailyChange: -311.49,
        dailyChangePercent: -0.26,
        accountNumber: '137472653',
        institution: 'Vanguard',
        isActive: true,
      },
      {
        id: 'ret-2',
        name: 'Traditional IRA',
        type: 'retirement',
        balance: 88607.23,
        dailyChange: -104.95,
        dailyChangePercent: -0.12,
        accountNumber: '138490623',
        institution: 'Vanguard',
        isActive: true,
      },
      {
        id: 'prof-1',
        name: 'Managed Account',
        type: 'professionally-managed',
        balance: 0,
        dailyChange: 0,
        dailyChangePercent: 0,
        accountNumber: 'Y81017291',
        institution: 'Morgan Stanley',
        isActive: true,
      },
    ],
    totalBalance: 308874.46,
    totalDailyChange: -441.86,
    totalDailyChangePercent: -0.14,
  },
  {
    id: 'investment',
    label: 'Investment',
    accounts: [
      {
        id: 'inv-1',
        name: 'Brokerage',
        type: 'investment',
        balance: 102378.16,
        dailyChange: -25.42,
        dailyChangePercent: -0.02,
        accountNumber: 'x21985452',
        institution: 'Fidelity',
        isActive: true,
      },
    ],
    totalBalance: 102378.16,
    totalDailyChange: -25.42,
    totalDailyChangePercent: -0.02,
  },
  {
    id: 'retirement',
    label: 'Retirement',
    accounts: [
      {
        id: 'ret-1',
        name: 'Rollover IRA',
        type: 'retirement',
        balance: 117889.07,
        dailyChange: -311.49,
        dailyChangePercent: -0.26,
        accountNumber: '137472653',
        institution: 'Vanguard',
        isActive: true,
      },
      {
        id: 'ret-2',
        name: 'Traditional IRA',
        type: 'retirement',
        balance: 88607.23,
        dailyChange: -104.95,
        dailyChangePercent: -0.12,
        accountNumber: '138490623',
        institution: 'Vanguard',
        isActive: true,
      },
    ],
    totalBalance: 206496.30,
    totalDailyChange: -416.44,
    totalDailyChangePercent: -0.20,
  },
  {
    id: 'professionally-managed',
    label: 'Professionally managed',
    accounts: [
      {
        id: 'prof-1',
        name: 'Managed Account',
        type: 'professionally-managed',
        balance: 0,
        dailyChange: 0,
        dailyChangePercent: 0,
        accountNumber: 'Y81017291',
        institution: 'Morgan Stanley',
        isActive: true,
      },
    ],
    totalBalance: 0,
    totalDailyChange: 0,
    totalDailyChangePercent: 0,
  },
];
