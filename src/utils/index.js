import { format } from "date-fns";

export const getFormatedDate = (dateString) => {
  // dateString: 2021-03-12T14:40:54Z
  // format()の構文 : format(date, format, [options]);
  // https://date-fns.org/v2.19.0/docs/format#arguments
  return format(new Date(dateString), "yyyy-MM-dd");
};

export const validateRequired = (value, errorMessage) => {
  return value === "" ? errorMessage : "";
};
