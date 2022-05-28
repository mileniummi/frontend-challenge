import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import AllCats from "./pages/AllCats";
import FavouriteCats from "./pages/FavouriteCats";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllCats />} />
        <Route path="/favourites" element={<FavouriteCats />} />
      </Route>
    </Routes>
  );
};

export default App;
