// Portfolio data structure for user's base portfolio
// $1.2M total portfolio with 10% cash ($120K) and 90% in 30 positions ($1.08M)

export interface PortfolioPosition {
  ticker: string;
  companyName: string;
  positionType: 'stock' | 'etf' | 'cash';
  category: 'growth' | 'dividend' | 'bond' | 'cash';
  shares: number;
  currentPrice: number;
  marketValue: number;
  allocation: number; // percentage of total portfolio
  dailyChange: number;
  dailyChangePercent: number;
  totalReturn: number;
  totalReturnPercent: number;
  dividendYield?: number;
  sector?: string;
  description?: string;
}

export interface PortfolioSummary {
  totalValue: number;
  totalCost: number;
  totalGainLoss: number;
  totalGainLossPercent: number;
  dailyGainLoss: number;
  dailyGainLossPercent: number;
  cashAllocation: number;
  stockAllocation: number;
  bondAllocation: number;
  positions: PortfolioPosition[];
}

// Growth Stocks (15 positions)
const growthStocks: PortfolioPosition[] = [
  {
    ticker: "AAPL",
    companyName: "Apple Inc",
    positionType: "stock",
    category: "growth",
    shares: 150,
    currentPrice: 232.78,
    marketValue: 34917.00,
    allocation: 2.91,
    dailyChange: -82.50,
    dailyChangePercent: -0.24,
    totalReturn: 5237.55,
    totalReturnPercent: 17.65,
    dividendYield: 0.45,
    sector: "Technology",
    description: "Global technology leader in consumer electronics and software"
  },
  {
    ticker: "MSFT",
    companyName: "Microsoft Corporation",
    positionType: "stock",
    category: "growth",
    shares: 120,
    currentPrice: 522.48,
    marketValue: 62697.60,
    allocation: 5.22,
    dailyChange: 228.00,
    dailyChangePercent: 0.36,
    totalReturn: 12539.52,
    totalReturnPercent: 25.00,
    dividendYield: 0.72,
    sector: "Technology",
    description: "Leading software and cloud services company"
  },
  {
    ticker: "GOOGL",
    companyName: "Alphabet Inc",
    positionType: "stock",
    category: "growth",
    shares: 200,
    currentPrice: 185.50,
    marketValue: 37100.00,
    allocation: 3.09,
    dailyChange: 370.00,
    dailyChangePercent: 1.00,
    totalReturn: 7400.00,
    totalReturnPercent: 24.92,
    sector: "Technology",
    description: "Internet services and technology conglomerate"
  },
  {
    ticker: "AMZN",
    companyName: "Amazon.com Inc",
    positionType: "stock",
    category: "growth",
    shares: 180,
    currentPrice: 230.98,
    marketValue: 41576.40,
    allocation: 3.46,
    dailyChange: 1155.60,
    dailyChangePercent: 2.86,
    totalReturn: 8315.28,
    totalReturnPercent: 25.00,
    sector: "Consumer Discretionary",
    description: "E-commerce and cloud computing giant"
  },
  {
    ticker: "NVDA",
    companyName: "NVIDIA Corporation",
    positionType: "stock",
    category: "growth",
    shares: 100,
    currentPrice: 182.02,
    marketValue: 18202.00,
    allocation: 1.52,
    dailyChange: 48.00,
    dailyChangePercent: 0.26,
    totalReturn: 3640.40,
    totalReturnPercent: 25.00,
    dividendYield: 0.09,
    sector: "Technology",
    description: "Leading GPU manufacturer for gaming and AI"
  },
  {
    ticker: "TSLA",
    companyName: "Tesla Inc",
    positionType: "stock",
    category: "growth",
    shares: 80,
    currentPrice: 335.58,
    marketValue: 26846.40,
    allocation: 2.24,
    dailyChange: -292.00,
    dailyChangePercent: -1.08,
    totalReturn: 5369.28,
    totalReturnPercent: 25.00,
    sector: "Consumer Discretionary",
    description: "Electric vehicle and clean energy company"
  },
  {
    ticker: "META",
    companyName: "Meta Platforms Inc",
    positionType: "stock",
    category: "growth",
    shares: 150,
    currentPrice: 485.00,
    marketValue: 72750.00,
    allocation: 6.06,
    dailyChange: 1455.00,
    dailyChangePercent: 2.05,
    totalReturn: 14550.00,
    totalReturnPercent: 25.00,
    sector: "Technology",
    description: "Social media and technology company"
  },
  {
    ticker: "NFLX",
    companyName: "Netflix Inc",
    positionType: "stock",
    category: "growth",
    shares: 120,
    currentPrice: 678.50,
    marketValue: 81420.00,
    allocation: 6.79,
    dailyChange: 814.20,
    dailyChangePercent: 1.01,
    totalReturn: 16284.00,
    totalReturnPercent: 25.00,
    sector: "Communication Services",
    description: "Streaming entertainment service"
  },
  {
    ticker: "CRM",
    companyName: "Salesforce Inc",
    positionType: "stock",
    category: "growth",
    shares: 200,
    currentPrice: 245.00,
    marketValue: 49000.00,
    allocation: 4.08,
    dailyChange: 490.00,
    dailyChangePercent: 1.01,
    totalReturn: 9800.00,
    totalReturnPercent: 25.00,
    sector: "Technology",
    description: "Cloud-based customer relationship management"
  },
  {
    ticker: "ADBE",
    companyName: "Adobe Inc",
    positionType: "stock",
    category: "growth",
    shares: 100,
    currentPrice: 580.00,
    marketValue: 58000.00,
    allocation: 4.83,
    dailyChange: 580.00,
    dailyChangePercent: 1.01,
    totalReturn: 11600.00,
    totalReturnPercent: 25.00,
    sector: "Technology",
    description: "Creative software and digital media solutions"
  },
  {
    ticker: "PYPL",
    companyName: "PayPal Holdings Inc",
    positionType: "stock",
    category: "growth",
    shares: 300,
    currentPrice: 65.00,
    marketValue: 19500.00,
    allocation: 1.63,
    dailyChange: 195.00,
    dailyChangePercent: 1.01,
    totalReturn: 3900.00,
    totalReturnPercent: 25.00,
    sector: "Technology",
    description: "Digital payments and financial services"
  },
  {
    ticker: "UBER",
    companyName: "Uber Technologies Inc",
    positionType: "stock",
    category: "growth",
    shares: 400,
    currentPrice: 75.00,
    marketValue: 30000.00,
    allocation: 2.50,
    dailyChange: 300.00,
    dailyChangePercent: 1.01,
    totalReturn: 6000.00,
    totalReturnPercent: 25.00,
    sector: "Technology",
    description: "Ride-sharing and food delivery platform"
  },
  {
    ticker: "SQ",
    companyName: "Block Inc",
    positionType: "stock",
    category: "growth",
    shares: 500,
    currentPrice: 45.00,
    marketValue: 22500.00,
    allocation: 1.88,
    dailyChange: 225.00,
    dailyChangePercent: 1.01,
    totalReturn: 4500.00,
    totalReturnPercent: 25.00,
    sector: "Technology",
    description: "Financial services and mobile payment company"
  },
  {
    ticker: "ZM",
    companyName: "Zoom Video Communications",
    positionType: "stock",
    category: "growth",
    shares: 300,
    currentPrice: 65.00,
    marketValue: 19500.00,
    allocation: 1.63,
    dailyChange: 195.00,
    dailyChangePercent: 1.01,
    totalReturn: 3900.00,
    totalReturnPercent: 25.00,
    sector: "Technology",
    description: "Video communications platform"
  },
  {
    ticker: "SNOW",
    companyName: "Snowflake Inc",
    positionType: "stock",
    category: "growth",
    shares: 150,
    currentPrice: 180.00,
    marketValue: 27000.00,
    allocation: 2.25,
    dailyChange: 270.00,
    dailyChangePercent: 1.01,
    totalReturn: 5400.00,
    totalReturnPercent: 25.00,
    sector: "Technology",
    description: "Cloud-based data warehousing platform"
  }
];

