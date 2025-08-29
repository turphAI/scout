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
  
  detailedAnswer: `Required Minimum Distributions (RMDs) are mandatory withdrawals from tax-deferred retirement accounts that must begin by April 1st of the year following the year you turn 73 (or 72 if you turned 72 before 2023).

Key Points:
• RMDs apply to traditional IRAs, 401(k)s, 403(b)s, and other qualified retirement plans
• The first RMD can be delayed until April 1st of the year after you turn 73
• Subsequent RMDs must be taken by December 31st each year
• The distribution amount is calculated using IRS life expectancy tables
• RMDs are subject to ordinary income tax rates
• Failure to take RMDs results in a 50% penalty on the shortfall

Calculation Method:
Your RMD is calculated by dividing your account balance as of December 31st of the previous year by your life expectancy factor from the IRS Uniform Lifetime Table. For example, if you're 75 with a $100,000 IRA balance, your RMD would be approximately $4,065.

Tax Implications:
RMDs are treated as ordinary income and must be reported on your tax return. They can affect your tax bracket, Social Security benefits taxation, and Medicare premiums. Strategic planning can help minimize the tax impact.

Exceptions:
• Roth IRAs don't require RMDs during the owner's lifetime
• Inherited IRAs have different RMD rules
• Qualified charitable distributions (QCDs) can satisfy RMD requirements while avoiding taxes`,

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
