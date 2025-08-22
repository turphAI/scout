'use client';

import React, { useState, useRef } from 'react';
import { X, Sparkles, AudioLines, PanelRight, PanelTop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import EnhancedInputV2 from './EnhancedInputV2';
import Quote from './Quote';
import ConversationalButtonWithIcon from './ConversationalButton';
import StockResponse from './StockResponse';
import TickerSuggestions from './TickerSuggestions';
import SimpleQuote from './SimpleQuote';
import NewsAndEvents from './NewsAndEvents';
import AskSuggestions from './AskSuggestions';
import AnswerDisplay from './AnswerDisplay';
import Resources from './Resources';
import { quantumQuotes } from '@/data/quantumQuotes';
import { getStockData } from '@/data/stockData';
import { filterTickerData, TickerData, filterAskData, AskData } from '@/data/responseModeData';

interface EnhancedSmartSuggestPanelV2Props {
  isOpen: boolean;
  onClose: () => void;
  onSmartSuggestOpen?: () => void;
  mode: 'overlay' | 'sidecar';
  isRightPanel?: boolean;
  onTogglePanel?: () => void;
  onModeChange?: (mode: 'overlay' | 'sidecar') => void;
}

export default function EnhancedSmartSuggestPanelV2({
  isOpen,
  onClose,
  onSmartSuggestOpen,
  mode,
  isRightPanel: externalIsRightPanel,
  onModeChange
}: EnhancedSmartSuggestPanelV2Props) {
  console.log('EnhancedSmartSuggestPanelV2 rendered with mode:', mode);
  // Use external state if provided, otherwise use internal state
  const isRightPanel = externalIsRightPanel !== undefined ? externalIsRightPanel : false;
  
  // State for handling panel states
  const [panelState, setPanelState] = useState<'overview' | 'suggest' | 'conversation'>('overview');
  const [responseMode, setResponseMode] = useState<'ticker' | 'ask'>('ticker');
  const [inputValue, setInputValue] = useState('');
  
  // State for ticker mode data
  const [filteredTickerData, setFilteredTickerData] = useState<TickerData[]>([]);
  const [selectedTicker, setSelectedTicker] = useState<TickerData | undefined>();
  
  // State for ask mode data
  const [filteredAskData, setFilteredAskData] = useState<AskData[]>([]);
  const [selectedAskData, setSelectedAskData] = useState<AskData | undefined>();
  const [currentQuery, setCurrentQuery] = useState<string>('');
  
  // State for selected stock data
  const [selectedStockData, setSelectedStockData] = useState<ReturnType<typeof getStockData> | null>(null);
  
  // Ref for the panel element
  const panelRef = useRef<HTMLDivElement>(null);
  
  // Note: Click outside detection is now handled by the backdrop overlay
  // This approach is more reliable than document event listeners
  
  if (!isOpen) {
    return null;
  }

  // Handle input submission
  const handleInputSubmit = (value: string) => {
    const trimmedValue = value.trim();
    
    // Clear input for all searches
    setInputValue('');
    
    // Check if the input matches any supported stock
    const stockData = getStockData(trimmedValue);
    
    if (stockData) {
      setSelectedStockData(stockData);
      setPanelState('conversation');
    } else {
      // Handle other searches
      console.log('Search submitted:', value);
      // You can add additional logic here for handling other searches
    }
  };

  // Handle input change for reactive filtering
  const handleInputChange = (value: string) => {
    setInputValue(value);
    setCurrentQuery(value);
    
    if (panelState === 'suggest') {
      if (responseMode === 'ticker') {
        if (value.trim() === '') {
          setFilteredTickerData([]);
          setSelectedTicker(undefined);
        } else {
          const filtered = filterTickerData(value);
          setFilteredTickerData(filtered);
          // Auto-select first result if available
          setSelectedTicker(filtered.length > 0 ? filtered[0] : undefined);
        }
      } else if (responseMode === 'ask') {
        if (value.trim() === '') {
          setFilteredAskData([]);
          setSelectedAskData(undefined);
        } else {
          const filtered = filterAskData(value);
          setFilteredAskData(filtered);
          // Auto-select first result if available
          setSelectedAskData(filtered.length > 0 ? filtered[0] : undefined);
        }
      }
    }
  };

  // Handle back to search
  const handleBackToSearch = () => {
    setPanelState('overview');
    setInputValue('');
    setSelectedStockData(null);
  };

  // Handle mode switching
  const handleModeSwitch = (mode: 'ticker' | 'ask') => {
    setResponseMode(mode);
    setPanelState('overview');
    setInputValue('');
    setCurrentQuery('');
    setFilteredTickerData([]);
    setSelectedTicker(undefined);
    setFilteredAskData([]);
    setSelectedAskData(undefined);
  };

  // Handle ticker suggestion click
  const handleTickerSuggestionClick = (ticker: TickerData) => {
    setSelectedTicker(ticker);
  };

  // Handle ask suggestion click
  const handleAskSuggestionClick = (suggestion: string) => {
    // Find the ask data that contains this suggestion
    const askData = filteredAskData.find(data => 
      data.suggestions.includes(suggestion)
    );
    if (askData) {
      setSelectedAskData(askData);
      setCurrentQuery(suggestion);
    }
  };

  return (
    <>
      {/* Backdrop overlay for click outside detection */}
      {mode === 'overlay' && isOpen && (
        <div 
          className="fixed inset-0 z-40"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
          onClick={() => {
            console.log('Backdrop clicked - closing panel');
            onClose();
          }}
        />
      )}
      
      <div 
        ref={panelRef}
        className={`${
          mode === 'overlay' 
            ? `fixed z-50 mx-1 bg-white rounded-2xl ${
                isRightPanel 
                  ? 'top-0 right-0 bottom-0 w-96' 
                  : 'top-12 left-0 right-0 max-h-[calc(100vh-6rem)]'
              }`
            : `w-full h-full bg-white ${
                isRightPanel 
                  ? 'lg:w-96' 
                  : 'w-full'
              }`
        }`}
        style={mode === 'overlay' ? { border: '1px solid #cf89e1' } : {}}
      >
      {/* Content container - height matches content with bottom padding for fixed input */}
      <div className="w-full h-full px-6 py-8 pb-40 overflow-y-auto relative">
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
              
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-gray-100"
                onClick={() => {
                  if (mode === 'overlay') {
                    onModeChange?.('sidecar');
                  } else {
                    onModeChange?.('overlay');
                  }
                }}
              >
                {mode === 'overlay' ? (
                  <PanelRight className="h-4 w-4 text-gray-600" />
                ) : (
                  <PanelTop className="h-4 w-4 text-gray-600" />
                )}
              </Button>
              
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

        {/* Content sections - conditional rendering */}
        {panelState === 'conversation' ? (
          <div className="space-y-4">
            {/* Back button */}
            <div className="flex items-center gap-2 mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBackToSearch}
                className="text-gray-600 hover:text-gray-900"
              >
                ← Back to search
              </Button>
            </div>
            
            {/* Stock Response */}
            <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
              {selectedStockData && (
                <StockResponse
                  stockData={selectedStockData.stockData}
                  newsItems={selectedStockData.newsItems}
                  relatedStocks={selectedStockData.relatedStocks}
                  companyDescription={selectedStockData.companyDescription}
                />
              )}
            </div>
          </div>
        ) : panelState === 'suggest' ? (
          <div className={mode === 'sidecar' ? 'space-y-8' : 'grid grid-cols-1 lg:grid-cols-3 gap-8'}>
            {responseMode === 'ticker' ? (
              <>
                <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
                  <TickerSuggestions 
                    suggestions={filteredTickerData}
                    onSuggestionClick={handleTickerSuggestionClick}
                  />
                </div>
                <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
                  <SimpleQuote ticker={selectedTicker} />
                </div>
                <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
                  <NewsAndEvents ticker={selectedTicker} />
                </div>
              </>
            ) : (
              <>
                <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
                  <AskSuggestions 
                    suggestions={selectedAskData?.suggestions || filteredAskData.flatMap(data => data.suggestions)}
                    onSuggestionClick={handleAskSuggestionClick}
                  />
                </div>
                <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
                  <AnswerDisplay 
                    answer={selectedAskData?.answer}
                    query={currentQuery}
                  />
                </div>
                <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
                  <Resources 
                    resources={selectedAskData?.resources || []}
                  />
                </div>
              </>
            )}
          </div>
        ) : (
          <div className={mode === 'sidecar' ? 'space-y-8' : 'grid grid-cols-1 lg:grid-cols-3 gap-8'}>
            {/* Recent quotes section */}
            <div>
              <h3 className="font-semibold text-sm mb-3">Recent quotes</h3>
              <div className="space-y-2">
                {quantumQuotes.slice(0, 3).map((quote, index) => (
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

            {/* Your day section */}
            <div>
              <h3 className="font-semibold text-sm mb-3">Your day</h3>
              
              {/* Short content slot */}
              <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  It appears to be a mixed day for the markets, with several factors influencing different sectors.
                </p>
              </div>
              
              {/* Tighter alerts */}
              <div className="space-y-1">
                <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium text-blue-900">Assistant tips</span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                </div>
                
                <div className="flex items-center justify-between py-2 px-3 bg-orange-50 rounded-lg">
                  <span className="text-sm font-medium text-orange-900">Portfolio insights</span>
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">5</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Fixed EnhancedInputV2 at bottom */}
      <div className={`${
        mode === 'overlay' 
          ? 'absolute bottom-0 left-0 right-0 px-6 pt-2 pb-6 bg-white rounded-b-2xl'
          : 'absolute bottom-0 right-0 w-[368px] py-6 bg-white border-t border-gray-200'
      }`}>
        <EnhancedInputV2 
          onSmartSuggestOpen={onSmartSuggestOpen}
          className={`${mode === 'overlay' ? 'w-3/4 mx-auto' : 'w-full'}`}
          hideBadge={true}
          onSubmit={handleInputSubmit}
          value={inputValue}
          onChange={handleInputChange}
          mode={mode}
          responseMode={responseMode}
          onModeSwitch={handleModeSwitch}
          onInputFocus={() => {
            if (panelState === 'overview') {
              setPanelState('suggest');
            }
          }}
        />
      </div>
    </div>
    </>
  );
}
