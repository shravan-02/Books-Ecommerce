import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Auth from "../src/pages/Auth";
import Home from "./components/home/home";
import Homepage from "./pages/Homepage";
import ViewCart from "./pages/ViewCart";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} exact />
        <Route path="/homepage" element={<Homepage />} exact />
        <Route path="/cart" element={<ViewCart />} exact></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
