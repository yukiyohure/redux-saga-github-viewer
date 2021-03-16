import { parse } from "date-fns";

export const getFormatedDate = (dateString) => {
  // dateString: 2021-03-12T14:40:54Z
  const slicedDateString = dateString.slice(0, 10);
  const dateObject = parse(slicedDateString, "yyyy-MM-dd", new Date());

  const day = ("00" + dateObject.getDate()).slice(-2);
  const month = ("00" + (dateObject.getMonth() + 1)).slice(-2);
  const year = dateObject.getFullYear();

  const result = `${day}-${month}-${year}`;
  return result;
};

export const validateRequired = (value, errorMessage) => {
  return value === "" ? errorMessage : "";
};
