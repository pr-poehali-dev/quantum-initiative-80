export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Навигация</h3>
                <a href="#sights" className="text-white hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Достопримечательности</a>
                <a href="#hotels" className="text-white hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Отели</a>
                <a href="#restaurants" className="text-white hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Рестораны</a>
                <a href="#cars" className="text-white hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Автомобили</a>
                <a href="#map" className="text-white hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">Карта</a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Факты</h3>
                <span className="text-neutral-400 text-sm">1,6 млн жителей</span>
                <span className="text-neutral-400 text-sm">32 млн туристов/год</span>
                <span className="text-neutral-400 text-sm">10 районов города</span>
                <span className="text-neutral-400 text-sm">Основана в 415 г. до н.э.</span>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Рейтинги</h3>
                <span className="text-neutral-400 text-sm">#1 Lonely Planet Европа</span>
                <span className="text-neutral-400 text-sm">#3 TripAdvisor мир</span>
                <span className="text-neutral-400 text-sm">#1 Архитектура Европы</span>
                <span className="text-neutral-400 text-sm">#2 Пляжные города мира</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                BARCELONA
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base">CATALUNYA · {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}