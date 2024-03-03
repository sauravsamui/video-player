import { createContext, useState } from "react";
import MoviesData from "../moviesData.json";
export const MoviesDataContext = createContext(null);

const MoviesDataContextProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState(MoviesData);
  return <MoviesDataContext.Provider value={{ moviesData, setMoviesData }}>{children}</MoviesDataContext.Provider>;
};

export default MoviesDataContextProvider;
