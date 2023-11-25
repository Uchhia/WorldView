import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Home from "./pages/Homepage";
import PageNotFound from "./PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:9000";

export default function Appv1() {
  const [cities, setCities] = useState([]);
  const [isloadig, setloading] = useState(false);
  useEffect(function () {
    const fetchData = async () => {
      try {
        setloading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* alternatate for home */}
          {/* <Route path="/" element={<Home />} /> */}
          <Route index element={<Home />} />

          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index replace element={<Navigate to="cities" />} />
            <Route
              path="cities"
              element={<CityList cities={cities} isloadig={isloadig} />}
            />

            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isloading={isloadig} />}
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
