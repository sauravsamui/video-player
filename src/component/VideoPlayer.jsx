import React from "react";

const VideoPlayer = ({ src, poster }) => {
  return (
    <div
      style={{
        background: `url(${poster}) top center no-repeat, background-size: cover`,
      }}
    >
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture, web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
