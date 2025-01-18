import { Card, CardContent } from "@/components/ui/card"
import { useNavigationStore } from "@/store/navigation"
import { useEffect } from "react"

export function NavigationContent() {
  const { menuItems, activeSection } = useNavigationStore()

  // 处理锚点滚动
  useEffect(() => {
    if (activeSection) {
      const element = document.getElementById(activeSection)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [activeSection])

  const renderMenuItems = () => {
    return menuItems.map(section => {
      if (section.submenu) {
        return (
          <section key={section.id} id={section.id} className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">{section.title}</h2>
            <div className="space-y-12">
              {section.submenu.map(subSection => (
                <div key={subSection.id} id={subSection.id}>
                  <h3 className="mb-4 text-2xl font-semibold">{subSection.title}</h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {subSection.items.map((link) => (
                      <Card key={link.title} className="hover:shadow-lg transition-shadow">
                        <CardContent className="flex items-start space-x-4 p-4">
                          <img
                            src={link.logo || "/placeholder.svg"}
                            alt={`${link.title} icon`}
                            className="h-12 w-12 rounded-lg"
                          />
                          <div>
                            <h3 className="font-medium">{link.title}</h3>
                            <p className="text-sm text-muted-foreground">{link.desc}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      }

      return (
        <section key={section.id} id={section.id} className="mb-12">
          <h2 className="mb-6 text-3xl font-bold">{section.title}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {section.items?.map((link) => (
              <Card key={link.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start space-x-4 p-4">
                  <img
                    src={link.logo || "/placeholder.svg"}
                    alt={`${link.title} icon`}
                    className="h-12 w-12 rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )
    })
  }

  return (
    <div className="container mx-auto p-6">
      {renderMenuItems()}
    </div>
  )
}

