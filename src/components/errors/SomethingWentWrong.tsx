import React from "react";

interface ErrorProps {
  text: string | boolean;
}

const SomethingWentWrong: React.FC<ErrorProps> = ({ text }) => {
  return (
    <div>
      <img src={require("../../images/error-cat.jpg")} alt="error" className="error__image" />
      <div className="error__text">{text}</div>
    </div>
  );
};

export default SomethingWentWrong;
