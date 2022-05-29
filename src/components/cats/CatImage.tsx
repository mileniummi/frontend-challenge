import React from "react";

interface CatImageProps {
  src: string;
}

const CatImage: React.FC<CatImageProps> = React.memo(function Image({ src }) {
  return <img src={src} className="cat__image" alt="cat" />;
});

export default CatImage;
