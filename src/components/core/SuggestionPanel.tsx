"use client"

import { useState } from "react"
import { ChevronRight, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Suggestion {
  id: string
  text: string
  type: "basic" | "conversational"
  action?: string
}

interface SuggestionPanelProps {
  suggestions: Suggestion[]
  isExpanded: boolean
  onSuggestionClick: (suggestion: Suggestion) => void
  onEnterConversation: () => void
}

export function SuggestionPanel({
  suggestions,
  isExpanded,
  onSuggestionClick,
  onEnterConversation
}: SuggestionPanelProps) {
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null)

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setSelectedSuggestion(suggestion.id)
    onSuggestionClick(suggestion)
  }

  const conversationalSuggestions = suggestions.filter(s => s.type === "conversational")
  const basicSuggestions = suggestions.filter(s => s.type === "basic")

  return (
    <div className={`transition-all duration-300 ease-in-out ${
      isExpanded ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
    }`}>
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          {/* Basic Suggestions */}
          {basicSuggestions.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Quick searches
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {basicSuggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-left p-3 rounded-md hover:bg-muted transition-colors border border-border"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{suggestion.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Conversational Suggestions */}
          {conversationalSuggestions.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Ask me anything
              </h3>
              <div className="space-y-2">
                {conversationalSuggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left p-4 rounded-lg hover:bg-muted transition-colors border border-border"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{suggestion.text}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Enter Conversation Button */}
          <div className="pt-4 border-t">
            <Button
              onClick={onEnterConversation}
              className="w-full"
              size="lg"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Start a conversation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
