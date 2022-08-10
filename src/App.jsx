import { useState } from "react";
import "./App.css";
import "./../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            exact
            path="/category/:idCat"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/product/:idProd"
            element={<ItemDetailContainer />}
          />
          <Route path="*" element={<p>404 not found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
