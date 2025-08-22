'use client';

import React from 'react';
import { TickerData } from '@/data/responseModeData';

interface NewsAndEventsProps {
  ticker?: TickerData;
}

export default function NewsAndEvents({ ticker }: NewsAndEventsProps) {
  if (!ticker) {
    return (
      <div className="min-h-[200px]">
        <h3 className="font-semibold text-sm mb-3">News & Events</h3>
        <div className="text-sm text-gray-500">
          Select a ticker to see news and events...
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-semibold text-sm mb-3">News & Events</h3>
      <div className="space-y-4">
        {/* News Section */}
        <div>
          <h4 className="text-xs font-medium text-gray-700 mb-2">Latest News</h4>
          <div className="space-y-3">
            {ticker.news.map((news, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-3">
                <div className="text-sm text-gray-900 mb-1 line-clamp-2">
                  {news.headline}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{news.source}</span>
                  <span>•</span>
                  <span>{news.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Section */}
        {ticker.events.length > 0 && (
          <div>
            <h4 className="text-xs font-medium text-gray-700 mb-2">Upcoming Events</h4>
            <div className="space-y-2">
              {ticker.events.map((event, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-blue-900 bg-blue-200 px-2 py-1 rounded">
                      {event.type}
                    </span>
                    <span className="text-xs text-blue-700">{event.date}</span>
                  </div>
                  <div className="text-sm text-blue-800">
                    {event.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Market Events (Static for now) */}
        <div>
          <h4 className="text-xs font-medium text-gray-700 mb-2">Market Events</h4>
          <div className="space-y-2">
            <div className="bg-orange-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-orange-900 bg-orange-200 px-2 py-1 rounded">
                  Ex-dividend
                </span>
                <span className="text-xs text-orange-700">Today</span>
              </div>
              <div className="text-sm text-orange-800">
                CMI ex-dividend date
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
