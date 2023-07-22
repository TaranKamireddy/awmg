import Profile from "../componenets/Profile.js"

export default function About() {
  return (
    <div className="aboutPage">
      <h1>About us</h1>
      <div className="profileHorizontal">
        <Profile></Profile>
        <Profile></Profile>
        <Profile></Profile>
      </div>
    </div>
  )
}
