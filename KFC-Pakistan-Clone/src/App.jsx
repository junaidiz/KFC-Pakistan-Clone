import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import EverydayValues from "./pages/everyday-value";
import AlaCarteAndCombos from "./pages/ala-carte-and-combos";
import SignatureBoxes from "./pages/signature-boxes";
import Sharing from "./pages/sharing";
import SnacksAndBeverages from "./pages/snacks-and-beverages";
import Midnight from "./pages/midnight";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Header cartCount={cartCount} />
      <Routes>
        <Route exact path="/" element={
          <Home cartCount={cartCount} setCartCount={setCartCount} />
        }/>
        <Route path="/everyday-value" element={
          <EverydayValues/>
        }/>
        <Route path="/ala-carte-&-combos" element={
          <AlaCarteAndCombos/>
        }/>
        <Route path="/signature-boxes" element={
          <SignatureBoxes/>
        }/>
        <Route path="/sharing" element={
          <Sharing/>
        }/>
        <Route path="/snacks-&-beverages" element={
          <SnacksAndBeverages/>
        }/>
        <Route path="/midnight" element={
          <Midnight/>
        }/>
        {/* <Route path="/category#everyday-value">
            <EverydayValue/>
          </Route>
          <Route path="/category#ala-carte-&-combos">
            <AlaCarteAndCombos/>
          </Route>
          <Route path="/category#signature-boxes">
            <SignatureBoxes/>
          </Route>
          <Route path="/category#sharing">
            <Sharing/>
          </Route>
          <Route path="/category#snacks-&-beverages">
            <SnacksAndBeverages/>
          </Route>
          <Route path="/category#midnight">
            <Midnight/>
          </Route> */}
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
