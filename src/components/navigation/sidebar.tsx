"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Laptop, MessageSquare, Palette, PenTool, Settings, Users, Wrench, BookOpen, Building2, ChevronRight, Image, Music, FileText, Video, Brush, Package } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useNavigationStore } from "@/store/navigation"

type SubItem = {
  name: string
  href: string
  icon: React.ElementType
}

type SidebarItem = {
  name: string
  icon: React.ElementType
  href: string
  subItems?: SubItem[]
}

const sidebarItems: SidebarItem[] = [
  { name: "常用推荐", icon: Laptop, href: "common" },
  { name: "社区资讯", icon: MessageSquare, href: "community" },
  { name: "灵感采集", icon: Palette, href: "inspiration" },
  { name: "发现产品", icon: PenTool, href: "products" },
  { name: "界面灵感", icon: Building2, href: "interface" },
  { 
    name: "素材资源", 
    icon: BookOpen, 
    href: "resources",
    subItems: [
      { name: "图片素材", href: "resources-images", icon: Image },
      { name: "音乐素材", href: "resources-music", icon: Music },
      { name: "文档素材", href: "resources-documents", icon: FileText },
      { name: "视频素材", href: "resources-videos", icon: Video },
      { name: "设计素材", href: "resources-design", icon: Brush },
      { name: "图标素材", href: "resources-icons", icon: Package },
    ]
  },
  { name: "常用工具", icon: Wrench, href: "tools" },
  { name: "学习教程", icon: Users, href: "tutorials" },
  { name: "关于本站", icon: Settings, href: "about" },
]

interface SidebarProps {
  onNavigate: (sectionId: string) => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname()
  const [openItems, setOpenItems] = useState<string[]>([])
  const { menuItems, setActiveSection } = useNavigationStore()

  const toggleItem = (itemName: string) => {
    setOpenItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    )
  }

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId)
    onNavigate(sectionId)
  }

  return (
    <div className="flex h-screen w-[240px] flex-col bg-zinc-900 text-white">
      <div className="flex h-14 items-center px-4">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot-fH6R9rdbLCdLcoZ1ms8ybzsFw5PF6s.png" 
          alt="TargetPrompt Logo" 
          className="h-8 w-8"
        />
        <span className="ml-2 text-lg font-semibold">TargetPrompt</span>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isOpen = openItems.includes(item.title)

          if (item.submenu) {
            return (
              <Collapsible 
                key={item.id} 
                open={isOpen}
                onOpenChange={() => toggleItem(item.title)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-zinc-400 hover:text-white",
                      isOpen && "bg-zinc-800 text-white"
                    )}
                    onClick={() => handleNavigation(item.id)}
                  >
                    <Icon className="mr-2 h-5 w-5" />
                    {item.title}
                    <ChevronRight className={cn(
                      "ml-auto h-4 w-4 transition-transform duration-200",
                      isOpen && "rotate-90"
                    )} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  {item.submenu.map((subItem) => {
                    const SubIcon = subItem.icon
                    return (
                      <Button
                        key={subItem.id}
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-sm text-zinc-400 hover:text-white",
                          pathname === subItem.id && "bg-zinc-800 text-white"
                        )}
                        onClick={() => handleNavigation(subItem.id)}
                      >
                        <SubIcon className="mr-2 h-4 w-4" />
                        {subItem.title}
                      </Button>
                    )
                  })}
                </CollapsibleContent>
              </Collapsible>
            )
          }

          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-zinc-400 hover:text-white",
                pathname === item.id && "bg-zinc-800 text-white"
              )}
              onClick={() => handleNavigation(item.id)}
            >
              <Icon className="mr-2 h-5 w-5" />
              {item.title}
            </Button>
          )
        })}
      </nav>
    </div>
  )
}

