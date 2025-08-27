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

      {/* Additional Resources Card */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rmdData.resources.map((resource, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${getResourceColor(resource.type)}`}>
                  {getResourceIcon(resource.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h4>
                    <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.source}</span>
                    {resource.readTime && (
                      <span className="text-xs text-gray-500">{resource.readTime}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Related Questions Card */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Related Questions</h3>
        <div className="space-y-3">
          {rmdData.relatedQuestions.map((question, index) => (
            <div key={index}>
              <ConversationalButtonWithIcon>
                {question.question}
              </ConversationalButtonWithIcon>
            </div>
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
