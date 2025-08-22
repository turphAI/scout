// Stock data for multiple companies

export interface StockData {
  ticker: string;
  companyName: string;
  currentPrice: string;
  dailyChange: string;
  dailyChangePercent: string;
  afterHoursPrice?: string;
  afterHoursChange?: string;
  previousClose: string;
  open: string;
  high: string;
  low: string;
  marketCap: string;
  volume: string;
  avgVolume: string;
  peRatio: string;
  dividend: string;
  dividendYield: string;
  exDividendDate: string;
  eps: string;
  beta: string;
  sharesOutstanding: string;
  employees: string;
  ceo: string;
  founded: string;
  headquarters: string;
  sector: string;
  website: string;
}

export interface NewsItem {
  source: string;
  timeAgo: string;
  headline: string;
}

export interface RelatedStock {
  ticker: string;
  companyName: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

// Apple Inc
export const appleStockData: StockData = {
  ticker: "AAPL",
  companyName: "Apple Inc",
  currentPrice: "232.78",
  dailyChange: "-0.55",
  dailyChangePercent: "-0.24%",
  afterHoursPrice: "232.71",
  afterHoursChange: "-0.030% (-0.069)",
  previousClose: "233.33",
  open: "234.06",
  high: "235.12",
  low: "230.85",
  marketCap: "3.46T",
  volume: "40.46M",
  avgVolume: "57.49M",
  peRatio: "35.39",
  dividend: "$0.26",
  dividendYield: "0.45%",
  exDividendDate: "Aug 11, 2025",
  eps: "$6.58",
  beta: "1.17",
  sharesOutstanding: "14.84B",
  employees: "164K",
  ceo: "Tim Cook",
  founded: "Apr 1, 1976",
  headquarters: "Cupertino, California, United States",
  sector: "Computers, Peripherals, and Software",
  website: "apple.com"
};

export const appleNewsItems: NewsItem[] = [
  {
    source: "Business Insider",
    timeAgo: "2 hours ago",
    headline: "Apple notches a win with the return of a blood oxygen feature for Apple Watches"
  },
  {
    source: "Seeking Alpha",
    timeAgo: "3 hours ago",
    headline: "Apple's Hidden Growth Engine Surges (NASDAQ:AAPL)"
  },
  {
    source: "Yahoo Finance",
    timeAgo: "2 hours ago",
    headline: "Apple Watch blood oxygen, Klarna users, Tapestry stock plunges"
  },
  {
    source: "CNN",
    timeAgo: "4 hours ago",
    headline: "Apple is bringing back a feature at the center of a big Apple Watch legal battle"
  }
];

export const appleRelatedStocks: RelatedStock[] = [
  {
    ticker: "AMZN",
    companyName: "Amazon.com Inc",
    price: "$230.98",
    change: "+6.42",
    changePercent: "+2.86%",
    isPositive: true
  },
  {
    ticker: "NVDA",
    companyName: "NVIDIA Corp",
    price: "$182.02",
    change: "+0.48",
    changePercent: "+0.26%",
    isPositive: true
  },
  {
    ticker: "TSLA",
    companyName: "Tesla Inc",
    price: "$335.58",
    change: "-3.65",
    changePercent: "-1.08%",
    isPositive: false
  },
  {
    ticker: "MSFT",
    companyName: "Microsoft Corp",
    price: "$522.48",
    change: "+1.90",
    changePercent: "+0.36%",
    isPositive: true
  }
];

export const appleCompanyDescription = `Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It is best known for its consumer electronics, software, and services. Founded in 1976 as Apple Computer Company by Steve Jobs, Steve Wozniak and Ronald Wayne, the company was incorporated by Jobs and Wozniak as Apple Computer, Inc. the following year. It was renamed Apple Inc. in 2007 as the company had expanded its focus from computers to consumer electronics. Apple is the largest technology company by revenue, with US$391.04 billion in the 2024 fiscal year.`;

// NVIDIA Corporation
export const nvidiaStockData: StockData = {
  ticker: "NVDA",
  companyName: "NVIDIA Corporation",
  currentPrice: "182.02",
  dailyChange: "+0.48",
  dailyChangePercent: "+0.26%",
  afterHoursPrice: "182.15",
  afterHoursChange: "+0.07% (+0.13)",
  previousClose: "181.54",
  open: "180.50",
  high: "183.25",
  low: "179.80",
  marketCap: "4.49T",
  volume: "52.3M",
  avgVolume: "48.7M",
  peRatio: "78.45",
  dividend: "$0.04",
  dividendYield: "0.09%",
  exDividendDate: "Dec 6, 2024",
  eps: "$2.32",
  beta: "1.85",
  sharesOutstanding: "24.7B",
  employees: "29K",
  ceo: "Jensen Huang",
  founded: "Apr 5, 1993",
  headquarters: "Santa Clara, California, United States",
  sector: "Semiconductors",
  website: "nvidia.com"
};

export const nvidiaNewsItems: NewsItem[] = [
  {
    source: "CNBC",
    timeAgo: "1 hour ago",
    headline: "NVIDIA's AI chips continue to drive market growth"
  },
  {
    source: "Reuters",
    timeAgo: "3 hours ago",
    headline: "NVIDIA reports record quarterly revenue on AI demand"
  },
  {
    source: "Bloomberg",
    timeAgo: "2 hours ago",
    headline: "NVIDIA's data center business surges 409% year-over-year"
  },
  {
    source: "MarketWatch",
    timeAgo: "4 hours ago",
    headline: "NVIDIA's gaming segment shows strong recovery"
  }
];

export const nvidiaRelatedStocks: RelatedStock[] = [
  {
    ticker: "AMD",
    companyName: "Advanced Micro Devices",
    price: "$156.78",
    change: "+2.34",
    changePercent: "+1.52%",
    isPositive: true
  },
  {
    ticker: "INTC",
    companyName: "Intel Corp",
    price: "$45.67",
    change: "-0.23",
    changePercent: "-0.50%",
    isPositive: false
  },
  {
    ticker: "TSM",
    companyName: "Taiwan Semiconductor",
    price: "$89.12",
    change: "+1.45",
    changePercent: "+1.65%",
    isPositive: true
  },
  {
    ticker: "AAPL",
    companyName: "Apple Inc",
    price: "$232.78",
    change: "-0.55",
    changePercent: "-0.24%",
    isPositive: false
  }
];

export const nvidiaCompanyDescription = `NVIDIA Corporation is an American multinational technology company incorporated in Delaware and based in Santa Clara, California. It is a software and fabless company which designs graphics processing units (GPUs), application programming interfaces (APIs) for data science and high-performance computing, as well as system on a chip units (SoCs) for the mobile computing and automotive market. NVIDIA is a global leader in artificial intelligence computing and is known for its GeForce, Quadro, and Tesla GPU lines. The company's GPUs are used in gaming, professional visualization, data centers, and automotive markets.`;

// Tesla Inc
export const teslaStockData: StockData = {
  ticker: "TSLA",
  companyName: "Tesla Inc",
  currentPrice: "335.58",
  dailyChange: "-3.65",
  dailyChangePercent: "-1.08%",
  afterHoursPrice: "334.90",
  afterHoursChange: "-0.20% (-0.68)",
  previousClose: "339.23",
  open: "340.50",
  high: "342.15",
  low: "333.80",
  marketCap: "1.07T",
  volume: "89.2M",
  avgVolume: "95.1M",
  peRatio: "42.15",
  dividend: "$0.00",
  dividendYield: "0.00%",
  exDividendDate: "N/A",
  eps: "$7.96",
  beta: "2.34",
  sharesOutstanding: "3.19B",
  employees: "140K",
  ceo: "Elon Musk",
  founded: "Jul 1, 2003",
  headquarters: "Austin, Texas, United States",
  sector: "Automotive",
  website: "tesla.com"
};

export const teslaNewsItems: NewsItem[] = [
  {
    source: "Electrek",
    timeAgo: "3 hours ago",
    headline: "Tesla's new Model 3 refresh boosts sales expectations"
  },
  {
    source: "Reuters",
    timeAgo: "1 hour ago",
    headline: "Tesla reports strong Q3 deliveries despite market challenges"
  },
  {
    source: "Bloomberg",
    timeAgo: "2 hours ago",
    headline: "Tesla's Cybertruck production ramps up"
  },
  {
    source: "CNBC",
    timeAgo: "4 hours ago",
    headline: "Tesla's energy storage business shows strong growth"
  }
];

export const teslaRelatedStocks: RelatedStock[] = [
  {
    ticker: "F",
    companyName: "Ford Motor Co",
    price: "$12.45",
    change: "+0.15",
    changePercent: "+1.22%",
    isPositive: true
  },
  {
    ticker: "GM",
    companyName: "General Motors",
    price: "$34.67",
    change: "-0.23",
    changePercent: "-0.66%",
    isPositive: false
  },
  {
    ticker: "NIO",
    companyName: "NIO Inc",
    price: "$8.90",
    change: "+0.12",
    changePercent: "+1.37%",
    isPositive: true
  },
  {
    ticker: "NVDA",
    companyName: "NVIDIA Corp",
    price: "$182.02",
    change: "+0.48",
    changePercent: "+0.26%",
    isPositive: true
  }
];

export const teslaCompanyDescription = `Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas. Tesla designs and manufactures electric vehicles, battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services. Tesla is one of the world's most valuable companies and is the world's most valuable automaker. The company was founded in 2003 by Martin Eberhard and Marc Tarpenning, and was named after Serbian-American inventor Nikola Tesla. Elon Musk, who contributed most of the funding in the early days, has served as CEO since 2008.`;

// Wayfair Inc
export const wayfairStockData: StockData = {
  ticker: "W",
  companyName: "Wayfair Inc",
  currentPrice: "45.23",
  dailyChange: "-2.15",
  dailyChangePercent: "-4.54%",
  afterHoursPrice: "44.80",
  afterHoursChange: "-0.95% (-0.43)",
  previousClose: "47.38",
  open: "47.50",
  high: "47.85",
  low: "44.90",
  marketCap: "5.4B",
  volume: "12.8M",
  avgVolume: "8.9M",
  peRatio: "N/A",
  dividend: "$0.00",
  dividendYield: "0.00%",
  exDividendDate: "N/A",
  eps: "-$2.45",
  beta: "2.67",
  sharesOutstanding: "119.4M",
  employees: "18K",
  ceo: "Niraj Shah",
  founded: "Aug 22, 2002",
  headquarters: "Boston, Massachusetts, United States",
  sector: "Internet Retail",
  website: "wayfair.com"
};

export const wayfairNewsItems: NewsItem[] = [
  {
    source: "Retail Dive",
    timeAgo: "1 hour ago",
    headline: "Wayfair faces increased competition in online furniture"
  },
  {
    source: "MarketWatch",
    timeAgo: "3 hours ago",
    headline: "Wayfair's Q3 earnings miss expectations"
  },
  {
    source: "CNBC",
    timeAgo: "2 hours ago",
    headline: "Wayfair announces new cost-cutting measures"
  },
  {
    source: "Bloomberg",
    timeAgo: "4 hours ago",
    headline: "Wayfair's logistics network expansion continues"
  }
];

export const wayfairRelatedStocks: RelatedStock[] = [
  {
    ticker: "AMZN",
    companyName: "Amazon.com Inc",
    price: "$230.98",
    change: "+6.42",
    changePercent: "+2.86%",
    isPositive: true
  },
  {
    ticker: "HD",
    companyName: "Home Depot Inc",
    price: "$345.67",
    change: "-1.23",
    changePercent: "-0.35%",
    isPositive: false
  },
  {
    ticker: "LOW",
    companyName: "Lowe's Companies",
    price: "$234.56",
    change: "+0.89",
    changePercent: "+0.38%",
    isPositive: true
  },
  {
    ticker: "WMT",
    companyName: "Walmart Inc",
    price: "$67.89",
    change: "+0.45",
    changePercent: "+0.67%",
    isPositive: true
  }
];

export const wayfairCompanyDescription = `Wayfair Inc. is an American e-commerce company that sells furniture and home-goods. The company was founded in 2002 and is headquartered in Boston, Massachusetts. Wayfair operates through five brands: Wayfair, Joss & Main, AllModern, Birch Lane, and Perigold. The company offers 14 million items from more than 11,000 global suppliers. Wayfair has been a pioneer in the online furniture retail space, using technology to connect consumers with products and suppliers.`;

// Citigroup Inc
export const citigroupStockData: StockData = {
  ticker: "C",
  companyName: "Citigroup Inc",
  currentPrice: "67.89",
  dailyChange: "-1.23",
  dailyChangePercent: "-1.78%",
  afterHoursPrice: "67.75",
  afterHoursChange: "-0.21% (-0.14)",
  previousClose: "69.12",
  open: "69.50",
  high: "69.85",
  low: "67.45",
  marketCap: "137.8B",
  volume: "28.9M",
  avgVolume: "25.3M",
  peRatio: "8.45",
  dividend: "$0.53",
  dividendYield: "3.12%",
  exDividendDate: "Nov 6, 2024",
  eps: "$8.03",
  beta: "1.45",
  sharesOutstanding: "2.03B",
  employees: "240K",
  ceo: "Jane Fraser",
  founded: "Jun 16, 1812",
  headquarters: "New York, New York, United States",
  sector: "Banks",
  website: "citigroup.com"
};

export const citigroupNewsItems: NewsItem[] = [
  {
    source: "Bloomberg",
    timeAgo: "1 hour ago",
    headline: "Citigroup faces regulatory challenges in Europe"
  },
  {
    source: "Financial Times",
    timeAgo: "4 hours ago",
    headline: "Citigroup's restructuring plan shows progress"
  },
  {
    source: "Reuters",
    timeAgo: "2 hours ago",
    headline: "Citigroup reports strong Q3 trading revenue"
  },
  {
    source: "MarketWatch",
    timeAgo: "3 hours ago",
    headline: "Citigroup's consumer banking division improves"
  }
];

export const citigroupRelatedStocks: RelatedStock[] = [
  {
    ticker: "JPM",
    companyName: "JPMorgan Chase",
    price: "$178.90",
    change: "+1.23",
    changePercent: "+0.69%",
    isPositive: true
  },
  {
    ticker: "BAC",
    companyName: "Bank of America",
    price: "$34.56",
    change: "-0.12",
    changePercent: "-0.35%",
    isPositive: false
  },
  {
    ticker: "WFC",
    companyName: "Wells Fargo",
    price: "$45.67",
    change: "+0.34",
    changePercent: "+0.75%",
    isPositive: true
  },
  {
    ticker: "GS",
    companyName: "Goldman Sachs",
    price: "$389.12",
    change: "-2.45",
    changePercent: "-0.63%",
    isPositive: false
  }
];

export const citigroupCompanyDescription = `Citigroup Inc. is an American multinational investment bank and financial services corporation headquartered in New York City. The company was formed by the merger of banking giant Citicorp and financial conglomerate Travelers Group in 1998. Citigroup is one of the Big Four banking institutions in the United States, alongside JPMorgan Chase, Bank of America, and Wells Fargo. The company operates in more than 160 countries and jurisdictions and serves approximately 200 million customer accounts.`;

// Helper function to get stock data by ticker or company name
export const getStockData = (query: string): {
  stockData: StockData;
  newsItems: NewsItem[];
  relatedStocks: RelatedStock[];
  companyDescription: string;
} | null => {
  const lowercaseQuery = query.toLowerCase().trim();
  
  // Check for exact matches first
  if (lowercaseQuery === 'aapl' || lowercaseQuery === 'apple' || lowercaseQuery === 'apple inc') {
    return {
      stockData: appleStockData,
      newsItems: appleNewsItems,
      relatedStocks: appleRelatedStocks,
      companyDescription: appleCompanyDescription
    };
  }
  
  if (lowercaseQuery === 'nvda' || lowercaseQuery === 'nvidia' || lowercaseQuery === 'nvidia corporation') {
    return {
      stockData: nvidiaStockData,
      newsItems: nvidiaNewsItems,
      relatedStocks: nvidiaRelatedStocks,
      companyDescription: nvidiaCompanyDescription
    };
  }
  
  if (lowercaseQuery === 'tsla' || lowercaseQuery === 'tesla' || lowercaseQuery === 'tesla inc') {
    return {
      stockData: teslaStockData,
      newsItems: teslaNewsItems,
      relatedStocks: teslaRelatedStocks,
      companyDescription: teslaCompanyDescription
    };
  }
  
  if (lowercaseQuery === 'w' || lowercaseQuery === 'wayfair' || lowercaseQuery === 'wayfair inc') {
    return {
      stockData: wayfairStockData,
      newsItems: wayfairNewsItems,
      relatedStocks: wayfairRelatedStocks,
      companyDescription: wayfairCompanyDescription
    };
  }
  
  if (lowercaseQuery === 'c' || lowercaseQuery === 'citigroup' || lowercaseQuery === 'citigroup inc') {
    return {
      stockData: citigroupStockData,
      newsItems: citigroupNewsItems,
      relatedStocks: citigroupRelatedStocks,
      companyDescription: citigroupCompanyDescription
    };
  }
  
  return null;
};
