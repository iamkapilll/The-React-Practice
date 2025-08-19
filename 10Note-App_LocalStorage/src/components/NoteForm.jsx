import React, { useState } from 'react'
import { useNote } from '../context'

const NoteForm = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const { addNote } = useNote()

    const add = (e) => {
        e.preventDefault()
        if (!title && !description) return

        addNote({ title, description })
        setTitle("")
        setDescription("")



    }

    return (
        <form onSubmit={add} className="flex flex-col gap-2">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 py-1.5 bg-white/20 outline-none"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-black/10 rounded-lg px-3 py-1.5 bg-white/20 outline-none"
            />
            <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded-lg">
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
