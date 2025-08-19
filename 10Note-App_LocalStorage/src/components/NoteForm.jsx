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
    <div>NoteForm</div>
  )
}

export default NoteForm