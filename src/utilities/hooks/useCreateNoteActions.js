import { useState } from "react";
export function useCreateNoteActions(resetForm) {
  const [addnote, setAddNote] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function addNote(event) {
    event.preventDefault();
    setAddNote(true);
  }

  function closeNote(event) {
    event.preventDefault();
    setIsEditing(false)
    resetForm();
    setAddNote(false);
  }
  

  return { isEditing, setIsEditing, setAddNote, addNote, closeNote, addnote };
}
