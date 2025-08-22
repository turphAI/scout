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
      <div className="min-h-[200px]">
        <h3 className="font-semibold text-sm mb-3">Resources</h3>
        <div className="text-sm text-gray-500">
          Related resources will appear here...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[200px]">
      <h3 className="font-semibold text-sm mb-3">Resources</h3>
      <div className="space-y-2">
        {resources.slice(0, 5).map((resource, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <div className="text-gray-600">
              {resource.type === 'video' ? (
                <Play className="h-4 w-4" />
              ) : (
                <FileText className="h-4 w-4" />
              )}
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-700">{resource.title}</div>
              <div className="text-xs text-gray-500 capitalize">{resource.type}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
