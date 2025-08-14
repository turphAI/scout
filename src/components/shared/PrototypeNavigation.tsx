"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const prototypePhases = [
  {
    name: "Search → Suggestions",
    description: "Progressive enhancement from search to suggestions",
    path: "/",
    status: "active"
  },
  {
    name: "Suggestions → Conversation",
    description: "Transition from suggestions to full conversation",
    path: "/suggestions-to-conversation",
    status: "coming-soon"
  },
  {
    name: "Full Experience",
    description: "Complete conversational search experience",
    path: "/full-conversation",
    status: "coming-soon"
  }
]

export function PrototypeNavigation() {

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4">Prototype Phases</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {prototypePhases.map((phase) => (
            <div key={phase.path} className="space-y-2">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{phase.name}</h4>
                {phase.status === "active" && (
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Active
                  </span>
                )}
                {phase.status === "coming-soon" && (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{phase.description}</p>
              {phase.status === "active" && (
                <Link href={phase.path}>
                  <Button variant="outline" size="sm" className="w-full">
                    View Prototype
                  </Button>
                </Link>
              )}
              {phase.status === "coming-soon" && (
                <Button variant="outline" size="sm" className="w-full" disabled>
                  Coming Soon
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
