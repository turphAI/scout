'use client';

import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import { EnhancedPositionDetail } from '@/data/portfolioPositionsData';

interface PortfolioPositionsTableProps {
  positions: EnhancedPositionDetail[];
  accountName: string;
  accountNumber: string;
}

type SortField = 'symbol' | 'lastPrice' | 'todaysGainLoss' | 'totalGainLoss' | 'marketVal' | 'holdingPct' | 'quantity' | 'costBasis' | 'weekRange';
type SortDirection = 'asc' | 'desc';

interface SortConfig {
  field: SortField;
  direction: SortDirection;
}

const PortfolioPositionsTable: React.FC<PortfolioPositionsTableProps> = ({
  positions,
  accountName,
  accountNumber
}) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ field: 'symbol', direction: 'asc' });

  const sortedPositions = useMemo(() => {
    const sorted = [...positions].sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortConfig.field) {
        case 'symbol':
          aValue = a.symbol || '';
          bValue = b.symbol || '';
          break;
        case 'lastPrice':
          aValue = a.lastPrice;
          bValue = b.lastPrice;
          break;
        case 'todaysGainLoss':
          aValue = a.todaysGainLoss;
          bValue = b.todaysGainLoss;
          break;
        case 'totalGainLoss':
          aValue = a.marketValDetail.totalGainLoss;
          bValue = b.marketValDetail.totalGainLoss;
          break;
        case 'marketVal':
          aValue = a.marketValDetail.marketVal;
          bValue = b.marketValDetail.marketVal;
          break;
        case 'holdingPct':
          aValue = a.holdingPct;
          bValue = b.holdingPct;
          break;
        case 'quantity':
          aValue = a.quantity;
          bValue = b.quantity;
          break;
        case 'costBasis':
          aValue = a.costBasis;
          bValue = b.costBasis;
          break;
        case 'weekRange':
          aValue = a.weekRangeHigh - a.weekRangeLow;
          bValue = b.weekRangeHigh - b.weekRangeLow;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [positions, sortConfig]);

  const handleSort = (field: SortField) => {
    setSortConfig(prev => ({
      field,
      direction: prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getSortIcon = (field: SortField) => {
    if (sortConfig.field !== field) {
      return <ChevronsUpDown className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' 
      ? <ChevronUp className="w-4 h-4 text-blue-600" />
      : <ChevronDown className="w-4 h-4 text-blue-600" />;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const formatNumber = (value: number, decimals: number = 2) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value >= 0 ? '+' : ''}${formatNumber(value, 2)}%`;
  };

  const getGainLossColor = (value: number) => {
    if (value > 0) return 'text-green-600';
    if (value < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const WeekRangeSlider: React.FC<{ low: number; high: number; current: number }> = ({ low, high, current }) => {
    const range = high - low;
    const position = range > 0 ? ((current - low) / range) * 100 : 50;
    
    return (
      <div className="relative w-full h-6 flex items-center">
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-blue-500 rounded-full"
            style={{ width: `${position}%` }}
          />
        </div>
        <div 
          className="absolute w-3 h-3 bg-gray-800 rounded-full transform -translate-x-1/2"
          style={{ left: `${position}%` }}
        />
        <div className="absolute -bottom-6 left-0 text-xs text-gray-500">
          ${formatNumber(low, 2)}
        </div>
        <div className="absolute -bottom-6 right-0 text-xs text-gray-500">
          ${formatNumber(high, 2)}
        </div>
      </div>
    );
  };

  if (positions.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {accountName} ({accountNumber})
        </h3>
        <p className="text-gray-500">No positions found in this account.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          {accountName} ({accountNumber})
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('symbol')}
              >
                <div className="flex items-center space-x-1">
                  <span>Symbol</span>
                  {getSortIcon('symbol')}
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('lastPrice')}
              >
                <div className="flex items-center space-x-1">
                  <span>Last Price</span>
                  {getSortIcon('lastPrice')}
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('todaysGainLoss')}
              >
                <div className="flex items-center space-x-1">
                  <span>Today&apos;s Gain/Loss</span>
                  {getSortIcon('todaysGainLoss')}
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('totalGainLoss')}
              >
                <div className="flex items-center space-x-1">
                  <span>Total Gain/Loss</span>
                  {getSortIcon('totalGainLoss')}
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('marketVal')}
              >
                <div className="flex items-center space-x-1">
                  <span>Current Value</span>
                  {getSortIcon('marketVal')}
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('holdingPct')}
              >
                <div className="flex items-center space-x-1">
                  <span>% of Account</span>
                  {getSortIcon('holdingPct')}
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('quantity')}
              >
                <div className="flex items-center space-x-1">
                  <span>Quantity</span>
                  {getSortIcon('quantity')}
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('costBasis')}
              >
                <div className="flex items-center space-x-1">
                  <span>Cost Basis</span>
                  {getSortIcon('costBasis')}
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('weekRange')}
              >
                <div className="flex items-center space-x-1">
                  <span>52-Week Range</span>
                  {getSortIcon('weekRange')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedPositions.map((position, index) => (
              <tr key={`${position.cusip}-${index}`} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {position.symbol || '—'}
                  </div>
                  <div className="text-sm text-gray-500">
                    {position.securityDescription}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatCurrency(position.lastPrice)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${getGainLossColor(position.todaysGainLoss)}`}>
                    {formatCurrency(position.todaysGainLoss)}
                  </div>
                  <div className={`text-sm ${getGainLossColor(position.todaysGainLossPercent)}`}>
                    {formatPercent(position.todaysGainLossPercent)}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${getGainLossColor(position.marketValDetail.totalGainLoss)}`}>
                    {formatCurrency(position.marketValDetail.totalGainLoss)}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatCurrency(position.marketValDetail.marketVal)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatNumber(position.holdingPct, 2)}%
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {formatNumber(position.quantity, 3)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {formatCurrency(position.costBasis)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatCurrency(position.costBasisPerShare)} / Share
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="w-32">
                    <WeekRangeSlider 
                      low={position.weekRangeLow}
                      high={position.weekRangeHigh}
                      current={position.currentPriceInRange}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioPositionsTable;
