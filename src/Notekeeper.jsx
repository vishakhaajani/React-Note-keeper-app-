import React from 'react'
import './note.css'
import { MdDelete } from "react-icons/md";

const Notekeeper = ({ allNote , removeNote }) => {
  return (
    <div className="noteKeeper">
      {
          allNote.map((val) => {
            return (
              <div className="noteCard" key={val.id}>
                <h2 className="noteTitle">{val.title}</h2>
                <p className="noteContent">{val.note}</p>
                <div className="icon">
                    <span onClick={() => removeNote(val.id)}> <MdDelete /></span>
                </div>
              </div>
            )
          })
      }
    </div>
  )
}

export default Notekeeper
