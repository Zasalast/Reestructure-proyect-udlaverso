import React from "react";

function VideoWordBuilder() {
  return (
    <div className="container m-medium border">
      <div className="row">
        <h3 className="text-huge">VIDEO WORD BUILDER</h3>

        <iframe
          width="100%"
          height="491"
          src="https://www.youtube.com/embed/VzFpg271sm8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export { VideoWordBuilder };
