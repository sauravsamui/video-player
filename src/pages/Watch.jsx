import React from "react";
import VideoDescription from "../component/VideoDescription";
import { useSearchParams } from "react-router-dom";
import VideoPlaylist from "../component/VideoPlaylist";
const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoKey = searchParams.get("v");
  return (
    <div className="flex">
      <VideoDescription videoKey={videoKey} />
      <VideoPlaylist videoKey={videoKey} />
    </div>
  );
};

export default Watch;
