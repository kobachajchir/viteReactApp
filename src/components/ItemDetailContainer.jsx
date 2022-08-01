import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import picture from "./../src/images/testProduct.jpg";

function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const [bandera, setBandera] = useState(false);
  useEffect(() => {
    const list = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve({
          id: "36500",
          title: "Bateria 50Ah",
          description: "Bateria para automotor 12v 50Ah",
          price: 18000,
          pictureUrl: picture,
          stock: 3,
        });
      }, 2000);
    });
    list
      .then((value) => setProduct(value))
      .finally(() => {
        setBandera(true);
      });
  }, []);
  return !bandera ? null : (
    <div className="row">
      <ItemDetail item={product} />
    </div>
  );
}

export default ItemDetailContainer;
