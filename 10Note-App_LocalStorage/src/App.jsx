
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (note) => {
    setNotes((prev) => [{id: Date.now(), ...note}, ...prev])
  }

  const updatedNote = (id, note) =>{
    setNotes((prev) =>
    prev.map((prevNote) =>
    prevNote.id === id ? note : prevNote))
  }

  const deleteNote = (id) =>{
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }


  //Load notes from localStorage when app starts
  useEffect(() =>{
    const notes = JSON.parse(localStorage.getItem("notes"))
    if(notes && notes.length > 0){
      setNotes(notes)
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])

  return (
    <>
      <div className='w-full h-full p-5 bg-orange-400 rounded-sm '>hello world</div>
    </>
  )
}

export default App



// 🔹 1. Notes App

// Each note = { id, title, description }

// Features:

// Add new note (title + description).

// Edit a note.

// Delete a note.

// Save/load from LocalStorage.

// Context API methods:

// addNote(note)

// updateNote(id, updatedNote)

// deleteNote(id)

// 👉 Data flow is almost identical to your Todo App, except now you have two fields instead of one (title, description).