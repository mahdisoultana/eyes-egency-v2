import { motion, AnimateSharedLayout } from "framer-motion";
export const Revele = ({ title, children, color, delay = 0 }) => {
  return (
    <AnimateSharedLayout>
      <motion.div layout className="inline-block relative overflow-hidden">
        <motion.div
          className={`absolute inset-0 ${color || "bg-blue-500"} z-20 `}
          initial={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: ((Math.random() > 0.5 ? -1 : 1) * 100).toString() + "%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            x: ((Math.random() > 0.5 ? -1 : 1) * 100).toString() + "%",
            opacity: 1,
            transition: {
              duration: 1,
              delay,
            },
          }}
        ></motion.div>
        <motion.div className="p-2">{children}</motion.div>
      </motion.div>
    </AnimateSharedLayout>
  );
};
