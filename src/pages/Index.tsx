import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Привет! Я Арсений 👋
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Добро пожаловать в мой уголок интернета, где я делюсь своими
            мыслями, воспоминаниями и наблюдениями о жизни
          </p>
        </div>

        {/* Personal Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              🌅 Утренние размышления
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Каждое утро с чашкой кофе я наблюдаю, как просыпается город. В эти
              моменты рождаются самые интересные идеи и решения сложных задач.
              Тишина дает пространство для творчества.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              📚 Любовь к книгам
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Моя библиотека — это коллекция миров и историй. От классической
              литературы до современной фантастики, каждая книга оставляет след
              в душе и формирует мировоззрение.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              🎵 Музыка как спутник
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Плейлист на все случаи жизни: от джаза для работы до рока для
              вдохновения. Музыка создает настроение и помогает находить ритм в
              повседневности.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              🌍 Путешествия в памяти
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Каждое путешествие — это новая глава в книге жизни. Воспоминания о
              местах, людях и открытиях становятся частью личной истории и
              источником вдохновения.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center bg-white rounded-xl p-12 shadow-sm border">
          <blockquote className="text-2xl font-medium text-gray-900 italic mb-4">
            "Жизнь состоит из маленьких моментов, которые делают её большой"
          </blockquote>
          <p className="text-gray-600">— личная философия</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
