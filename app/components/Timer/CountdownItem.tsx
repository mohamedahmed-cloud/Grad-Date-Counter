import { AnimatePresence, motion } from "framer-motion";

export default function CountdownItem({
  num,
  text,
}: {
  num: number;
  text: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 md:gap-2 mx-auto w-[30%] sm:w-[18%] md:w-[16%] lg:w-[38%] xs:w-[36%] h-24 md:h-36">
      <span className="font-light text-base text-slate-400">{text}</span>
      <div className="relative w-full font-bold font-mono overflow-hidden">
        <span className="bg-clip-text font-medium text-lg lg:text-6xl xxs:text-xl xs:text-4xl invisible">
          {num}
        </span>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%", x: "-50%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.6 }}
            className="top-0 left-1/2 absolute bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 font-medium text-lg text-transparent lg:text-6xl xxs:text-xl xs:text-4xl"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
