'use client';

import React from 'react';
import StockResponse from '@/components/core/StockResponse';
import BACPositionsCard from '@/components/core/BACPositionsCard';
import { bankOfAmericaStockData, bankOfAmericaNewsItems, bankOfAmericaRelatedStocks, bankOfAmericaCompanyDescription } from '@/data/stockData';

export default function BACDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">BAC (Bank of America) Integration Demo</h1>
          <p className="text-gray-600">
            This demonstrates BAC integration in the panel search system, including stock information and positions display.
          </p>
        </div>
        
        {/* BAC Stock Information */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Stock Information</h2>
          <StockResponse
            stockData={bankOfAmericaStockData}
            newsItems={bankOfAmericaNewsItems}
            relatedStocks={bankOfAmericaRelatedStocks}
            companyDescription={bankOfAmericaCompanyDescription}
          />
        </div>

        {/* BAC Positions Card */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">BAC Positions Display</h2>
          <BACPositionsCard />
        </div>

        {/* Integration Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Integration Status</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>BAC added to stockData.ts with complete company information</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>BAC added to mockTickerData in responseModeData.ts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>getStockData function updated to handle BAC queries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>BACPositionsCard component created for portfolio display</span>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded border">
            <h4 className="font-medium text-gray-900 mb-2">How to Test:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
              <li>Open the enhanced panel search (panelV2)</li>
              <li>Switch to &quot;Ticker&quot; mode</li>
              <li>Type &quot;BAC&quot;, &quot;Bank of America&quot;, or &quot;Bank of America Corporation&quot;</li>
              <li>The system should show BAC in suggestions and display stock information when selected</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
