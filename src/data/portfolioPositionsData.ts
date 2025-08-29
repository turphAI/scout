// Portfolio positions data structure based on the provided data

export interface PositionMarketValueDetail {
  marketVal: number;
  totalGainLoss: number;
  __typename: string;
}

export interface PositionSecurityDetail {
  isLoaned: boolean | null;
  isHardToBorrow: boolean | null;
  bondDetail: unknown | null;
  __typename: string;
}

export interface PositionDetail {
  symbol: string | null;
  cusip: string;
  holdingPct: number;
  optionUnderlyingSymbol: string | null;
  securityType: string;
  securitySubType: string;
  hasIntradayPricingInd: boolean | null;
  marketValDetail: PositionMarketValueDetail;
  securityDetail: PositionSecurityDetail;
  securityDescription: string;
  quantity: number;
  __typename: string;
}

export interface PositionDetails {
  positionDetail: PositionDetail[];
  __typename: string;
}

export interface PositionAccountDetail {
  acctNum: string;
  positionDetails: PositionDetails | null;
  __typename: string;
}

// Mock data for additional fields that need to be generated
export interface EnhancedPositionDetail extends PositionDetail {
  lastPrice: number;
  todaysGainLoss: number;
  todaysGainLossPercent: number;
  costBasis: number;
  costBasisPerShare: number;
  weekRangeLow: number;
  weekRangeHigh: number;
  currentPriceInRange: number;
}

export interface EnhancedPositionAccountDetail extends PositionAccountDetail {
  accountName: string;
  accountType: string;
  totalValue: number;
  totalGainLoss: number;
  totalGainLossPercent: number;
  enhancedPositionDetails?: EnhancedPositionDetail[];
}

