export const getFormatedDate = (dateObject) => {
   const year = dateObject.getFullYear();
   const month = ("00" + (dateObject.getMonth() + 1)).slice(-2);
   const day = ("00" + dateObject.getDate()).slice(-2);
   return `${month}-${day}-${year}`;
}

export const validateRequired = (value, errorMessage) => {
  return value === "" ? errorMessage : "";
};