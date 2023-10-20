import * as yup from "yup";
import moment from "moment";
const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const dateFormat = "YYYY/MM/DD";
function isValidDate(date, format) {
    return moment(date, format).isValid();
}
export const validationSchedule = yup.object().shape({
    animalId: yup
        .string()
        .required("animalId is required")
        .notOneOf(["Choose AnimalId"], "AnimalID cannot be Choose Anima;"),
    fields: yup.array().of(
        yup.object().shape({
            scheduleId: yup.string().required("Please choose foood"),
            time: yup.string().required("Please enter description of food"),
            description: yup.string().required("Please enter amount of food").min(2, "Description must be at least 2 characters")
        })
    ),
    // .matches(
    //   /^[a-zA-Z-.']+$/,
    //   "healthCheck can only contain letters, dashes, periods, and apostrophes"
    // ),
    // species: yup
    //   .string()
    //   .required("Species is required")
    //   .min(2, "Species must be at least 2 characters")
    //   .max(50, "Species cannot be more than 50 characters")
    //   .matches(
    //     /^[a-zA-Z-.']+$/,
    //     "Species can only contain letters, dashes, periods, and apostrophes"
    //   ),
    // birthday: yup
    //   .string()
    //   .required(),
    birthday: yup
        .string()
        .required("Vui lòng nhập ngày")
        .test({
            name: "start-date-valid",
            message: "Birthday must be before Entry Cage Date",
            test: function (value) {
                const currentDate = new Date();
                const entryCageDate = new Date(this.parent.entryCageDate);
                const selectedDate = new Date(value);

                return selectedDate <= currentDate && selectedDate <= entryCageDate;
            },
        }),
    // entryCageDate: yup.string().required("Choose cage date"),
    entryCageDate: yup
        .string()
        .required("Vui lòng nhập ngày")
        .test({
            name: "start-date-valid",
            message: "Date must be before Date Now",
            test: function (value) {
                const date = new Date(value);
                return date <= new Date();
            },
        }),
    // startTrainDate: yup.string().required("Choose date to train animal"),
    startTrainDate: yup
        .string()
        .required("Vui lòng nhập ngày")
        .test({
            name: "start-date-valid",
            message: "Date must be after Entry Cage Date",
            test: function (value) {
                const currentDate = new Date();
                const entryCageDate = new Date(this.parent.entryCageDate);
                const selectedDate = new Date(value);

                return selectedDate <= currentDate && selectedDate >= entryCageDate;
            },
        }),
    // entryDate: yup.string().required(),
    // image: yup.mixed().required('Please choose the image')
});
