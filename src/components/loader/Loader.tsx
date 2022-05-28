import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress />
      <div className="loader__text">... загружаем котиков ...</div>
    </div>
  );
};

export default Loader;
