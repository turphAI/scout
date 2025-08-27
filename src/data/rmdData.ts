// RMD (Required Minimum Distribution) conversation data

export interface RMDResource {
  title: string;
  description: string;
  url: string;
  type: 'article' | 'calculator' | 'guide' | 'video';
  source: string;
  readTime?: string;
}

export interface RMDRelatedQuestion {
  question: string;
  category: 'calculation' | 'timing' | 'penalties' | 'taxes' | 'planning';
}

export interface RMDConversationData {
  shortAnswer: string;
  detailedAnswer: string;
  resources: RMDResource[];
  relatedQuestions: RMDRelatedQuestion[];
}

export const rmdConversationData: RMDConversationData = {
  shortAnswer: "Required Minimum Distributions (RMDs) are minimum amounts that retirement plan account owners must withdraw annually starting with the year they reach age 73 (or 72 if you reach age 72 before January 1, 2023).",
  
  detailedAnswer: `Required Minimum Distributions (RMDs) are minimum amounts that retirement plan account owners must withdraw annually starting with the year they reach age 73 (or 72 if you reach age 72 before January 1, 2023). RMDs apply to traditional IRAs, SEP IRAs, SIMPLE IRAs, and employer-sponsored retirement plans like 401(k)s.

The purpose of RMDs is to ensure that retirement accounts are used for retirement income rather than being passed on as tax-advantaged inheritances. The IRS requires these distributions to begin at a certain age to ensure that the government eventually collects taxes on the pre-tax contributions and earnings.

Key points about RMDs:

• **Age Requirements**: You must begin taking RMDs by April 1 of the year following the year you turn 73 (or 72 if you reached that age before 2023)
• **Calculation Method**: RMD amounts are calculated by dividing your account balance by a life expectancy factor from IRS tables
• **Penalties**: Failing to take RMDs results in a 50% excise tax on the amount that should have been withdrawn
• **Tax Implications**: RMDs are generally taxable as ordinary income
• **Roth IRAs**: Roth IRAs do not require RMDs during the original owner's lifetime

The amount of your RMD depends on your age, account balance, and life expectancy. The IRS provides tables to help calculate the required distribution amount. Many financial institutions and online calculators can help you determine your specific RMD amount.`,

  resources: [
    {
      title: "IRS RMD Frequently Asked Questions",
      description: "Official IRS guidance on Required Minimum Distributions including calculation methods, deadlines, and penalties.",
      url: "https://www.irs.gov/retirement-plans/retirement-plans-faqs-regarding-required-minimum-distributions",
      type: "guide",
      source: "Internal Revenue Service",
      readTime: "5 min read"
    },
    {
      title: "RMD Calculator Tool",
      description: "Interactive calculator to determine your required minimum distribution amount based on your age and account balance.",
      url: "https://www.fidelity.com/calculators-tools/rmd-calculator",
      type: "calculator",
      source: "Fidelity Investments",
      readTime: "2 min read"
    },
    {
      title: "Understanding RMD Age Changes",
      description: "Comprehensive guide to the SECURE Act changes that moved the RMD age from 70½ to 72, and SECURE 2.0 changes to age 73.",
      url: "https://www.investopedia.com/rmd-age-changes-2023-5115123",
      type: "article",
      source: "Investopedia",
      readTime: "8 min read"
    },
    {
      title: "RMD Penalties and How to Avoid Them",
      description: "Learn about the 50% penalty for missed RMDs and strategies to avoid or reduce penalties.",
      url: "https://www.kiplinger.com/retirement/rmd-penalties",
      type: "article",
      source: "Kiplinger",
      readTime: "6 min read"
    },
    {
      title: "RMD Planning Strategies",
      description: "Advanced strategies for managing RMDs including charitable giving, Roth conversions, and tax planning.",
      url: "https://www.morningstar.com/retirement/rmd-strategies",
      type: "guide",
      source: "Morningstar",
      readTime: "10 min read"
    },
    {
      title: "Video: RMD Basics Explained",
      description: "Clear explanation of Required Minimum Distributions with examples and visual aids.",
      url: "https://www.youtube.com/watch?v=rmd-basics",
      type: "video",
      source: "Financial Education Channel",
      readTime: "12 min watch"
    }
  ],

  relatedQuestions: [
    {
      question: "How do I calculate my RMD amount?",
      category: "calculation"
    },
    {
      question: "What happens if I miss my RMD deadline?",
      category: "penalties"
    },
    {
      question: "Can I take more than my required minimum distribution?",
      category: "planning"
    },
    {
      question: "Do Roth IRAs have RMD requirements?",
      category: "planning"
    },
    {
      question: "How are RMDs taxed?",
      category: "taxes"
    },
    {
      question: "What is the deadline for taking my first RMD?",
      category: "timing"
    },
    {
      question: "Can I use my RMD for charitable giving?",
      category: "planning"
    },
    {
      question: "How do I calculate RMDs for multiple accounts?",
      category: "calculation"
    }
  ]
};
