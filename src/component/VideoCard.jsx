import React from "react";
import { IMAGE_BASE_URL } from "../utils/Constants";

const VideoCard = ({ data, playlist, highlight }) => {
  const { title, poster_path, release_date } = data;

  // Conditionally apply classes based on props
  const cardClasses = `${
    playlist ? "flex gap-2 rounded shadow-lg shadow-blue-500/50" : "rounded-lg overflow-hidden shadow-lg flex flex-col"
  } ${highlight ? "bg-indigo-200" : ""}`;

  return (
    <div className={cardClasses}>
      {playlist ? (
        <>
          <img className="w-24 h-auto object-cover rounded " src={`${IMAGE_BASE_URL}${poster_path}`} alt={title} />
          <div className="p-4 flex-grow">
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-ellipsis overflow-hidden ...">Release Date - {release_date}</p>
          </div>
        </>
      ) : (
        <>
          <img
            className="w-full h-auto object-cover rounded-t-lg"
            src={`${IMAGE_BASE_URL}${poster_path}`}
            alt={title}
          />
          <div className="p-4 flex-grow bg-white rounded-b-lg">
            <h4 className="text-lg font-semibold">{title}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoCard;
