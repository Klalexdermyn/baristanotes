import React, { useEffect } from "react";
import { Note } from "./components/Note";
import { CreateNote } from "./components/CreateNote";
import { AddNote } from "./components/AddNote";
import { v4 as uuid } from "uuid";
import { useCreateNoteActions } from "./utilities/hooks/useCreateNoteActions";
import { useRecipeForm } from "./utilities/hooks/useRecipeFrom";

function App() {
  const onSubmit = (value) => {
    if (isEditing) {
      Object.assign(recipes[index], value);
      setIsEditing(false);
      setAddNote(false);
    } else {
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
      setAddNote(false);
      setIsEditing(false);
    }
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
    index,
    setIndex,
  } = useRecipeForm(initialValue, onSubmit);
  const { isEditing, setIsEditing, setAddNote, addNote, closeNote, addnote } =
    useCreateNoteActions(resetForm);

  const editNote = (noteKey) => {
    const index = recipes.findIndex((recipe) => recipe.key === noteKey);
    if (index !== -1) {
      setValues(recipes[index]);
      setIndex(index);
      setIsEditing(noteKey);
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
      {addnote && !isEditing && (
        <CreateNote
          handleNumbersInputChange={handleNumbersInputChange}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBlur={handleBlur}
          closeNote={closeNote}
          values={values}
          touched={touched}
          errors={errors}
        />
      )}
      {recipes.map((recipe) => (
        <Note
          recipe={recipe}
          key={recipe.key}
          noteKey={recipe.key}
          deleteNote={deleteNote}
          editNote={editNote}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          values={values}
          handleNumbersInputChange={handleNumbersInputChange}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeNote={closeNote}
          isEditing = {isEditing === recipe.key}
        />
      ))}
    </>
  );
}

export default App;
