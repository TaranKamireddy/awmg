import Profile from "../components/Profile.js"
import "./About.css"
import testFace from "../images/testFace.png"
import { useState } from "react";

export default function About() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  console.log(modalIsOpen); 

  return (
    <div className="aboutPage">
      <div className="title">
        <h1>About us</h1>
        <h3>We're a small, closely-knit group of people based in Northern Virginia. We've been in business for over 3 years.</h3>
      </div>
      <div className="profileHorizontal">
        <Profile openModal={openModal}  modalIsOpen={modalIsOpen} afterOpenModal={afterOpenModal} closeModal={closeModal} name="Taran Kamireddy" position="Vice President" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" image={testFace}></Profile>

      </div>
    </div>
    
  )
}
