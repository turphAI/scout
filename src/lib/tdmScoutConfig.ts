// tdmScout Local Configuration
export const tdmScoutConfig = {
  // Base API configuration
  apiUrl: process.env.TDM_SCOUT_API_URL || 'http://localhost:8000',
  apiKey: process.env.TDM_SCOUT_API_KEY || 'your_local_api_key_here',
  environment: process.env.TDM_SCOUT_ENVIRONMENT || 'local',
  
  // API endpoints
  endpoints: {
    search: process.env.TDM_SCOUT_SEARCH_ENDPOINT || '/api/search',
    suggestions: process.env.TDM_SCOUT_SUGGESTIONS_ENDPOINT || '/api/suggestions',
    conversation: process.env.TDM_SCOUT_CONVERSATION_ENDPOINT || '/api/conversation',
    ticker: '/api/ticker',
    ask: '/api/ask',
  },
  
  // Request configuration
  requestConfig: {
    timeout: 10000, // 10 seconds
    retries: 3,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
  
  // Feature flags for local development
  features: {
    enableMockData: process.env.NODE_ENV === 'development',
    enableLogging: true,
    enableErrorReporting: false,
  },
};

// Helper function to get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${tdmScoutConfig.apiUrl}${endpoint}`;
};

// Helper function to get request headers
export const getRequestHeaders = (): Record<string, string> => {
  return {
    ...tdmScoutConfig.requestConfig.headers,
    'Authorization': `Bearer ${tdmScoutConfig.apiKey}`,
    'X-Environment': tdmScoutConfig.environment,
  };
};

