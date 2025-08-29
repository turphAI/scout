'use client';

import React from 'react';
import ConversationalButtonWithIcon from './ConversationalButton';

interface AskSuggestionsProps {
  suggestions: string[];
  onSuggestionClick?: (suggestion: string) => void;
}

export default function AskSuggestions({ suggestions, onSuggestionClick }: AskSuggestionsProps) {
  if (suggestions.length === 0) {
    return (
      <div className="min-h-[200px] animate-in fade-in duration-300">
        <h3 className="font-semibold text-sm mb-3">Suggestions</h3>
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
          Start typing to see question suggestions...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[200px] animate-in fade-in duration-300">
      <h3 className="font-semibold text-sm mb-3">Suggestions</h3>
      <div className="space-y-2">
        {suggestions.slice(0, 5).map((suggestion, index) => (
          <div 
            key={index} 
            onClick={() => onSuggestionClick?.(suggestion)}
            className="transform transition-all duration-200 hover:scale-[1.02]"
            style={{
              animationDelay: `${index * 75}ms`
            }}
          >
            <ConversationalButtonWithIcon>{suggestion}</ConversationalButtonWithIcon>
          </div>
        ))}
      </div>
    </div>
  );
}
