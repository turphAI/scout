export interface Suggestion {
  id: string
  text: string
  type: "basic" | "conversational"
  action?: string
}

export const mockSuggestions: Suggestion[] = [
  // Basic suggestions (quick searches)
  {
    id: "1",
    text: "product catalog",
    type: "basic"
  },
  {
    id: "2", 
    text: "pricing plans",
    type: "basic"
  },
  {
    id: "3",
    text: "contact support",
    type: "basic"
  },
  {
    id: "4",
    text: "documentation",
    type: "basic"
  },

  // Conversational suggestions (ask me anything)
  {
    id: "5",
    text: "How can I get started with your platform?",
    type: "conversational"
  },
  {
    id: "6",
    text: "What are the best practices for implementation?",
    type: "conversational"
  },
  {
    id: "7",
    text: "Can you help me understand the pricing structure?",
    type: "conversational"
  },
  {
    id: "8",
    text: "What makes your solution different from competitors?",
    type: "conversational"
  },
  {
    id: "9",
    text: "How do I integrate this with my existing systems?",
    type: "conversational"
  },
  {
    id: "10",
    text: "What kind of support do you provide?",
    type: "conversational"
  }
]

export const getSuggestionsByType = (type: "basic" | "conversational") => {
  return mockSuggestions.filter(suggestion => suggestion.type === type)
}

export const getRandomSuggestions = (count: number = 5) => {
  const shuffled = [...mockSuggestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
