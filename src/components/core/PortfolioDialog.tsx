'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PieChart } from 'lucide-react';
import { getPortfolioData } from '@/data/portfolioData';

interface PortfolioDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PortfolioDialog({ open, onOpenChange }: PortfolioDialogProps) {
  const { positions } = getPortfolioData();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5" />
            Portfolio
          </DialogTitle>
        </DialogHeader>

        {/* Portfolio Table */}
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Ticker</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Shares</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {positions.map((position) => (
                <tr key={position.ticker} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <span className="font-semibold text-sm">{position.ticker}</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-sm">{formatNumber(position.shares)}</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-sm font-medium">{formatCurrency(position.marketValue)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
}
