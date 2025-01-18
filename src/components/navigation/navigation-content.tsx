import { Card, CardContent } from "@/components/ui/card"

const commonLinks = [
  {
    title: "Dribbble",
    description: "全球UI设计师作品分享平台",
    icon: "https://dribbble.com/favicon.ico",
  },
  {
    title: "Behance",
    description: "Adobe旗下的设计师交流平台，来自世界各地的设计师在这里展示自己的作品",
    icon: "https://www.behance.net/favicon.ico",
  },
  {
    title: "UI中国",
    description: "国内交互与界面设计交流、作品展示、学习平台",
    icon: "https://www.ui.cn/favicon.ico",
  },
]

const communityLinks = [
  {
    title: "阿里云",
    description: "点击领取2000元阿里云产品优惠券",
    icon: "https://www.aliyun.com/favicon.ico",
  },
  {
    title: "站酷素材",
    description: "质量很高的设计素材网站（推荐）",
    icon: "https://www.zcool.com.cn/favicon.ico",
  },
]

const sections = [
  { id: "common", title: "常用推荐", links: commonLinks },
  { id: "community", title: "社区资讯", links: communityLinks },
  { id: "inspiration", title: "灵感采集", links: [] },
  { id: "products", title: "发现产品", links: [] },
  { id: "interface", title: "界面灵感", links: [] },
  { id: "resources", title: "素材资源", links: [] },
  { id: "resources-images", title: "图片素材", links: [] },
  { id: "resources-music", title: "音乐素材", links: [] },
  { id: "resources-documents", title: "文档素材", links: [] },
  { id: "resources-videos", title: "视频素材", links: [] },
  { id: "resources-design", title: "设计素材", links: [] },
  { id: "resources-icons", title: "图标素材", links: [] },
  { id: "tools", title: "常用工具", links: [] },
  { id: "tutorials", title: "学习教程", links: [] },
  { id: "about", title: "关于本站", links: [] },
]

export function NavigationContent() {
  return (
    <div className="container mx-auto p-6 space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="mb-4 text-2xl font-semibold">{section.title}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {section.links.map((link) => (
              <Card key={link.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start space-x-4 p-4">
                  <img
                    src={link.icon || "/placeholder.svg"}
                    alt={`${link.title} icon`}
                    className="h-12 w-12 rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

