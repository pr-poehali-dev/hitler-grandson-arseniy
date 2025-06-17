import Header from "@/components/Header";

const Biography = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl p-12 shadow-sm border">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Моя биография
          </h1>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Детство и юность
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Родился в семье, где ценились знания и творчество. С детства
                увлекался чтением и исследованием мира вокруг. Первые стихи
                написал в 12 лет, а первую программу — в 15.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Образование
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Учеба всегда давалась легко благодаря любознательности и желанию
                понимать суть вещей. Особенно привлекали точные науки и
                литература — казалось бы, противоположные сферы, но они
                прекрасно дополняют друг друга.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Увлечения
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Фотография научила видеть красоту в обычном, музыка —
                чувствовать ритм жизни, а путешествия — понимать разнообразие
                мира. Каждое хобби добавляет новые краски в палитру жизненного
                опыта.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Философия жизни
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Верю, что каждый день дает возможность стать лучше. Стараюсь
                находить баланс между работой и отдыхом, серьезным и веселым,
                одиночеством и общением. Жизнь прекрасна в своем многообразии.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biography;
