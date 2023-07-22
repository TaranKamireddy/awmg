import testFace from "../images/testFace.png"
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "../About.css"

export default function Profiles() {

const name = "Taran Kamireddy"
const position = "Vice President"

  return (
    <div className="profile">
        <button><FaPlus style={{color: "#003B9F"}}/></button>
        <img src={testFace} alt="" draggable="false"></img>
        <h1>{name}</h1>
        <h2>{position}</h2>
    </div>
  )
}