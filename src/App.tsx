import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import AllCats from "./pages/AllCats";
import FavouriteCats from "./pages/FavouriteCats";
import FavouriteCatsProvider from "./context/favouriteCatsContext";

export const App: React.FC = () => {
  return (
    <FavouriteCatsProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllCats />} />
          <Route path="/favourites" element={<FavouriteCats />} />
        </Route>
      </Routes>
    </FavouriteCatsProvider>
  );
};
