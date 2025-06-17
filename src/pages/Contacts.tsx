import Header from "@/components/Header";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Header />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl p-12 shadow-sm border">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Давайте знакомиться!
          </h1>

          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Всегда открыт для интересных разговоров, новых знакомств и обмена
              идеями. Не стесняйтесь написать — буду рад общению!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <Icon
                name="Mail"
                size={48}
                className="mx-auto mb-4 text-blue-600"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Электронная почта
              </h3>
              <p className="text-gray-600 mb-4">
                Для деловых предложений и серьезных вопросов
              </p>
              <a
                href="mailto:arseny@example.com"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                arseny@example.com
              </a>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <Icon
                name="MessageCircle"
                size={48}
                className="mx-auto mb-4 text-green-600"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Социальные сети
              </h3>
              <p className="text-gray-600 mb-4">
                Для неформального общения и обмена мыслями
              </p>
              <div className="space-y-2">
                <div className="text-green-600 hover:text-green-800 font-medium">
                  @arseny_b
                </div>
                <div className="text-green-600 hover:text-green-800 font-medium">
                  Telegram
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <Icon
                name="Coffee"
                size={48}
                className="mx-auto mb-4 text-purple-600"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Встреча за кофе
              </h3>
              <p className="text-gray-600 mb-4">
                Лучшие разговоры происходят при личной встрече
              </p>
              <p className="text-purple-600 font-medium">
                Москва, кафе в центре
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <Icon
                name="BookOpen"
                size={48}
                className="mx-auto mb-4 text-orange-600"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Обмен книгами
              </h3>
              <p className="text-gray-600 mb-4">
                Поделиться интересным чтением — отличная идея
              </p>
              <p className="text-orange-600 font-medium">Личная библиотека</p>
            </div>
          </div>

          <div className="mt-12 text-center p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Несколько слов о общении
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Предпочитаю содержательные беседы поверхностной болтовне.
              Интересуют люди с активной жизненной позицией, творческим
              мышлением и открытым сердцем. Время — наш самый ценный ресурс,
              давайте тратить его на что-то важное.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
