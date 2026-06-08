export default function Featured() {
  const sights = [
    { name: "Бранденбургские ворота", city: "Берлин", desc: "Главный символ Германии и единства страны. Построены в 1791 году как триумфальная арка." },
    { name: "Замок Нойшванштайн", city: "Бавария", desc: "Сказочный замок Людвига II, вдохновивший Диснея на замок Золушки. Самое фотографируемое место страны." },
    { name: "Кёльнский собор", city: "Кёльн", desc: "Готический шедевр XIII века — 157 метров высоты. Строился 632 года. Объект ЮНЕСКО." },
    { name: "Рейнский горный путь", city: "Рейн", desc: "Долина Рейна с виноградниками, средневековыми замками и живописными деревнями." },
    { name: "Мариенплац", city: "Мюнхен", desc: "Сердце Мюнхена — главная площадь с Новой ратушей и знаменитым Глокеншпилем." },
    { name: "Парк Санссуси", city: "Потсдам", desc: "«Версаль Германии» — летняя резиденция Фридриха Великого с дворцами и садами." },
  ];

  const hotels = [
    { name: "Hotel Adlon Kempinski", stars: 5, rating: "9.7", price: "от €450/ночь", city: "Берлин", desc: "Легендарный отель у Бранденбургских ворот. Здесь останавливались Майкл Джексон и Обама." },
    { name: "Bayerischer Hof", stars: 5, rating: "9.5", price: "от €380/ночь", city: "Мюнхен", desc: "Роскошный отель в центре Мюнхена с 1841 года. Панорамный бар с видом на город." },
    { name: "The Fontenay Hamburg", stars: 5, rating: "9.6", price: "от €420/ночь", city: "Гамбург", desc: "Современный дизайн-отель на берегу озера Альстер. Лучший новый отель Европы 2018." },
    { name: "Brenners Park-Hotel", stars: 5, rating: "9.4", price: "от €500/ночь", city: "Баден-Баден", desc: "Дворцовый отель в знаменитом курортном городе. СПА-терапия мирового уровня." },
  ];

  const restaurants = [
    { name: "Vendôme", cuisine: "Haute Cuisine", rating: "9.9/10", price: "$$$$$", desc: "3 звезды Мишлен. Шеф Йоахим Вислер — один из лучших поваров мира. Кёльн." },
    { name: "Aqua", cuisine: "Авангард", rating: "9.7/10", price: "$$$$$", desc: "3 звезды Мишлен в Вольфсбурге. Резиденция Volkswagen. Концепция «еда как искусство»." },
    { name: "Hofbräuhaus München", cuisine: "Баварская", rating: "9.2/10", price: "$$", desc: "Легендарная пивная 1589 года. 1000 мест, литровые кружки, оркестр — классика Мюнхена." },
    { name: "Nobelhart & Schmutzig", cuisine: "Новая немецкая", rating: "9.4/10", price: "$$$$", desc: "1 звезда Мишлен. Только берлинские продукты. Радикальная локальность и вкус Берлина." },
  ];

  const cars = [
    {
      brand: "BMW",
      sub: "Bayerische Motoren Werke",
      model: "M3 Competition",
      founded: "1916",
      desc: "«Баварские моторы» — символ драйва. M3 — эталон спортивного седана уже 4 поколения подряд.",
      color: "#1C69D4",
      img: "https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/ada08986-9e4d-4d14-9938-12101c9b1bfd.jpg",
    },
    {
      brand: "Mercedes-AMG",
      sub: "Daimler AG · Stuttgart",
      model: "GT Black Series",
      founded: "1926",
      desc: "Drei Pointed Star — три луча, три стихии. AMG GT Black Series — быстрейший серийный Mercedes в истории.",
      color: "#2D2D2D",
      img: "https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/2862ecca-340d-4f88-93c9-4e785ec0393d.jpg",
    },
    {
      brand: "Porsche",
      sub: "Dr. Ing. h.c. F. Porsche AG",
      model: "911 GT3 RS",
      founded: "1931",
      desc: "«Нет замены замещению» — философия Porsche. 911 GT3 RS рожден на Нюрбургринге для кольца.",
      color: "#CC0000",
      img: "https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/fceb20e5-f829-43db-b04c-b534f9b15468.jpg",
    },
    {
      brand: "Audi",
      sub: "Auto Union · Ingolstadt",
      model: "R8 V10 Performance",
      founded: "1909",
      desc: "Vier Ringe — четыре кольца, четыре компании. R8 — единственный среднемоторный суперкар с атмосферным V10.",
      color: "#BB0A21",
      img: "https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/2ed7f776-4bf9-406c-a3cb-a3420be47e8f.jpg",
    },
    {
      brand: "Volkswagen",
      sub: "Das Auto · Wolfsburg",
      model: "Golf GTI Mk8",
      founded: "1937",
      desc: "«Народный автомобиль» — самый продаваемый европейский бренд. GTI превратил «Гольф» в культ.",
      color: "#009EE0",
      img: "https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/1e19f188-c880-455d-8dc1-6f15a28ebf7d.jpg",
    },
  ];

  const fashionBrands = [
    "Hugo Boss", "Adidas", "Puma", "Jil Sander",
    "Karl Lagerfeld", "MCM", "Escada", "Wolford",
  ];

  const ratings = [
    { rank: "#3", org: "Lonely Planet", category: "Лучшие направления Европы", year: "2024" },
    { rank: "#4", org: "TripAdvisor", category: "Travellers Choice Awards", year: "2024" },
    { rank: "#1", org: "ADAC", category: "Лучшая дорожная инфраструктура", year: "2023" },
    { rank: "#2", org: "Condé Nast", category: "Лучшая страна для гурманов", year: "2024" },
    { rank: "#5", org: "World Tourism", category: "Посещаемость в Европе", year: "2024" },
    { rank: "#1", org: "Forbes", category: "Автомобильная нация мира", year: "2024" },
  ];

  return (
    <div className="bg-white">

      {/* Статистика */}
      <div className="bg-neutral-950 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">84 млн</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">жителей страны</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">40 млн</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">туристов в год</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">16</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">федеральных земель</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">1500+</div>
            <div className="text-neutral-400 uppercase text-xs tracking-widest">сортов пива</div>
          </div>
        </div>
      </div>

      {/* История Германии */}
      <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/5237cde5-e268-4255-8f5a-4e84338b3e0f.jpg"
            alt="Neuschwanstein Castle Bavaria"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-yellow-500">История и культура</h3>
          <h2 className="text-3xl lg:text-5xl mb-6 text-neutral-900 leading-tight font-bold">
            Страна, которая изменила ход истории
          </h2>
          <p className="text-neutral-600 mb-4 leading-relaxed text-lg">
            Германия берёт начало с Восточно-Франкского королевства 843 года. Страна Гёте, Баха, Канта и Эйнштейна — родина идей, перевернувших цивилизацию.
          </p>
          <p className="text-neutral-600 mb-4 leading-relaxed">
            Священная Римская империя, Реформация Лютера, объединение Бисмарка в 1871-м, Веймарская республика, Вторая мировая война и невероятное возрождение — немецкая история насыщена, как ни одна другая.
          </p>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            Сегодня это крупнейшая экономика Европы: автобан без ограничений скорости, инженерные шедевры BMW и Porsche, романтические замки Баварии и живой Берлин — один из самых интересных городов планеты.
          </p>
          <a href="#sights" className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 cursor-pointer w-fit uppercase tracking-wide font-medium">
            Достопримечательности
          </a>
        </div>
      </div>

      {/* Замок Нойшванштайн */}
      <div className="bg-neutral-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-widest text-xs mb-3 text-center">Бавария · 1886</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Замок Нойшванштайн</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16">
            <div className="h-[400px] lg:h-[600px] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/5237cde5-e268-4255-8f5a-4e84338b3e0f.jpg"
                alt="Neuschwanstein Castle exterior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="h-[400px] lg:h-[600px] overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/8a41200f-ff82-432d-b740-21e02d84ca70.jpg"
                alt="Neuschwanstein Castle interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-yellow-400 uppercase tracking-widest text-xs mb-4">История замка</h3>
              <p className="text-neutral-300 text-lg leading-relaxed mb-4">
                Нойшванштайн — «Новый лебединый утёс» — был задуман баварским королём Людвигом II как воплощение мечты о средневековом рыцарском мире. Строительство началось в 1869 году, когда романтизм был в расцвете, а промышленная революция уже меняла облик Европы.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Людвиг II был человеком не от мира сего: он избегал придворной жизни, обожал оперы Вагнера и тратил личное состояние на строительство грандиозных замков вместо того, чтобы управлять государством. Нойшванштайн стал его главным шедевром — замком, в котором король видел декорацию к операм любимого композитора.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Интерьеры расписаны сценами из германских легенд: «Парсифаль», «Тангейзер», «Лоэнгрин». Тронный зал выполнен в неовизантийском стиле с мозаичным полом и золотыми куполами — но трон так и не был установлен при жизни Людвига.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                В 1886 году, всего за три дня до официального открытия, Людвига II признали психически больным и отстранили от власти. Через несколько дней он скончался при загадочных обстоятельствах. Замок открыли для туристов спустя 7 недель после его смерти — баварское правительство хотело окупить колоссальные долги. С тех пор Нойшванштайн посетили более 60 миллионов человек.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="border border-neutral-800 p-5">
                <div className="text-yellow-400 text-2xl font-black mb-1">1869</div>
                <div className="text-neutral-400 text-sm">год начала строительства</div>
              </div>
              <div className="border border-neutral-800 p-5">
                <div className="text-yellow-400 text-2xl font-black mb-1">17 лет</div>
                <div className="text-neutral-400 text-sm">строительства, замок не был достроен</div>
              </div>
              <div className="border border-neutral-800 p-5">
                <div className="text-yellow-400 text-2xl font-black mb-1">60 млн</div>
                <div className="text-neutral-400 text-sm">туристов за всё время</div>
              </div>
              <div className="border border-neutral-800 p-5">
                <div className="text-yellow-400 text-2xl font-black mb-1">1,4 млн</div>
                <div className="text-neutral-400 text-sm">посетителей ежегодно</div>
              </div>
              <div className="border border-neutral-800 p-5">
                <div className="text-yellow-400 text-2xl font-black mb-1">965 м</div>
                <div className="text-neutral-400 text-sm">высота над уровнем моря</div>
              </div>
            </div>
          </div>

          <div className="border border-neutral-800 p-8">
            <p className="text-neutral-400 text-xs uppercase tracking-widest mb-3">Интересный факт</p>
            <p className="text-white text-xl leading-relaxed">
              Именно замок Нойшванштайн вдохновил Уолта Диснея на создание замка Спящей красавицы в Диснейленде. Людвиг II мечтал о сказке — и сам стал её частью на века.
            </p>
          </div>
        </div>
      </div>

      {/* Достопримечательности */}
      <div id="sights" className="bg-neutral-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-widest text-xs mb-3 text-center">Что посмотреть</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Главные места Германии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sights.map((s) => (
              <div key={s.name} className="border border-neutral-800 p-6 hover:border-yellow-500 transition-colors duration-300 group">
                <div className="text-neutral-500 text-xs uppercase tracking-widest mb-2">{s.city}</div>
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">{s.name}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Отели */}
      <div id="hotels" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-500 uppercase tracking-widest text-xs mb-3 text-center">Где остановиться</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-4">Лучшие отели Германии</h2>
          <p className="text-neutral-500 text-center mb-16 max-w-xl mx-auto">Отели с рейтингом 9.4+ по версии Booking.com и TripAdvisor</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((h) => (
              <div key={h.name} className="border border-neutral-200 p-6 hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-yellow-600 transition-colors">{h.name}</h3>
                    <div className="text-neutral-400 text-xs uppercase tracking-wide mt-1">{h.city} · {"★".repeat(h.stars)}</div>
                  </div>
                  <div className="text-right">
                    <div className="bg-yellow-500 text-black text-sm font-bold px-2 py-1 mb-1">{h.rating}</div>
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
          <p className="text-yellow-400 uppercase tracking-widest text-xs mb-3 text-center">Где поесть</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Рестораны Германии</h2>
          <p className="text-neutral-400 text-center mb-16 max-w-xl mx-auto">От баварских пивных до ресторанов с 3 звёздами Мишлен — немецкая кухня богаче, чем кажется.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((r) => (
              <div key={r.name} className="border border-neutral-800 p-6 hover:border-yellow-500 transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-white text-xl font-bold group-hover:text-yellow-400 transition-colors">{r.name}</h3>
                    <div className="text-neutral-500 text-xs uppercase tracking-wide mt-1">{r.cuisine}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-bold text-sm">{r.rating}</div>
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
          <p className="text-yellow-400 uppercase tracking-widest text-xs mb-3 text-center">Автомобильная нация</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Немецкий автопром</h2>
          <p className="text-neutral-400 text-center mb-16 max-w-xl mx-auto">
            Германия — родина автомобиля. Карл Бенц запатентовал первый авто в 1886 году. С тех пор BMW, Mercedes, Porsche, Audi и VW диктуют правила миру.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((c) => (
              <div
                key={c.brand}
                className="border border-neutral-800 hover:border-neutral-500 transition-all duration-300 group overflow-hidden flex flex-col"
              >
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
          <p className="text-yellow-500 uppercase tracking-widest text-xs mb-3 text-center">Мировые бренды</p>
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">Немецкие бренды, покорившие мир</h2>
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
          <p className="text-yellow-400 uppercase tracking-widest text-xs mb-3 text-center">Мировые рейтинги</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Германия в рейтингах путешествий</h2>
          <p className="text-neutral-400 text-center mb-16 max-w-xl mx-auto">Признание ведущих туристических организаций и изданий мира</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratings.map((r) => (
              <div key={r.org} className="border border-neutral-800 p-6 hover:border-yellow-500 transition-colors duration-300 group">
                <div className="text-5xl font-black text-yellow-400 mb-3">{r.rank}</div>
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
          <p className="text-yellow-400 uppercase tracking-widest text-xs mb-3 text-center">Навигация</p>
          <h2 className="text-4xl font-bold text-white text-center mb-12">Карта Германии</h2>
          <div className="w-full h-[500px] overflow-hidden border border-neutral-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5559452!2d10.4515!3d51.1657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sGermany!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Germany Map"
            />
          </div>
        </div>
      </div>

    </div>
  );
}