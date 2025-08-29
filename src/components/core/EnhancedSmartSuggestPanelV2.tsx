'use client';

import React, { useState, useRef, useEffect } from 'react';
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
import RMDResponse from './RMDResponse';
import TickerSuggestions from './TickerSuggestions';
import SimpleQuote from './SimpleQuote';
import NewsAndEvents from './NewsAndEvents';
import AskSuggestions from './AskSuggestions';
import AnswerDisplay from './AnswerDisplay';
import Resources from './Resources';
import { quantumQuotes } from '@/data/quantumQuotes';
import { getStockData } from '@/data/stockData';
import { filterTickerData, TickerData, filterAskData, AskData } from '@/data/responseModeData';
import { rmdConversationData } from '@/data/rmdData';

interface EnhancedSmartSuggestPanelV2Props {
  isOpen: boolean;
  onClose: () => void;
  onSmartSuggestOpen?: () => void;
  mode: 'overlay' | 'sidecar';
  isRightPanel?: boolean;
  onTogglePanel?: () => void;
  onModeChange?: (mode: 'overlay' | 'sidecar') => void;
  context?: 'portfolio-summary' | 'portfolio-positions' | 'default';
  title?: string;
}

export default function EnhancedSmartSuggestPanelV2({
  isOpen,
  onClose,
  onSmartSuggestOpen,
  mode,
  isRightPanel: externalIsRightPanel,
  onModeChange,
  context = 'default',
  title = 'Scout'
}: EnhancedSmartSuggestPanelV2Props) {
  // Use external state if provided, otherwise use internal state
  const isRightPanel = externalIsRightPanel !== undefined ? externalIsRightPanel : false;
  
  // State for handling panel states
  const [panelState, setPanelState] = useState<'overview' | 'suggest' | 'conversation'>('overview');
  const [responseMode, setResponseMode] = useState<'ticker' | 'ask'>('ticker');
  const [inputValue, setInputValue] = useState('');
  
  // Animation states
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  
  // State for ticker mode data
  const [filteredTickerData, setFilteredTickerData] = useState<TickerData[]>([]);
  const [selectedTicker, setSelectedTicker] = useState<TickerData | undefined>();
  
  // State for ask mode data
  const [filteredAskData, setFilteredAskData] = useState<AskData[]>([]);
  const [selectedAskData, setSelectedAskData] = useState<AskData | undefined>();
  const [currentQuery, setCurrentQuery] = useState<string>('');
  
  // State for selected stock data
  const [selectedStockData, setSelectedStockData] = useState<ReturnType<typeof getStockData> | null>(null);
  
  // State for RMD conversation
  const [showRMDResponse, setShowRMDResponse] = useState(false);
  
  // Ref for the panel element
  const panelRef = useRef<HTMLDivElement>(null);
  
  // Animation effects
  useEffect(() => {
    if (isOpen) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  }, [isOpen]);

  // Note: Click outside detection is now handled by the backdrop overlay
  // This approach is more reliable than document event listeners
  
  if (!isOpen) {
    return null;
  }

  // Handle input submission with animation
  const handleInputSubmit = async (value: string) => {
    const trimmedValue = value.trim();
    
    // Clear input for all searches
    setInputValue('');
    
    // Check if the input matches any supported stock
    const stockData = getStockData(trimmedValue);
    
    if (stockData) {
      setIsTransitioning(true);
      setSelectedStockData(stockData);
      setPanelState('conversation');
      
      // Smooth transition delay
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    } else if (responseMode === 'ask') {
      // Check if this is an RMD-related query
      const isRMDQuery = trimmedValue.toLowerCase().includes('rmd') || 
                        trimmedValue.toLowerCase().includes('required minimum distribution') ||
                        trimmedValue.toLowerCase().includes('required');
      
      if (isRMDQuery) {
        setIsTransitioning(true);
        setShowRMDResponse(true);
        setPanelState('conversation');
        
        // Smooth transition delay
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      } else {
        // Handle other ask searches
        console.log('Ask search submitted:', value);
      }
    } else {
      // Handle other searches
      console.log('Search submitted:', value);
    }
  };

  // Handle input change for reactive filtering with debouncing
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

  // Handle back to search with animation
  const handleBackToSearch = async () => {
    setIsTransitioning(true);
    setPanelState('overview');
    setInputValue('');
    setSelectedStockData(null);
    setShowRMDResponse(false);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Handle mode switching with animation
  const handleModeSwitch = async (mode: 'ticker' | 'ask') => {
    setIsTransitioning(true);
    setResponseMode(mode);
    setPanelState('overview');
    setInputValue('');
    setCurrentQuery('');
    setFilteredTickerData([]);
    setSelectedTicker(undefined);
    setFilteredAskData([]);
    setSelectedAskData(undefined);
    setSelectedStockData(null);
    setShowRMDResponse(false);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
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
          className="fixed inset-0 z-40 transition-opacity duration-300"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            opacity: fadeIn ? 1 : 0
          }}
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
                        ? `fixed z-50 mx-5 bg-white rounded-2xl transition-all duration-300 ${
                isRightPanel 
                  ? 'top-0 right-0 bottom-0 w-96' 
                  : 'top-12 left-0 right-0 max-h-[calc(100vh-6rem)]'
              }`
            : `w-full h-full bg-white transition-all duration-300 ${
                isRightPanel 
                  ? 'lg:w-96' 
                  : 'w-full'
              }`
        }`}
        style={{
          border: mode === 'overlay' ? '1px solid #cf89e1' : undefined,
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(10px)'
        }}
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
            <span className="text-lg font-semibold text-gray-900">{title}</span>
          </div>
          
          {/* Menubar */}
          <TooltipProvider>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-gray-100 transition-colors"
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
                className="h-8 w-8 p-0 hover:bg-gray-100 transition-colors"
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
                    className="h-8 w-8 p-0 rounded-full border-gray-300 hover:bg-gray-50 transition-colors"
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

        {/* Content sections - conditional rendering with animations */}
        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          {panelState === 'conversation' ? (
            <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
              {/* Back button */}
              <div className="flex items-center gap-2 mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBackToSearch}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ← Back to search
                </Button>
              </div>
              
              {/* Stock Response or RMD Response */}
              <div className="overflow-y-auto max-h-[calc(100vh-300px)]">
                {selectedStockData && (
                  <StockResponse
                    stockData={selectedStockData.stockData}
                    newsItems={selectedStockData.newsItems}
                    relatedStocks={selectedStockData.relatedStocks}
                    companyDescription={selectedStockData.companyDescription}
                  />
                )}
                {showRMDResponse && (
                  <RMDResponse rmdData={rmdConversationData} />
                )}
              </div>
            </div>
          ) : panelState === 'suggest' ? (
            <div className={`${mode === 'sidecar' ? 'space-y-8' : 'grid grid-cols-1 lg:grid-cols-3 gap-8'} animate-in slide-in-from-bottom-4 duration-300`}>
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
            <div className={`${mode === 'sidecar' ? 'space-y-8' : 'grid grid-cols-1 lg:grid-cols-3 gap-8'} animate-in slide-in-from-bottom-4 duration-300`}>
              {/* Context-aware content based on current page */}
              {context === 'portfolio-summary' && (
                <>
                  {/* Portfolio Summary specific content */}
                  <div className="animate-in slide-in-from-left-4 duration-300 delay-100">
                    <h3 className="font-semibold text-sm mb-3">Portfolio Overview</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-800 font-medium">Portfolio up 2.3% today</p>
                        <p className="text-xs text-green-600">Strong performance across tech holdings</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800 font-medium">Account rebalancing due</p>
                        <p className="text-xs text-blue-600">Consider reviewing allocation</p>
                      </div>
                    </div>
                  </div>

                  <div className="animate-in slide-in-from-left-4 duration-300 delay-200">
                    <h3 className="font-semibold text-sm mb-3">Portfolio Insights</h3>
                    <div className="space-y-2">
                      <ConversationalButtonWithIcon>How is my portfolio performing vs the market?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>What's driving today's gains?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>Should I rebalance my portfolio?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>What are my top performing holdings?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>How can I improve my diversification?</ConversationalButtonWithIcon>
                    </div>
                  </div>

                  <div className="animate-in slide-in-from-left-4 duration-300 delay-300">
                    <h3 className="font-semibold text-sm mb-3">Market Summary</h3>
                    <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        Markets showing resilience with tech sector leading gains. Your portfolio is outperforming the S&P 500 by 1.2%.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between py-2 px-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-blue-900">Portfolio alerts</span>
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-green-900">Performance insights</span>
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {context === 'portfolio-positions' && (
                <>
                  {/* Portfolio Positions specific content */}
                  <div className="animate-in slide-in-from-left-4 duration-300 delay-100">
                    <h3 className="font-semibold text-sm mb-3">Position Analysis</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-800 font-medium">BAC showing strong momentum</p>
                        <p className="text-xs text-orange-600">Up 3.2% today, consider profit taking</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-800 font-medium">QQQ approaching resistance</p>
                        <p className="text-xs text-red-600">Watch for potential pullback</p>
                      </div>
                    </div>
                  </div>

                  <div className="animate-in slide-in-from-left-4 duration-300 delay-200">
                    <h3 className="font-semibold text-sm mb-3">Position Insights</h3>
                    <div className="space-y-2">
                      <ConversationalButtonWithIcon>Which positions should I consider selling?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>What's the outlook for my tech holdings?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>Should I add to my QQQ position?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>How are my individual stocks performing?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>What's my cost basis vs current prices?</ConversationalButtonWithIcon>
                    </div>
                  </div>

                  <div className="animate-in slide-in-from-left-4 duration-300 delay-300">
                    <h3 className="font-semibold text-sm mb-3">Trading Opportunities</h3>
                    <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        Several positions showing technical strength. Consider reviewing stop losses and profit targets.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between py-2 px-3 bg-purple-50 rounded-lg">
                        <span className="text-sm font-medium text-purple-900">Position alerts</span>
                        <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">4</span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3 bg-yellow-50 rounded-lg">
                        <span className="text-sm font-medium text-yellow-900">Trading signals</span>
                        <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {context === 'default' && (
                <>
                  {/* Default content */}
                  <div className="animate-in slide-in-from-left-4 duration-300 delay-100">
                    <h3 className="font-semibold text-sm mb-3">Recent quotes</h3>
                    <div className="space-y-2">
                      {quantumQuotes.slice(0, 3).map((quote, index) => (
                        <div key={index} className="animate-in slide-in-from-left-4 duration-300" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                          <Quote
                            ticker={quote.ticker}
                            companyName={quote.companyName}
                            percentageChange={quote.percentageChange}
                            sharePrice={quote.sharePrice}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="animate-in slide-in-from-left-4 duration-300 delay-200">
                    <h3 className="font-semibold text-sm mb-3">Past discussions</h3>
                    <div className="space-y-2">
                      <ConversationalButtonWithIcon>How do I fund my new account?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>What are the risks of margin trading?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>Compare ETFs vs mutual funds</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>Can I trade options in my IRA?</ConversationalButtonWithIcon>
                      <ConversationalButtonWithIcon>Where can I find tax documents?</ConversationalButtonWithIcon>
                    </div>
                  </div>

                  <div className="animate-in slide-in-from-left-4 duration-300 delay-300">
                    <h3 className="font-semibold text-sm mb-3">Your day</h3>
                    <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        It appears to be a mixed day for the markets, with several factors influencing different sectors.
                      </p>
                    </div>
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
                </>
              )}
            </div>
          )}
        </div>
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
