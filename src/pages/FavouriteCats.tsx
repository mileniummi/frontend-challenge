import React, { useEffect, useState } from "react";
import { ICat } from "../types/types";
import CatService from "../services/CatService";
import Cat from "../components/cats/Cat";
import Loader from "../components/loader/Loader";

const FavouriteCats: React.FC = () => {
  const catService = new CatService();
  const [cats, setCats] = useState<ICat[]>([]);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCats() {
      setShowLoader(true);
      const cats: ICat[] = await catService.getFavourites();
      setCats(cats);
      setShowLoader(false);
    }
    fetchCats();
  }, []);

  const catObjects = cats.map((cat) => (
    <Cat key={cat.id} imageUrl={cat.url} catService={catService} imageId={cat.id} isFavouriteCat={true} />
  ));

  return (
    <div className="wrapper">
      {showLoader ? (
        <Loader />
      ) : catObjects.length ? (
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
