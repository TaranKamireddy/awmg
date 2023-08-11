import "./News.css"
import Stocks from "../components/News/Stocks";
import StockNews from "../components/News/StockNews";
import RealNews from "../components/News/RealNews"

export default function News() {
  return(
    <>
      <RealNews />
      <Stocks />
      <StockNews />
    </>
  );
}
