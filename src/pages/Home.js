import placeholder from "../images/finance-hero.png"; 

export default function Home() {
  return(
    <>
      <div className="header">
        <h1>American Wealth Management Group</h1>
        <img src={placeholder}></img>
      </div>
      <div className="statement">
        <h1>Discover AWMG</h1>
        <p>We are a group of financial advisors eager to assist you</p>
      </div>
    </>
  );
}
