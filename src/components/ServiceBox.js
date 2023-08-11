import { FaArrowUp } from "react-icons/fa";
import "../pages/Services.css"

export default function ServiceBox({img, name}) {

  return (
    <div className="boxes">
        <img src={img}></img>
        <div className="horizontal">
          <h3>{name}</h3>
          <FaArrowUp/>
        </div> 
    </div>
  )
}