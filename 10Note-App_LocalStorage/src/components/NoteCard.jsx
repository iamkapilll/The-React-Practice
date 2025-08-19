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









//## The Exact copy of above code is below with Comments added and for better understandig

// import React, { useState } from "react"
// import { useNote } from "../context"

// function NoteCard({ note }) {
//   // Track if the note is currently editable
//   const [isEditable, setIsEditable] = useState(false)

//   // Local state for title and description so we can edit them temporarily
//   const [title, setTitle] = useState(note.title) 
//   const [description, setDescription] = useState(note.description)

//   // Get update and delete methods from Context API
//   const { updateNote, deleteNote } = useNote()

//   // Function to save the updated note
//   const saveNote = () => {
//     // updateNote takes id + updated note object
//     updateNote(note.id, { ...note, title, description })
//     // Exit edit mode after saving
//     setIsEditable(false)
//   }

//   return (
//     <div className="border border-black/10 rounded-lg px-4 py-3 shadow-sm shadow-white/50 bg-white/20 duration-300 text-black">
      
//       {/* -------- Title -------- */}
//       <input
//         type="text"
//         className={`w-full font-bold bg-transparent outline-none mb-2 
//           ${isEditable ? "border border-black/20 rounded px-2 py-1" : "border-none"}
//         `}
//         value={title}                       // controlled input (state = title)
//         onChange={(e) => setTitle(e.target.value)} // update state while typing
//         readOnly={!isEditable}              // only editable in edit mode
//       />

//       {/* -------- Description -------- */}
//       <textarea
//         className={`w-full resize-none bg-transparent outline-none
//           ${isEditable ? "border border-black/20 rounded px-2 py-1" : "border-none"}
//         `}
//         value={description}                       // controlled textarea
//         onChange={(e) => setDescription(e.target.value)} // update state
//         readOnly={!isEditable}                    // editable only in edit mode
//       />

//       {/* -------- Action Buttons -------- */}
//       <div className="flex gap-2 mt-3">
        
//         {/* Edit / Save Button */}
//         <button
//           className="px-3 py-1 bg-blue-600 text-white rounded-lg disabled:opacity-50"
//           onClick={() => {
//             if (isEditable) {
//               saveNote()          // if in edit mode → save changes
//             } else {
//               setIsEditable(true) // if not editing → enable edit mode
//             }
//           }}
//         >
//           {isEditable ? "Save" : "Edit"} {/* Toggle text */}
//         </button>

//         {/* Delete Button */}
//         <button
//           className="px-3 py-1 bg-red-600 text-white rounded-lg"
//           onClick={() => deleteNote(note.id)} // delete note by id
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   )
// }

// export default NoteCard
