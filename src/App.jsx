import React, { useEffect, useState } from "react";
import { Note } from "./components/Note";
import { CreateNote } from "./components/CreateNote";
import { AddNote } from "./components/AddNote";
import { v4 as uuid } from "uuid";
import { useCreateNoteActions } from "./utilities/hooks/useCreateNoteActions";
import { useRecipeForm } from "./utilities/hooks/useRecipeFrom";

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

  const initialValue = {
    name: "",
    weight: "",
    extraction: "",
    preassure: "",
    grinding: "",
    description: "",
  };

  const {
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
  } = useRecipeForm(initialValue, onSubmit);
  const {isEditing, setIsEditing, setAddNote, addNote, closeNote, addnote } = useCreateNoteActions(resetForm);

  const editNote = (noteKey) => {
    const index = recipes.findIndex((recipe) => recipe.key === noteKey);
    if (index !== -1) {
      setValues(recipes[index]);
      // setPreviousValues((prevValue) => ({ ...prevValue, ...recipes[index] }));
      setIsEditing(true);
      setAddNote(true);
    }
  };

  useEffect(() => {
    const data = window.localStorage.getItem("MY_APP_STATE");
    if (data !== null) {
      setRecipe(JSON.parse(data));
    }
  }, [setRecipe]);
  useEffect(() => {
    window.localStorage.setItem("MY_APP_STATE", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      {!addnote ? <AddNote addNote={addNote} /> : ""}
      {addnote && !isEditing &&(
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
      {isEditing && (
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
          editNote={editNote}
        />
      ))}
    </>
  );
}

export default App;
