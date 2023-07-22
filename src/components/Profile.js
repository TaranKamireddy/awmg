import testFace from "../images/testFace.png"
import { FaPlus } from "react-icons/fa";
import "../About.css"

export default function Profiles() {

const name = "Taran Kamireddy"
const position = "Vice President"

  return (
    <div className="profile">
        <img src={testFace} alt="" draggable="false"></img>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <button><FaPlus style={{color: "#003B9F"}}/></button>
    </div>
  )
}