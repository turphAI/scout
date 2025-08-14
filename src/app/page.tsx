import Link from "next/link"
import { SearchToSuggestionsDemo } from "@/features/search-to-suggestions/SearchToSuggestionsDemo"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <SearchToSuggestionsDemo />
    </main>
  )
}
