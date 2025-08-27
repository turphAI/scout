'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { TickerData } from '@/data/responseModeData';
import { BarChart3, Bell, Filter, ExternalLink } from 'lucide-react';

interface SimpleQuoteProps {
  ticker?: TickerData;
}

export default function SimpleQuote({ ticker }: SimpleQuoteProps) {
  if (!ticker) {
    return (
      <div className="min-h-[200px] animate-in fade-in duration-300">
        <h3 className="font-semibold text-sm mb-3">Simple quote</h3>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-300">
      <h3 className="font-semibold text-sm mb-3">Simple quote</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200">
        {/* Company Info */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg font-bold">{ticker.symbol}</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="text-sm text-gray-500">{ticker.exchange}</span>
          </div>
          <div className="text-sm text-gray-600">{ticker.companyName}</div>
        </div>

        {/* Price Info */}
        <div className="mb-4">
          <div className="text-2xl font-bold mb-1">
            ${ticker.price.toFixed(2)}
          </div>
          <div className={`text-sm font-medium ${ticker.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {ticker.change >= 0 ? '+' : ''}{ticker.change.toFixed(2)} ({ticker.changePercent >= 0 ? '+' : ''}{ticker.changePercent.toFixed(2)}%) Today
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Aug 14 4:05:59 PM UTC-4 USD
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-4">
          <Button 
            size="sm" 
            className="flex-1 transition-all duration-200 hover:scale-[1.02]"
          >
            Buy
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 transition-all duration-200 hover:scale-[1.02]"
          >
            Sell
          </Button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110">
            <BarChart3 className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110">
            <Bell className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110">
            <Filter className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110">
            <ExternalLink className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
