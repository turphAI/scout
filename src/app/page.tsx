'use client';

import React from 'react';
import Header from '@/components/core/Header';

export default function Home() {
  const handleNavSelect = (navKey: string) => {
    console.log('Navigation selected:', navKey);
    
    switch (navKey) {
      case 'portfolio-summary':
        console.log('Navigating to portfolio-summary...');
        console.log('Current location before navigation:', window.location.href);
        window.location.href = '/portfolio-summary';
        console.log('Navigation command executed');
        break;
      case 'portfolio-positions':
        console.log('Navigating to portfolio-positions...');
        console.log('Current location before navigation:', window.location.href);
        window.location.href = '/portfolio-positions';
        console.log('Navigation command executed');
        break;
      default:
        console.log('Navigation not implemented for:', navKey);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        variant="full" 
        onNavSelect={handleNavSelect}
        homeHref="/"
      />
      <main className="pt-0">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Scout 1 Prototype</h1>
          <p>Testing navigation from home page</p>
        </div>
      </main>
    </div>
  );
}