// Simple seeded random function for consistent results
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Raw data from the user - reordered to match sidebar order
export const rawPortfolioPositionsData: PositionAccountDetail[] = [
  {
    acctNum: "X21985452",
    positionDetails: {
      positionDetail: [
        {
          symbol: "BAC",
          cusip: "060505104",
          holdingPct: 9.2683,
          optionUnderlyingSymbol: null,
          securityType: "Equity",
          securitySubType: "Common Stock",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 9488.73,
            totalGainLoss: 4772.76,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "BANK AMERICA CORP COM",
          quantity: 202.146,
          __typename: "PositionDetail2",
        },
        {
          symbol: "FUTY",
          cusip: "316092865",
          holdingPct: 11.0138,
          optionUnderlyingSymbol: null,
          securityType: "Exchange Traded",
          securitySubType: "Exchange Traded Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 11275.7,
            totalGainLoss: 4373.05,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FIDELITY MSCI UTILS INDEX ETF",
          quantity: 204.196,
          __typename: "PositionDetail2",
        },
        {
          symbol: "QQQ",
          cusip: "46090E103",
          holdingPct: 56.3929,
          optionUnderlyingSymbol: null,
          securityType: "Exchange Traded",
          securitySubType: "Exchange Traded Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 57734,
            totalGainLoss: 31561.25,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "INVESCO QQQ TR UNIT SER 1",
          quantity: 100,
          __typename: "PositionDetail2",
        },
        {
          symbol: "JNJ",
          cusip: "478160104",
          holdingPct: 43.1342,
          optionUnderlyingSymbol: null,
          securityType: "Equity",
          securitySubType: "Common Stock",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 44160,
            totalGainLoss: 30276.75,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "JOHNSON &JOHNSON COM",
          quantity: 250,
          __typename: "PositionDetail2",
        },
        {
          symbol: "L",
          cusip: "540424108",
          holdingPct: 9.2793,
          optionUnderlyingSymbol: null,
          securityType: "Equity",
          securitySubType: "Common Stock",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 9500,
            totalGainLoss: 4825.05,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "LOEWS CORP COM USD0.01",
          quantity: 100,
          __typename: "PositionDetail2",
        },
      ],
      __typename: "PositionDetails",
    },
    __typename: "PositionAccountDetail",
  },
  {
    acctNum: "137472653",
    positionDetails: {
      positionDetail: [
        {
          symbol: "T",
          cusip: "00206R102",
          holdingPct: 4.8978,
          optionUnderlyingSymbol: null,
          securityType: "Equity",
          securitySubType: "Common Stock",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 5774,
            totalGainLoss: 31.35,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "AT&T INC COM USD1",
          quantity: 200,
          __typename: "PositionDetail2",
        },
        {
          symbol: "FFFFX",
          cusip: "315792101",
          holdingPct: 50.0606,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 59016,
            totalGainLoss: 16016,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FIDELITY FREEDOM 2040",
          quantity: 4589.114,
          __typename: "PositionDetail2",
        },
        {
          symbol: "FCNTX",
          cusip: "316071109",
          holdingPct: 12.7659,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 15049.57,
            totalGainLoss: 5049.57,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FIDELITY CONTRAFUND",
          quantity: 619.579,
          __typename: "PositionDetail2",
        },
        {
          symbol: "SPAXX",
          cusip: "31617H102",
          holdingPct: 2.0128,
          optionUnderlyingSymbol: null,
          securityType: "Core",
          securitySubType: "Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 2372.82,
            totalGainLoss: 2372.82,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FIDELITY GOVERNMENT MONEY MARKET",
          quantity: 2372.82,
          __typename: "PositionDetail2",
        },
        {
          symbol: "FMAGX",
          cusip: "316184100",
          holdingPct: 8.6839,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 10237.36,
            totalGainLoss: 2749.1,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FIDELITY MAGELLAN",
          quantity: 637.842,
          __typename: "PositionDetail2",
        },
        {
          symbol: "FBGRX",
          cusip: "316389303",
          holdingPct: 12.9234,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 15235.32,
            totalGainLoss: 6878.29,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FIDELITY BLUE CHIP GROWTH",
          quantity: 60.283,
          __typename: "PositionDetail2",
        },
        {
          symbol: "F",
          cusip: "345370860",
          holdingPct: 0.9704,
          optionUnderlyingSymbol: null,
          securityType: "Equity",
          securitySubType: "Common Stock",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 1144,
            totalGainLoss: 1144,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FORD MTR CO DEL COM",
          quantity: 100,
          __typename: "PositionDetail2",
        },
        {
          symbol: "SBUX",
          cusip: "855244109",
          holdingPct: 7.6852,
          optionUnderlyingSymbol: null,
          securityType: "Equity",
          securitySubType: "Common Stock",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 9060,
            totalGainLoss: 2544.05,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "STARBUCKS CORP COM USD0.001",
          quantity: 100,
          __typename: "PositionDetail2",
        },
      ],
      __typename: "PositionDetails",
    },
    __typename: "PositionAccountDetail",
  },
  {
    acctNum: "138490623",
    positionDetails: {
      positionDetail: [
        {
          symbol: null,
          cusip: "016077109",
          holdingPct: 0,
          optionUnderlyingSymbol: null,
          securityType: "Equity",
          securitySubType: "Common Stock",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 0,
            totalGainLoss: -5453.16,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "ALHAMBRA GRANTFORK TEL CO",
          quantity: 35,
          __typename: "PositionDetail2",
        },
        {
          symbol: null,
          cusip: "017175100",
          holdingPct: 0,
          optionUnderlyingSymbol: null,
          securityType: "Equity",
          securitySubType: "Common Stock",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 0,
            totalGainLoss: -5587.03,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "ALLEGHANY CORP MD COM *CASH MERGER AT $ 848.02*",
          quantity: 10,
          __typename: "PositionDetail2",
        },
        {
          symbol: "BAC",
          cusip: "060505104",
          holdingPct: 10.5951,
          optionUnderlyingSymbol: null,
          securityType: "Equity",
          securitySubType: "Common Stock",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 9388,
            totalGainLoss: 4499.35,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "BANK AMERICA CORP COM",
          quantity: 200,
          __typename: "PositionDetail2",
        },
        {
          symbol: "FLATX",
          cusip: "315910844",
          holdingPct: 0,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 0,
            totalGainLoss: -6251.38,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FIDELITY LATIN AMERICA",
          quantity: 305.542,
          __typename: "PositionDetail2",
        },
        {
          symbol: null,
          cusip: "315911701",
          holdingPct: 0,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 0,
            totalGainLoss: -450,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FIDELITY 500 INDEX PREMIUM CLASS",
          quantity: 239.243,
          __typename: "PositionDetail2",
        },
        {
          symbol: "SPAXX",
          cusip: "31617H102",
          holdingPct: 33.6733,
          optionUnderlyingSymbol: null,
          securityType: "Core",
          securitySubType: "Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 29836.99,
            totalGainLoss: 29836.99,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FIDELITY GOVERNMENT MONEY MARKET",
          quantity: 29836.99,
          __typename: "PositionDetail2",
        },
        {
          symbol: "FBIOX",
          cusip: "316390772",
          holdingPct: 5.9544,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 5276.05,
            totalGainLoss: 276.05,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FIDELITY SELECT BIOTECHNOLOGY",
          quantity: 257.998,
          __typename: "PositionDetail2",
        },
        {
          symbol: "F",
          cusip: "345370860",
          holdingPct: 10.3287,
          optionUnderlyingSymbol: null,
          securityType: "Equity",
          securitySubType: "Common Stock",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 9152,
            totalGainLoss: 9152,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "FORD MTR CO DEL COM",
          quantity: 800,
          __typename: "PositionDetail2",
        },
        {
          symbol: null,
          cusip: "44929K879",
          holdingPct: 0,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Non-Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 0,
            totalGainLoss: -5000,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "ICON UTILITIES FUND CLASS S",
          quantity: 514.403,
          __typename: "PositionDetail2",
        },
        {
          symbol: "TRREX",
          cusip: "779919109",
          holdingPct: 2.1855,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Non-Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 1936.48,
            totalGainLoss: -3063.52,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "T ROWE PRICE REAL ESTATE FUND",
          quantity: 172.592,
          __typename: "PositionDetail2",
        },
        {
          symbol: "RYFIX",
          cusip: "783554710",
          holdingPct: 7.9696,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Non-Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 7061.67,
            totalGainLoss: 2061.67,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "RYDEX FINANCIAL SERVICES INVESTOR CL",
          quantity: 67.331,
          __typename: "PositionDetail2",
        },
        {
          symbol: null,
          cusip: "90470K651",
          holdingPct: 0,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Non-Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 0,
            totalGainLoss: -8000,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "ROOSEVELT MULTI-CAP",
          quantity: 573.066,
          __typename: "PositionDetail2",
        },
        {
          symbol: "VFINX",
          cusip: "922908108",
          holdingPct: 15.1968,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Non-Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 13465.42,
            totalGainLoss: 8657.87,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "VANGUARD 500 INDEX FD INVESTOR SHS",
          quantity: 22.593,
          __typename: "PositionDetail2",
        },
        {
          symbol: "WAINX",
          cusip: "936793827",
          holdingPct: 14.0966,
          optionUnderlyingSymbol: null,
          securityType: "Mutual Fund",
          securitySubType: "Non-Fidelity Mutual Fund",
          hasIntradayPricingInd: null,
          marketValDetail: {
            marketVal: 12490.62,
            totalGainLoss: 4108.48,
            __typename: "PositionMarketValueDetail",
          },
          securityDetail: {
            isLoaned: null,
            isHardToBorrow: null,
            bondDetail: null,
            __typename: "PositionSecurityDetail",
          },
          securityDescription: "WASATCH EMERGING INDIA FUND",
          quantity: 2262.795,
          __typename: "PositionDetail2",
        },
      ],
      __typename: "PositionDetails",
    },
    __typename: "PositionAccountDetail",
  },
  {
    acctNum: "Y81017291",
    positionDetails: null,
    __typename: "PositionAccountDetail",
  },
];

