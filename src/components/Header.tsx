interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold tracking-widest uppercase">🇩🇪 Deutschland</div>
        <nav className="hidden md:flex gap-6 lg:gap-8">
          <a href="#sights" className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm">Достопримечательности</a>
          <a href="#hotels" className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm">Отели</a>
          <a href="#restaurants" className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm">Рестораны</a>
          <a href="#cars" className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm">Авто</a>
          <a href="#map" className="text-white hover:text-yellow-400 transition-colors duration-300 uppercase text-sm">Карта</a>
        </nav>
      </div>
    </header>
  );
}
