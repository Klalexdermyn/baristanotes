import React, { useState, useEffect } from "react";
import { Note } from "./components/Note";
import { CreateNote } from "./components/CreateNote";
import { AddNote } from "./components/AddNote";
import { recipeValidationSchema } from "./Validations/recipeValidation";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";
import { useCreateNoteActions } from "./utilities/hooks/useCreateNoteActions";
import { inputFormat } from "./utilities/inputFormat";

function App() {
  const onSubmit = (value) => {
    let formData = {
      name: value.name,
      weight: value.weight,
      extraction: value.extraction,
      preassure: value.preassure,
      grinding: value.grinding,
      description: value.description,
      key: uuid(),
    };
    setRecipe([formData, ...recipes]);
    resetForm();
  };

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      weight: "",
      extraction: "",
      preassure: "",
      grinding: "",
      description: "",
    },
    validationSchema: recipeValidationSchema,
    onSubmit,
  });
  const [recipes, setRecipe] = useState([
    {
      name: "Mexico Chiapas",
      weight: "16,7",
      extraction: "27sec",
      preassure: "8-9b",
      grinding: "5",
      description:
        "very sour, not bitter, slight taste of mexican monkey's ass",
    },
    {
      name: "El Polo Locco",
      weight: "16,7",
      extraction: "27sec",
      preassure: "8-9b",
      grinding: "5",
      description: "nice",
    },
    {
      name: "Nestle 3 in 1",
      weight: "15",
      extraction: "5sec",
      preassure: "1b",
      grinding: "9999",
      description: "belissimo",
    },
  ]);
  const { addNote, closeNote, addnote } = useCreateNoteActions(resetForm);
  const handleNumbersInputChange = (fieldName) => (event) => {
    const { value } = event.target;
    const sanitizedValue = inputFormat(value);
    setFieldValue(fieldName, sanitizedValue);
  };
  const deleteNote = (noteKey) => {
    console.log(noteKey);
    const index = recipes.findIndex((recipe) => recipe.key === noteKey);
    if (index !== -1) {
      // Remove the item from the array
      recipes.splice(index, 1);
      setRecipe([...recipes]);
      window.localStorage.setItem("MY_APP_STATE", JSON.stringify(recipes));
      console.log(index);
    }
  };

  useEffect(() => {
    const data = window.localStorage.getItem("MY_APP_STATE");
    console.log(data);
    if (data !== null) {
      setRecipe(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("MY_APP_STATE", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      {!addnote ? <AddNote addNote={addNote} /> : ""}
      {addnote && (
        <CreateNote
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          values={values}
          handleNumbersInputChange={handleNumbersInputChange}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeNote={closeNote}
          nameChange={handleChange}
        />
      )}
      {recipes.map((recipe) => (
        <Note
          recipe={recipe}
          key={recipe.key}
          noteKey={recipe.key}
          deleteNote={deleteNote}
        />
      ))}
    </>
  );
}

export default App;
