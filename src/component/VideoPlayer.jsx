import React from "react";

const VideoPlayer = ({ src, poster }) => {
  return (
    <div className="relative rounded-lg overflow-hidden " style={{ paddingBottom: "56.25%" }}>
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `url(${poster}) top center no-repeat`,
          backgroundSize: "cover",
          padding: "10px", // Adjust padding as needed
        }}
      ></div>
      <iframe
        className="absolute inset-0 w-full h-full rounded-lg"
        src={src}
        title="video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