// Dividend Stocks (12 positions)
const dividendStocks: PortfolioPosition[] = [
  {
    ticker: "JNJ",
    companyName: "Johnson & Johnson",
    positionType: "stock",
    category: "dividend",
    shares: 200,
    currentPrice: 165.00,
    marketValue: 33000.00,
    allocation: 2.75,
    dailyChange: 165.00,
    dailyChangePercent: 0.50,
    totalReturn: 6600.00,
    totalReturnPercent: 25.00,
    dividendYield: 3.15,
    sector: "Healthcare",
    description: "Healthcare products and pharmaceuticals"
  },
  {
    ticker: "PG",
    companyName: "Procter & Gamble Co",
    positionType: "stock",
    category: "dividend",
    shares: 250,
    currentPrice: 155.00,
    marketValue: 38750.00,
    allocation: 3.23,
    dailyChange: 193.75,
    dailyChangePercent: 0.50,
    totalReturn: 7750.00,
    totalReturnPercent: 25.00,
    dividendYield: 2.45,
    sector: "Consumer Staples",
    description: "Consumer goods and household products"
  },
  {
    ticker: "KO",
    companyName: "Coca-Cola Co",
    positionType: "stock",
    category: "dividend",
    shares: 400,
    currentPrice: 60.00,
    marketValue: 24000.00,
    allocation: 2.00,
    dailyChange: 120.00,
    dailyChangePercent: 0.50,
    totalReturn: 4800.00,
    totalReturnPercent: 25.00,
    dividendYield: 3.20,
    sector: "Consumer Staples",
    description: "Beverage and refreshment company"
  },
  {
    ticker: "PEP",
    companyName: "PepsiCo Inc",
    positionType: "stock",
    category: "dividend",
    shares: 300,
    currentPrice: 175.00,
    marketValue: 52500.00,
    allocation: 4.38,
    dailyChange: 262.50,
    dailyChangePercent: 0.50,
    totalReturn: 10500.00,
    totalReturnPercent: 25.00,
    dividendYield: 2.85,
    sector: "Consumer Staples",
    description: "Beverages and convenient foods"
  },
  {
    ticker: "JPM",
    companyName: "JPMorgan Chase & Co",
    positionType: "stock",
    category: "dividend",
    shares: 200,
    currentPrice: 178.90,
    marketValue: 35780.00,
    allocation: 2.98,
    dailyChange: 178.90,
    dailyChangePercent: 0.50,
    totalReturn: 7156.00,
    totalReturnPercent: 25.00,
    dividendYield: 2.35,
    sector: "Financial Services",
    description: "Global financial services company"
  },
  {
    ticker: "BAC",
    companyName: "Bank of America Corp",
    positionType: "stock",
    category: "dividend",
    shares: 800,
    currentPrice: 42.89,
    marketValue: 34312.00,
    allocation: 2.86,
    dailyChange: 88.00,
    dailyChangePercent: 0.26,
    totalReturn: 6664.00,
    totalReturnPercent: 24.10,
    dividendYield: 2.24,
    sector: "Financial Services",
    description: "Banking and financial services"
  },
  {
    ticker: "WMT",
    companyName: "Walmart Inc",
    positionType: "stock",
    category: "dividend",
    shares: 300,
    currentPrice: 67.89,
    marketValue: 20367.00,
    allocation: 1.70,
    dailyChange: 101.84,
    dailyChangePercent: 0.50,
    totalReturn: 4073.40,
    totalReturnPercent: 25.00,
    dividendYield: 1.45,
    sector: "Consumer Staples",
    description: "Retail and e-commerce company"
  },
  {
    ticker: "HD",
    companyName: "Home Depot Inc",
    positionType: "stock",
    category: "dividend",
    shares: 100,
    currentPrice: 345.67,
    marketValue: 34567.00,
    allocation: 2.88,
    dailyChange: 172.84,
    dailyChangePercent: 0.50,
    totalReturn: 6913.40,
    totalReturnPercent: 25.00,
    dividendYield: 2.35,
    sector: "Consumer Discretionary",
    description: "Home improvement retailer"
  },
  {
    ticker: "CVX",
    companyName: "Chevron Corporation",
    positionType: "stock",
    category: "dividend",
    shares: 200,
    currentPrice: 145.00,
    marketValue: 29000.00,
    allocation: 2.42,
    dailyChange: 145.00,
    dailyChangePercent: 0.50,
    totalReturn: 5800.00,
    totalReturnPercent: 25.00,
    dividendYield: 4.15,
    sector: "Energy",
    description: "Integrated energy company"
  },
  {
    ticker: "XOM",
    companyName: "Exxon Mobil Corporation",
    positionType: "stock",
    category: "dividend",
    shares: 250,
    currentPrice: 120.00,
    marketValue: 30000.00,
    allocation: 2.50,
    dailyChange: 150.00,
    dailyChangePercent: 0.50,
    totalReturn: 6000.00,
    totalReturnPercent: 25.00,
    dividendYield: 3.85,
    sector: "Energy",
    description: "Oil and gas exploration and production"
  },
  {
    ticker: "VZ",
    companyName: "Verizon Communications",
    positionType: "stock",
    category: "dividend",
    shares: 600,
    currentPrice: 40.00,
    marketValue: 24000.00,
    allocation: 2.00,
    dailyChange: 120.00,
    dailyChangePercent: 0.50,
    totalReturn: 4800.00,
    totalReturnPercent: 25.00,
    dividendYield: 6.75,
    sector: "Communication Services",
    description: "Telecommunications services"
  },
  {
    ticker: "T",
    companyName: "AT&T Inc",
    positionType: "stock",
    category: "dividend",
    shares: 800,
    currentPrice: 18.50,
    marketValue: 14800.00,
    allocation: 1.23,
    dailyChange: 74.00,
    dailyChangePercent: 0.50,
    totalReturn: 2960.00,
    totalReturnPercent: 25.00,
    dividendYield: 6.50,
    sector: "Communication Services",
    description: "Telecommunications and media company"
  }
];

