'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, TrendingDown, Minus, ExternalLink, FileText, BarChart3, Settings } from 'lucide-react';
import { PortfolioQuestion, ConversationPill } from '@/data/portfolioQAData';
import SimpleQuote from './SimpleQuote';
import BACPositionsCard from './BACPositionsCard';
import AskSuggestions from './AskSuggestions';

interface PortfolioResponseProps {
  question: PortfolioQuestion;
  onBackToSearch: () => void;
  onConversationPillClick?: (pill: ConversationPill) => void;
}

export default function PortfolioResponse({ question, onBackToSearch, onConversationPillClick }: PortfolioResponseProps) {
  const getChangeIcon = (changeType?: 'positive' | 'negative' | 'neutral') => {
    switch (changeType) {
      case 'positive':
        return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'negative':
        return <TrendingDown className="w-4 h-4 text-red-600" />;
      case 'neutral':
        return <Minus className="w-4 h-4 text-gray-600" />;
      default:
        return null;
    }
  };

  const getSearchIcon = (type: string) => {
    switch (type) {
      case 'report':
        return <FileText className="w-4 h-4" />;
      case 'tool':
        return <Settings className="w-4 h-4" />;
      case 'page':
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const handleConversationPillClick = (pill: ConversationPill) => {
    if (onConversationPillClick) {
      onConversationPillClick(pill);
    }
  };

  // Special handling for BAC profit question - show 3-column layout
  if (question.id === 'bac-profit') {
    return (
      <div className="space-y-6 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
        {/* 3-Column Layout for BAC Profit */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Simple Quote */}
          <div className="lg:col-span-1">
            <SimpleQuote 
              ticker={{
                symbol: "BAC",
                companyName: "Bank of America Corporation",
                exchange: "NYSE",
                price: 42.89,
                change: 0.11,
                changePercent: 0.26,
                news: [],
                events: []
              }}
            />
          </div>

          {/* Middle Column - BAC Positions */}
          <div className="lg:col-span-1">
            <BACPositionsCard />
          </div>

          {/* Right Column - Related Questions */}
          <div className="lg:col-span-1">
            <div className="animate-in fade-in duration-300">
              <h3 className="font-semibold text-sm mb-3">Related questions</h3>
              <AskSuggestions 
                suggestions={[
                  "What's my total return percentage on Bank of America?",
                  "When did I first buy Bank of America stock?",
                  "How does my Bank of America performance compare to the S&P 500?",
                  "What were the dividend payments I received from Bank of America?",
                  "What other bank stocks do I own and how are they performing?"
                ]}
                onSuggestionClick={(suggestion) => console.log('Suggestion clicked:', suggestion)}
                hideTitle={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
      {/* Header with back button */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBackToSearch}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Search
        </Button>
      </div>

      {/* Question */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-gray-900">
            {question.question}
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Answer */}
      <Card>
        <CardContent className="pt-6">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-base">
              {question.answer}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Supporting Data Summary */}
      {question.supportingData.summary && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Key Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-900 font-medium">
                {question.supportingData.summary}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Key Metrics */}
      {question.supportingData.metrics && question.supportingData.metrics.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">
              Key Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {question.supportingData.metrics.map((metric, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                    {getChangeIcon(metric.changeType)}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  {metric.change && (
                    <div className="text-sm text-gray-600">{metric.change}</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Detailed Information */}
      {question.supportingData.details && question.supportingData.details.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">
              Detailed Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {question.supportingData.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">{detail}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Position Details */}
      {question.supportingData.positions && question.supportingData.positions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">
              Key Positions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {question.supportingData.positions.map((position, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{position.symbol}</span>
                      <span className="text-sm text-gray-600">{position.name}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {position.allocation.toFixed(1)}% allocation • {position.performance}
                    </div>
                    {position.additionalInfo && (
                      <div className="text-xs text-blue-600 mt-1">{position.additionalInfo}</div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">
                      ${position.value.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search Suggestions */}
      {question.searchSuggestions && question.searchSuggestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">
              Related Pages & Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {question.searchSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="text-gray-600">
                    {getSearchIcon(suggestion.type)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {suggestion.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {suggestion.description}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Conversation Continuation Pills */}
      {question.conversationPills && question.conversationPills.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">
              Continue the Conversation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {question.conversationPills.map((pill, index) => (
                <button
                  key={index}
                  onClick={() => handleConversationPillClick(pill)}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                >
                  {pill.text}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Context Badge */}
      <div className="flex justify-center">
        <Badge variant="secondary" className="text-xs">
          {question.context === 'portfolio-summary' ? 'Portfolio Summary' : 'Portfolio Positions'}
        </Badge>
      </div>
    </div>
  );
}
