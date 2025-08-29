'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { AccountGroup } from './AccountSidebar';

interface AccountBreakdownCardProps {
  accountGroups: AccountGroup[];
  className?: string;
}

export function AccountBreakdownCard({ accountGroups, className }: AccountBreakdownCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatPercent = (amount: number, total: number) => {
    return ((amount / total) * 100).toFixed(1);
  };

  // Get total balance from the total group
  const totalGroup = accountGroups.find(group => group.id === 'total');
  const totalBalance = totalGroup?.totalBalance || 0;

  // Filter out the total group and empty groups
  const activeGroups = accountGroups.filter(group => 
    group.id !== 'total' && group.totalBalance > 0
  );

  return (
    <Card className={cn("p-4", className)}>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Account Breakdown
      </h3>
      
      <div className="space-y-3">
        {activeGroups.map((group) => (
          <div key={group.id} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                {group.label}
              </span>
              <span className="text-sm font-medium text-gray-900">
                {formatCurrency(group.totalBalance)}
              </span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${(group.totalBalance / totalBalance) * 100}%` 
                }}
              />
            </div>
            
            <div className="flex justify-between text-xs text-gray-500">
              <span>{formatPercent(group.totalBalance, totalBalance)}% of portfolio</span>
              <span>{group.accounts.length} account{group.accounts.length !== 1 ? 's' : ''}</span>
            </div>
            
            {/* Individual accounts */}
            <div className="ml-4 space-y-1">
              {group.accounts.map((account) => (
                <div key={account.id} className="flex justify-between items-center text-xs">
                  <span className="text-gray-600 truncate">
                    {account.name}
                  </span>
                  <span className="text-gray-900 font-medium">
                    {formatCurrency(account.balance)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Total Portfolio</span>
          <span className="text-lg font-bold text-gray-900">
            {formatCurrency(totalBalance)}
          </span>
        </div>
      </div>
    </Card>
  );
}
