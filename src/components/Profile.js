import testFace from "../images/testFace.png"
import { useState } from "react";

export default function Profiles() {

const [name, setName] = useState("Taran Kamireddy")
const [position, setPosition] = useState("Vice President")

  return (
    <div className="profiles">
        <img src={testFace} alt="" draggable="false"></img>
        <h1>{name}</h1>
        <h2>{position}</h2>
    </div>
  )
}