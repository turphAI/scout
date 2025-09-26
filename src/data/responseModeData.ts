// Mock data for Response Mode feature

// Ticker data structure
export interface TickerData {
  symbol: string;
  companyName: string;
  exchange: string;
  price: number;
  change: number;
  changePercent: number;
  news: NewsItem[];
  events: EventItem[];
}

// Ask data structure
export interface AskData {
  suggestions: string[];
  answer: string;
  resources: ResourceItem[];
}

// News and Events
export interface NewsItem {
  headline: string;
  source: string;
  timeAgo: string;
}

export interface EventItem {
  type: string;
  description: string;
  date: string;
}

export interface ResourceItem {
  title: string;
  type: 'document' | 'video';
}

// Mock ticker data (10-20 realistic tickers)
export const mockTickerData: TickerData[] = [
  {
    symbol: "A",
    companyName: "Agilent Technologies Inc",
    exchange: "NYSE",
    price: 145.67,
    change: 2.34,
    changePercent: 1.63,
    news: [
      {
        headline: "Agilent Technologies reports strong Q3 results",
        source: "Reuters",
        timeAgo: "2 hours ago"
      },
      {
        headline: "Agilent's life sciences division shows growth",
        source: "Business Wire",
        timeAgo: "3 hours ago"
      }
    ],
    events: []
  },
  {
    symbol: "AAPL",
    companyName: "Apple Inc",
    exchange: "NASDAQ",
    price: 232.78,
    change: -0.55,
    changePercent: -0.24,
    news: [
      {
        headline: "Apple notches a win with the return of a blood oxygen feature for Apple Watches",
        source: "Business Insider",
        timeAgo: "2 hours ago"
      },
      {
        headline: "Apple's Hidden Growth Engine Surges",
        source: "Seeking Alpha",
        timeAgo: "3 hours ago"
      }
    ],
    events: [
      {
        type: "Ex-dividend",
        description: "AAPL ex-dividend date",
        date: "Aug 11, 2025"
      }
    ]
  },
  {
    symbol: "BAC",
    companyName: "Bank of America Corporation",
    exchange: "NYSE",
    price: 42.89,
    change: 0.11,
    changePercent: 0.26,
    news: [
      {
        headline: "Bank of America reports strong Q3 earnings, beats expectations",
        source: "Reuters",
        timeAgo: "1 hour ago"
      },
      {
        headline: "Bank of America's consumer banking division shows robust growth",
        source: "Bloomberg",
        timeAgo: "2 hours ago"
      },
      {
        headline: "Bank of America announces new digital banking initiatives",
        source: "CNBC",
        timeAgo: "3 hours ago"
      }
    ],
    events: [
      {
        type: "Ex-dividend",
        description: "BAC quarterly dividend payment",
        date: "Aug 30, 2025"
      }
    ]
  },
  {
    symbol: "C",
    companyName: "Citigroup Inc",
    exchange: "NYSE",
    price: 67.89,
    change: -1.23,
    changePercent: -1.78,
    news: [
      {
        headline: "Citigroup faces regulatory challenges in Europe",
        source: "Bloomberg",
        timeAgo: "1 hour ago"
      },
      {
        headline: "Citigroup's restructuring plan shows progress",
        source: "Financial Times",
        timeAgo: "4 hours ago"
      }
    ],
    events: []
  },
  {
    symbol: "D",
    companyName: "Dominion Energy Inc",
    exchange: "NYSE",
    price: 52.34,
    change: 0.45,
    changePercent: 0.87,
    news: [
      {
        headline: "Dominion Energy announces new renewable energy projects",
        source: "Utility Dive",
        timeAgo: "2 hours ago"
      }
    ],
    events: [
      {
        type: "Dividend",
        description: "D quarterly dividend payment",
        date: "Sep 20, 2025"
      }
    ]
  },
  {
    symbol: "MSFT",
    companyName: "Microsoft Corporation",
    exchange: "NASDAQ",
    price: 522.48,
    change: 1.90,
    changePercent: 0.36,
    news: [
      {
        headline: "Microsoft's AI investments pay off as cloud revenue surges",
        source: "Reuters",
        timeAgo: "1 hour ago"
      }
    ],
    events: []
  },
  {
    symbol: "NVDA",
    companyName: "NVIDIA Corporation",
    exchange: "NASDAQ",
    price: 182.02,
    change: 0.48,
    changePercent: 0.26,
    news: [
      {
        headline: "NVIDIA's AI chips continue to drive market growth",
        source: "CNBC",
        timeAgo: "1 hour ago"
      }
    ],
    events: []
  },
  {
    symbol: "O",
    companyName: "Realty Income Corp",
    exchange: "NYSE",
    price: 58.92,
    change: -0.78,
    changePercent: -1.31,
    news: [
      {
        headline: "Realty Income acquires new retail properties",
        source: "Commercial Observer",
        timeAgo: "3 hours ago"
      },
      {
        headline: "Realty Income's monthly dividend remains stable",
        source: "Dividend.com",
        timeAgo: "1 hour ago"
      }
    ],
    events: [
      {
        type: "Monthly Dividend",
        description: "O monthly dividend payment",
        date: "Sep 15, 2025"
      }
    ]
  },
  {
    symbol: "R",
    companyName: "Ryder System Inc",
    exchange: "NYSE",
    price: 89.45,
    change: 1.67,
    changePercent: 1.90,
    news: [
      {
        headline: "Ryder System expands logistics network",
        source: "Supply Chain Dive",
        timeAgo: "2 hours ago"
      }
    ],
    events: []
  },
  {
    symbol: "T",
    companyName: "AT&T Inc",
    exchange: "NYSE",
    price: 18.76,
    change: 0.23,
    changePercent: 1.24,
    news: [
      {
        headline: "AT&T's 5G network expansion continues",
        source: "Fierce Wireless",
        timeAgo: "4 hours ago"
      },
      {
        headline: "AT&T reports strong wireless subscriber growth",
        source: "Light Reading",
        timeAgo: "2 hours ago"
      }
    ],
    events: []
  },
  {
    symbol: "TSLA",
    companyName: "Tesla Inc",
    exchange: "NASDAQ",
    price: 335.58,
    change: -3.65,
    changePercent: -1.08,
    news: [
      {
        headline: "Tesla's new Model 3 refresh boosts sales expectations",
        source: "Electrek",
        timeAgo: "3 hours ago"
      }
    ],
    events: []
  },
  {
    symbol: "W",
    companyName: "Wayfair Inc",
    exchange: "NYSE",
    price: 45.23,
    change: -2.15,
    changePercent: -4.54,
    news: [
      {
        headline: "Wayfair faces increased competition in online furniture",
        source: "Retail Dive",
        timeAgo: "1 hour ago"
      },
      {
        headline: "Wayfair's Q3 earnings miss expectations",
        source: "MarketWatch",
        timeAgo: "3 hours ago"
      }
    ],
    events: []
  }
];

