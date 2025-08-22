'use client';

import React from 'react';
import { AskData } from '@/data/responseModeData';
import ConversationalButtonWithIcon from './ConversationalButton';

interface AskSuggestionsProps {
  suggestions: string[];
  onSuggestionClick?: (suggestion: string) => void;
}

export default function AskSuggestions({ suggestions, onSuggestionClick }: AskSuggestionsProps) {
  if (suggestions.length === 0) {
    return (
      <div className="min-h-[200px]">
        <h3 className="font-semibold text-sm mb-3">Suggestions</h3>
        <div className="text-sm text-gray-500">
          Start typing to see question suggestions...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[200px]">
      <h3 className="font-semibold text-sm mb-3">Suggestions</h3>
      <div className="space-y-2">
        {suggestions.slice(0, 5).map((suggestion, index) => (
          <div key={index} onClick={() => onSuggestionClick?.(suggestion)}>
            <ConversationalButtonWithIcon>{suggestion}</ConversationalButtonWithIcon>
          </div>
        ))}
      </div>
    </div>
  );
}
