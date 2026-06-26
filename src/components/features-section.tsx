import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Максимальная скорость",
    description: "Точные значения максималки каждой машины — от городских седанов до гиперкаров, протестированные на трассе.",
    icon: "zap",
    badge: "Speed",
  },
  {
    title: "Разгон 0-100",
    description: "Время разгона до сотни для каждой модели, чтобы выбрать самую резкую тачку для гонок и погонь.",
    icon: "target",
    badge: "Accel",
  },
  {
    title: "Управляемость",
    description: "Оценка сцепления и поведения в поворотах — какие авто держат дорогу, а какие любят дрифт.",
    icon: "globe",
    badge: "Handling",
  },
  {
    title: "Цена и окупаемость",
    description: "Актуальная стоимость в игровой валюте и донат-цена, чтобы спланировать покупку под свой бюджет.",
    icon: "lock",
    badge: "Price",
  },
  {
    title: "Класс и категория",
    description: "Спорткары, мускулы, внедорожники, мотоциклы — удобная разбивка по классам для быстрого поиска.",
    icon: "link",
    badge: "Class",
  },
  {
    title: "Тюнинг и апгрейды",
    description: "Какие машины раскрываются после прокачки двигателя, тормозов и турбо — полный потенциал авто.",
    icon: "brain",
    badge: "Tuning",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Характеристики машин (ТТХ)</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё, что нужно знать перед покупкой авто на сервере — скорость, разгон, цена и класс
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}