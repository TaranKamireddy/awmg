import { FaPlus } from "react-icons/fa";
import "../pages/About.css"
import Modal from 'react-modal';

export default function Profile({openModal, modalIsOpen, afterOpenModal, closeModal, name, description, image, position}) {

  return (
    <div className="profile">
        <img src={image} alt=""/>
        <div className="test">
          <div className="verticalText">
            <h1>{name}</h1>
            <h2>{position}</h2>
          </div>
          <button onClick={openModal}><FaPlus style={{color: "#FFFFFF"}}/></button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={{
              overlay: {
                position: 'fixed',
                zIndex: 1020,
                width: '100vw',
                height: '100vh',
                background: 'rgba(100, 100, 100, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
              content: {
                background: 'white',
                width: '30%',
                position: 'relative',
                borderRadius: '0.3rem',
              }}}
          >
            <p>{description}</p>
            <button onClick={closeModal}>close</button>
        </Modal>
        </div>
    </div>
  )
}