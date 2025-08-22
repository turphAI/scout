'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Building2, Users, Calendar, MapPin, Globe } from 'lucide-react';

interface StockData {
  ticker: string;
  companyName: string;
  currentPrice: string;
  dailyChange: string;
  dailyChangePercent: string;
  afterHoursPrice?: string;
  afterHoursChange?: string;
  previousClose: string;
  open: string;
  high: string;
  low: string;
  marketCap: string;
  volume: string;
  avgVolume: string;
  peRatio: string;
  dividend: string;
  dividendYield: string;
  exDividendDate: string;
  eps: string;
  beta: string;
  sharesOutstanding: string;
  employees: string;
  ceo: string;
  founded: string;
  headquarters: string;
  sector: string;
  website: string;
}

interface NewsItem {
  source: string;
  timeAgo: string;
  headline: string;
}

interface RelatedStock {
  ticker: string;
  companyName: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

interface StockResponseProps {
  stockData: StockData;
  newsItems: NewsItem[];
  relatedStocks: RelatedStock[];
  companyDescription: string;
}

export default function StockResponse({ 
  stockData, 
  newsItems, 
  relatedStocks, 
  companyDescription 
}: StockResponseProps) {
  const isPositiveChange = stockData.dailyChangePercent.startsWith('+');
  const isAfterHoursPositive = stockData.afterHoursChange?.startsWith('+');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Navigation */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <span className="hover:text-blue-600 cursor-pointer">← Home</span>
        <span>/</span>
        <span className="font-medium">{stockData.ticker}:NASDAQ</span>
      </div>

      {/* Main Stock Info */}
      <Card className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{stockData.companyName}</h1>
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold text-gray-900">{stockData.currentPrice}</span>
              <div className="flex items-center gap-1">
                {isPositiveChange ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
                <span className={`text-lg font-medium ${isPositiveChange ? 'text-green-600' : 'text-red-600'}`}>
                  {stockData.dailyChangePercent} ({stockData.dailyChange})
                </span>
                <span className="text-sm text-gray-600">Today</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Closed: Aug 14 4:05:59 PM UTC-4 USD
            </div>
          </div>
          
          {stockData.afterHoursPrice && (
            <div className="text-right">
              <div className="text-lg font-semibold">{stockData.afterHoursPrice}</div>
              <div className="flex items-center gap-1 justify-end">
                {isAfterHoursPositive ? (
                  <TrendingUp className="h-3 w-3 text-green-600" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-600" />
                )}
                <span className={`text-sm ${isAfterHoursPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stockData.afterHoursChange}
                </span>
              </div>
              <div className="text-xs text-gray-600">4:05 PM</div>
            </div>
          )}
        </div>

        {/* Chart Placeholder */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                Area
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                Compare
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Building2 className="h-3 w-3" />
                Technical Indicator
              </Badge>
            </div>
          </div>
          
          {/* Simple Chart Visualization */}
          <div className="h-32 bg-white rounded border relative">
            <div className="absolute inset-0 flex items-end justify-between px-4 pb-2">
              <div className="w-1 bg-red-500 rounded-t" style={{ height: '60%' }}></div>
              <div className="w-1 bg-red-500 rounded-t" style={{ height: '20%' }}></div>
              <div className="w-1 bg-red-500 rounded-t" style={{ height: '40%' }}></div>
              <div className="w-1 bg-red-500 rounded-t" style={{ height: '80%' }}></div>
              <div className="w-1 bg-red-500 rounded-t" style={{ height: '70%' }}></div>
              <div className="w-1 bg-red-500 rounded-t" style={{ height: '65%' }}></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
              <span>12:00 PM</span>
              <span>3:00 PM</span>
              <span>6:00 PM</span>
            </div>
          </div>
          
          {/* Time Range Buttons */}
          <div className="flex gap-2 mt-4">
            {['1D', '5D', '1M', '6M', 'YTD', '1Y', '5Y', 'MAX'].map((period) => (
              <button
                key={period}
                className={`px-3 py-1 text-sm rounded ${
                  period === '1D' 
                    ? 'bg-gray-200 text-gray-900' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {period}
              </button>
            ))}
            <span className="ml-auto text-sm text-gray-600">Zoom: 1x</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b">
          {['Overview', 'Earnings', 'Financials'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                tab === 'Overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </Card>

      {/* Financial Metrics */}
      <Card className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
          <div>
            <div className="text-gray-600">Open</div>
            <div className="font-medium">{stockData.open}</div>
          </div>
          <div>
            <div className="text-gray-600">High</div>
            <div className="font-medium">{stockData.high}</div>
          </div>
          <div>
            <div className="text-gray-600">Low</div>
            <div className="font-medium">{stockData.low}</div>
          </div>
          <div>
            <div className="text-gray-600">Mkt. cap</div>
            <div className="font-medium">{stockData.marketCap}</div>
          </div>
          <div>
            <div className="text-gray-600">Avg. vol.</div>
            <div className="font-medium">{stockData.avgVolume}</div>
          </div>
          <div>
            <div className="text-gray-600">Volume</div>
            <div className="font-medium">{stockData.volume}</div>
          </div>
          <div>
            <div className="text-gray-600">Dividend</div>
            <div className="font-medium">{stockData.dividendYield}</div>
          </div>
          <div>
            <div className="text-gray-600">Quarterly dividend</div>
            <div className="font-medium">{stockData.dividend}</div>
          </div>
          <div>
            <div className="text-gray-600">Ex dividend date</div>
            <div className="font-medium">{stockData.exDividendDate}</div>
          </div>
          <div>
            <div className="text-gray-600">P/E ratio</div>
            <div className="font-medium">{stockData.peRatio}</div>
          </div>
          <div>
            <div className="text-gray-600">52-wk high</div>
            <div className="font-medium">$260.09</div>
          </div>
          <div>
            <div className="text-gray-600">52-wk low</div>
            <div className="font-medium">$169.21</div>
          </div>
          <div>
            <div className="text-gray-600">EPS</div>
            <div className="font-medium">{stockData.eps}</div>
          </div>
          <div>
            <div className="text-gray-600">Beta</div>
            <div className="font-medium">{stockData.beta}</div>
          </div>
          <div>
            <div className="text-gray-600">Shares outstanding</div>
            <div className="font-medium">{stockData.sharesOutstanding}</div>
          </div>
          <div>
            <div className="text-gray-600">No. of employees</div>
            <div className="font-medium">{stockData.employees}</div>
          </div>
        </div>
      </Card>

      {/* News Stories */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">News stories</h3>
        <p className="text-sm text-gray-600 mb-4">From sources across the web</p>
        <div className="space-y-4">
          {newsItems.map((news, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-blue-600">{news.source}</span>
                <span className="text-sm text-gray-500">{news.timeAgo}</span>
              </div>
              <h4 className="text-sm font-medium text-gray-900">{news.headline}</h4>
            </div>
          ))}
        </div>
      </Card>

      {/* Related Stocks */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Related stocks</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {relatedStocks.map((stock) => (
            <div key={stock.ticker} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-medium text-sm">{stock.ticker}</div>
                  <div className="text-xs text-gray-600">{stock.companyName}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm">{stock.price}</div>
                  <div className={`text-xs ${stock.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {stock.changePercent}
                  </div>
                </div>
              </div>
              {/* Simple trend line */}
              <div className="h-8 bg-gray-100 rounded flex items-end justify-between px-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-t ${
                      stock.isPositive ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{ height: `${Math.random() * 60 + 20}%` }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Company Profile */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {companyDescription}
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">CEO:</span>
              <span className="text-sm font-medium">{stockData.ceo}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Employees:</span>
              <span className="text-sm font-medium">{stockData.employees}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Founded:</span>
              <span className="text-sm font-medium">{stockData.founded}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Headquarters:</span>
              <span className="text-sm font-medium">{stockData.headquarters}</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Sector:</span>
              <span className="text-sm font-medium">{stockData.sector}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">Website:</span>
              <span className="text-sm font-medium text-blue-600">{stockData.website}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
