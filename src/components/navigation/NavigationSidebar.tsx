"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface NavItem {
  id: string;
  title: string;
  icon?: string;
  href?: string;
  children?: NavItem[];
}

interface NavigationSidebarProps {
  locale: string;
}

export default function NavigationSidebar({ locale }: NavigationSidebarProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const navigationItems: NavItem[] = [
    {
      id: 'inspiration',
      title: '常用推荐',
      children: [
        { id: 'dribbble', title: 'Dribbble', href: '#dribbble' },
        { id: 'behance', title: 'Behance', href: '#behance' },
        { id: 'ui-cn', title: 'UI中国', href: '#ui-cn' },
      ]
    },
    {
      id: 'community',
      title: '社区资讯',
      children: [
        { id: 'zhihu', title: '知乎', href: '#zhihu' },
        { id: '36kr', title: '36氪', href: '#36kr' },
      ]
    },
    {
      id: 'resources',
      title: '素材资源',
      href: '#resources'
    }
  ];

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);
    
    return (
      <div key={item.id}>
        <div
          className={cn(
            "flex items-center px-3 py-2 text-sm",
            "hover:bg-accent hover:text-accent-foreground rounded-md",
            "cursor-pointer",
            level > 0 && "ml-4"
          )}
          onClick={() => hasChildren ? toggleExpand(item.id) : null}
        >
          {hasChildren ? (
            <span className="mr-2">
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          ) : null}
          
          {item.href ? (
            <Link href={item.href} className="flex-1">
              {item.title}
            </Link>
          ) : (
            <span className="flex-1">{item.title}</span>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children!.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 border-r bg-background h-screen">
      <div className="p-4 border-b">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={40}
          className="mx-auto"
        />
      </div>
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="p-3">
          {navigationItems.map(item => renderNavItem(item))}
        </div>
      </ScrollArea>
    </div>
  );
} 