'use client';

import React, { useState } from 'react';
import { AccountSidebar, mockAccountGroups, Account } from '@/components/core/AccountSidebar';

export default function AccountSidebarDemo() {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  const handleAccountSelect = (account: Account) => {
    setSelectedAccount(account);
    console.log('Selected account:', account);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AccountSidebar
        accountGroups={mockAccountGroups}
        onAccountSelect={handleAccountSelect}
        selectedAccountId={selectedAccount?.id}
      />
      
      <div className="flex-1 p-8">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Account Sidebar Demo
          </h1>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Selected Account Details
            </h2>
            
            {selectedAccount ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Account Name</label>
                  <p className="text-lg text-gray-900">{selectedAccount.name}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500">Type</label>
                  <p className="text-lg text-gray-900 capitalize">{selectedAccount.type.replace('-', ' ')}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500">Institution</label>
                  <p className="text-lg text-gray-900">{selectedAccount.institution}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500">Balance</label>
                  <p className="text-lg text-gray-900">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(selectedAccount.balance)}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-500">Daily Change</label>
                  <p className={`text-lg ${selectedAccount.dailyChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedAccount.dailyChange >= 0 ? '+' : ''}
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(selectedAccount.dailyChange)} ({selectedAccount.dailyChangePercent.toFixed(2)}%)
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">
                Select an account from the sidebar to view details
              </p>
            )}
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Component Features
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>• 4 account groups: Total, Investment, Retirement, Professionally managed</li>
              <li>• Real-time balance and daily change display</li>
              <li>• Visual indicators for positive/negative changes</li>
              <li>• Account selection with visual feedback</li>
              <li>• Responsive design with hover effects</li>
              <li>• Institution and account status badges</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
