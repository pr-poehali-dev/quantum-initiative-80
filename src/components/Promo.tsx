import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/59c4b6e9-37c8-4b4b-ac8f-fc3b108a37b2/files/65721f2e-f2ff-4bd8-ae15-d86bdc17622a.jpg"
            alt="Las Ramblas Barcelona"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/55 z-[1]" />
      <h3 className="absolute top-12 left-6 text-orange-400 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Готический квартал · Гран-Виа · Борнет · Побленоу
      </h3>

      <p className="absolute bottom-12 left-6 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl z-10 leading-tight font-bold">
        Барселона — это фламенко до рассвета, тапас у моря и Гауди, чья архитектура выглядит как сон наяву.
      </p>
    </div>
  );
}