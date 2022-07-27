import "./css/ItemListContainer.css";
import { ItemCounter } from "./ItemCounter";

export function ItemListContainer(props) {
  const listItems = props.items.map((item, index) => (
    <div className="card col-6 offset-3 offset-md-0 col-md" key={index}>
      <img
        src="src\src\images\testProduct.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <ItemCounter initial={1} stock={item.stock} productId={item.title} />
      </div>
    </div>
  ));
  return (
    <div className="container-fluid cardContainer">
      <div className="row">{listItems}</div>
    </div>
  );
}
