import { useState } from "react";
import { useFormik } from "formik";
import { inputFormat } from "../inputFormat";
import { recipeValidationSchema } from "../../Validations/recipeValidation";

export function useRecipeForm(initialValues, onSubmit) {
  const [recipes, setRecipe] = useState([]);

  console.log(initialValues);
  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema: recipeValidationSchema,
    onSubmit,
  });

  const handleNumbersInputChange = (fieldName) => (event) => {
    const { value } = event.target;
    const sanitizedValue = inputFormat(value);
    setFieldValue(fieldName, sanitizedValue);
    // console.log(initialValues);
  };

  const deleteNote = (noteKey) => {
    const index = recipes.findIndex((recipe) => recipe.key === noteKey);
    if (index !== -1) {
      recipes.splice(index, 1);
      setRecipe([...recipes]);
      window.localStorage.setItem("MY_APP_STATE", JSON.stringify(recipes));
    }
  };

  return {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
    recipes,
    setRecipe,
    handleNumbersInputChange,
    deleteNote,
    setValues,
  };
}
