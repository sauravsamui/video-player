import React, { useEffect } from "react";
import VideoDescription from "../component/VideoDescription";
import { useSearchParams } from "react-router-dom";
import VideoPlaylist from "../component/VideoPlaylist";

const Watch = () => {
  const [searchParam] = useSearchParams();
  const videoKey = searchParam?.get("v");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoKey]);
  return (
    <div className="flex flex-col lg:flex-row my-2 justify-evenly">
      <div className="lg:w-2/3">
        <VideoDescription videoKey={videoKey} />
      </div>
      <div className="lg:w-1/3 lg:ml-6  m-2 border-t-2 border-t-indigo-500 lg:border-none ">
        <h1 className="text-lg font-semibold mb-4">Recommended videos</h1>
        <VideoPlaylist videoKey={videoKey} />
      </div>
    </div>
  );
};

export default Watch;
