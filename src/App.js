import Note from './Note'
import { useState } from 'react'
import Notekeeper from './Notekeeper'
import Header from './Header'

function App() {

  const [allNote, setallNote] = useState([])

  const addNote = (data) => {
    let newNote = [...allNote, data]
    alert("Note added...")
    setallNote(newNote)
    console.log(data);
  }

  const removeNote = (id) => {
      setallNote(allNote.filter(val => val.id != id))
      alert("Note deleted succesfully...")
  }

  return (
    <div className="App">
      <Header/>
      <Note addNote={addNote} />
      <Notekeeper allNote={allNote} removeNote={removeNote}/>
    </div>
  );
}

export default App;
