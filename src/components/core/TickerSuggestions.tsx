'use client';

import React from 'react';
import { TickerData } from '@/data/responseModeData';

interface TickerSuggestionsProps {
  suggestions: TickerData[];
  onSuggestionClick?: (ticker: TickerData) => void;
}

export default function TickerSuggestions({ suggestions, onSuggestionClick }: TickerSuggestionsProps) {
  if (suggestions.length === 0) {
    return (
      <div className="min-h-[200px] animate-in fade-in duration-300">
        <h3 className="font-semibold text-sm mb-3">Suggestions</h3>
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
          Start typing to see ticker suggestions...
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-300">
      <h3 className="font-semibold text-sm mb-3">Suggestions</h3>
      <div className="space-y-2">
        {suggestions.slice(0, 5).map((ticker, index) => (
          <div
            key={ticker.symbol}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:shadow-sm transform hover:scale-[1.02] border border-transparent hover:border-gray-200"
            onClick={() => onSuggestionClick?.(ticker)}
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">{ticker.symbol}</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-xs text-gray-500">{ticker.exchange}</span>
              </div>
              <div className="text-xs text-gray-600 truncate mt-1">
                {ticker.companyName}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">
                ${ticker.price.toFixed(2)}
              </div>
              <div className={`text-xs font-medium ${ticker.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {ticker.change >= 0 ? '+' : ''}{ticker.change.toFixed(2)} ({ticker.changePercent >= 0 ? '+' : ''}{ticker.changePercent.toFixed(2)}%)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
