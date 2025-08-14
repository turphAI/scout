"use client"

import { useState } from "react"
import { Send, ArrowLeft, MessageSquare, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface Message {
  id: string
  text: string
  sender: "user" | "assistant"
  timestamp: Date
}

interface ConversationInterfaceProps {
  isActive: boolean
  onExit: () => void
  onSendMessage: (message: string) => void
  messages: Message[]
}

export function ConversationInterface({
  isActive,
  onExit,
  onSendMessage,
  messages
}: ConversationInterfaceProps) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim())
      setInputValue("")
    }
  }

  if (!isActive) return null

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="flex flex-col h-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-background">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onExit}
              className="h-8 w-8 p-0"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Conversation Assistant</h2>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">Start a conversation</h3>
              <p className="text-muted-foreground">
                Ask me anything about our products, services, or how I can help you.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <Card className={`max-w-[80%] ${
                  message.sender === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted"
                }`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      {message.sender === "assistant" && (
                        <MessageSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-2 ${
                          message.sender === "user" 
                            ? "text-primary-foreground/70" 
                            : "text-muted-foreground"
                        }`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                      {message.sender === "user" && (
                        <User className="h-5 w-5 text-primary-foreground/70 mt-0.5 flex-shrink-0" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          )}
        </div>

        {/* Input */}
        <div className="border-t bg-background p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="sm" disabled={!inputValue.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
