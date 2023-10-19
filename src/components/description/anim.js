export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: { opacity: 0 },
};

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: {
    y: 0,
  },
  closed: {
    y: "100%",
  },
};
