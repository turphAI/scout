'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
    shares: 1000,
    currentPrice: 35.42,
    marketValue: 35420.00,
    costBasis: 32000.00,
    gainLoss: 3420.00,
    gainLossPercent: 10.69,
    account: 'Individual Brokerage'
  },
  {
    symbol: 'BAC',
    shares: 500,
    currentPrice: 35.42,
    marketValue: 17710.00,
    costBasis: 16500.00,
    gainLoss: 1210.00,
    gainLossPercent: 7.33,
    account: 'IRA Account'
  },
  {
    symbol: 'BAC',
    shares: 200,
    currentPrice: 35.42,
    marketValue: 7084.00,
    costBasis: 7200.00,
    gainLoss: -116.00,
    gainLossPercent: -1.61,
    account: '401(k)'
  }
];

export default function BACPositionsCard() {
  const totalShares = mockBACPositions.reduce((sum, pos) => sum + pos.shares, 0);
  const totalMarketValue = mockBACPositions.reduce((sum, pos) => sum + pos.marketValue, 0);
  const totalCostBasis = mockBACPositions.reduce((sum, pos) => sum + pos.costBasis, 0);
  const totalGainLoss = totalMarketValue - totalCostBasis;
  const totalGainLossPercent = (totalGainLoss / totalCostBasis) * 100;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>BAC (Bank of America) Positions</span>
          <Badge variant="outline" className="text-sm">
            {mockBACPositions.length} Position{mockBACPositions.length !== 1 ? 's' : ''}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Total Shares</p>
            <p className="text-lg font-semibold">{totalShares.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Market Value</p>
            <p className="text-lg font-semibold">${totalMarketValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Cost Basis</p>
            <p className="text-lg font-semibold">${totalCostBasis.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Gain/Loss</p>
            <p className={`text-lg font-semibold ${totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalGainLoss >= 0 ? '+' : ''}${totalGainLoss.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              <span className="text-sm ml-1">({totalGainLossPercent >= 0 ? '+' : ''}{totalGainLossPercent.toFixed(2)}%)</span>
            </p>
          </div>
        </div>

        {/* Individual Positions */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Individual Positions</h3>
          {mockBACPositions.map((position, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">BAC</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{position.symbol}</h4>
                    <p className="text-sm text-gray-600">{position.account}</p>
                  </div>
                </div>
                <Badge variant={position.gainLoss >= 0 ? "default" : "destructive"}>
                  {position.gainLoss >= 0 ? '+' : ''}{position.gainLossPercent.toFixed(2)}%
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Shares</p>
                  <p className="font-medium">{position.shares.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600">Current Price</p>
                  <p className="font-medium">${position.currentPrice.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-gray-600">Market Value</p>
                  <p className="font-medium">${position.marketValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                </div>
                <div>
                  <p className="text-gray-600">Gain/Loss</p>
                  <p className={`font-medium ${position.gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {position.gainLoss >= 0 ? '+' : ''}${position.gainLoss.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Position Details</h4>
          <div className="text-sm text-blue-800 space-y-1">
            <p>• All positions are held in different account types for diversification</p>
            <p>• Current price reflects real-time market data</p>
            <p>• Gain/Loss calculations include unrealized gains and losses</p>
            <p>• Positions may be subject to different tax treatments based on account type</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
