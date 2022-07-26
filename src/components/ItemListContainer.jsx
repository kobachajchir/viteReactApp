import "./css/ItemListContainer.css";

export function ItemListContainer(props) {
  const listItems = props.items.map((item, index) => (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="src\src\images\testProduct.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  ));
  return <div className="container-fluid cardContainer">{listItems}</div>;
}
