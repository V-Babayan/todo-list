export const dateToString = (date) => {
  let month = date.getMonth();

  if (month > 8) {
    month = month + 1;
  } else month = "0" + (month + 1);

  let result = date.getFullYear() + "-" + month + "-" + date.getDate();

  return result;
};
