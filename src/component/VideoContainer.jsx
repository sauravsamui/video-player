import React, { useContext, useEffect } from "react";
import { MoviesDataContext } from "../context/MoviesDataContext";
import VideoCard from "./VideoCard";
import { ROUTES } from "../utils/Constants";
import { Link } from "react-router-dom";
import MoviesData from "../moviesData.json";
const VideoContainer = () => {
  const { moviesData, setMoviesData, setValue } = useContext(MoviesDataContext);
  useEffect(() => {
    setMoviesData(MoviesData);
    setValue("");
  }, []);
  return (
    <div className="flex flex-wrap m-0">
      {moviesData.length > 0 ? (
        moviesData.map((el) => (
          <React.Fragment key={el.id}>
            <Link to={`${ROUTES.WATCH}/?v=${el.key}`}>
              <VideoCard data={el} />
            </Link>
          </React.Fragment>
        ))
      ) : (
        <div>No video found!</div>
      )}
    </div>
  );
};

export default VideoContainer;
