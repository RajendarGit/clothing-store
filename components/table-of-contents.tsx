"use client"

import { cn } from "@/utils/utils"
import { useState, useEffect } from "react"

interface Section {
  id: string
  title: string
}

interface TableOfContentsProps {
  sections: Section[]
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sections])

  return (
    <div className="bg-muted/50 p-6 rounded-lg">
      <h3 className="font-medium mb-4">On this page</h3>
      <nav>
        <ul className="space-y-2 text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={cn(
                  "block py-1 hover:text-primary transition-colors",
                  activeSection === section.id ? "text-primary font-medium" : "text-muted-foreground",
                )}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}