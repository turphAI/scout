"use client"

import { useState, useCallback } from "react"
import { SearchInput } from "./SearchInput"
import { SuggestionPanel } from "./SuggestionPanel"
import { ConversationInterface } from "./ConversationInterface"

export type SearchMode = "search" | "suggestions" | "conversation"

interface TransitionManagerProps {
  suggestions: Array<{
    id: string
    text: string
    type: "basic" | "conversational"
    action?: string
  }>
}

export function TransitionManager({ suggestions }: TransitionManagerProps) {
  const [currentMode, setCurrentMode] = useState<SearchMode>("search")
  const [messages, setMessages] = useState<Array<{
    id: string
    text: string
    sender: "user" | "assistant"
    timestamp: Date
  }>>([])

  const handleSearch = useCallback((query: string) => {
    console.log("Search query:", query)
    // In a real implementation, this would trigger search results
    // For now, we'll just log the query
  }, [])

  const handleSuggestionClick = useCallback((suggestion: { text: string; type?: string }) => {
    console.log("Suggestion clicked:", suggestion)
    
    if (suggestion.type === "conversational") {
      // Add the suggestion as a user message and transition to conversation
      const newMessage = {
        id: Date.now().toString(),
        text: suggestion.text,
        sender: "user" as const,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, newMessage])
      setCurrentMode("conversation")
    } else {
      // For basic suggestions, perform a search
      handleSearch(suggestion.text)
    }
  }, [handleSearch])

  const handleExpand = useCallback(() => {
    setCurrentMode("suggestions")
  }, [])

  const handleEnterConversation = useCallback(() => {
    setCurrentMode("conversation")
  }, [])

  const handleExitConversation = useCallback(() => {
    setCurrentMode("search")
  }, [])

  const handleSendMessage = useCallback((message: string) => {
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: message,
      sender: "user" as const,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        text: `I understand you're asking about "${message}". Let me help you with that.`,
        sender: "assistant" as const,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    }, 1000)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input - Always visible */}
      <div className="mb-4">
        <SearchInput
          onSearch={handleSearch}
          onSuggestionClick={(suggestion) => handleSuggestionClick({ text: suggestion, type: "basic" })}
          suggestions={suggestions.map(s => s.text)}
          isExpanded={currentMode === "suggestions"}
          onExpand={handleExpand}
        />
      </div>

      {/* Suggestion Panel - Shows when in suggestions mode */}
      {currentMode === "suggestions" && (
        <div className="mb-4">
          <SuggestionPanel
            suggestions={suggestions}
            isExpanded={true}
            onSuggestionClick={handleSuggestionClick}
            onEnterConversation={handleEnterConversation}
          />
        </div>
      )}

      {/* Conversation Interface - Shows when in conversation mode */}
      <ConversationInterface
        isActive={currentMode === "conversation"}
        onExit={handleExitConversation}
        onSendMessage={handleSendMessage}
        messages={messages}
      />
    </div>
  )
}
