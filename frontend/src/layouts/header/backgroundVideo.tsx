import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="videoContainer">
      <iframe
        src="https://www.youtube.com/embed/U07_N4gCOTM?autoplay=1&mute=1&controls=0&loop=1&playlist=U07_N4gCOTM&modestbranding=1&rel=0&playsinline=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
