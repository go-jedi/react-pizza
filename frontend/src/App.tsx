import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Basket from "./components/Basket";
import SuccessPay from "./components/SuccessPay";
import { useActions } from "./hooks/useActions";
import { useTypesSelector } from "./hooks/useTypesSelector";

const App = () => {
  const { fetchPizzas } = useActions();
  const { category, sortBy } = useTypesSelector((state) => state.pizza);

  useEffect(() => {
    fetchPizzas(category, sortBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/successpay" element={<SuccessPay />} />
    </Routes>
  );
};

export default App;
