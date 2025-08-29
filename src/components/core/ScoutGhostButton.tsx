import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScoutGhostButtonProps {
  onClick?: () => void
  children?: React.ReactNode
  className?: string
}

const ScoutGhostButton = ({ onClick, children, className }: ScoutGhostButtonProps) => {
  return (
    <Button
      variant="outline"
      size="default"
      onClick={onClick}
      className={`flex items-center gap-2 border-[#B87AC8] text-[#B87AC8] hover:bg-[#B87AC8] hover:text-white ${className || ""}`}
    >
      <Sparkles className="h-4 w-4" />
      {children}
    </Button>
  )
}

export default ScoutGhostButton