// Mock ask data
export const mockAskData: AskData[] = [
  {
    suggestions: [
      "How do I fund my new account?",
      "What are the risks of margin trading?",
      "Compare ETFs vs mutual funds",
      "Can I trade options in my IRA?",
      "Where can I find tax documents?",
      "How to set up automatic investments",
      "What is a Roth IRA?",
      "Understanding market volatility",
      "How to read stock charts",
      "What are dividend payments?"
    ],
    answer: "",
    resources: [
      {
        title: "Account Funding Guide",
        type: "document"
      },
      {
        title: "Margin Trading Risks",
        type: "document"
      },
      {
        title: "Video: ETFs vs Mutual Funds",
        type: "video"
      },
      {
        title: "IRA Options Trading Rules",
        type: "document"
      },
      {
        title: "Tax Document Center",
        type: "document"
      }
    ]
  },
  {
    suggestions: [
      "What is an RMD?",
      "How to calculate RMD amounts",
      "RMD deadlines and penalties",
      "Roth IRA RMD requirements",
      "RMD age requirements",
      "How to avoid RMD penalties",
      "RMD vs required distributions",
      "RMD tax implications",
      "RMD calculator tool",
      "RMD rollover options"
    ],
    answer: "Required Minimum Distributions (RMDs) are minimum amounts that retirement plan account owners must withdraw annually starting with the year they reach age 73 (or 72 if you reach age 72 before January 1, 2023). RMDs apply to traditional IRAs, SEP IRAs, SIMPLE IRAs, and employer-sponsored retirement plans like 401(k)s.",
    resources: [
      {
        title: "What is an RMD?",
        type: "document"
      },
      {
        title: "IRS Guidance on RMDs",
        type: "document"
      },
      {
        title: "RMD Frequently Asked Questions",
        type: "document"
      },
      {
        title: "Video: RMD Overview",
        type: "video"
      },
      {
        title: "RMD Eligibility Check",
        type: "document"
      },
      {
        title: "RMD Age Calculator",
        type: "document"
      },
      {
        title: "Account Types Requiring RMDs",
        type: "document"
      }
    ]
  },
  {
    suggestions: [
      "How to buy stocks",
      "Stock market basics",
      "Understanding stock prices",
      "How to research stocks",
      "Stock trading strategies",
      "Market order types",
      "Stock dividends explained",
      "Stock splits and reverse splits",
      "How to read stock quotes",
      "Stock market hours"
    ],
    answer: "To buy stocks, you'll need a brokerage account. You can place different types of orders including market orders (buy at current price) or limit orders (buy at a specific price). Research companies thoroughly before investing and consider factors like company fundamentals, market conditions, and your investment goals.",
    resources: [
      {
        title: "Stock Trading Guide",
        type: "document"
      },
      {
        title: "Video: How to Buy Your First Stock",
        type: "video"
      },
      {
        title: "Stock Research Tools",
        type: "document"
      },
      {
        title: "Order Types Explained",
        type: "document"
      },
      {
        title: "Market Hours Guide",
        type: "document"
      }
    ]
  }
];

