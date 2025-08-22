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
      <div className="min-h-[200px]">
        <h3 className="font-semibold text-sm mb-3">Suggestions</h3>
        <div className="text-sm text-gray-500">
          Start typing to see ticker suggestions...
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-semibold text-sm mb-3">Suggestions</h3>
      <div className="space-y-2">
        {suggestions.slice(0, 5).map((ticker, index) => (
          <div
            key={ticker.symbol}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            onClick={() => onSuggestionClick?.(ticker)}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">{ticker.symbol}</span>
              </div>
              <div className="text-xs text-gray-600 truncate">
                {ticker.companyName} ({ticker.exchange})
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">
                ${ticker.price.toFixed(2)}
              </div>
              <div className={`text-xs ${ticker.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {ticker.change >= 0 ? '+' : ''}{ticker.change.toFixed(2)} ({ticker.changePercent >= 0 ? '+' : ''}{ticker.changePercent.toFixed(2)}%)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
