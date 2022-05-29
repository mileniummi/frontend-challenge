import React, { useEffect, useState } from "react";
import CatService from "../services/CatService";
import { ICat } from "../types/types";

function UseCatSearch(pageNumber: number) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cats, setCats] = useState<ICat[]>([]);
  const [error, setError] = useState<string | boolean>(false);
  const catService = new CatService();

  useEffect(() => {
    setIsLoading(true);
    const fetchCats = async () => {
      const newCats = await catService.fetch(10, pageNumber);
      if (!(newCats instanceof Error)) {
        setCats((prevCats) => [...prevCats, ...newCats]);
        setIsLoading(false);
      } else {
        setError("Что то пошло не так при загрузке котиков");
      }
    };
    fetchCats();
  }, [pageNumber]);

  return { isLoading, cats, error };
}

export default UseCatSearch;
