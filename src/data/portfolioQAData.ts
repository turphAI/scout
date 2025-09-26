// Portfolio Q&A data structure for static question/answer responses
// This provides contextual responses based on the portfolio view the user is on

export interface PortfolioQuestion {
  id: string;
  question: string;
  context: 'portfolio-summary' | 'portfolio-positions';
  answer: string;
  supportingData: SupportingData;
  searchSuggestions: SearchSuggestion[];
  conversationPills: ConversationPill[];
}

export interface SupportingData {
  summary: string;
  details: string[];
  metrics?: PortfolioMetric[];
  positions?: PositionDetail[];
  charts?: ChartData[];
}

export interface PortfolioMetric {
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
}

export interface PositionDetail {
  symbol: string;
  name: string;
  value: number;
  allocation: number;
  performance: string;
  additionalInfo?: string;
}

export interface ChartData {
  type: 'performance' | 'allocation' | 'risk';
  title: string;
  description: string;
}

export interface SearchSuggestion {
  title: string;
  description: string;
  url: string;
  type: 'page' | 'report' | 'tool';
}

export interface ConversationPill {
  text: string;
  questionId?: string;
  context: 'portfolio-summary' | 'portfolio-positions';
}

// Static Q&A library for portfolio questions with complete responses
export const portfolioQuestions: PortfolioQuestion[] = [
  // Portfolio Summary Questions
  {
    id: 'performance-overview',
    question: 'How are my investments performing?',
    context: 'portfolio-summary',
    answer: 'Your portfolio is showing strong performance with a total return of $156,847 (15.1%) year-to-date. Your top performers include MSFT (+25.0%), NVDA (+24.9%), and GOOGL (+24.9%). The portfolio has outperformed the S&P 500 by 3.2% this year. Your technology sector positions are driving most of the gains, while your dividend stocks provide steady income.',
    supportingData: {
      summary: 'Portfolio up 15.1% YTD, outperforming S&P 500 by 3.2%',
      details: [
        'Total portfolio value: $1,200,000',
        'Year-to-date gain: $156,847 (15.1%)',
        'S&P 500 comparison: +11.9% vs your +15.1%',
        'Technology sector: +22.4% (driving gains)',
        'Dividend income: $8,400 annually',
        'Cash allocation: 10% ($120,000)',
        'Stock allocation: 85% ($1,020,000)',
        'Bond allocation: 5% ($60,000)'
      ],
      metrics: [
        { label: 'Total Return YTD', value: '$156,847', change: '+15.1%', changeType: 'positive' },
        { label: 'Daily Change', value: '$27,600', change: '+2.3%', changeType: 'positive' },
        { label: 'S&P 500 Beat', value: '3.2%', change: 'Outperforming', changeType: 'positive' },
        { label: 'Top Sector', value: 'Technology', change: '+22.4%', changeType: 'positive' }
      ],
      positions: [
        { symbol: 'MSFT', name: 'Microsoft Corp', value: 62697.60, allocation: 5.22, performance: '+25.0% YTD' },
        { symbol: 'NVDA', name: 'NVIDIA Corp', value: 58950.00, allocation: 4.91, performance: '+24.9% YTD' },
        { symbol: 'GOOGL', name: 'Alphabet Inc', value: 37100.00, allocation: 3.09, performance: '+24.9% YTD' },
        { symbol: 'AMZN', name: 'Amazon.com Inc', value: 41576.40, allocation: 3.46, performance: '+25.0% YTD' }
      ]
    },
    searchSuggestions: [
      {
        title: 'Performance Report',
        description: 'Detailed monthly and quarterly performance analysis',
        url: '/reports/performance',
        type: 'report'
      },
      {
        title: 'Sector Analysis',
        description: 'Breakdown of performance by sector and allocation',
        url: '/analysis/sectors',
        type: 'report'
      },
      {
        title: 'Benchmark Comparison',
        description: 'Compare your portfolio to major indices',
        url: '/analysis/benchmarks',
        type: 'tool'
      }
    ],
    conversationPills: [
      { text: 'What\'s driving today\'s gains?', context: 'portfolio-summary' },
      { text: 'Should I rebalance my portfolio?', context: 'portfolio-summary' },
      { text: 'What are my top performing holdings?', context: 'portfolio-summary' },
      { text: 'How can I improve my diversification?', context: 'portfolio-summary' }
    ]
  },
  {
    id: 'risk-assessment',
    question: 'Which of my investments has high risk?',
    context: 'portfolio-summary',
    answer: 'Your highest risk investments include NVDA (Beta: 1.8), TSLA (Beta: 2.1), and AMD (Beta: 1.9). These growth stocks have higher volatility but also higher growth potential. Your portfolio has a weighted average beta of 1.2, which is moderately aggressive. Consider reviewing your allocation to these positions if you want to reduce overall portfolio risk.',
    supportingData: {
      summary: 'Portfolio beta: 1.2 (moderately aggressive), 3 high-risk positions identified',
      details: [
        'Weighted average portfolio beta: 1.2',
        'High-risk threshold: Beta > 1.5',
        'Number of high-risk positions: 3',
        'High-risk allocation: 12.3% of portfolio',
        'Risk-adjusted return: 12.6% (good)',
        'Volatility: 18.2% (above market average)',
        'Maximum drawdown: -8.4% (manageable)',
        'Risk tolerance: Moderate to aggressive'
      ],
      metrics: [
        { label: 'Portfolio Beta', value: '1.2', change: 'Moderate Risk', changeType: 'neutral' },
        { label: 'High-Risk Positions', value: '3', change: '12.3% allocation', changeType: 'negative' },
        { label: 'Volatility', value: '18.2%', change: 'Above market', changeType: 'negative' },
        { label: 'Risk-Adjusted Return', value: '12.6%', change: 'Good', changeType: 'positive' }
      ],
      positions: [
        { symbol: 'TSLA', name: 'Tesla Inc', value: 41576.40, allocation: 3.46, performance: '+18.2% YTD', additionalInfo: 'Beta: 2.1 (Very High Risk)' },
        { symbol: 'NVDA', name: 'NVIDIA Corp', value: 58950.00, allocation: 4.91, performance: '+24.9% YTD', additionalInfo: 'Beta: 1.8 (High Risk)' },
        { symbol: 'AMD', name: 'Advanced Micro Devices', value: 29680.00, allocation: 2.47, performance: '+15.8% YTD', additionalInfo: 'Beta: 1.9 (High Risk)' }
      ]
    },
    searchSuggestions: [
      {
        title: 'Risk Analysis Report',
        description: 'Comprehensive risk assessment and recommendations',
        url: '/reports/risk-analysis',
        type: 'report'
      },
      {
        title: 'Portfolio Rebalancing',
        description: 'Tools to adjust your risk allocation',
        url: '/tools/rebalancing',
        type: 'tool'
      },
      {
        title: 'Risk Tolerance Assessment',
        description: 'Evaluate your personal risk tolerance',
        url: '/assessment/risk-tolerance',
        type: 'tool'
      }
    ],
    conversationPills: [
      { text: 'How can I reduce my portfolio risk?', context: 'portfolio-summary' },
      { text: 'What\'s my risk tolerance?', context: 'portfolio-summary' },
      { text: 'Should I sell my high-risk stocks?', context: 'portfolio-summary' },
      { text: 'What\'s a good risk allocation?', context: 'portfolio-summary' }
    ]
  },
  
  // Portfolio Positions Questions
  {
    id: 'dividend-stocks',
    question: 'Which of my stocks pay dividends?',
    context: 'portfolio-positions',
    answer: 'You have 8 dividend-paying stocks in your portfolio: JNJ (2.8% yield), PG (2.5% yield), KO (3.1% yield), VZ (7.2% yield), T (6.8% yield), BAC (2.9% yield), WFC (3.2% yield), and XOM (3.4% yield). These positions provide approximately $8,400 in annual dividend income. Your highest yielding positions are VZ and T, though they also carry higher risk.',
    supportingData: {
      summary: '8 dividend stocks generating $8,400 annually, average yield 3.9%',
      details: [
        'Total dividend income: $8,400 annually',
        'Average dividend yield: 3.9%',
        'Number of dividend stocks: 8',
        'Dividend allocation: 28% of portfolio',
        'Highest yield: VZ at 7.2%',
        'Lowest yield: PG at 2.5%',
        'Quarterly payments: 6 stocks',
        'Monthly payments: 2 stocks',
        'Dividend growth rate: 5.2% average'
      ],
      metrics: [
        { label: 'Total Dividend Income', value: '$8,400', change: 'Annually', changeType: 'positive' },
        { label: 'Average Yield', value: '3.9%', change: 'Above market', changeType: 'positive' },
        { label: 'Dividend Stocks', value: '8', change: '28% of portfolio', changeType: 'positive' },
        { label: 'Growth Rate', value: '5.2%', change: 'Annual average', changeType: 'positive' }
      ],
      positions: [
        { symbol: 'VZ', name: 'Verizon Communications', value: 45600.00, allocation: 3.80, performance: '+2.1% YTD', additionalInfo: 'Yield: 7.2%, Monthly payments' },
        { symbol: 'T', name: 'AT&T Inc', value: 38400.00, allocation: 3.20, performance: '+1.8% YTD', additionalInfo: 'Yield: 6.8%, Quarterly payments' },
        { symbol: 'XOM', name: 'Exxon Mobil Corp', value: 31200.00, allocation: 2.60, performance: '+8.4% YTD', additionalInfo: 'Yield: 3.4%, Quarterly payments' },
        { symbol: 'KO', name: 'Coca-Cola Co', value: 28800.00, allocation: 2.40, performance: '+3.2% YTD', additionalInfo: 'Yield: 3.1%, Quarterly payments' }
      ]
    },
    searchSuggestions: [
      {
        title: 'Dividend Calendar',
        description: 'Track upcoming dividend payments and ex-dates',
        url: '/dividends/calendar',
        type: 'tool'
      },
      {
        title: 'Dividend Reinvestment',
        description: 'Set up automatic dividend reinvestment',
        url: '/dividends/reinvestment',
        type: 'tool'
      },
      {
        title: 'Dividend Growth Analysis',
        description: 'Analyze dividend growth trends',
        url: '/analysis/dividend-growth',
        type: 'report'
      }
    ],
    conversationPills: [
      { text: 'Should I reinvest my dividends?', context: 'portfolio-positions' },
      { text: 'What\'s my dividend growth rate?', context: 'portfolio-positions' },
      { text: 'Are my dividend yields sustainable?', context: 'portfolio-positions' },
      { text: 'How do dividends affect my taxes?', context: 'portfolio-positions' }
    ]
  },
  {
    id: 'ai-stocks',
    question: 'Do I have any AI stocks?',
    context: 'portfolio-positions',
    answer: 'Yes, you have several AI-focused stocks in your portfolio: NVDA (AI chips and computing), MSFT (AI integration in Office and Azure), GOOGL (AI research and Google AI), META (AI for social media and advertising), and AMZN (AI for AWS and Alexa). These positions represent about 18% of your total portfolio and have been strong performers, with NVDA leading the group.',
    supportingData: {
      summary: '5 AI stocks representing 18% of portfolio, strong performance drivers',
      details: [
        'AI stock allocation: 18% of portfolio',
        'Number of AI positions: 5',
        'Total AI value: $216,000',
        'AI performance YTD: +22.4%',
        'AI vs portfolio: +7.3% outperformance',
        'Largest AI position: NVDA at 4.91%',
        'AI sector focus: Technology and Cloud',
        'AI revenue exposure: 15-40% per company',
        'AI investment trend: Increasing allocation'
      ],
      metrics: [
        { label: 'AI Allocation', value: '18%', change: 'Of portfolio', changeType: 'positive' },
        { label: 'AI Performance', value: '+22.4%', change: 'YTD', changeType: 'positive' },
        { label: 'AI Outperformance', value: '+7.3%', change: 'vs portfolio', changeType: 'positive' },
        { label: 'AI Positions', value: '5', change: 'Stocks', changeType: 'positive' }
      ],
      positions: [
        { symbol: 'NVDA', name: 'NVIDIA Corp', value: 58950.00, allocation: 4.91, performance: '+24.9% YTD', additionalInfo: 'AI chips, 40% AI revenue' },
        { symbol: 'MSFT', name: 'Microsoft Corp', value: 62697.60, allocation: 5.22, performance: '+25.0% YTD', additionalInfo: 'Azure AI, Office AI, 25% AI revenue' },
        { symbol: 'GOOGL', name: 'Alphabet Inc', value: 37100.00, allocation: 3.09, performance: '+24.9% YTD', additionalInfo: 'Google AI, 20% AI revenue' },
        { symbol: 'META', name: 'Meta Platforms', value: 38400.00, allocation: 3.20, performance: '+18.2% YTD', additionalInfo: 'Social AI, 15% AI revenue' }
      ]
    },
    searchSuggestions: [
      {
        title: 'AI Investment Guide',
        description: 'Understanding AI stocks and investment strategies',
        url: '/guides/ai-investing',
        type: 'page'
      },
      {
        title: 'Technology Sector Report',
        description: 'Analysis of tech sector including AI trends',
        url: '/reports/technology-sector',
        type: 'report'
      },
      {
        title: 'AI Stock Screener',
        description: 'Find and analyze AI-focused investments',
        url: '/tools/ai-screener',
        type: 'tool'
      }
    ],
    conversationPills: [
      { text: 'Should I add more AI stocks?', context: 'portfolio-positions' },
      { text: 'What\'s the AI investment outlook?', context: 'portfolio-positions' },
      { text: 'How do AI stocks compare to traditional tech?', context: 'portfolio-positions' },
      { text: 'What are the risks of AI investing?', context: 'portfolio-positions' }
    ]
  },
  // BAC-specific question
  {
    id: 'bac-positions',
    context: 'portfolio-positions',
    question: 'Show me my BAC positions',
    answer: 'Here are your current positions in Bank of America (BAC):',
    supportingData: {
      summary: "Your BAC position is worth $34,312 with a total gain of $6,664 (+24.10%)",
      details: [
        "800 shares of Bank of America Corporation",
        "Current price: $42.89 per share",
        "Total value: $34,312",
        "Portfolio allocation: 2.86%",
        "Dividend yield: 2.24%"
      ],
      positions: [
        { 
          symbol: 'BAC', 
          name: 'Bank of America Corp', 
          value: 34312.00, 
          allocation: 2.86, 
          performance: '+24.10% total return', 
          additionalInfo: '800 shares at $42.89, dividend yield 2.24%' 
        }
      ]
    },
    searchSuggestions: [
      {
        title: 'Banking Sector Analysis',
        description: 'Understanding banking stocks and financial services',
        url: '/guides/banking-sector',
        type: 'page'
      },
      {
        title: 'Dividend Stock Guide',
        description: 'How to evaluate dividend-paying stocks',
        url: '/guides/dividend-stocks',
        type: 'page'
      }
    ],
    conversationPills: [
      { text: 'Should I add more BAC shares?', context: 'portfolio-positions' },
      { text: 'How is BAC performing vs other banks?', context: 'portfolio-positions' },
      { text: 'What\'s BAC\'s dividend outlook?', context: 'portfolio-positions' },
      { text: 'Should I sell my BAC position?', context: 'portfolio-positions' }
    ]
  },
  // BAC profit question
  {
    id: 'bac-profit',
    context: 'portfolio-positions',
    question: 'How much money did I make on Bank of America',
    answer: 'You have made $6,664 in total profit on your Bank of America (BAC) position, representing a 24.10% return on your investment.',
    supportingData: {
      summary: "Total profit: $6,664 (+24.10% return) on 800 shares of BAC",
      details: [
        "Initial investment: $27,648 (800 shares × $34.56 average cost)",
        "Current value: $34,312 (800 shares × $42.89 current price)",
        "Total gain: $6,664",
        "Return percentage: 24.10%",
        "Daily gain today: $88 (+0.26%)"
      ],
      positions: [
        { 
          symbol: 'BAC', 
          name: 'Bank of America Corp', 
          value: 34312.00, 
          allocation: 2.86, 
          performance: '+$6,664 total profit (+24.10%)', 
          additionalInfo: '800 shares, cost basis $34.56/share, current $42.89/share' 
        }
      ]
    },
    searchSuggestions: [
      {
        title: 'Realized vs Unrealized Gains',
        description: 'Understanding different types of investment gains',
        url: '/guides/realized-gains',
        type: 'page'
      },
      {
        title: 'Tax Implications of Stock Gains',
        description: 'How stock profits affect your taxes',
        url: '/guides/stock-taxes',
        type: 'page'
      }
    ],
    conversationPills: [
      { text: 'Should I sell my BAC shares to lock in profits?', context: 'portfolio-positions' },
      { text: 'What are the tax implications of selling BAC?', context: 'portfolio-positions' },
      { text: 'How does BAC compare to other bank stocks?', context: 'portfolio-positions' },
      { text: 'Should I take some profits and keep some shares?', context: 'portfolio-positions' }
    ]
  }
];

// Helper function to find questions by context
export const getQuestionsByContext = (context: 'portfolio-summary' | 'portfolio-positions'): PortfolioQuestion[] => {
  return portfolioQuestions.filter(q => q.context === context);
};

// Helper function to find a specific question by text (for matching user input)
export const findQuestionByText = (text: string, context: 'portfolio-summary' | 'portfolio-positions'): PortfolioQuestion | null => {
  const contextQuestions = getQuestionsByContext(context);
  
  // Simple keyword matching for prototype purposes
  const lowerText = text.toLowerCase();
  
  for (const question of contextQuestions) {
    const questionWords = question.question.toLowerCase().split(' ');
    const textWords = lowerText.split(' ');
    
    // Check if key words from the question appear in the user's text
    const matchCount = questionWords.filter(word => 
      word.length > 3 && textWords.some(textWord => textWord.includes(word))
    ).length;
    
    // If more than 2 key words match, consider it a match
    if (matchCount >= 2) {
      return question;
    }
  }
  
  return null;
};
