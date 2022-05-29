import React, { useContext } from "react";
import Cat from "../components/cats/Cat";
import { FavouriteContextInterface, FavouriteCatsCtx } from "../context/favouriteCatsContext";
import { nanoid } from "nanoid";

const FavouriteCats: React.FC = () => {
  const { favouriteCats } = useContext(FavouriteCatsCtx) as FavouriteContextInterface;

  const catObjects = favouriteCats.map((cat) => (
    <Cat key={nanoid()} imageUrl={cat.url} imageId={cat.id} isFavouriteCat={true} />
  ));

  return (
    <div className="wrapper">
      {catObjects.length ? (
        <div className="cats">{catObjects}</div>
      ) : (
        <div className="nothing-to-show">
          <img src="https://cdn2.thecatapi.com/images/1hd.gif" alt="cat-nothing-to-show" />У вас пока нет любимых
          котиков ...(
        </div>
      )}
    </div>
  );
};

export default FavouriteCats;
