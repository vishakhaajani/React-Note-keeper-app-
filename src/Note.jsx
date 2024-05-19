import React from 'react'
import './note.css'
import { useState } from 'react'

const Note = ({addNote}) => {

    const [title , setTitle] = useState("")
    const [note , setNote] = useState("")

    const handle = (event) => {

        event.preventDefault()

        if (title === '' || note === '') {
          alert('Both filled is must required...')
          return
        }

        let obj = {
            id : Date.now(),
            title ,
            note ,
        }

        addNote(obj)
        setNote("")
        setTitle("")
    
    }


  return (
    <div align='center'>
      <form onSubmit={handle}>
        <div className='box'>
        <input type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)} value={title}></input><br></br>
        <input type='text' placeholder='Take a note...' onChange={(e) => setNote(e.target.value)} value={note} id='noteInput'></input>
        {/* <textarea name="" id="" placeholder='Take a note...'onChange={(e) => setNote(e.target.value)} value={note} rows={3}></textarea> */}
        </div>
        <button type='submit'>+</button>
      </form>
    </div>
  )
}

export default Note
