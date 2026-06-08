interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold tracking-widest uppercase">東京 Tokyo</div>
        <nav className="flex gap-6 md:gap-8">
          <a href="#sights" className="text-white hover:text-red-400 transition-colors duration-300 uppercase text-sm">Достопримечательности</a>
          <a href="#hotels" className="text-white hover:text-red-400 transition-colors duration-300 uppercase text-sm">Отели</a>
          <a href="#restaurants" className="text-white hover:text-red-400 transition-colors duration-300 uppercase text-sm">Рестораны</a>
          <a href="#map" className="text-white hover:text-red-400 transition-colors duration-300 uppercase text-sm">Карта</a>
        </nav>
      </div>
    </header>
  );
}