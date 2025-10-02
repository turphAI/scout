'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Play, Calculator, BookOpen, ExternalLink } from 'lucide-react';
import ConversationalButtonWithIcon from './ConversationalButton';
import { RMDConversationData, RMDResource } from '@/data/rmdData';

interface RMDResponseProps {
  rmdData: RMDConversationData;
}

export default function RMDResponse({ rmdData }: RMDResponseProps) {
  type SearchResult = {
    title: string;
    snippet: string;
    source: string;
    url?: string;
  };

  const topResults: SearchResult[] = [
    {
      title: 'Required minimum distribution (RMD) – Overview',
      snippet: 'Starting when you\'re age 73, an RMD is the minimum amount you must withdraw from tax‑deferred retirement accounts each year.',
      source: 'Knowledge Base',
    },
    {
      title: 'RMD deadlines and first‑year options',
      snippet: 'If it\'s your first RMD, you may delay until April 1 of the following year; subsequent RMDs are due by December 31 each year.',
      source: 'Help Center',
    },
    {
      title: 'RMD calculation method',
      snippet: 'Divide your prior year\'s December 31 balance by the IRS life expectancy factor to determine this year\'s RMD.',
      source: 'Investor Education',
    },
    {
      title: 'RMD tax considerations',
      snippet: 'RMDs are taxed as ordinary income and can affect Social Security taxation and Medicare IRMAA brackets.',
      source: 'Tax Planning',
    },
    {
      title: 'Exceptions and special cases',
      snippet: 'Roth IRAs do not require RMDs during the owner\'s lifetime; inherited accounts follow different rules.',
      source: 'Guides',
    },
  ];

  const moreResults: SearchResult[] = Array.from({ length: 20 }).map((_, i) => ({
    title: `RMD topic ${i + 1}: guidance and examples`,
    snippet: 'Short summary explaining the topic with links to calculators, forms, and planning steps.',
    source: 'Search',
  }));

  const ResultItem = ({ item }: { item: SearchResult }) => (
    <div className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex items-start gap-2">
        <FileText className="h-4 w-4 text-gray-500 mt-1" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-blue-700 hover:underline">
              {item.title}
            </h4>
            <ExternalLink className="h-3 w-3 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600 mt-1">{item.snippet}</p>
          <div className="text-xs text-gray-500 mt-1">{item.source}</div>
        </div>
      </div>
    </div>
  );
  const getResourceIcon = (type: RMDResource['type']) => {
    switch (type) {
      case 'video':
        return <Play className="h-4 w-4" />;
      case 'calculator':
        return <Calculator className="h-4 w-4" />;
      case 'guide':
        return <BookOpen className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getResourceColor = (type: RMDResource['type']) => {
    switch (type) {
      case 'video':
        return 'bg-red-100 text-red-600';
      case 'calculator':
        return 'bg-green-100 text-green-600';
      case 'guide':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };



  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Navigation */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <span className="hover:text-blue-600 cursor-pointer">← Home</span>
        <span>/</span>
        <span className="font-medium">Required Minimum Distribution</span>
      </div>

      {/* Main RMD Info Card */}
      <Card className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Required Minimum Distribution (RMD)</h1>
          <div className="text-lg text-gray-700 leading-relaxed mb-4">
            {rmdData.shortAnswer}
          </div>
        </div>
      </Card>

      {/* Detailed Answer Card */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Detailed Information</h3>
        <div className="prose prose-sm max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {rmdData.detailedAnswer}
          </div>
        </div>
      </Card>

      {/* Top Results (traditional list) */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Top results</h3>
        <div className="space-y-3">
          {topResults.map((item, idx) => (
            <ResultItem key={idx} item={item} />
          ))}
        </div>
      </Card>

      {/* Related Questions Card */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Related Questions</h3>
        <div className="space-y-3">
          {rmdData.relatedQuestions.map((question, index) => (
            <div key={index}>
              <ConversationalButtonWithIcon allowWrapping={true}>
                {question.question}
              </ConversationalButtonWithIcon>
            </div>
          ))}
        </div>
      </Card>

      {/* More Results below related questions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">More results</h3>
        <div className="space-y-3">
          {moreResults.map((item, idx) => (
            <ResultItem key={idx} item={item} />
          ))}
        </div>
      </Card>

      {/* Quick Actions Card */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            variant="outline" 
            className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-blue-50"
          >
            <Calculator className="h-6 w-6 text-blue-600" />
            <div className="text-center">
              <div className="font-medium">Calculate RMD</div>
              <div className="text-xs text-gray-500">Use our calculator</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-green-50"
          >
            <BookOpen className="h-6 w-6 text-green-600" />
            <div className="text-center">
              <div className="font-medium">RMD Guide</div>
              <div className="text-xs text-gray-500">Complete guide</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-purple-50"
          >
            <FileText className="h-6 w-6 text-purple-600" />
            <div className="text-center">
              <div className="font-medium">Tax Planning</div>
              <div className="text-xs text-gray-500">Tax strategies</div>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
}
