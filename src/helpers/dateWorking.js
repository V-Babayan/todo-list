export const dateToString = (date) => {
  const result = date.toISOString().slice(0, 10);

  return result;
};

export const stringToDate = (string) => {
  return new Date(string);
};
