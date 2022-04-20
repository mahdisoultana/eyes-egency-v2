export const slideDown = {
  initial: { opacity: 0, y: -500 },
  exit: { opacity: 0, y: -500 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      stiffness: 200,
      damping: 13,
      type: "spring",
    },
  },
};
