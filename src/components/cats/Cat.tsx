import React, { useContext, useState } from "react";
import "./cats.css";
import { FavouriteContextInterface, FavouriteCatsCtx } from "../../context/favouriteCatsContext";
interface CatProps {
  imageId: string;
  imageUrl: string;
  isFavouriteCat: boolean;
}

const Cat: React.FC<CatProps> = ({ imageUrl, imageId, isFavouriteCat }) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(isFavouriteCat);
  const { addToFavourite, removeFromFavourite } = useContext(FavouriteCatsCtx) as FavouriteContextInterface;
  const handleRemoveFromFavourite = () => {
    setIsFavourite(false);
    removeFromFavourite({ id: imageId, url: imageUrl });
  };

  const handleAddToFavourite = () => {
    setIsFavourite(true);
    addToFavourite({ id: imageId, url: imageUrl });
  };

  return (
    <div className="cat">
      <div className="cat__wrapper">
        <img alt="cat" className="cat__image" src={imageUrl} />
        {isFavourite ? (
          <svg
            onClick={handleRemoveFromFavourite}
            className="cat__heart"
            width="40"
            height="37"
            viewBox="0 0 40 37"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
              fill="var(--bright-orange)"
            />
          </svg>
        ) : (
          <>
            <svg className="cat__heart" width="40" height="37" viewBox="0 0 40 37" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29 0C25.52 0 22.18 1.62 20 4.18C17.82 1.62 14.48 0 11 0C4.84 0 0 4.84 0 11C0 18.56 6.8 24.72 17.1 34.08L20 36.7L22.9 34.06C33.2 24.72 40 18.56 40 11C40 4.84 35.16 0 29 0ZM20.2 31.1L20 31.3L19.8 31.1C10.28 22.48 4 16.78 4 11C4 7 7 4 11 4C14.08 4 17.08 5.98 18.14 8.72H21.88C22.92 5.98 25.92 4 29 4C33 4 36 7 36 11C36 16.78 29.72 22.48 20.2 31.1Z"
                fill="var(--orange)"
              />
            </svg>
            <svg
              className="cat__heart--on-hover"
              display="block"
              width="40"
              height="37"
              viewBox="0 0 40 37"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleAddToFavourite}
            >
              <path
                d="M20 36.7L17.1 34.06C6.8 24.72 0 18.56 0 11C0 4.84 4.84 0 11 0C14.48 0 17.82 1.62 20 4.18C22.18 1.62 25.52 0 29 0C35.16 0 40 4.84 40 11C40 18.56 33.2 24.72 22.9 34.08L20 36.7Z"
                fill="var(--orange)"
              />
            </svg>
          </>
        )}
      </div>
    </div>
  );
};

export default Cat;
