'use client';

import React from 'react';

interface BACPosition {
  symbol: string;
  shares: number;
  currentPrice: number;
  marketValue: number;
  costBasis: number;
  gainLoss: number;
  gainLossPercent: number;
  account: string;
}

const mockBACPositions: BACPosition[] = [
  {
    symbol: 'BAC',
    shares: 1234,
    currentPrice: 42.89,
    marketValue: 53150.48,
    costBasis: 43054.26,
    gainLoss: 10096.22,
    gainLossPercent: 23.45,
    account: 'Brokerage X30723100'
  }
];

export default function BACPositionsCard() {
  const position = mockBACPositions[0]; // Single position for this demo
  const todayGainLoss = 132.88; // Today's gain from the image
  const todayGainLossPercent = 0.25; // Today's gain percentage from the image
  const accountPercentage = 12.34; // % of account from the image

  return (
    <div className="animate-in fade-in duration-300">
      <h3 className="font-semibold text-sm mb-3">BAC positions</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200">
        <div className="space-y-4">
          <p className="text-sm text-gray-600">In your tradeable accounts as of Sep-25-2025.</p>
          
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-600 underline cursor-pointer">Set up a recurring investment or learn more.</p>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-gray-900">{position.account}</h4>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Today&apos;s gain/loss:</span>
                <span className="text-green-600 font-medium">${todayGainLoss.toFixed(2)} (+{todayGainLossPercent}%)</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Total gain/loss:</span>
                <span className="text-green-600 font-medium">${position.gainLoss.toFixed(2)} (+{position.gainLossPercent.toFixed(2)}%)</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Current value:</span>
                <span className="font-medium">${position.marketValue.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">% of account:</span>
                <span className="font-medium">{accountPercentage}%</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Quantity:</span>
                <span className="font-medium">{position.shares.toLocaleString()} shares</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Cost basis:</span>
                <span className="font-medium">${(position.costBasis / position.shares).toFixed(2)}/share / ${position.costBasis.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
