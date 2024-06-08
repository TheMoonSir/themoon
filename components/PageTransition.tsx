"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          key={pathname}
          className="h-screen w-screen fixed bg-[rgb(10,10,10)] top-0 pointer-events-none"
        />
        {children}
    </AnimatePresence>
  );
};

export default PageTransition;
