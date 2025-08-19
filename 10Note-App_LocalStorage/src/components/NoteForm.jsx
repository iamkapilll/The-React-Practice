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



// 1. Props
// This component does not receive props.
// It’s a standalone form for adding new notes.

// 2. Local State (title, description)
// title → stores the text entered in the title input.
// description → stores the text entered in the description textarea.
// These are controlled form fields, meaning React state always controls what’s shown.


// 3. Context (useNote)
// Uses useNote() to access the addNote function from the global NoteContext.
// This lets the form send new notes to the global state.


// 4. Adding a Note (add function)
// Runs when the form is submitted.
// e.preventDefault() stops page reload (default form behavior).
// If both title & description are empty → do nothing.

// Otherwise:
// Calls addNote({ title, description }) → adds new note to global state.
// Resets form fields (setTitle(""), setDescription("")).



// 5. UI (JSX Rendering)
// Form (<form>) wraps the inputs and button.
// Title Input (<input type="text">) → controlled by title state.
// Description Textarea (<textarea>) → controlled by description state.
// Add Button (<button type="submit">) → triggers the add function to create a new note.




















// 5. Data Flow

// Here’s the full flow when you type and click Add:
// User types "Buy milk" → note state updates.
// User presses Add → onSubmit triggers add.
// add calls addNote({ note }).
// Inside your global App.jsx, addNote updates the notes state:
//    setNotes((prev) => [{ id: Date.now(), ...note }, ...prev])
// Notes are saved in localStorage by useEffect.
// UI re-renders → the new note appears in the list.



// Because your addNote already does this:

// const addNote = (note) => {
//   setNotes((prev) => [{ id: Date.now(), ...note }, ...prev])
// }


// So when NoteForm calls:

// addNote({ title, description })


// your note object becomes:

// { id: 123456789, title: "My Title", description: "My Description" }


// 🔹 So, the flow is now:

// NoteForm → user types title & description → calls addNote().
// addNote in App.jsx → updates state with { id, title, description }.
// notes state updates → UI re-renders → <NoteCard> shows it.
// useEffect syncs notes to localStorage.