export default function Featured() {
  const stats = [
    { value: "14 млн", label: "жителей города" },
    { value: "25 млн", label: "туристов в год" },
    { value: "#1", label: "рейтинг безопасности" },
    { value: "3 zvezdy", label: "Мишлен ресторанов" },
  ];

  const sights = [
    { name: "Храм Сэнсо-дзи", district: "Асакуса", desc: "Древнейший буддийский храм Токио, основан в 628 году. Ворота Каминаримон — символ города." },
    { name: "Токийская башня", district: "Минато", desc: "333-метровая башня, вдохновлённая Эйфелевой башней. Потрясающий вид на весь мегаполис." },
    { name: "Сибуя Кроссинг", district: "Сибуя", desc: "Самый оживлённый перекрёсток мира — за раз его пересекают до 3000 человек." },
    { name: "Токио Скайтри", district: "Сумида", desc: "Самая высокая башня Японии — 634 м. Смотровые площадки на высоте 350 и 450 м." },
    { name: "Парк Уэно", district: "Тайто", desc: "Крупнейший парк города с музеями, зоопарком и лучшим ханами в сезон цветения сакуры." },
    { name: "Акихабара", district: "Тийода", desc: "Электронный район — мировая столица аниме, манги и технологий. Магазины на каждом шагу." },
  ];

  const hotels = [
    { name: "Park Hyatt Tokyo", stars: 5, rating: "9.6", price: "от $600/ночь", district: "Синдзюку", desc: "Роскошь на 52 этаже небоскрёба. Помните фильм «Трудности перевода»?" },
    { name: "The Peninsula Tokyo", stars: 5, rating: "9.8", price: "от $700/ночь", district: "Маруноути", desc: "Легендарный отель у Императорского дворца. Безупречный сервис с 1928 года." },
    { name: "Andaz Tokyo", stars: 5, rating: "9.4", price: "от $450/ночь", district: "Тора-но-мон", desc: "Дизайн-отель на 47 этаже с панорамным баром и видами на Tokyo Tower." },
    { name: "Trunk Hotel", stars: 4, rating: "9.1", price: "от $250/ночь", district: "Сибуя", desc: "Бутик-отель в сердце Сибуи. Модный, локальный, с сильным характером." },
  ];

  const restaurants = [
    { name: "Sukiyabashi Jiro", cuisine: "Суши", rating: "10/10", price: "$$$$$", desc: "3 звезды Мишлен. Лучшие суши в мире по версии NYT. Очередь — месяцами." },
    { name: "Narisawa", cuisine: "Авангард", rating: "9.8/10", price: "$$$$$", desc: "2 звезды Мишлен. Японская кухня в духе «гастрономии природы». Шедевр." },
    { name: "Ichiran Ramen", cuisine: "Рамен", rating: "9.2/10", price: "$$", desc: "Культовый рамен в индивидуальных кабинках. Идеален для одиночного путешественника." },
    { name: "Gonpachi Nishi-Azabu", cuisine: "Изакая", rating: "9.0/10", price: "$$$", desc: "Вдохновил сцену из «Убить Билла». Атмосфера самурайского трактира." },
  ];

  const cars = [
    { brand: "Toyota", model: "GR Supra", origin: "Япония" },
    { brand: "Nissan", model: "GT-R R35", origin: "Япония" },
    { brand: "Honda", model: "NSX Type-S", origin: "Япония" },
    { brand: "Lexus", model: "LFA", origin: "Япония" },
    { brand: "Mazda", model: "RX-7 FD", origin: "Япония" },
    { brand: "Mitsubishi", model: "Lancer Evo X", origin: "Япония" },
  ];

  const fashionBrands = [
    "COMME des GARÇONS", "Issey Miyake", "Yohji Yamamoto",
    "A Bathing Ape", "Undercover", "sacai", "KENZO", "Uniqlo",
  ];

  return (
    <div className="bg-white">

      {/* Статистика */}
      <div className="bg-neutral-950 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">14 млн</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">жителей города</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">25 млн</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">туристов в год</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">#1</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">по безопасности</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">200+</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">звёзд Мишлен</div>
          </div>
        </div>
      </div>

      {/* История Токио */}
      <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/d5753289-903b-4dcc-8c86-997b74d4c479.jpg"
            alt="Senso-ji Temple Tokyo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-red-500">История и культура</h3>
          <h2 className="text-3xl lg:text-5xl mb-6 text-neutral-900 leading-tight font-bold">
            Город, где прошлое и будущее живут рядом
          </h2>
          <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
            Токио — столица Японии с населением 14 миллионов человек. Основан в 1457 году как замок Эдо,
            в 1869-м стал официальной столицей при императоре Мэйдзи.
          </p>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Сегодня это крупнейший мегаполис мира: 23 особых района, безупречный транспорт,
            сотни мишленовских ресторанов и полное ощущение, что ты попал в другое измерение.
          </p>
          <a href="#sights" className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
            Достопримечательности
          </a>
        </div>
      </div>

      {/* Достопримечательности */}
      <div id="sights" className="bg-neutral-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-500 uppercase tracking-widest text-xs mb-3 text-center">Что посмотреть</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Главные места Токио</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sights.map((s) => (
              <div key={s.name} className="border border-neutral-800 p-6 hover:border-red-500 transition-colors duration-300 group">
                <div className="text-neutral-500 text-xs uppercase tracking-widest mb-2">{s.district}</div>
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">{s.name}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Отели */}
      <div id="hotels" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-500 uppercase tracking-widest text-xs mb-3 text-center">Где остановиться</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-4">Лучшие отели Токио</h2>
          <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">Отели с рейтингом 9.0+ по версии Booking.com и TripAdvisor</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((h) => (
              <div key={h.name} className="border border-neutral-200 p-6 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-red-600 transition-colors">{h.name}</h3>
                    <div className="text-neutral-400 text-xs uppercase tracking-wide mt-1">{h.district} · {"★".repeat(h.stars)}</div>
                  </div>
                  <div className="text-right">
                    <div className="bg-red-600 text-white text-sm font-bold px-2 py-1 mb-1">{h.rating}</div>
                    <div className="text-neutral-400 text-xs">{h.price}</div>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Рестораны */}
      <div id="restaurants" className="bg-neutral-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-500 uppercase tracking-widest text-xs mb-3 text-center">Где поесть</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Рестораны Токио</h2>
          <p className="text-neutral-400 text-center mb-16 max-w-xl mx-auto">Токио — гастрономическая столица мира. 200+ звёзд Мишлен — больше, чем в любом другом городе планеты.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((r) => (
              <div key={r.name} className="border border-neutral-800 p-6 hover:border-red-500 transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-white text-xl font-bold group-hover:text-red-400 transition-colors">{r.name}</h3>
                    <div className="text-neutral-500 text-xs uppercase tracking-wide mt-1">{r.cuisine}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-red-400 font-bold text-sm">{r.rating}</div>
                    <div className="text-neutral-500 text-xs mt-1">{r.price}</div>
                  </div>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Автомобили */}
      <div className="py-20 px-6 bg-neutral-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-500 uppercase tracking-widest text-xs mb-3 text-center">Автомобильная культура</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-4">Легенды японского автопрома</h2>
          <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">Токио — родина культовых суперкаров. JDM-культура, Дрифт, Токийский автосалон — всё началось здесь.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cars.map((c) => (
              <div key={c.brand} className="bg-white p-4 text-center hover:shadow-lg transition-shadow duration-300 border border-neutral-200 group">
                <div className="text-2xl font-black text-neutral-900 mb-1 group-hover:text-red-600 transition-colors">{c.brand}</div>
                <div className="text-red-500 text-xs font-medium mb-1">{c.model}</div>
                <div className="text-neutral-400 text-xs">{c.origin}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Бренды моды */}
      <div className="py-16 px-6 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-500 uppercase tracking-widest text-xs mb-3 text-center">Мировая мода</p>
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">Токийские бренды, покорившие мир</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {fashionBrands.map((brand) => (
              <div key={brand} className="text-neutral-400 hover:text-neutral-900 transition-colors duration-300 text-sm md:text-base font-medium tracking-wider cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Карта */}
      <div id="map" className="py-20 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-red-500 uppercase tracking-widest text-xs mb-3 text-center">Навигация</p>
          <h2 className="text-4xl font-bold text-white text-center mb-12">Карта Токио</h2>
          <div className="w-full h-[500px] rounded-none overflow-hidden border border-neutral-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207163.39929636!2d139.4691!3d35.6762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tokyo Map"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
