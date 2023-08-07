// let doc = new DOMParser().parseFromString(stock.content, "text/xml");
//             console.log(doc.firstChild.innerHTML);

import "./News.css"

function News({title, date, content, img, link, symbl}) {
  return (
    <div>
      <div>{title}</div>
      <div>{date}</div>
      <div>{symbl}</div>
      <div dangerouslySetInnerHTML={{ __html: content}} />
      <div>{link}</div>
      <img src={img} alt = ""/>
    </div>
  );
}

export default News;