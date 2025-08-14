'use client';

import React from 'react';

interface QuoteProps {
  ticker: string;
  companyName: string;
  percentageChange: string;
  sharePrice: string;
}

// Function to get company logo/initials
const getCompanyLogo = (ticker: string) => {
  const logoMap: { [key: string]: string } = {
    'IONQ': 'IQ',
    'RGTI': 'RC',
    'QUBT': 'QC',
    'IBM': 'IBM',
    'GOOGL': 'G'
  };
  
  return logoMap[ticker] || ticker.substring(0, 2).toUpperCase();
};

export default function Quote({ ticker, companyName, percentageChange, sharePrice }: QuoteProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-2">
      {/* Left section - company logo circle */}
      <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
        <span className="text-xs font-semibold text-gray-700">
          {getCompanyLogo(ticker)}
        </span>
      </div>
      
      {/* Middle section - ticker and company name */}
      <div className="flex-1 ml-3">
        <div className="font-medium text-sm text-gray-900">{ticker}</div>
        <div className="text-xs text-gray-600">{companyName}</div>
      </div>
      
      {/* Right section - percentage change and share price */}
      <div className="text-right">
        <div className={`font-medium text-sm ${
          percentageChange.startsWith('+') ? 'text-green-600' : 'text-red-600'
        }`}>
          {percentageChange}
        </div>
        <div className="text-xs text-gray-600">{sharePrice}</div>
      </div>
    </div>
  );
}
