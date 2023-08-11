import "./Stock.css"

function Stock({name, symbol, price, change}) {
  return (
    <div className="stock" style={{borderColor: change > 0 ? "rgb(0,128,0,0.5)" : "rgb(255,0,0,0.5)"}}>
      <div>
        <div className="stock-symbol">{symbol}</div>
        <div className="stock-name">{name}</div>
      </div>
      <div className="stock-data" style={{color: change > 0 ? "green" : "red"}}>
        <div>{price} USD</div> 
        <div>{Math.round(change * 100) / 100}%</div>
      </div>
    </div>
  );
}

export default Stock;