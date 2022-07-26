import { useState } from "react";
import "./App.css";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

const items = ["Bateria 50Ah", "Bateria 65Ah", "Bateria 75Ah"];

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