// Helper functions for filtering data
export const filterTickerData = (query: string): TickerData[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return mockTickerData
    .filter(ticker => 
      ticker.symbol.toLowerCase().includes(lowercaseQuery) ||
      ticker.companyName.toLowerCase().includes(lowercaseQuery)
    )
    .sort((a, b) => {
      // Prioritize exact symbol matches first
      if (a.symbol.toLowerCase() === lowercaseQuery) return -1;
      if (b.symbol.toLowerCase() === lowercaseQuery) return 1;
      
      // Then prioritize symbol starts with query
      const aStartsWith = a.symbol.toLowerCase().startsWith(lowercaseQuery);
      const bStartsWith = b.symbol.toLowerCase().startsWith(lowercaseQuery);
      
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      
      // Then prioritize company name starts with query
      const aCompanyStartsWith = a.companyName.toLowerCase().startsWith(lowercaseQuery);
      const bCompanyStartsWith = b.companyName.toLowerCase().startsWith(lowercaseQuery);
      
      if (aCompanyStartsWith && !bCompanyStartsWith) return -1;
      if (!aCompanyStartsWith && bCompanyStartsWith) return 1;
      
      // Finally, sort alphabetically by symbol
      return a.symbol.localeCompare(b.symbol);
    });
};

export const filterAskData = (query: string): AskData[] => {
  const lowercaseQuery = query.toLowerCase();
  
  // Special handling for RMD queries
  const isRmdQuery = lowercaseQuery.includes('rmd') || 
                     lowercaseQuery.includes('required minimum distribution') ||
                     lowercaseQuery.includes('required');
  
  return mockAskData.filter(askData => {
    // For RMD-related queries, return the RMD data
    if (isRmdQuery && askData.suggestions.some(s => s.toLowerCase().includes('rmd'))) {
      return true;
    }
    
    // For other queries, use normal filtering
    return askData.suggestions.some(suggestion => 
      suggestion.toLowerCase().includes(lowercaseQuery)
    );
  });
};

// Helper function to get autosuggest text for RMD queries
export const getRmdAutosuggest = (query: string): string | null => {
  const lowercaseQuery = query.toLowerCase();
  
  if (lowercaseQuery.includes('rmd') || 
      lowercaseQuery.includes('required minimum distribution') ||
      lowercaseQuery.includes('required')) {
    return 'Required Minimum Distribution';
  }
  
  return null;
};
