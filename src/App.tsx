import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import AllCats from "./pages/AllCats";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllCats />} />
        <Route path="/favourites" element={<div>favourites page</div>} />
      </Route>
    </Routes>
  );
};

export default App;
