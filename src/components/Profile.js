import { useState } from "react"
import { FaPlus } from "react-icons/fa";
import "../pages/About.css"
import Modal from 'react-modal';
import { AspectRatio } from 'react-aspect-ratio';

export default function Profile({openModal, modalIsOpen, afterOpenModal, closeModal, name, description, image, position}) {

  return (
    <div className="profile">
        <img src={image} alt="" draggable="false"></img>
        <div className="test">
          <div className="verticalText">
            <h1>{name}</h1>
            <h2>{position}</h2>
          </div>
          <button onClick={openModal}><FaPlus style={{color: "#003B9F"}}/></button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
        </Modal>
        </div>
    </div>
  )
}