// Bond ETFs (3 positions)
const bondETFs: PortfolioPosition[] = [
  {
    ticker: "BND",
    companyName: "Vanguard Total Bond Market ETF",
    positionType: "etf",
    category: "bond",
    shares: 500,
    currentPrice: 72.50,
    marketValue: 36250.00,
    allocation: 3.02,
    dailyChange: 72.50,
    dailyChangePercent: 0.20,
    totalReturn: 7250.00,
    totalReturnPercent: 25.00,
    dividendYield: 3.85,
    sector: "Fixed Income",
    description: "Broad exposure to U.S. investment-grade bonds"
  },
  {
    ticker: "AGG",
    companyName: "iShares Core U.S. Aggregate Bond ETF",
    positionType: "etf",
    category: "bond",
    shares: 400,
    currentPrice: 95.00,
    marketValue: 38000.00,
    allocation: 3.17,
    dailyChange: 76.00,
    dailyChangePercent: 0.20,
    totalReturn: 7600.00,
    totalReturnPercent: 25.00,
    dividendYield: 3.95,
    sector: "Fixed Income",
    description: "Core U.S. investment-grade bond exposure"
  },
  {
    ticker: "TLT",
    companyName: "iShares 20+ Year Treasury Bond ETF",
    positionType: "etf",
    category: "bond",
    shares: 200,
    currentPrice: 95.00,
    marketValue: 19000.00,
    allocation: 1.58,
    dailyChange: 38.00,
    dailyChangePercent: 0.20,
    totalReturn: 3800.00,
    totalReturnPercent: 25.00,
    dividendYield: 4.25,
    sector: "Fixed Income",
    description: "Long-term U.S. Treasury bond exposure"
  }
];

