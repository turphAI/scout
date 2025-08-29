'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Target, Calendar } from 'lucide-react';

interface PerformanceMetricsCardProps {
  totalBalance: number;
  dailyChange: number;
  dailyChangePercent: number;
  className?: string;
}

export function PerformanceMetricsCard({ 
  totalBalance, 
  dailyChange, 
  dailyChangePercent, 
  className 
}: PerformanceMetricsCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatPercent = (percent: number) => {
    return `${percent >= 0 ? '+' : ''}${percent.toFixed(2)}%`;
  };

  // Mock performance data
  const performanceData = {
    ytdReturn: 8.45,
    oneYearReturn: 12.3,
    threeYearReturn: 9.8,
    fiveYearReturn: 11.2,
    sharpeRatio: 1.24,
    maxDrawdown: -8.2,
    beta: 0.95,
  };

  const metrics = [
    {
      label: 'YTD Return',
      value: performanceData.ytdReturn,
      format: 'percent',
      icon: Calendar,
      color: 'green',
    },
    {
      label: '1-Year Return',
      value: performanceData.oneYearReturn,
      format: 'percent',
      icon: TrendingUp,
      color: 'green',
    },
    {
      label: '3-Year Return',
      value: performanceData.threeYearReturn,
      format: 'percent',
      icon: TrendingUp,
      color: 'green',
    },
    {
      label: 'Sharpe Ratio',
      value: performanceData.sharpeRatio,
      format: 'number',
      icon: Target,
      color: 'blue',
    },
    {
      label: 'Max Drawdown',
      value: performanceData.maxDrawdown,
      format: 'percent',
      icon: TrendingDown,
      color: 'red',
    },
    {
      label: 'Beta',
      value: performanceData.beta,
      format: 'number',
      icon: Target,
      color: 'blue',
    },
  ];

  const getColorClasses = (color: string, value: number) => {
    if (color === 'green') {
      return value >= 0 ? 'text-green-600' : 'text-red-600';
    }
    if (color === 'red') {
      return value >= 0 ? 'text-green-600' : 'text-red-600';
    }
    return 'text-blue-600';
  };

  const formatValue = (value: number, format: string) => {
    if (format === 'percent') {
      return formatPercent(value);
    }
    return value.toFixed(2);
  };

  return (
    <Card className={cn("p-4", className)}>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Performance Metrics
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric) => {
          const IconComponent = metric.icon;
          return (
            <div key={metric.label} className="space-y-2">
              <div className="flex items-center space-x-2">
                <IconComponent className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">{metric.label}</span>
              </div>
              <div className={cn(
                "text-lg font-semibold",
                getColorClasses(metric.color, metric.value)
              )}>
                {formatValue(metric.value, metric.format)}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Today&apos;s Change</span>
            <div className={cn(
              "text-sm font-medium",
              dailyChange >= 0 ? "text-green-600" : "text-red-600"
            )}>
              {formatCurrency(dailyChange)} ({formatPercent(dailyChangePercent)})
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Portfolio Value</span>
            <span className="text-sm font-semibold text-gray-900">
              {formatCurrency(totalBalance)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
