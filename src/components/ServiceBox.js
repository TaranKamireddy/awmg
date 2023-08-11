import { FaArrowUp } from "react-icons/fa";
import "../pages/Services.css"

export default function ServiceBox({object}) {

  return (
    <div className="boxes">
        <img src={object.img}></img>
        <div className="horizontal">
          <h3>{object.name}</h3>
          <a href="/servicepage"><FaArrowUp/></a>
        </div> 
    </div>
  )
}