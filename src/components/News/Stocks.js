import React, { useEffect, useState } from "react"
import Stock from "./Stock.js"
import "./Stocks.css"

const Api = () => {
  const [stocks, setStocks] = useState([])

  const apikey = "f3949a3819b6a6204acb4632a1bd4e6f"
  const fetchData = () => {
    fetch(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apikey}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setStocks(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {stocks && (
        <div className="stocks">
          {stocks.map(stock => (
            <Stock name={stock.name} symbol={stock.symbol} price={stock.price} change={stock.changesPercentage}/>
          ))}
        </div>
      )}
      <p>
      Data provided by Financial Modeling Prep
      </p>
    </div>
  );
}

export default Api;