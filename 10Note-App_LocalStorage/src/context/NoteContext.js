import { createContext, useContext } from "react";

export const NoteContext = createContext({
    Notes: [
        {
            id: 1,
            title: "note message",
            description: "about the note title"
        }
    ],
    
    addNote: (note) => {},
    updateNote: (id, note) => {},
    deleteNote: (id) => {}
})

export const NoteProvider = NoteContext.Provider

export const useNote = () =>{
    return useContext(NoteContext)
}