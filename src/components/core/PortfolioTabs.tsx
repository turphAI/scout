"use client"

import { usePathname, useRouter } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const PortfolioTabs = () => {
  const pathname = usePathname()
  const router = useRouter()

  const tabs = [
    { id: "summary", label: "Summary", href: "/enhancedSS/panelV2/portfolio-summary", active: pathname === "/enhancedSS/panelV2/portfolio-summary" },
    { id: "positions", label: "Positions", href: "/enhancedSS/panelV2/portfolio-positions", active: pathname === "/enhancedSS/panelV2/portfolio-positions" },
    { id: "activity", label: "Activity & Orders", href: "#", disabled: true },
    { id: "balances", label: "Balances", href: "#", disabled: true },
    { id: "documents", label: "Documents", href: "#", disabled: true },
    { id: "planning", label: "Planning", href: "#", disabled: true },
    { id: "more", label: "More (4)", href: "#", disabled: true },
  ]

  const handleTabChange = (value: string) => {
    const tab = tabs.find(t => t.id === value)
    if (tab && !tab.disabled && tab.href !== "#") {
      router.push(tab.href)
    }
  }

  const activeTab = tabs.find(tab => tab.active)?.id || "summary"

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-7 bg-muted/50">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              disabled={tab.disabled}
              className={cn(
                "text-sm font-medium transition-all",
                tab.disabled && "opacity-50 cursor-not-allowed",
                tab.active && "bg-background text-foreground shadow-sm"
              )}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}

export default PortfolioTabs
