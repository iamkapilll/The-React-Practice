
import './App.css'

function App() {

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