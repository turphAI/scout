'use client';

import React from 'react';
import StockResponse from '@/components/core/StockResponse';
import { appleStockData, appleNewsItems, relatedStocks, appleCompanyDescription } from '@/data/appleStockData';

export default function StockDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Stock Information Mock Response</h1>
          <p className="text-gray-600">
            This demonstrates how the StockResponse component can be used as a mock response in your conversational interface.
          </p>
        </div>
        
        <StockResponse
          stockData={appleStockData}
          newsItems={appleNewsItems}
          relatedStocks={relatedStocks}
          companyDescription={appleCompanyDescription}
        />
      </div>
    </div>
  );
}
