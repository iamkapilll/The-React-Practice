import React, { useState } from 'react'
import { useNote } from '../context'

const NoteForm = () => {

    const [note, setNote] = useState("")

    const {addNote} = useNote()

    const add = (e) => {
        e.preventDefault()
        if(!note) return // do nothing

        addNote({note})
        setNote("")
    }

 return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default NoteForm

// 5. Data Flow

// Here’s the full flow when you type and click Add:
// User types "Buy milk" → note state updates.
// User presses Add → onSubmit triggers add.
// add calls addNote({ note }).
// Inside your global App.jsx, addNote updates the notes state:
//    setNotes((prev) => [{ id: Date.now(), ...note }, ...prev])
// Notes are saved in localStorage by useEffect.
// UI re-renders → the new note appears in the list.
