import testFace from "../images/testFace.png"
import { useState } from "react"
import { FaPlus } from "react-icons/fa";
import "../pages/About.css"
import Modal from "./Modal.js"

export default function Profiles() {

  const [openModal, setOpenModal] = useState(false)
  const name = "Taran Kamireddy"
  const position = "Vice President"

  return (
    <div className="profile">
        <img src={testFace} alt="" draggable="false"></img>
        <div className="test">
          <div className="verticalText">
            <h1>{name}</h1>
            <h2>{position}</h2>
          </div>
          <button onClick={() => {setOpenModal(true)}}><FaPlus style={{color: "#003B9F"}}/></button>
        </div>
        {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  )
}