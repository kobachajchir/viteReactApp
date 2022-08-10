import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemCounter } from "./ItemCounter";

function Item(props) {
  return (
    <div className="card col-6 offset-3 offset-md-0 col-md-4" key={props.index}>
      <img src={props.item.pictureUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.description}</p>
        <div className="col-12 row justify-content-center">
          <Link
            to={"/product/" + props.item.id}
            className="btn btn-primary seeProductInfo col-6"
          >
            Ver producto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
