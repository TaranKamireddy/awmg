import "./Home.css"
import Background from "../components/Background"
import fadvisor from "../images/fadvisor.jpg"

export default function Home() {
  return(
    <>
      <Background/>
      <div className="header">
        <h1>American Wealth Management Group</h1>
      </div>
      <div className="statement">
        <div className="statement-text">
          <h1>Discover AWMG</h1>
          <p>We are a group of financial advisors eager to assist you</p>
        </div>
        <div className="statement-image">
          <img src={fadvisor} alt="financial advisor" draggable="false" />
        </div>
      </div>
      <div className="section">
        <h1>Pls join our company</h1>
      </div>
    </>
  );
}
