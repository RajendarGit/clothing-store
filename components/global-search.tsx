'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Command, CommandInput } from "./ui/command"

export const GlobalSearch: React.FC = () => {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <Command className="w-full">
      <CommandInput
        aria-label="Search"
        className="pl-9"
        placeholder="Search..."
        value={query}
        onValueChange={setQuery}
        onKeyDown={handleKeyDown}
      />
    </Command>
  )
}