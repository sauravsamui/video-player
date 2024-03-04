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
      const filteredData = MoviesData.filter((el) => el.title.toLowerCase().includes(text.toLowerCase()));
      setMoviesData(filteredData);
    }
  };

  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 shadow-sm">
      <div className="flex items-center">
        <Link to={ROUTES.HOME} className="flex items-center">
          <img className="w-12 mr-2 rounded" src={LOGO_SRC} alt="logo" />
          <h4 className="text-lg font-semibold text-green-600 hidden sm:block">Video Player</h4>
        </Link>
      </div>
      {!pathname.includes(ROUTES.WATCH) && (
        <div className="flex items-center">
          <input
            type="text"
            value={value}
            placeholder="Search for videos (e.g., Dune)"
            onChange={(e) => handleFilter(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-48 sm:w-64 md:w-96"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
