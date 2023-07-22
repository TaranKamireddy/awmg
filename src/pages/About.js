import Profile from "../components/Profile.js"
import "./About.css"

export default function About() {
  return (
    <div className="aboutPage">
      <div className="title">
        <h1>About us</h1>
      </div>
      <div className="profileHorizontal">
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
      </div>
    </div>
  )
}
