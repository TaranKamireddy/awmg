import Profile from "../components/Profile.js"
import "./About.css"
import testFace from "../images/testFace.png"

export default function About() {
  return (
    <div className="aboutPage">
      <div className="title">
        <h1>About us</h1>
        <h3>We're a small, closely-knit group of people based in Northern Virginia. We've been in business for over 3 years.</h3>
      </div>
      <div className="profileHorizontal">
        <Profile name="Taran Kamireddy" position="Vice President" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" image={testFace}></Profile>
        <Profile name="Taran Kamireddy" position="Vice President" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" image={testFace}></Profile>
        <Profile name="Taran Kamireddy" position="Vice President" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" image={testFace}></Profile>
      </div>
    </div>
  )
}
