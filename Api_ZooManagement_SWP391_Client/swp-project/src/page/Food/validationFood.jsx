import * as yup from "yup";
import moment from "moment";
const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const dateFormat = "YYYY/MM/DD";
function isValidDate(date, format) {
    return moment(date, format).isValid()
  }
export const schema = yup.object().shape({
  fName: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be more than 50 characters")
    .matches(
      /^[a-zA-Z-.']+$/,
      "Category can only contain letters, dashes, periods, and apostrophes"
    ),
  category: yup
    .string()
    .required("Category is required")
    .min(1, "Category must be at least 1 characters")
    .max(50, "Category cannot be more than 50 characters")
    .matches(
      /^[a-zA-Z-.']+$/,
      "Category can only contain letters, dashes, periods, and apostrophes"
    ),
  quantity: yup
    .number()
    .required()
    .typeError("Quantity must be a number")
    .positive("Quantity must be positive")
    .integer("Quantity must be an integer")
    .max(10000, "Quantity cannot be more than 10000")
    .min(1, "Quantity must be at least 1"),
  importDate: yup
    .string()
    .required()
    .matches(
      dateRegex,
      "Import date must be a valid date in YYYY-MM-DD format"
    )
    .test('format', 'Invalid date format', value => {
        return isValidDate(value, dateFormat) 
      }),
    expiredDate: yup  
    .string()
    .required()
    .matches(dateRegex)
    .test('is-future-date', 'Please choose date after ImportDate', value => {
      return moment(value, dateFormat).isBefore(moment(importDate, dateFormat))
    })
});
