import { useEffect, useState } from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

function ItemList(props) {
  return (
    <div className="container-fluid cardContainer">
      <div className="row w-100">
        {props.productos.map((product) => (
          <Item item={product} key={product.id} index={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
