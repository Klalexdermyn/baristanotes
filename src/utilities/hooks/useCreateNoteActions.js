import { useState } from "react";
export function useCreateNoteActions(resetForm) {
  const [addnote, setAddNote] = useState(false);

  function addNote(event) {
    event.preventDefault();
    setAddNote(true);
  }

  function closeNote(event) {
    event.preventDefault();
    resetForm();
    setAddNote(false);
  }
  
  function deleteNote(event) {
    event.preventDefault();
    setAddNote(false);
  }

  return { addNote, closeNote, addnote };
}
