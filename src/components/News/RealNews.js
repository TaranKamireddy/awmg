import "./RealNews.css"
import axios from "axios";
import {useState, useEffect} from "react"

export default function RealNews() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: {q: 'Finance', lang: 'en', sort_by: 'relevancy', page: '1'},
      headers: {'x-api-key': 'Yb6easrtSrRIELHA9w0XezMtdJf_MdlmBzaJYvtFcjY'}
    };
    axios.request(options).then((response) => {
      console.log(response.data.articles);
      setNews(response.data.articles);
    });
  }, []);

  if (!news) return (
    <h1>We currently have no news related to that topic.</h1>
  )

  return (
    <div>
      {news && (
        <div className="stocknews">
          {news.map(n => {
            return (
              <>
                <p>{n.summary}{n.link}</p>
                <img style={{height:"200px"}} src={n.media} alt="" />
              </>
            )
          })}
        </div>
      )}
    </div>
  );
}