// Cash Position
const cashPosition: PortfolioPosition = {
  ticker: "CASH",
  companyName: "Cash & Money Market",
  positionType: "cash",
  category: "cash",
  shares: 1,
  currentPrice: 120000.00,
  marketValue: 120000.00,
  allocation: 10.00,
  dailyChange: 0.00,
  dailyChangePercent: 0.00,
  totalReturn: 5400.00, // 4.5% annual return
  totalReturnPercent: 4.50,
  dividendYield: 4.50,
  sector: "Cash",
  description: "Cash position earning 4.5% annual interest"
};

// Combine all positions
export const portfolioPositions: PortfolioPosition[] = [
  ...growthStocks,
  ...dividendStocks,
  ...bondETFs,
  cashPosition
];

// Calculate portfolio summary
export const portfolioSummary: PortfolioSummary = {
  totalValue: 1200000.00,
  totalCost: 960000.00, // Assuming 25% total return across portfolio
  totalGainLoss: 240000.00,
  totalGainLossPercent: 25.00,
  dailyGainLoss: 4800.00,
  dailyGainLossPercent: 0.40,
  cashAllocation: 10.00,
  stockAllocation: 85.40, // 85.4% in stocks (growth + dividend)
  bondAllocation: 4.60, // 4.6% in bonds
  positions: portfolioPositions
};

// Helper function to get portfolio data
export const getPortfolioData = () => {
  return {
    summary: portfolioSummary,
    positions: portfolioPositions
  };
};

// Helper function to get positions by category
export const getPositionsByCategory = (category: 'growth' | 'dividend' | 'bond' | 'cash') => {
  return portfolioPositions.filter(position => position.category === category);
};

// Helper function to get allocation by category
export const getAllocationByCategory = () => {
  const categories = ['growth', 'dividend', 'bond', 'cash'];
  const allocations: { [key: string]: number } = {};
  
  categories.forEach(category => {
    const positions = getPositionsByCategory(category as 'growth' | 'dividend' | 'bond' | 'cash');
    allocations[category] = positions.reduce((sum, pos) => sum + pos.allocation, 0);
  });
  
  return allocations;
};


