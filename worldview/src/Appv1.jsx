import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";

export default function Appv1() {
  const x = 20;
  return (
    <div>
      <h1>NavBar</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
