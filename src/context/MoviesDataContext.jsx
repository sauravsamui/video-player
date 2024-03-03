import { createContext, useState } from "react";
import MoviesData from "../moviesData.json";
export const MoviesDataContext = createContext(null);

const MoviesDataContextProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState(MoviesData);
  const [value, setValue] = useState("");

  return (
    <MoviesDataContext.Provider value={{ moviesData, setMoviesData, value, setValue }}>
      {children}
    </MoviesDataContext.Provider>
  );
};

export default MoviesDataContextProvider;
