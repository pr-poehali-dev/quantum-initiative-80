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
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/15cfcc03-9012-4cad-9789-9b217fb6030a.jpg"
          alt="Tokyo night cityscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-red-400 uppercase tracking-[0.3em] text-sm mb-4 font-medium">Добро пожаловать в</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4">
          ТОКИО
        </h1>
        <p className="text-2xl md:text-3xl mb-6 font-light tracking-widest opacity-90">東京</p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 mb-10">
          Город будущего и древних традиций. 14 миллионов жителей, бесконечная энергия и незабываемые впечатления.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#sights" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 uppercase tracking-wider text-sm font-medium transition-all duration-300">
            Исследовать
          </a>
          <a href="#map" className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 uppercase tracking-wider text-sm font-medium transition-all duration-300">
            Карта города
          </a>
        </div>
      </div>
    </div>
  );
}