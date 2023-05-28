import "./VideoDisplay.scss";

import { useState } from "react";

import CommentsList from "../CommentsList/CommentsList";
import VideoDescription from "../VideoDescription/VideoDescription";
import VideosList from "../VideosList/VideosList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function VideoDisplay({ selectedVideo, videos }) {
  const filteredVideos = videos.filter((video) => {
    return video.id !== selectedVideo?.id;
  });

  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <VideoPlayer poster={selectedVideo.image} />
      <section className="page__section">
        <div>
          <VideoDescription selectedVideo={selectedVideo} />
          <CommentsList comments={selectedVideo.comments} />
        </div>
        <div className="divider divider--vertical"></div>
        <VideosList filteredVideos={filteredVideos} />
      </section>
    </>
  );
}

export default VideoDisplay;
