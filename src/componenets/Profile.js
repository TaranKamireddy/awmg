import testFace from "../images/testFace.png"

export default function Profile() {

const name = "Taran Kamireddy";
const position = "Vice President";

  return (
    <div className="profile">
        <div className="triangle"/> 
        <img src={testFace}></img>
        <h1>{name}</h1>
        <h2>{position}</h2>
    </div>
  )
}