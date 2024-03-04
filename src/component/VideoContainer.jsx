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
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-8 mb-5">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {moviesData.length > 0 ? (
            moviesData.map((el) => (
              <React.Fragment key={el.id}>
                <Link to={`${ROUTES.WATCH}/?v=${el.key}`}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <VideoCard data={el} />
                  </div>
                </Link>
              </React.Fragment>
            ))
          ) : (
            <div className="text-center text-gray-600">No videos found!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
