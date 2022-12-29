export const dateToString = (date) => {
  if (date) return date.toISOString().slice(0, 10);
};
