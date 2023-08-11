import ServiceBox from "../components/ServiceBox"
import testFace from "../images/testFace.png"
import car from "../images/car.svg"
import house from "../images/house.svg"
import college from "../images/college.svg"
import retirement from "../images/retirement.svg"
import stocks from "../images/stocks.svg"
import business from "../images/business.svg"
import financial from "../images/financial.svg"
import portfolio from "../images/portfolio.svg"
import tax from "../images/tax.svg"
import insurance from "../images/insurance.svg"


export default function Services() {
  return(
    <div className="page">
      <h1>Services</h1>
      <div className="rows">
        <ServiceBox img={retirement} name="Retirement Planning"></ServiceBox>
        <ServiceBox img={financial} name="Financial Planning"></ServiceBox>
        <ServiceBox img={college} name="College Savings Planning"></ServiceBox>
        <ServiceBox img={house} name="Estate Planning"></ServiceBox>
        <ServiceBox img={stocks} name="Investment Management"></ServiceBox>
        <ServiceBox img={portfolio} name="Portfolio Management"></ServiceBox>
        <ServiceBox img={tax} name="Tax Planning"></ServiceBox>
        <ServiceBox img={insurance} name="Insurance Analysis"></ServiceBox>
        <ServiceBox img={business} name="Business Financial Services"></ServiceBox>
        <ServiceBox img={car} name="Risk Analysis"></ServiceBox>
      </div>
    </div>
  );
}
