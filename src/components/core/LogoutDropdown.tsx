'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Home, BarChart3, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LogoutDropdownProps {
  onLogout?: () => void;
}

const tickerList = [
  { symbol: 'AAPL', name: 'Apple Inc' },
  { symbol: 'MSFT', name: 'Microsoft Corporation' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation' },
  { symbol: 'TSLA', name: 'Tesla Inc' },
  { symbol: 'A', name: 'Agilent Technologies Inc' },
  { symbol: 'C', name: 'Citigroup Inc' },
  { symbol: 'R', name: 'Ryder System Inc' },
  { symbol: 'D', name: 'Dominion Energy Inc' },
  { symbol: 'O', name: 'Realty Income Corp' },
  { symbol: 'T', name: 'AT&T Inc' },
  { symbol: 'W', name: 'Wayfair Inc' },
];

const conversationTickerList = [
  { symbol: 'AAPL', name: 'Apple Inc' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation' },
  { symbol: 'TSLA', name: 'Tesla Inc' },
  { symbol: 'C', name: 'Citigroup Inc' },
  { symbol: 'W', name: 'Wayfair Inc' },
];

const askList = [
  'How do I buy stocks?',
  'What is a dividend?',
  'How to read stock charts?',
  'What is market cap?',
  'How to research stocks?',
  'What are ETFs?',
  'How to diversify my portfolio?',
  'What is a P/E ratio?',
  'How to set up a brokerage account?',
  'What are market orders vs limit orders?',
];

export default function LogoutDropdown({ onLogout }: LogoutDropdownProps) {
  const router = useRouter();
  const [isTickerDialogOpen, setIsTickerDialogOpen] = useState(false);
  const [isAskDialogOpen, setIsAskDialogOpen] = useState(false);
  const [tickerDialogTab, setTickerDialogTab] = useState<string>('list');

  const handleVariantDashboard = () => {
    router.push('/');
    onLogout?.();
  };

  const handleTickerList = () => {
    setIsTickerDialogOpen(true);
  };

  const handleAskList = () => {
    setIsAskDialogOpen(true);
  };

  const handleTickerConversationView = () => {
    setTickerDialogTab('conversation');
    setIsTickerDialogOpen(true);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1">
            Log out
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onClick={handleVariantDashboard} className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Variant dashboard
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={handleTickerList} className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Ticker list
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleTickerConversationView} className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Ticker conversation view
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={handleAskList} className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Ask list
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Ask conversation view
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Ticker Dialog */}
      <Dialog open={isTickerDialogOpen} onOpenChange={setIsTickerDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Ticker Information</DialogTitle>
          </DialogHeader>
          <Tabs value={tickerDialogTab} onValueChange={setTickerDialogTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="list">Full List</TabsTrigger>
              <TabsTrigger value="conversation">Conversation View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="mt-6">
              <div className="space-y-2">
                {tickerList.map((ticker) => (
                  <div
                    key={ticker.symbol}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-sm">{ticker.symbol}</span>
                      <span className="text-sm text-gray-600">-</span>
                      <span className="text-sm">{ticker.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="conversation" className="mt-6">
              <div className="space-y-2">
                {conversationTickerList.map((ticker) => (
                  <div
                    key={ticker.symbol}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-sm">{ticker.symbol}</span>
                      <span className="text-sm text-gray-600">-</span>
                      <span className="text-sm">{ticker.name}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  Type any of these tickers in the main input field to see the conversation view.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Ask Dialog */}
      <Dialog open={isAskDialogOpen} onOpenChange={setIsAskDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Ask Questions</DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="list">Full List</TabsTrigger>
              <TabsTrigger value="conversation">Conversation View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="mt-6">
              <div className="space-y-2">
                {askList.map((question, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                  >
                    <span className="text-sm">{question}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="conversation" className="mt-6">
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Ask Conversation View</h3>
                <p className="text-gray-600">
                  This would show the conversation interface for general questions.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}
