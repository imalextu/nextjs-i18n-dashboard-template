"use client"

import { useRef } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from "@/components/navigation/sidebar"
import { NavigationContent } from "@/components/navigation/navigation-content"

export default function Page() {
  const contentRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)
    if (sectionElement && contentRef.current) {
      const yOffset = -20
      const y = sectionElement.getBoundingClientRect().top + contentRef.current.scrollTop + yOffset
      contentRef.current.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed inset-0 flex w-full">
      <Sidebar onNavigate={scrollToSection} />
      <ScrollArea className="flex-1" ref={contentRef}>
        <NavigationContent />
      </ScrollArea>
    </div>
  )
}

