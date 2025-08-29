'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PortfolioOverviewCardProps {
  totalBalance: number;
  dailyChange: number;
  dailyChangePercent: number;
  className?: string;
}

// Mock chart data based on the account values
const generateChartData = (currentValue: number) => {
  const dataPoints = [];
  const startValue = currentValue * 0.85; // Start at 85% of current value
  const endValue = currentValue * 1.05; // End at 105% of current value
  
  for (let i = 0; i < 12; i++) {
    const progress = i / 11;
    const baseValue = startValue + (endValue - startValue) * progress;
    
    // Add some realistic volatility
    const volatility = (Math.random() - 0.5) * 0.1; // ±5% volatility
    const value = baseValue * (1 + volatility);
    
    dataPoints.push({
      month: i,
      value: Math.max(value, startValue * 0.9), // Ensure we don't go too low
    });
  }
  
  return dataPoints;
};

export function PortfolioOverviewCard({ 
  totalBalance, 
  dailyChange, 
  dailyChangePercent, 
  className 
}: PortfolioOverviewCardProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'1M' | 'YTD' | '1Y' | '3Y'>('1Y');
  
  const chartData = generateChartData(totalBalance);
  
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

  // Calculate chart dimensions and scaling
  const chartWidth = 280;
  const chartHeight = 200;
  const padding = 35;
  
  const values = chartData.map(d => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const valueRange = maxValue - minValue;
  
  const xScale = (chartWidth - 2 * padding) / (chartData.length - 1);
  const yScale = (chartHeight - 2 * padding) / valueRange;
  
  // Generate path for the line chart
  const pathData = chartData.map((point, index) => {
    const x = padding + index * xScale;
    const y = chartHeight - padding - (point.value - minValue) * yScale;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  const timeframes = [
    { key: '1M' as const, label: '1M' },
    { key: 'YTD' as const, label: 'YTD' },
    { key: '1Y' as const, label: '1Y' },
    { key: '3Y' as const, label: '3Y' },
  ];

  return (
    <Card className={cn("p-3 gap-2", className)}>
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Portfolio Performance
      </h3>
      
      {/* Chart Area */}
      <div className="mb-2 flex justify-center">
        <svg 
          width="100%" 
          height={chartHeight} 
          className="max-w-full"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Grid lines */}
          {[0, 1, 2, 3].map((i) => {
            const y = padding + (i * (chartHeight - 2 * padding)) / 3;
            const value = minValue + (i * valueRange) / 3;
            return (
              <g key={i}>
                <line
                  x1={padding}
                  y1={y}
                  x2={chartWidth - padding}
                  y2={y}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
                <text
                  x={padding - 15}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="9"
                  fill="#6b7280"
                >
                  {formatCurrency(value)}
                </text>
              </g>
            );
          })}
          
          {/* Chart line */}
          <path
            d={pathData}
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Data points */}
          {chartData.map((point, index) => {
            const x = padding + index * xScale;
            const y = chartHeight - padding - (point.value - minValue) * yScale;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill="#3b82f6"
              />
            );
          })}
        </svg>
      </div>

      {/* Timeframe Selection */}
      <div className="flex justify-center mb-2">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe.key}
              onClick={() => setSelectedTimeframe(timeframe.key)}
              className={cn(
                "px-2 py-0.5 text-xs font-medium rounded-md transition-colors",
                selectedTimeframe === timeframe.key
                  ? "bg-green-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {timeframe.label}
            </button>
          ))}
        </div>
      </div>

      {/* Account Summary */}
      <div className="flex justify-between items-center mb-2">
        <div className="text-xs font-medium text-gray-700">
          All accounts
        </div>
        <div className="text-xs font-medium text-gray-900">
          {formatCurrency(totalBalance)}
        </div>
      </div>

      {/* Daily Change */}
      <div className="flex justify-between items-center mb-2">
        <div className="text-xs text-gray-500">
          Today&apos;s change
        </div>
        <div className={cn(
          "text-xs font-medium",
          dailyChange >= 0 ? "text-green-600" : "text-red-600"
        )}>
          {formatCurrency(dailyChange)} ({formatPercent(dailyChangePercent)})
        </div>
      </div>

      {/* Action Link */}
      <div className="text-center">
        <button className="text-blue-600 hover:text-blue-800 underline text-xs">
          View your performance
        </button>
      </div>
    </Card>
  );
}
