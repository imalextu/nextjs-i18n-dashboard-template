import { create } from 'zustand'
import { Laptop, MessageSquare, Palette, PenTool, Settings, Users, Wrench, BookOpen, Building2, Image, Music, FileText, Video, Brush, Package } from 'lucide-react'

export interface MenuItem {
    id: string
    title: string
    icon: any
    items?: LinkItem[]
    submenu?: SubMenuItem[]
}

interface SubMenuItem {
    id: string
    title: string
    icon: any
    items: LinkItem[]
}

interface LinkItem {
    title: string
    url?: string
    logo: string
    desc: string
}

interface NavigationState {
    activeSection: string
    menuItems: MenuItem[]
    setActiveSection: (section: string) => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
    activeSection: 'recommended',
    menuItems: [
        {
            id: 'recommended',
            title: '常用推荐',
            icon: Laptop,
            items: [
                {
                    title: 'Dribbble',
                    url: 'https://dribbble.com/',
                    logo: '../assets/images/logos/dribbble.png',
                    desc: '全球UI设计师作品分享平台'
                },
                {
                    title: 'Behance',
                    url: 'https://behance.net/',
                    logo: '../assets/images/logos/behance.png',
                    desc: 'Adobe旗下的设计师交流平台'
                },
                {
                    title: 'UI中国',
                    url: 'http://www.ui.cn/',
                    logo: '../assets/images/logos/uicn.png',
                    desc: '图形交互与界面设计交流、作品展示、学习平台'
                }
            ]
        },
        {
            id: 'inspiration',
            title: '灵感采集',
            icon: PenTool,
            submenu: [
                {
                    id: 'discover-products',
                    title: '发现产品',
                    icon: Package,
                    items: [{
                        title: 'Dribbble',
                        url: 'https://dribbble.com/',
                        logo: '../assets/images/logos/dribbble.png',
                        desc: '全球UI设计师作品分享平台'
                    },
                    {
                        title: 'Behance',
                        url: 'https://behance.net/',
                        logo: '../assets/images/logos/behance.png',
                        desc: 'Adobe旗下的设计师交流平台'
                    },
                    {
                        title: 'UI中国',
                        url: 'http://www.ui.cn/',
                        logo: '../assets/images/logos/uicn.png',
                        desc: '图形交互与界面设计交流、作品展示、学习平台'
                    }]
                },
                {
                    id: 'ui-inspiration',
                    title: '界面灵感',
                    icon: Palette,
                    items: [{
                        title: 'Dribbble',
                        url: 'https://dribbble.com/',
                        logo: '../assets/images/logos/dribbble.png',
                        desc: '全球UI设计师作品分享平台'
                    },
                    {
                        title: 'Behance',
                        url: 'https://behance.net/',
                        logo: '../assets/images/logos/behance.png',
                        desc: 'Adobe旗下的设计师交流平台'
                    },
                    {
                        title: 'UI中国',
                        url: 'http://www.ui.cn/',
                        logo: '../assets/images/logos/uicn.png',
                        desc: '图形交互与界面设计交流、作品展示、学习平台'
                    }]
                },
                {
                    id: 'web-inspiration',
                    title: '网页灵感',
                    icon: FileText,
                    items: [{
                        title: 'Dribbble',
                        url: 'https://dribbble.com/',
                        logo: '../assets/images/logos/dribbble.png',
                        desc: '全球UI设计师作品分享平台'
                    },
                    {
                        title: 'Behance',
                        url: 'https://behance.net/',
                        logo: '../assets/images/logos/behance.png',
                        desc: 'Adobe旗下的设计师交流平台'
                    },
                    {
                        title: 'UI中国',
                        url: 'http://www.ui.cn/',
                        logo: '../assets/images/logos/uicn.png',
                        desc: '图形交互与界面设计交流、作品展示、学习平台'
                    }]
                }
            ]
        },
        {
            id: 'resources',
            title: '素材资源',
            icon: BookOpen,
            submenu: [
                {
                    id: 'resources-icons',
                    title: '图标素材',
                    icon: Image,
                    items: []
                },
                {
                    id: 'resources-logo',
                    title: 'LOGO设计',
                    icon: Brush,
                    items: []
                },
                {
                    id: 'resources-ui',
                    title: 'UI资源',
                    icon: Package,
                    items: [
                        {
                            title: '稀土区',
                            url: 'https://xituqu.com/',
                            logo: '../assets/images/logos/xituqu.png',
                            desc: '优质设计开发资源分享'
                        },
                        {
                            title: 'ui8',
                            url: 'https://ui8.net/',
                            logo: '../assets/images/logos/ui8.png',
                            desc: 'UI Kits, Wireframe Kits, Templates, Icons and More'
                        },
                        {
                            title: 'uplabs',
                            url: 'https://www.uplabs.com/',
                            logo: '../assets/images/logos/uplabs.png',
                            desc: 'Daily resources for product designers & developers'
                        }
                    ]
                }
            ]
        },
        {
            id: 'tools',
            title: '常用工具',
            icon: Wrench,
            submenu: [
                {
                    id: 'tools-graphics',
                    title: '图形创意',
                    icon: Palette,
                    items: []
                },
                {
                    id: 'tools-ui',
                    title: '界面设计',
                    icon: Package,
                    items: []
                },
                {
                    id: 'tools-interaction',
                    title: '交互动效',
                    icon: Video,
                    items: []
                }
            ]
        },
        {
            id: 'tutorials',
            title: '学习教程',
            icon: MessageSquare,
            submenu: [
                {
                    id: 'tutorials-design',
                    title: '设计规范',
                    icon: FileText,
                    items: []
                },
                {
                    id: 'tutorials-video',
                    title: '视频教程',
                    icon: Video,
                    items: []
                }
            ]
        },
        {
            id: 'ued',
            title: 'UED团队',
            icon: Users,
            items: [
                {
                    title: '携程设计委员会',
                    url: 'http://ued.ctrip.com/',
                    logo: '../assets/images/logos/ctrip.png',
                    desc: '携程设计委员会-Ctrip Design Committee'
                }
            ]
        }
    ],
    setActiveSection: (section: string) => set({ activeSection: section })
})) 