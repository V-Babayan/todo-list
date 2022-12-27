export const dateToString = (date) => {
  let month = date.getMonth(),
    day = date.getDate();

  if (month > 8) {
    month = month + 1;
  } else month = "0" + (month + 1);

  if (day < 10) day = "0" + day;

  let result = [date.getFullYear(), month, day].join("-");

  return result;
};

export const stringToDate = (string) => {
  return new Date(string);
};
