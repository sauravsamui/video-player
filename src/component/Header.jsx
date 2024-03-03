import React, { useContext } from "react";
import { LOGO_SRC, ROUTES } from "../utils/Constants";
import { Link, useLocation } from "react-router-dom";
import { MoviesDataContext } from "../context/MoviesDataContext";
import MoviesData from "../moviesData.json";
const Header = () => {
  const { setMoviesData, setValue, value } = useContext(MoviesDataContext);
  const { pathname } = useLocation();
  const handleFilter = (text) => {
    setValue(text);
    if (!text) {
      setMoviesData(MoviesData);
    } else {
      const filteredData = MoviesData.filter((el) => el.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
      setMoviesData(filteredData);
    }
  };
  return (
    <div className=" flex border-2 border-red-600">
      <div>
        <Link to={ROUTES.HOME}>
          <img className="w-24" src={LOGO_SRC} alt="logo" />
          <h4 className="test-red">Video Player</h4>
        </Link>
      </div>
      {!pathname.includes(ROUTES.WATCH) && (
        <input
          type="text"
          value={value}
          placeholder="search for videos ex- Dune"
          onChange={(e) => handleFilter(e.target.value)}
        />
      )}
    </div>
  );
};

export default Header;
