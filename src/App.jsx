import { useState } from "react";
import "./App.css";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

const bat50 = { title: "Bateria 50Ah", capacity: 50, stock: 4 };
const bat65 = { title: "Bateria 65Ah", capacity: 65, stock: 2 };
const bat75 = { title: "Bateria 75Ah", capacity: 75, stock: 7 };

const items = [bat50, bat65, bat75];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <ItemListContainer items={items} />
    </>
  );
}

export default App;
