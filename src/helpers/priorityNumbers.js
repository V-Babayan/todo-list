export const priorityNumbers = (string) => {
  switch (string) {
    case "high":
      return 1;
    case "medium":
      return 2;
    case "low":
      return 3;
    default:
      return 0;
  }
};
