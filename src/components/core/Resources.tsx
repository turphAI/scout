'use client';

import React from 'react';
import { FileText, Play } from 'lucide-react';
import { ResourceItem } from '@/data/responseModeData';

interface ResourcesProps {
  resources: ResourceItem[];
}

export default function Resources({ resources }: ResourcesProps) {
  if (resources.length === 0) {
    return (
      <div className="min-h-[200px] animate-in fade-in duration-300">
        <h3 className="font-semibold text-sm mb-3">Resources</h3>
      </div>
    );
  }

  return (
    <div className="min-h-[200px] animate-in fade-in duration-300">
      <h3 className="font-semibold text-sm mb-3">Resources</h3>
      <div className="space-y-2">
        {resources.slice(0, 5).map((resource, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:shadow-sm transform hover:scale-[1.02] border border-transparent hover:border-gray-200"
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            <div className={`p-2 rounded-lg ${
              resource.type === 'video' 
                ? 'bg-red-100 text-red-600' 
                : 'bg-blue-100 text-blue-600'
            }`}>
              {resource.type === 'video' ? (
                <Play className="h-4 w-4" />
              ) : (
                <FileText className="h-4 w-4" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-700">{resource.title}</div>
              <div className={`text-xs font-medium capitalize ${
                resource.type === 'video' ? 'text-red-600' : 'text-blue-600'
              }`}>
                {resource.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
