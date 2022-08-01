import { useState } from "react";
import "./App.css";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  );
}

export default App;
