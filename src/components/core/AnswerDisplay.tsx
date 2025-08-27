'use client';

import React from 'react';
import { getRmdAutosuggest } from '@/data/responseModeData';

interface AnswerDisplayProps {
  answer?: string;
  query?: string;
}

export default function AnswerDisplay({ answer, query }: AnswerDisplayProps) {
  // Get autosuggest text for RMD queries
  const autosuggestText = query ? getRmdAutosuggest(query) : null;
  const displayQuery = autosuggestText || query;
  
  if (!answer) {
    return (
      <div className="min-h-[200px] animate-in fade-in duration-300">
        <h3 className="font-semibold text-sm mb-3">Answer</h3>
      </div>
    );
  }

  return (
    <div className="min-h-[200px] animate-in fade-in duration-300">
      <h3 className="font-semibold text-sm mb-3">Answer</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200">
        {displayQuery && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-200">
            <div className="text-xs text-blue-600 font-medium mb-1">Query:</div>
            <div className="text-sm font-medium text-blue-900">{displayQuery}</div>
          </div>
        )}
        {answer && (
          <div className="animate-in slide-in-from-bottom-2 duration-300">
            <div className="text-xs text-gray-500 mb-2 font-medium">Answer:</div>
            <div className="text-sm text-gray-700 leading-relaxed">
              {answer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
