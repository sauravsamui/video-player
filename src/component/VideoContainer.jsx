import React, { useContext } from "react";
import { MoviesDataContext } from "../context/MoviesDataContext";
import VideoCard from "./VideoCard";
import { ROUTES } from "../utils/Constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const { moviesData } = useContext(MoviesDataContext);
  return (
    <div className="flex flex-wrap m-0">
      {moviesData.map((el) => (
        <React.Fragment key={el.id}>
          <Link to={`${ROUTES.WATCH}/?v=${el.key}`}>
            <VideoCard data={el} />
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default VideoContainer;
