import React, { useContext, useMemo } from "react";
import VideoPlayer from "./VideoPlayer";
import { IMAGE_BASE_URL, VIDEO_BASE_URL } from "../utils/Constants";
import { MoviesDataContext } from "../context/MoviesDataContext";

const VideoDescription = ({ videoKey }) => {
  const { moviesData } = useContext(MoviesDataContext);
  const selectedVideo = useMemo(() => moviesData.find((el) => el.key === videoKey), [videoKey]);
  return (
    <div className="m-2 md:m-5 lg:ml-10">
      <VideoPlayer
        src={`${VIDEO_BASE_URL}${videoKey}/?autoplay=1&mute=1`}
        poster={`${IMAGE_BASE_URL}${selectedVideo.poster_path}`}
      />
      <h2 className="text-lg font-semibold mt-2">{selectedVideo.title}</h2>
      <p>{selectedVideo.overview}</p>
    </div>
  );
};

export default VideoDescription;
