'use client';

import React from 'react';
import Header from '@/components/core/Header';
import AsInput from '../components/AsInput';
import RMDResponse from '@/components/core/RMDResponse';
import { rmdConversationData } from '@/data/rmdData';

export default function RmdResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header 
        variant="full" 
        homeHref="/smartSuggest"
        showOverlayPanel={false}
        panelContext="default"
      />

      <main className="max-w-6xl mx-auto p-4 md:p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Results</h2>
        {/* Search input zone at top of results */}
        <div className="bg-white rounded-lg border p-3 mb-6 shadow-sm">
          <AsInput 
            placeholder="Refine your question or search RMD topics" 
            suggestions={[
              { id: 's1', label: 'RMD deadlines and first-year options' },
              { id: 's2', label: 'How to calculate my RMD' },
              { id: 's3', label: 'RMD tax implications' },
              { id: 's4', label: 'Qualified charitable distributions (QCDs)' },
              { id: 's5', label: 'Setting up monthly RMD withdrawals' },
              { id: 's6', label: 'RMD rules for inherited IRAs' },
              { id: 's7', label: 'Withholding options for RMDs' },
              { id: 's8', label: 'Do Roth IRAs have RMDs?' },
            ]}
            enableDropdown
            showActions
            showVoiceIcon
          />
        </div>

        {/* Results section */}
        <RMDResponse rmdData={rmdConversationData} />
      </main>
    </div>
  );
}


