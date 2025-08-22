'use client';

import React from 'react';

interface AnswerDisplayProps {
  answer?: string;
  query?: string;
}

export default function AnswerDisplay({ answer, query }: AnswerDisplayProps) {
  if (!answer && !query) {
    return (
      <div className="min-h-[200px]">
        <h3 className="font-semibold text-sm mb-3">Answer</h3>
        <div className="text-sm text-gray-500">
          This is where the answer will display. Based on the user typing and when we get to 10 characters. Before that we only show a placeholder note.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[200px]">
      <h3 className="font-semibold text-sm mb-3">Answer</h3>
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        {query && (
          <div className="mb-3">
            <div className="text-xs text-gray-500 mb-1">Query:</div>
            <div className="text-sm font-medium text-gray-900">{query}</div>
          </div>
        )}
        {answer && (
          <div>
            <div className="text-xs text-gray-500 mb-2">Answer:</div>
            <div className="text-sm text-gray-700 leading-relaxed">
              {answer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
