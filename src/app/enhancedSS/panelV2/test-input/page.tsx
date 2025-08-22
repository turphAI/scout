'use client';

import EnhancedInputV2 from "@/components/core/EnhancedInputV2"

export default function TestInputPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">EnhancedInputV2 Test</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Overlay Mode</h2>
            <EnhancedInputV2 
              mode="overlay"
              onSubmit={(value) => console.log('Submitted:', value)}
            />
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">Sidecar Mode</h2>
            <EnhancedInputV2 
              mode="sidecar"
              onSubmit={(value) => console.log('Submitted:', value)}
            />
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4">With Badge</h2>
            <EnhancedInputV2 
              mode="overlay"
              hideBadge={false}
              onSubmit={(value) => console.log('Submitted:', value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
