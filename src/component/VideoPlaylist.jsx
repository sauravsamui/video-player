import React, { useContext } from "react";
import { MoviesDataContext } from "../context/MoviesDataContext";
import { ROUTES } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoPlaylist = ({ videoKey }) => {
  const { moviesData } = useContext(MoviesDataContext);

  return (
    <div>
      {moviesData.map((el) => (
        <React.Fragment key={el.id}>
          <Link to={`${ROUTES.WATCH}/?v=${el.key}`}>
            <VideoCard data={el} playlist highlight={el.key === videoKey} />
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default VideoPlaylist;
