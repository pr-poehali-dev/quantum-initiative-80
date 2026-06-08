import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/f7063dcd-0924-443b-a639-10af50fac3fc.jpg"
          alt="Berlin Germany night skyline"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4 font-medium">Добро пожаловать в</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4">
          ГЕРМАНИЮ
        </h1>
        <p className="text-2xl md:text-3xl mb-6 font-light tracking-widest opacity-90">Deutschland</p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-10">
          Страна инженерного гения и средневековых замков. 84 миллиона жителей, автобан без ограничений и пиво, которому тысяча лет.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#sights" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 uppercase tracking-wider text-sm font-bold transition-all duration-300">
            Исследовать
          </a>
          <a href="#map" className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 uppercase tracking-wider text-sm font-medium transition-all duration-300">
            Карта страны
          </a>
        </div>
      </div>
    </div>
  );
}
