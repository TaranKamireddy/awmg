import React from 'react'
import "./Modal.css"

export default function Modal({closeModal, name, description}) {
  return (
    <div className='modal'>
        <div className='modalContainer'>
          <button onClick={() => {closeModal(false)}}> X </button>
          <h1>{name}</h1>
          <p>{description}</p>
      </div>
    </div>
  )
}
