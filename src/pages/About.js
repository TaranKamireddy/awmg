import Profiles from "../Profiles.js"

export default function About() {
  return (
    <div className="aboutPage">
      <h1>About</h1>
      <div className="profilesHorizontal">
        <Profiles></Profiles>
        <Profiles></Profiles>
        <Profiles></Profiles>
      </div>
    </div>
  )
}
