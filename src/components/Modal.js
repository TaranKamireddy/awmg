import React from 'react'
import "./Modal.css"

export default function Modal({closeModal}) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button onClick={() => {closeModal(false)}}> X </button>
        <h1>Taran Kamireddy</h1>
        <p>I love eating bbc</p>
      </div>
    </div>
  )
}
