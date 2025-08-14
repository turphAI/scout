"use client"

import { useState } from "react"
import { Search, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchInputProps {
  onSearch?: (query: string) => void
  onSuggestionClick?: (suggestion: string) => void
  suggestions?: string[]
  isExpanded?: boolean
  onExpand?: () => void
}

export function SearchInput({
  onSearch,
  onSuggestionClick,
  suggestions = [],
  isExpanded = false,
  onExpand
}: SearchInputProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim() && onSearch) {
      onSearch(query.trim())
    }
  }

  const handleInputChange = (value: string) => {
    setQuery(value)
    // Trigger expansion when user starts typing
    if (value.length > 2 && !isExpanded && onExpand) {
      onExpand()
    }
  }

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search or ask a question..."
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="pl-10 pr-12 h-12 text-lg"
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
          >
            <Sparkles className="h-4 w-4" />
          </Button>
        </div>
      </form>

      {/* Progressive Suggestions Panel */}
      {isExpanded && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">
              Suggested questions
            </h3>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => onSuggestionClick?.(suggestion)}
                  className="w-full text-left p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{suggestion}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
