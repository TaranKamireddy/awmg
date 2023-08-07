import React, { useEffect, useState } from "react"
import News from "./News.js"
import "./StockNews.css"

const Api = () => {
  const [news, setNews] = useState([])

  const apikey = "f3949a3819b6a6204acb4632a1bd4e6f"
  const fetchData = () => {
    fetch(`https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=10&apikey=${apikey}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.content)
        setNews(data.content)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {news && (
        <div className="stocknews">
          {news.map(n => {
            return <News title={n.title} date={n.date} content={n.content} img={n.image} link={n.link} symbl={n.tickers}/>
          })}
        </div>
      )}
    </div>
  );
}

export default Api;