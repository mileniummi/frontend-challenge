import React, { useEffect, useState } from "react";
import Cat from "../components/cats/Cat";
import { ICat } from "../types/types";
import CatService from "../services/CatService";
import { CircularProgress } from "@material-ui/core";
import Loader from "../components/loader/Loader";

const AllCats: React.FC = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    setShowLoader(true);
    const catsService = new CatService();
    const fetchCats = async () => {
      const newCats = await catsService.fetch(10);
      setCats((prevState) => [...prevState, ...newCats]);
      setShowLoader(false);
    };
    fetchCats();
  }, []);

  console.log(cats);

  const catObjects = cats.map((cat) => <Cat key={cat.id} imageUrl={cat.url} />);

  return <div className="wrapper">{showLoader ? <Loader /> : <div className="cats">{catObjects}</div>}</div>;
};

export default AllCats;
