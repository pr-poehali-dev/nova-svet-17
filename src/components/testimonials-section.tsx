import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Дмитрий «Racer» К.",
    role: "Лидер автоклуба, 1200+ часов в игре",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Наконец-то один сайт со всеми ТТХ. Перед каждой покупкой авто сверяюсь со скоростью и разгоном — экономит кучу денег.",
  },
  {
    name: "Алексей «Drift» М.",
    role: "Профи в гонках на сервере",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Подобрал идеальную тачку для дрифта по характеристикам управляемости. Таблицы реально точные, всё совпадает в игре.",
  },
  {
    name: "Игорь «Boss» П.",
    role: "Бизнесмен на RP-сервере",
    avatar: "/professional-woman-scientist.png",
    content:
      "Удобная разбивка по классам и ценам. Быстро понял, какие машины окупаются — собрал автопарк под бизнес без переплат.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят игроки</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Каталогом пользуются сотни игроков сервера при выборе машин
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}