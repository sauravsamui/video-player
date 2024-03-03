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
      <div>
        <h1>Recommended videos</h1>
        <VideoPlaylist videoKey={videoKey} />
      </div>
    </div>
  );
};

export default Watch;
