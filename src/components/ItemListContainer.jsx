import { useParams } from "react-router-dom";
import "./css/ItemListContainer.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import picture from "./../src/images/testProduct.jpg";

export function ItemListContainer(props) {
  const [prodList, setProdList] = useState([]);
  const { idCat } = useParams();
  console.log("idCat", idCat);
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
        stock: 5,
        idCat: "fulmar",
      },
    ];
    const list = new Promise((resolve, rejected) => {
      setTimeout(() => {
        if (!idCat) {
          resolve(products);
        } else {
          resolve(products.filter((producto) => producto.idCat === idCat));
        }
      }, 500);
    });
    list.then((resolve) => setProdList(resolve));
  }, [prodList, setProdList, idCat]);
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="col-12">Productos</h2>
        </div>
      </div>
      <ItemList productos={prodList} />;
    </>
  );
}
