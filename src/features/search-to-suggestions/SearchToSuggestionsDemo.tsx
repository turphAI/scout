"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function SearchToSuggestionsDemo() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Scout 1 Prototype</h1>
        </div>

        {/* enhancedSmartSuggestion Card */}
        <Card className="w-full">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-3">enhancedSmartSuggestion</h2>
            <p className="text-muted-foreground mb-6">
              Clicking the header search input opens a full width richer smart suggestion panel. A replacement for the chatbot landing experience.
            </p>
            
            {/* Panel v1 Tile */}
            <Link href="/enhancedSS/panelV1" className="block">
              <div className="bg-muted/50 rounded-lg p-4 hover:bg-muted/70 transition-colors cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Panel v1</h3>
                    <p className="text-sm text-muted-foreground">
                      Just getting the framework of the panel situated
                    </p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    In Progress
                  </span>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
