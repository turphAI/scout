"use client"

import { TransitionManager } from "@/components/core/TransitionManager"
import { PrototypeNavigation } from "@/components/shared/PrototypeNavigation"
import { mockSuggestions } from "@/data/suggestions"

export function SearchToSuggestionsDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Scout 1 Prototype</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground mb-2">
            Phase 1: Search → Suggestions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the progressive enhancement from traditional search to conversational suggestions. 
            Start typing to see the transition in action.
          </p>
        </div>

        {/* Navigation */}
        <PrototypeNavigation />

        {/* Demo Instructions */}
        <div className="bg-muted/50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-3">How to test this prototype:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Start typing in the search input below</li>
            <li>Watch as the suggestion panel expands after 3 characters</li>
            <li>Try clicking on different types of suggestions</li>
            <li>Notice the smooth transitions and progressive enhancement</li>
          </ol>
        </div>

        {/* Main Demo */}
        <div className="flex justify-center">
          <TransitionManager suggestions={mockSuggestions} />
        </div>

        {/* Design Notes */}
        <div className="mt-12 bg-muted/30 rounded-lg p-6">
          <h3 className="font-semibold mb-3">Design Notes:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong>Progressive Enhancement:</strong> Starts with familiar search, expands to suggestions</li>
            <li>• <strong>Smooth Transitions:</strong> Animations guide user attention and understanding</li>
            <li>• <strong>Clear Hierarchy:</strong> Basic searches vs conversational questions are visually distinct</li>
            <li>• <strong>Context Preservation:</strong> Search input remains accessible throughout the experience</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
