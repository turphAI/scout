'use client';

import React, { useState } from 'react';
import EnhancedSmartSuggestPanelV2 from '@/components/core/EnhancedSmartSuggestPanelV2';

export default function TestPanelClick() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log('Panel closing');
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Panel Click Test</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Click the "Open Panel" button below</li>
            <li>Click inside the panel - it should NOT close</li>
            <li>Click outside the panel - it should close</li>
            <li>Check the browser console for click event logs</li>
          </ol>
        </div>

        <button
          onClick={handleOpen}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Open Panel
        </button>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Test Area</h3>
          <p className="text-yellow-700 text-sm">
            This area is outside the panel. Clicking here should close the panel when it's open.
          </p>
        </div>

        {/* Panel */}
        {isOpen && (
          <EnhancedSmartSuggestPanelV2
            isOpen={isOpen}
            onClose={handleClose}
            mode="overlay"
            onSmartSuggestOpen={() => {}}
          />
        )}
      </div>
    </div>
  );
}
