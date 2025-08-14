export interface QuantumQuote {
  ticker: string;
  companyName: string;
  percentageChange: string;
  sharePrice: string;
}

export const quantumQuotes: QuantumQuote[] = [
  {
    ticker: "IONQ",
    companyName: "IonQ Inc.",
    percentageChange: "+2.55%",
    sharePrice: "$123.23"
  },
  {
    ticker: "RGTI",
    companyName: "Rigetti Computing",
    percentageChange: "-1.23%",
    sharePrice: "$45.67"
  },
  {
    ticker: "QUBT",
    companyName: "Quantum Computing Inc.",
    percentageChange: "+5.78%",
    sharePrice: "$89.12"
  },
  {
    ticker: "IBM",
    companyName: "IBM Quantum",
    percentageChange: "+0.92%",
    sharePrice: "$156.78"
  },
  {
    ticker: "GOOGL",
    companyName: "Alphabet (Google Quantum)",
    percentageChange: "+3.41%",
    sharePrice: "$234.56"
  }
];
