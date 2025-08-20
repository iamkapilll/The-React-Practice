import { useEffect, useState } from 'react'
import './App.css'
import { NoteProvider } from './context'
import NoteForm from './components/NoteForm'
import NoteCard from './components/NoteCard'

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
  useEffect(() =>{  // First useEffect runs once when app loads → it fetches saved notes from localStorage.
    const notes = JSON.parse(localStorage.getItem("notes"))
    if(notes && notes.length > 0){
      setNotes(notes)
    }
  }, [])

  useEffect(() =>{ // Second useEffect runs every time notes change → updates localStorage.
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])

return (
    // Wrapping children in Context Provider so they can access todos + methods
    <NoteProvider value={{ notes, addNote, updatedNote, deleteNote }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Notes</h1>
          
          {/* Todo Form for adding todos */}
          <div className="mb-4">
            <NoteForm />
          </div>

          {/* Display list of todos */}
          <div className="flex flex-wrap gap-y-3">
            {notes.map((note) => (
              <div key={note.id} className="w-full">
                <NoteCard note={note} />

              </div>
            ))}
          </div>
        </div>
      </div>
    </NoteProvider>
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