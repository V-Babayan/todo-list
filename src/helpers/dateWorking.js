/**
 *
 * @param { DateConstructor } date
 * @returns string
 */
export const dateToString = (date) => {
  if (!date) {
    throw new Error("Date is required for converting process.");
  }

  return date.toISOString().slice(0, 10);
};

/**
 *
 * @param { DateConstructor } date
 * @returns string
 */
export const dateToLocalString = (date) => date.toLocaleString("en-GB").slice(0, 10);
