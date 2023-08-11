export default function ServicePage(object) {
    return(
      <div className="page">
        <img src={object.img}></img>
        <div className="vertical">
          <h1>{object.name}</h1>
          <p>{object.description}</p>
        </div>
      </div>
    );
}