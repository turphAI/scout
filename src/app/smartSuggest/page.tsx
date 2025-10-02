'use client';

import React, { useState } from 'react';
import Header from '@/components/core/Header';

export default function SmartSuggestHomePage() {
  const [value, setValue] = useState('');

  const handleHeaderSubmit = (input: string) => {
    if (/^rmd$/i.test(input.trim())) {
      window.location.href = '/smartSuggest/rmd';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        variant="full" 
        homeHref="/smartSuggest"
        showOverlayPanel={false}
        panelContext="default"
        onHeaderSubmit={handleHeaderSubmit}
      />
      <main className="w-full flex flex-col items-center justify-start" style={{ background: '#f9f7f5' }}>
        {/* Hero Section (marketing content preserved) */}
        <section 
          className="w-full max-w-5xl bg-white rounded-xl shadow flex flex-col md:flex-row gap-8 mt-8 relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/hero-retired-couple.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '400px'
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
          <div className="relative z-10 p-8 flex flex-col md:flex-row gap-8 w-full">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-lg">Plan Your Financial Future</h2>
              <p className="mb-4 text-white drop-shadow-md">Explore strategies for retirement, investing, and building wealth in today&apos;s market environment.</p>
              <button className="bg-white text-black px-6 py-2 rounded font-semibold w-fit hover:bg-gray-100 transition-colors">Get Started</button>
            </div>
          </div>
          <div className="flex-1 hidden md:flex" />
        </section>

        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Retirement Planning</h3>
            <p className="text-zinc-700">Maximize your retirement accounts and plan long-term growth.</p>
            <a href="#" className="text-xs text-blue-500 mt-2">Explore retirement options</a>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Market News</h3>
            <p className="text-zinc-700">Stay up to date with trends and insights from global markets.</p>
            <a href="#" className="text-xs text-blue-500 mt-2">Read market news</a>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Investment Strategies</h3>
            <p className="text-zinc-700">Discover diversified strategies to reach your financial goals.</p>
            <a href="#" className="text-xs text-blue-500 mt-2">See strategies</a>
          </div>
        </section>

        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-12">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Personal Finance Tools</h3>
            <p className="text-zinc-700">Use calculators and tools to budget, plan, and track progress.</p>
            <a href="#" className="text-xs text-blue-500 mt-2">Try our tools</a>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Security & Support</h3>
            <p className="text-zinc-700">Protect your accounts and get 24/7 support.</p>
            <a href="#" className="text-xs text-blue-500 mt-2">Learn more</a>
          </div>
        </section>
      </main>
    </div>
  );
}


