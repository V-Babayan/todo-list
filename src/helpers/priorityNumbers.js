export const priorityNumbers = (string) => {
  const priority = {
    high: 1,
    medium: 2,
    low: 3,
  };
  if (priority[string]) return priority[string];
  return 0;
};
