import React from "react";
import { IMAGE_BASE_URL } from "../utils/Constants";

const VideoCard = ({ data, playlist, highlight }) => {
  const { title, poster_path } = data;
  return (
    <div className={`${playlist ? "flex" : ""} ${highlight ? "bg-sky-500" : ""}`}>
      <img src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default VideoCard;