// Helper function to generate mock data for missing fields
export const generateEnhancedPositionData = (position: PositionDetail): EnhancedPositionDetail => {
  const marketVal = position.marketValDetail.marketVal;
  const quantity = position.quantity;
  const totalGainLoss = position.marketValDetail.totalGainLoss;
  
  // Generate realistic mock data
  const lastPrice = quantity > 0 ? marketVal / quantity : 0;
  const costBasis = marketVal - totalGainLoss;
  const costBasisPerShare = quantity > 0 ? costBasis / quantity : 0;
  
  // Generate today's gain/loss using seeded random for consistency
  // Use a fallback seed if cusip is not available
  const seed = position.cusip && position.cusip.length >= 2 
    ? position.cusip.charCodeAt(0) + position.cusip.charCodeAt(1)
    : position.cusip?.charCodeAt(0) || 0;
  
  const todaysGainLoss = totalGainLoss * (seededRandom(seed) * 0.1 - 0.05); // ±5% of total gain/loss
  const todaysGainLossPercent = marketVal > 0 ? (todaysGainLoss / marketVal) * 100 : 0;
  
  // Generate 52-week range
  const weekRangeLow = lastPrice * (0.7 + seededRandom(seed + 1) * 0.2); // 70-90% of current price
  const weekRangeHigh = lastPrice * (1.1 + seededRandom(seed + 2) * 0.3); // 110-140% of current price
  const currentPriceInRange = lastPrice;
  
  return {
    ...position,
    lastPrice,
    todaysGainLoss,
    todaysGainLossPercent,
    costBasis,
    costBasisPerShare,
    weekRangeLow,
    weekRangeHigh,
    currentPriceInRange,
  };
};

// Helper function to enhance account data
export const generateEnhancedAccountData = (account: PositionAccountDetail): EnhancedPositionAccountDetail => {
  const accountNames: { [key: string]: string } = {
    "Y81017291": "Managed Account",
    "X21985452": "Brokerage Account",
    "138490623": "Traditional IRA",
    "137472653": "Rollover IRA"
  };
  
  const accountTypes: { [key: string]: string } = {
    "Y81017291": "Professionally Managed",
    "X21985452": "Brokerage",
    "138490623": "IRA",
    "137472653": "IRA"
  };
  
  let totalValue = 0;
  let totalGainLoss = 0;
  let enhancedPositionDetails: EnhancedPositionDetail[] = [];
  
  if (account.positionDetails) {
    enhancedPositionDetails = account.positionDetails.positionDetail.map(generateEnhancedPositionData);
    totalValue = enhancedPositionDetails.reduce((sum, pos) => sum + pos.marketValDetail.marketVal, 0);
    totalGainLoss = enhancedPositionDetails.reduce((sum, pos) => sum + pos.marketValDetail.totalGainLoss, 0);
  }
  
  const totalGainLossPercent = totalValue > 0 ? (totalGainLoss / (totalValue - totalGainLoss)) * 100 : 0;
  
  return {
    ...account,
    accountName: accountNames[account.acctNum] || `Account ${account.acctNum}`,
    accountType: accountTypes[account.acctNum] || "Unknown",
    totalValue,
    totalGainLoss,
    totalGainLossPercent,
    enhancedPositionDetails,
  };
};

// Export enhanced data
export const enhancedPortfolioPositionsData = rawPortfolioPositionsData.map(generateEnhancedAccountData);
