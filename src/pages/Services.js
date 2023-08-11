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

  const retirementPlanning = {
    img : retirement,
    description : "I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time.",
    name : "Retirement Planning"
  };
  const financialPlanning = {
    img : financial, 
    description : "I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time.",
    name : "Financial Planning"
  };
  const collegePlanning = {
    img : college, 
    description : "I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time.",
    name : "College Savings Planning"
  }; 
  const estatePlanning = {
    img : house, 
    description : "I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time.",
    name : "Estate Planning"
  }; 
  const investmentManagement = {
    img : stocks, 
    description : "I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time.",
    name : "Investment Management"
  };
  const portfolioManagement = {
    img : portfolio, 
    description : "I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time.",
    name : "Portfolio Management"
  };
  const taxPlanning = {
    img : tax, 
    description : "I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time.",
    name : "Tax Planning"
  };
  const insuranceAnalysis = {
    img : insurance, 
    description : "I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time.",
    name : "Insurance Analysis"
  };
  const businessPlanning = {
    img : business, 
    description : "I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time.",
    name : "Business Financial Services"
  };
  const riskAnalysis = {
    img : car, 
    description : "I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time. I be geeking all the time.",
    name : "Risk Analysis"
  };

  return(
    <div className="page">
      <h1>Services</h1>
      <div className="rows">
        <ServiceBox object={retirementPlanning}></ServiceBox>
        <ServiceBox object={financialPlanning}></ServiceBox>
        <ServiceBox object={collegePlanning}></ServiceBox>
        <ServiceBox object={estatePlanning}></ServiceBox>
        <ServiceBox object={investmentManagement}></ServiceBox>
        <ServiceBox object={portfolioManagement}></ServiceBox>
        <ServiceBox object={taxPlanning}></ServiceBox>
        <ServiceBox object={insuranceAnalysis}></ServiceBox>
        <ServiceBox object={businessPlanning}></ServiceBox>
        <ServiceBox object={riskAnalysis}></ServiceBox>
      </div>
    </div>
  );
}
