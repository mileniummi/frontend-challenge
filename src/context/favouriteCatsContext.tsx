import { ICat } from "../types/types";
import * as React from "react";
import { useEffect, useState } from "react";

export interface FavouriteContextInterface {
  favouriteCats: ICat[];
  addToFavourite: (cat: ICat) => void;
  removeFromFavourite: (cat: ICat) => void;
}
interface FavouritesProps {
  children?: React.ReactNode;
}

export const FavouriteCatsCtx = React.createContext<FavouriteContextInterface | null>(null);

const FavouriteCatsProvider: React.FC<FavouritesProps> = ({ children }) => {
  const savedState = localStorage.getItem("favouriteCats");
  const initialState = savedState ? JSON.parse(savedState) : [];

  const [favouriteCats, setFavouriteCats] = useState<ICat[]>(initialState);

  const addToFavourite = (cat: ICat) => {
    setFavouriteCats((prevState) => [...prevState, cat]);
  };

  const removeFromFavourite = (cat: ICat) => {
    setFavouriteCats((prevState) => prevState.filter((existingCat) => existingCat.id !== cat.id));
  };

  useEffect(() => {
    localStorage.setItem("favouriteCats", JSON.stringify(favouriteCats));
  }, [favouriteCats]);

  return (
    <FavouriteCatsCtx.Provider value={{ favouriteCats, addToFavourite, removeFromFavourite }}>
      {children}
    </FavouriteCatsCtx.Provider>
  );
};

export default FavouriteCatsProvider;
