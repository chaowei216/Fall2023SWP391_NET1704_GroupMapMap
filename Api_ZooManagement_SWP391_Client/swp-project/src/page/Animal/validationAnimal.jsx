import * as yup from "yup";
import moment from "moment";
const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const dateFormat = "YYYY/MM/DD";
function isValidDate(date, format) {
  return moment(date, format).isValid();
}
export const schemaAnimal = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be more than 50 characters")
    .matches(
      /^[a-zA-Z-.']+$/,
      "Name can only contain letters, dashes, periods, and apostrophes"
    ),
  // animalId: yup
  //   .string()
  //   .required("AnimeID is required")
  //   .matches(/^[a-zA-Z]\d{4}$/, "Need format form"),
  cageId: yup
    .string()
    .required("CageID is required")
    .matches(/C\d{4}/, "Need format form"),
  userId: yup
    .string()
    .required("CageID is required")
    .matches(/^[a-zA-Z]\d{4}$/, "Need format form"),
  description: yup
    .string()
    .required("Description is required")
    .min(2, "Description must be at least 2 characters")
    .max(50, "Description cannot be more than 50 characters"),
    // .matches(
    //   /^[a-zA-Z-.']+$/,
    //   "description can only contain letters, dashes, periods, and apostrophes"
    // ),
  region: yup
    .string()
    .required("Region is required")
    .min(2, "Region must be at least 2 characters")
    .max(30, "Region cannot be more than 30 characters"),
    // .matches(
    //   /^[a-zA-Z-.']+$/,
    //   "Region can only contain letters, dashes, periods, and apostrophes"
    // ),
  healthCheck: yup
    .string()
    .required("healthCheck is required")
    .min(2, "Description must be at least 2 characters"),
    // .matches(
    //   /^[a-zA-Z-.']+$/,
    //   "healthCheck can only contain letters, dashes, periods, and apostrophes"
    // ),
  species: yup
    .string()
    .required("Species is required")
    .min(2, "Species must be at least 2 characters")
    .max(50, "Species cannot be more than 50 characters")
    .matches(
      /^[a-zA-Z-.']+$/,
      "Species can only contain letters, dashes, periods, and apostrophes"
    ),
  birthday: yup
    .string()
    .required(),
  startTrainDate: yup
    .string()
    .required(),
  entryCageDate: yup.string().required(),
  entryDate: yup.string().required(),
  // image: yup.mixed().required('Please choose the image')
});
