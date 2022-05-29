import React, { useCallback, useRef, useState } from "react";
import Cat from "../components/cats/Cat";
import Loader from "../components/loader/Loader";
import useCatSearch from "../hooks/useCatSearch";
import { nanoid } from "nanoid";
import SomethingWentWrong from "../components/errors/SomethingWentWrong";

const AllCats: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { cats, isLoading, error } = useCatSearch(page);

  const observer = useRef<IntersectionObserver>();
  const lastCatElement = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevState) => prevState + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  const catObjects = cats.map((cat, index) => {
    if (cats.length === index + 1) {
      return (
        <div ref={lastCatElement} key={nanoid()}>
          <Cat imageUrl={cat.url} imageId={cat.id} isFavouriteCat={false} />
        </div>
      );
    } else {
      return <Cat key={nanoid()} imageUrl={cat.url} imageId={cat.id} isFavouriteCat={false} />;
    }
  });

  return (
    <div className="wrapper">
      <div className="cats">{catObjects}</div>
      {isLoading && <Loader />}
      {error && <SomethingWentWrong text={error} />}
    </div>
  );
};

export default AllCats;
