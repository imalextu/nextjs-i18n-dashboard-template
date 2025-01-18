import { getIntl } from '@/lib/intl';
import { Locale } from '@/lib/definitions';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface NavigationGridProps {
  locale: Locale;
  category: string;
}

interface NavigationItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
}

export default async function NavigationGrid({ locale, category }: NavigationGridProps) {
  const items = await getNavigationItems(category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.id} className="group hover:shadow-lg transition-all duration-200">
          <a href={item.url} target="_blank" rel="noopener noreferrer" 
             className="flex items-start p-4 space-x-4">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium group-hover:text-primary truncate">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </p>
            </div>
          </a>
        </Card>
      ))}
    </div>
  );
}

// 模拟数据获取函数
async function getNavigationItems(category: string): Promise<NavigationItem[]> {
  const items: Record<string, NavigationItem[]> = {
    inspiration: [
      {
        id: 'dribbble',
        title: 'Dribbble',
        description: '全球UI设计师作品分享平台',
        icon: '/icons/dribbble.png',
        url: 'https://dribbble.com'
      },
      {
        id: 'behance',
        title: 'Behance',
        description: 'Adobe旗下的设计师交流平台',
        icon: '/icons/behance.png',
        url: 'https://behance.net'
      },
      // ... 更多项目
    ],
    community: [
      {
        id: 'zhihu',
        title: '知乎',
        description: '中文互联网高质量的问答社区',
        icon: '/icons/zhihu.png',
        url: 'https://zhihu.com'
      },
      // ... 更多项目
    ]
  };

  return items[category] || [];
} 