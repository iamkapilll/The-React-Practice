import React, { useState } from "react"
import { useNote } from "../context"

function NoteCard({ note }) {
  const [isEditable, setIsEditable] = useState(false)
  const [title, setTitle] = useState(note.title) // for title
  const [description, setDescription] = useState(note.description) //for description

  const { updateNote, deleteNote } = useNote()  //from Context

  // Save updated note
  const saveNote = () => {
    updateNote(note.id, { ...note, title, description })
    setIsEditable(false)
  }

  return (
    <div className="border border-black/10 rounded-lg px-4 py-3 shadow-sm shadow-white/50 bg-white/20 duration-300 text-black">
      {/* Title */}
      <input
        type="text"
        className={`w-full font-bold bg-transparent outline-none mb-2 
          ${isEditable ? "border border-black/20 rounded px-2 py-1" : "border-none"}
        `}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={!isEditable}
      />

      {/* Description */}
      <textarea
        className={`w-full resize-none bg-transparent outline-none
          ${isEditable ? "border border-black/20 rounded px-2 py-1" : "border-none"}
        `}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        readOnly={!isEditable}
      />

      {/* Action buttons */}
      <div className="flex gap-2 mt-3">
        {/* Edit / Save button */}
        <button
          className="px-3 py-1 bg-blue-600 text-white rounded-lg disabled:opacity-50"
          onClick={() => {
            if (isEditable) {
              saveNote()
            } else {
              setIsEditable(true)
            }
          }}
        >
          {isEditable ? "Save" : "Edit"}
        </button>

        {/* Delete button */}
        <button
          className="px-3 py-1 bg-red-600 text-white rounded-lg"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default NoteCard
