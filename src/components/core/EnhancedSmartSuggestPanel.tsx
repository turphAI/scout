'use client';

import React from 'react';
import { X, Sparkles, AudioLines, PanelRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import HeaderInput from './HeaderInput';
import Quote from './Quote';
import ConversationalButtonWithIcon from './ConversationalButton';
import { quantumQuotes } from '@/data/quantumQuotes';

interface EnhancedSmartSuggestPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSmartSuggestOpen?: () => void;
}

export default function EnhancedSmartSuggestPanel({
  isOpen,
  onClose,
  onSmartSuggestOpen
}: EnhancedSmartSuggestPanelProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed top-12 left-0 right-0 z-50 bg-white rounded-2xl mx-1"
      style={{ border: '1px solid #cf89e1' }}
    >
      {/* Content container - height matches content */}
      <div className="w-full px-6 py-8">
        {/* Action row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div 
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#cf89e1' }}
            >
              <Sparkles className="h-3 w-3 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">Scout</span>
          </div>
          
          {/* Menubar */}
          <TooltipProvider>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    <AudioLines className="h-4 w-4 text-gray-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Voice input</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    <PanelRight className="h-4 w-4 text-gray-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Panel right</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onClose}
                    className="h-8 w-8 p-0 rounded-full border-gray-300 hover:bg-gray-50"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Close</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>

        {/* HeaderInput component */}
        <div className="mb-8">
          <HeaderInput 
            onSmartSuggestOpen={onSmartSuggestOpen}
            placeholder="What would you like to know?"
            className="w-full"
            hideBadge={true}
          />
        </div>

        {/* Content sections layout - planning for future sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent quotes section */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Recent quotes</h3>
            <div className="space-y-2">
              {quantumQuotes.map((quote, index) => (
                <Quote
                  key={index}
                  ticker={quote.ticker}
                  companyName={quote.companyName}
                  percentageChange={quote.percentageChange}
                  sharePrice={quote.sharePrice}
                />
              ))}
            </div>
          </div>

          {/* Past discussions section */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Past discussions</h3>
            <div className="space-y-2">
              <ConversationalButtonWithIcon>How do I fund my new account?</ConversationalButtonWithIcon>
              <ConversationalButtonWithIcon>What are the risks of margin trading?</ConversationalButtonWithIcon>
              <ConversationalButtonWithIcon>Compare ETFs vs mutual funds</ConversationalButtonWithIcon>
              <ConversationalButtonWithIcon>Can I trade options in my IRA?</ConversationalButtonWithIcon>
              <ConversationalButtonWithIcon>Where can I find tax documents?</ConversationalButtonWithIcon>
            </div>
          </div>

          {/* Notices section - placeholder */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Notices</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-900">Did you know?</span>
                  </div>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  Helpful features to get the most from your assistant.
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium text-orange-900">Insights</span>
                  </div>
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">5</span>
                </div>
                <p className="text-sm text-orange-700 mt-2">
                  Summaries and trends from your account activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
