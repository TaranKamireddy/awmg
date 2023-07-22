import placeholder from "../images/finance-hero.png"

export default function Home() {
  return(
    <>
      <div className="header">
        <h1>American Wealth Management Group</h1>
        {/* <img src={placeholder} alt="" draggable="false"></img> */}
      </div>
      <div className="statement">
        <h1>Discover AWMG</h1>
        <p>We are a group of financial advisors eager to assist you</p>
      </div>
      <div className="section">
        <h1>Pls join our company</h1>
      </div>
    </>
  );
}
