export default function Featured() {
  const sights = [
    { name: "Саграда Фамилия", district: "Эшампле", desc: "Главный шедевр Гауди — собор строится с 1882 года и до сих пор не закончен. Объект ЮНЕСКО. 4,5 млн посетителей в год." },
    { name: "Парк Гюэль", district: "Грасиа", desc: "Мозаичный парк-сказка Гауди с цветными скамьями, гротами и видом на весь город. Символ барселонского духа." },
    { name: "Лас-Рамблас", district: "Центр", desc: "Главный бульвар Барселоны длиной 1,2 км — цветочные киоски, уличные артисты, кафе и вечная жизнь города." },
    { name: "Готический квартал", district: "Барри-Готик", desc: "Средневековое сердце Барселоны с узкими улочками, римскими руинами и собором XIV века." },
    { name: "Дом Бальо", district: "Пасео-де-Грасиа", desc: "Дом-дракон Гауди с фасадом из битой мозаики. Ночью светится синим. Один из красивейших домов мира." },
    { name: "Барселонета", district: "Приморский", desc: "Городской пляж в 10 минутах от центра. 4 км чистого песка, пальмы, паэлья у воды и Средиземное море." },
  ];

  const hotels = [
    { name: "Hotel Arts Barcelona", stars: 5, rating: "9.6", price: "от €400/ночь", district: "Барселонета", desc: "Небоскрёб на берегу моря. Бассейн с видом на Средиземное море, рестораны Мишлен, безупречный сервис." },
    { name: "Mandarin Oriental Barcelona", stars: 5, rating: "9.7", price: "от €500/ночь", district: "Пасео-де-Грасиа", desc: "На главном бульваре города. Терраса, спа и ресторан Moments с 2 звёздами Мишлен." },
    { name: "W Barcelona", stars: 5, rating: "9.4", price: "от €350/ночь", district: "Порт Олимпик", desc: "«Парус» прямо у воды. Знаменитый бар Eclipse на 26 этаже с панорамой на закат над морем." },
    { name: "Casa Camper Barcelona", stars: 4, rating: "9.2", price: "от €200/ночь", district: "Эль-Раваль", desc: "Дизайн-отель от культового обувного бренда. Бесплатный ужин и завтрак, велосипеды в подарок." },
  ];

  const restaurants = [
    { name: "Disfrutar", cuisine: "Авангард", rating: "10/10", price: "$$$$$", desc: "Лучший ресторан мира 2024 по версии The World's 50 Best. Три звезды Мишлен. Кулинарный театр." },
    { name: "Tickets", cuisine: "Тапас", rating: "9.6/10", price: "$$$$", desc: "Ресторан Альберта Адриа — брата легендарного Феррана. Тапас как высокое искусство. Очередь — месяцами." },
    { name: "Bar Cañete", cuisine: "Каталонская", rating: "9.3/10", price: "$$$", desc: "Лучшие традиционные тапас города. Кальмары, хамон, кронкетас — всё идеально. Атмосфера старой Барселоны." },
    { name: "La Pepita", cuisine: "Бокадильос", rating: "9.1/10", price: "$$", desc: "Культовые сэндвичи с авокадо и лососем. Молодёжь стоит в очереди по утрам. Грасиа, уютный дворик." },
  ];

  const cars = [
    {
      brand: "Ferrari",
      sub: "Maranello · Scuderia",
      model: "SF90 Stradale",
      founded: "1939",
      desc: "Il Cavallino Rampante — вздыбленный конь. SF90 — первый гибридный Ferrari мощностью 1000 л.с. Мечта у моря.",
      color: "#D40000",
      img: "https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/44f68fb9-f222-45ab-80cc-556239730f85.jpg",
    },
    {
      brand: "Lamborghini",
      sub: "Sant'Agata Bolognese",
      model: "Huracán STO",
      founded: "1963",
      desc: "Бык против коня — вечное итальянское соперничество. Huracán STO рождён для трека, но живёт на улице.",
      color: "#FF6B00",
      img: "https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/6ba9890b-58d2-497d-b175-fe5c15a62cc4.jpg",
    },
    {
      brand: "Bugatti",
      sub: "Molsheim · Alsace",
      model: "Chiron Super Sport",
      founded: "1909",
      desc: "L'Art et l'Automobile — искусство и автомобиль. Chiron разгоняется до 440 км/ч. Всего 500 экземпляров.",
      color: "#1B3A8C",
      img: "https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/e3548ec1-5342-4f7a-8b82-3558249605f9.jpg",
    },
    {
      brand: "McLaren",
      sub: "Woking · Surrey",
      model: "720S Spider",
      founded: "1963",
      desc: "Formula 1 на дороге. 720S Spider — самый технологичный открытый суперкар в своём классе.",
      color: "#FF8000",
      img: "https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/b81e288f-f78e-4b23-9daa-138ddf0994ee.jpg",
    },
    {
      brand: "Rolls-Royce",
      sub: "Goodwood · Spirit of Ecstasy",
      model: "Phantom Series II",
      founded: "1906",
      desc: "Лучший автомобиль в мире — официально. Phantom создаётся вручную 6 месяцев. Барселона его достойна.",
      color: "#2C2C2C",
      img: "https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/f48151de-900c-4d3c-8fd6-9256143a4d95.jpg",
    },
  ];

  const fashionBrands = [
    "Balenciaga", "Mango", "Zara", "Desigual",
    "Custo Barcelona", "Adolfo Domínguez", "Massimo Dutti", "Pull&Bear",
  ];

  const ratings = [
    { rank: "#1", org: "Lonely Planet", category: "Лучший город Европы", year: "2024" },
    { rank: "#3", org: "TripAdvisor", category: "Travellers Choice — мир", year: "2024" },
    { rank: "#1", org: "Time Out", category: "Лучший город для еды", year: "2023" },
    { rank: "#2", org: "Condé Nast", category: "Лучший пляжный город", year: "2024" },
    { rank: "#1", org: "UNESCO", category: "Архитектурное наследие Гауди", year: "2023" },
    { rank: "#4", org: "Forbes", category: "Лучший город для стартапов", year: "2024" },
  ];

  return (
    <div className="bg-white">

      {/* Статистика */}
      <div className="bg-neutral-950 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">1,6 млн</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">жителей города</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">32 млн</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">туристов в год</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">300</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">солнечных дней</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">#1</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">город Европы</div>
          </div>
        </div>
      </div>

      {/* История Барселоны */}
      <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/12364296-623c-40c4-9d39-102cec4d6e59.jpg"
            alt="Sagrada Familia interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-orange-500">История и культура</h3>
          <h2 className="text-3xl lg:text-5xl mb-6 text-neutral-900 leading-tight font-bold">
            2400 лет страсти, искусства и свободы
          </h2>
          <p className="text-neutral-600 mb-4 leading-relaxed text-lg">
            Барселона основана в 415 году до нашей эры как греческая колония Барсино. Римляне, вестготы, мавры, Арагонская корона — каждый оставил след в этом городе у моря.
          </p>
          <p className="text-neutral-600 mb-4 leading-relaxed">
            В XIX веке Барселона пережила промышленный расцвет и движение Ренасенса — каталонского культурного возрождения. Именно тогда архитектор Антони Гауди превратил город в открытый музей под открытым небом.
          </p>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Сегодня Барселона — столица Каталонии, мировой центр дизайна, гастрономии и футбола. FC Barcelona — это не просто клуб, это «més que un club» — больше, чем клуб.
          </p>
          <a href="#sights" className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 cursor-pointer w-fit uppercase tracking-wide font-medium">
            Достопримечательности
          </a>
        </div>
      </div>

      {/* Достопримечательности */}
      <div id="sights" className="bg-neutral-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 uppercase tracking-widest text-xs mb-3 text-center">Что посмотреть</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Главные места Барселоны</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sights.map((s) => (
              <div key={s.name} className="border border-neutral-800 p-6 hover:border-orange-500 transition-colors duration-300 group">
                <div className="text-neutral-500 text-xs uppercase tracking-widest mb-2">{s.district}</div>
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">{s.name}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Отели */}
      <div id="hotels" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-500 uppercase tracking-widest text-xs mb-3 text-center">Где остановиться</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-4">Лучшие отели Барселоны</h2>
          <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">Отели с рейтингом 9.2+ по версии Booking.com и TripAdvisor</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((h) => (
              <div key={h.name} className="border border-neutral-200 p-6 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-orange-500 transition-colors">{h.name}</h3>
                    <div className="text-neutral-400 text-xs uppercase tracking-wide mt-1">{h.district} · {"★".repeat(h.stars)}</div>
                  </div>
                  <div className="text-right">
                    <div className="bg-orange-500 text-white text-sm font-bold px-2 py-1 mb-1">{h.rating}</div>
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
          <p className="text-orange-400 uppercase tracking-widest text-xs mb-3 text-center">Где поесть</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Рестораны Барселоны</h2>
          <p className="text-neutral-400 text-center mb-16 max-w-xl mx-auto">В 2024 году ресторан Disfrutar признан лучшим в мире. Барселона — гастрономическая столица планеты.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((r) => (
              <div key={r.name} className="border border-neutral-800 p-6 hover:border-orange-500 transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-white text-xl font-bold group-hover:text-orange-400 transition-colors">{r.name}</h3>
                    <div className="text-neutral-500 text-xs uppercase tracking-wide mt-1">{r.cuisine}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-orange-400 font-bold text-sm">{r.rating}</div>
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
      <div id="cars" className="py-20 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 uppercase tracking-widest text-xs mb-3 text-center">Суперкары у моря</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Крутые автомобили</h2>
          <p className="text-neutral-400 text-center mb-16 max-w-xl mx-auto">
            Барселона — любимый город европейских автолюбителей. Пасео-де-Грасиа, набережная и горная дорога на Тибидабо — идеальные маршруты.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((c) => (
              <div key={c.brand} className="border border-neutral-800 hover:border-neutral-500 transition-all duration-300 group overflow-hidden flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={c.img}
                    alt={`${c.brand} ${c.model}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 h-1 w-full" style={{ backgroundColor: c.color }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-2xl font-black text-white tracking-wide">{c.brand}</div>
                      <div className="text-neutral-500 text-xs tracking-wide">{c.sub}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-neutral-500 text-xs">основан</div>
                      <div className="text-neutral-300 font-bold text-sm">{c.founded}</div>
                    </div>
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest font-bold mb-3 px-2 py-1 inline-block w-fit"
                    style={{ color: c.color, border: `1px solid ${c.color}` }}
                  >
                    {c.model}
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">{c.desc}</p>
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(c.brand + ' ' + c.model)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest font-bold py-2 px-4 text-center transition-all duration-300 hover:opacity-80"
                    style={{ backgroundColor: c.color, color: "#fff" }}
                  >
                    Узнать больше
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Бренды */}
      <div className="py-16 px-6 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-500 uppercase tracking-widest text-xs mb-3 text-center">Испанская мода</p>
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">Испанские бренды, покорившие мир</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {fashionBrands.map((brand) => (
              <div key={brand} className="text-neutral-400 hover:text-neutral-900 transition-colors duration-300 text-sm md:text-base font-medium tracking-wider cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Рейтинг путешествий */}
      <div className="bg-neutral-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 uppercase tracking-widest text-xs mb-3 text-center">Мировые рейтинги</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Барселона в рейтингах путешествий</h2>
          <p className="text-neutral-400 text-center mb-16 max-w-xl mx-auto">Признание ведущих туристических организаций и изданий мира</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratings.map((r) => (
              <div key={r.org} className="border border-neutral-800 p-6 hover:border-orange-500 transition-colors duration-300 group">
                <div className="text-5xl font-black text-orange-400 mb-3">{r.rank}</div>
                <div className="text-white font-bold text-lg mb-1">{r.org}</div>
                <div className="text-neutral-400 text-sm mb-2">{r.category}</div>
                <div className="text-neutral-600 text-xs uppercase tracking-widest">{r.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Карта */}
      <div id="map" className="py-20 px-6 bg-neutral-950 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 uppercase tracking-widest text-xs mb-3 text-center">Навигация</p>
          <h2 className="text-4xl font-bold text-white text-center mb-12">Карта Барселоны</h2>
          <div className="w-full h-[500px] overflow-hidden border border-neutral-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96082!2d2.1734!3d41.3851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barcelona Map"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
