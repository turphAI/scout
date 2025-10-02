export interface RMDResource {
  type: 'video' | 'calculator' | 'guide' | 'document';
  title: string;
  description: string;
  source: string;
  readTime?: string;
  url?: string;
}

export interface RMDRelatedQuestion {
  question: string;
  answer?: string;
}

export interface RMDConversationData {
  shortAnswer: string;
  detailedAnswer: string;
  resources: RMDResource[];
  relatedQuestions: RMDRelatedQuestion[];
}

export const rmdConversationData: RMDConversationData = {
  shortAnswer: "Required Minimum Distribution (RMD) is the minimum amount you must withdraw from your traditional IRA or 401(k) each year starting at age 73 (or 72 if you turned 72 before 2023). The amount is calculated based on your account balance and life expectancy.",
  
  detailedAnswer: `Required Minimum Distributions (RMDs) are mandatory withdrawals from tax‑deferred retirement accounts that generally begin by April 1 of the year after you turn 73 (or 72 if you turned 72 before 2023).

Key points (condensed):
• Applies to traditional IRAs and most employer plans (401(k), 403(b))
• First RMD may be delayed to April 1 of the following year; after that, due Dec 31 annually
• Amount uses IRS life‑expectancy tables; missed amounts can trigger significant penalties

How it’s calculated:
Prior‑year Dec 31 balance ÷ IRS life‑expectancy factor (Uniform Lifetime Table for most owners). Example: a $100,000 balance with a factor near 24 yields an RMD of about $4,100.

Taxes and planning:
RMDs are ordinary income and can influence brackets, Social Security taxation, and Medicare IRMAA. Coordinating withdrawals and withholdings can help reduce the impact.

Common exceptions:
• No RMDs for Roth IRAs during the owner’s lifetime
• Inherited accounts follow different schedules
• Qualified charitable distributions (QCDs) can satisfy RMDs tax‑efficiently`,

  resources: [
    {
      type: 'calculator',
      title: 'RMD Calculator',
      description: 'Calculate your required minimum distribution amount based on your age and account balance.',
      source: 'IRS.gov',
      readTime: '2 min'
    },
    {
      type: 'guide',
      title: 'Complete RMD Guide',
      description: 'Comprehensive guide covering all aspects of required minimum distributions.',
      source: 'Financial Planning Association',
      readTime: '15 min'
    },
    {
      type: 'video',
      title: 'Understanding RMDs',
      description: 'Video explanation of how RMDs work and strategies for managing them.',
      source: 'Investment Education',
      readTime: '8 min'
    },
    {
      type: 'document',
      title: 'IRS Publication 590-B',
      description: 'Official IRS publication covering distributions from individual retirement arrangements.',
      source: 'Internal Revenue Service',
      readTime: '45 min'
    },
    {
      type: 'guide',
      title: 'RMD Tax Planning Strategies',
      description: 'Learn strategies to minimize the tax impact of your required minimum distributions.',
      source: 'Tax Planning Institute',
      readTime: '12 min'
    },
    {
      type: 'calculator',
      title: 'RMD vs. QCD Calculator',
      description: 'Compare the tax impact of taking RMDs versus making qualified charitable distributions.',
      source: 'Charitable Planning Tools',
      readTime: '5 min'
    }
  ],

  relatedQuestions: [
    {
      question: "What happens if I don't take my RMD?"
    },
    {
      question: "Can I reinvest my RMD?"
    },
    {
      question: "How do RMDs affect my Social Security benefits?"
    },
    {
      question: "What's the difference between RMDs for traditional and Roth IRAs?"
    },
    {
      question: "Can I use my RMD for charitable giving?"
    },
    {
      question: "How do I calculate my RMD if I have multiple retirement accounts?"
    }
  ]
};
