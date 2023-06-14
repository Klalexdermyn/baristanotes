import * as yup from "yup";

export const recipeValidationSchema = yup.object().shape({
  name: yup.string().min(1).max(24).required("Name is required"),
  weight: yup
    .number()
    .typeError("weight must be a number")
    .moreThan(0)
    .max(999, "Weight cannot exceed 999")
    .required("Weight is required and must be a number"),
  extraction: yup
    .number()
    .typeError("extraction must be a number")
    .min(1)
    .max(999, "Weight cannot exceed 999")
    .required("Extraction is required and must be a number"),
  preassure: yup
    .number()
    .typeError("preassure must be a number")
    .min(1)
    .max(999, "Weight cannot exceed 999")
    .required("Preasure is required and must be a number"),
  grinding: yup
    .number()
    .typeError("grinding must be a number")
    .min(1)
    .max(999, "Weight cannot exceed 999")
    .required("Grinding is required and must be a number"),
  description: yup.string().min(1).max(48).required("Description is required"),
});
