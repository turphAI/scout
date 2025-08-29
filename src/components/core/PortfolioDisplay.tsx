'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, PieChart, BarChart3 } from 'lucide-react';
import { getPortfolioData, getAllocationByCategory } from '@/data/portfolioData';

interface PortfolioDisplayProps {
  showDetails?: boolean;
  compact?: boolean;
}

export default function PortfolioDisplay({ showDetails = false, compact = false }: PortfolioDisplayProps) {
  const { summary, positions } = getPortfolioData();
  const allocations = getAllocationByCategory();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  if (compact) {
    return (
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Portfolio Summary</h3>
          <Badge variant={summary.dailyGainLoss >= 0 ? "default" : "destructive"}>
            {formatPercentage(summary.dailyGainLossPercent)}
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Value</p>
            <p className="text-xl font-bold">{formatCurrency(summary.totalValue)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Return</p>
            <p className={`text-xl font-bold ${summary.totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(summary.totalGainLoss)}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Allocation</span>
          </div>
          <div className="flex h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="bg-blue-500" 
              style={{ width: `${allocations.growth}%` }}
              title={`Growth: ${allocations.growth.toFixed(1)}%`}
            />
            <div 
              className="bg-green-500" 
              style={{ width: `${allocations.dividend}%` }}
              title={`Dividend: ${allocations.dividend.toFixed(1)}%`}
            />
            <div 
              className="bg-purple-500" 
              style={{ width: `${allocations.bond}%` }}
              title={`Bonds: ${allocations.bond.toFixed(1)}%`}
            />
            <div 
              className="bg-gray-500" 
              style={{ width: `${allocations.cash}%` }}
              title={`Cash: ${allocations.cash.toFixed(1)}%`}
            />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Portfolio Overview</h2>
          <div className="flex items-center gap-2">
            <Badge variant={summary.dailyGainLoss >= 0 ? "default" : "destructive"}>
              {summary.dailyGainLoss >= 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              {formatPercentage(summary.dailyGainLossPercent)}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Total Value</p>
            <p className="text-2xl font-bold">{formatCurrency(summary.totalValue)}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Total Return</p>
            <p className={`text-2xl font-bold ${summary.totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(summary.totalGainLoss)}
            </p>
            <p className={`text-sm ${summary.totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatPercentage(summary.totalGainLossPercent)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Daily P&L</p>
            <p className={`text-2xl font-bold ${summary.dailyGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(summary.dailyGainLoss)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Positions</p>
            <p className="text-2xl font-bold">{positions.length}</p>
          </div>
        </div>
      </Card>

      {/* Asset Allocation */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <PieChart className="h-5 w-5" />
          Asset Allocation
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm font-medium">Growth Stocks</span>
                </div>
                <span className="text-sm font-bold">{allocations.growth.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm font-medium">Dividend Stocks</span>
                </div>
                <span className="text-sm font-bold">{allocations.dividend.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <span className="text-sm font-medium">Bond ETFs</span>
                </div>
                <span className="text-sm font-bold">{allocations.bond.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-500 rounded"></div>
                  <span className="text-sm font-medium">Cash</span>
                </div>
                <span className="text-sm font-bold">{allocations.cash.toFixed(1)}%</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 32 32">
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray={`${allocations.growth * 0.88} 88`}
                  strokeDashoffset="0"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray={`${allocations.dividend * 0.88} 88`}
                  strokeDashoffset={`-${allocations.growth * 0.88}`}
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  strokeDasharray={`${allocations.bond * 0.88} 88`}
                  strokeDashoffset={`-${(allocations.growth + allocations.dividend) * 0.88}`}
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="#6b7280"
                  strokeWidth="2"
                  strokeDasharray={`${allocations.cash * 0.88} 88`}
                  strokeDashoffset={`-${(allocations.growth + allocations.dividend + allocations.bond) * 0.88}`}
                />
              </svg>
            </div>
          </div>
        </div>
      </Card>

      {/* Top Holdings */}
      {showDetails && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Top Holdings
          </h3>
          
          <div className="space-y-3">
            {positions
              .filter(pos => pos.category !== 'cash')
              .sort((a, b) => b.marketValue - a.marketValue)
              .slice(0, 10)
              .map((position, index) => (
                <div key={position.ticker} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{position.ticker}</p>
                      <p className="text-sm text-gray-600">{position.companyName}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatCurrency(position.marketValue)}</p>
                    <p className="text-sm text-gray-600">{position.allocation.toFixed(1)}%</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${position.dailyChangePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {formatPercentage(position.dailyChangePercent)}
                    </p>
                    <p className="text-xs text-gray-600">{formatNumber(position.shares)} shares</p>
                  </div>
                </div>
              ))}
          </div>
        </Card>
      )}
    </div>
  );
}


