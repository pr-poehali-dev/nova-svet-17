import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Насколько точные характеристики машин?",
      answer:
        "Все ТТХ собраны и проверены на самом сервере: максимальная скорость, разгон и управляемость замеряются на трассе. Данные регулярно обновляются после игровых патчей.",
    },
    {
      question: "Как часто обновляется каталог?",
      answer:
        "Мы добавляем новые машины и пересматриваем характеристики после каждого крупного обновления сервера, чтобы цифры всегда совпадали с актуальной игрой.",
    },
    {
      question: "Цены указаны в игровой валюте или за донат?",
      answer:
        "В карточках указаны оба значения, где это применимо: стоимость в игровой валюте и донат-цена, чтобы вы могли спланировать покупку под свой бюджет.",
    },
    {
      question: "Учитывается ли тюнинг в характеристиках?",
      answer:
        "Да, для каждой машины мы отмечаем потенциал прокачки — насколько меняются скорость и разгон после установки двигателя, тормозов и турбо.",
    },
    {
      question: "Какая машина самая быстрая на сервере?",
      answer:
        "Топ по максималке и разгону вынесен в раздел спорткаров и гиперкаров. Там же удобно сравнить лучшие варианты для гонок и погонь.",
    },
    {
      question: "Можно ли предложить добавить машину?",
      answer:
        "Конечно! Напишите нам через контакты или в сообществе сервера — мы добавим недостающую модель и её характеристики в каталог.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о каталоге машин, характеристиках и ценах на сервере.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}