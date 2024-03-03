import React from "react";
import MoviesDataContextProvider from "./MoviesDataContext";

const ContextWrapper = ({ children }) => {
  return <MoviesDataContextProvider>{children}</MoviesDataContextProvider>;
};

export default ContextWrapper;
