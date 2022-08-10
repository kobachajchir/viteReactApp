import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import picture from "./../src/images/testProduct.jpg";

function ItemDetailContainer(props) {
  const [product, setProduct] = useState({
    id: "Test",
    title: "Objeto temporal",
    description: "State inicial",
    price: 0,
    pictureUrl: "",
    stock: 0,
    idCat: "test",
  });
  const { idProd } = useParams();
  console.log("id", idProd);
  useEffect(() => {
    let products = [
      {
        id: "36500",
        title: "Bateria 50Ah",
        description: "Bateria para automotor 12v 50Ah",
        price: 18000,
        pictureUrl: picture,
        stock: 3,
        idCat: "baterias",
      },
      {
        id: "42650",
        title: "Bateria 65Ah",
        description: "Bateria para automotor 12v 65Ah",
        price: 20000,
        pictureUrl: picture,
        stock: 5,
        idCat: "baterias",
      },
      {
        id: "48750",
        title: "Bateria 75Ah",
        description: "Bateria para automotor 12v 75Ah",
        price: 25000,
        pictureUrl: picture,
        stock: 7,
        idCat: "baterias",
      },
      {
        id: "DEP450",
        title: "Motorola DEP450",
        description: "Handy Motorola VHF",
        price: 75000,
        pictureUrl: picture,
        stock: 2,
        idCat: "radios",
      },
      {
        id: "TANGOXP3",
        title: "Ticketera Tango XP 3er Gen",
        description: "Ticketera para taxi Tango XP con frente LED",
        price: 62000,
        pictureUrl: picture,
        stock: 4,
        idCat: "fulmar",
      },
    ];
    const list = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(
          products
            .filter((item) => {
              return item.id === idProd;
            })
            .at(0)
        );
      }, 500);
    });
    list.then((resolve) => setProduct(resolve));
  }, [product, setProduct, idProd]);
  return (
    <div className="row">
      <ItemDetail item={product} />
    </div>
  );
}

export default ItemDetailContainer;
