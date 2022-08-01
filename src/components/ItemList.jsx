import { useEffect, useState } from "react";
import Item from "./Item";
import picture from "./../src/images/testProduct.jpg";

function ItemList(props) {
  const [prodList, setProdList] = useState([]);
  useEffect(() => {
    const list = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve([
          {
            id: "36500",
            title: "Bateria 50Ah",
            description: "Bateria para automotor 12v 50Ah",
            price: 18000,
            pictureUrl: picture,
            stock: 3,
          },
          {
            id: "42650",
            title: "Bateria 65Ah",
            description: "Bateria para automotor 12v 65Ah",
            price: 20000,
            pictureUrl: picture,
            stock: 5,
          },
          {
            id: "48750",
            title: "Bateria 75Ah",
            description: "Bateria para automotor 12v 75Ah",
            price: 25000,
            pictureUrl: picture,
            stock: 7,
          },
        ]);
      }, 2000);
    });
    list.then((list) => setProdList(list));
  }, []);
  return (
    <div className="container-fluid cardContainer">
      <div className="row">
        {prodList.map((item, index) => (
          <Item item={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
