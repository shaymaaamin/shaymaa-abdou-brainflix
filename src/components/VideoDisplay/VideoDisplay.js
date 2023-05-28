import "./VideoDisplay.scss";

import { useState } from "react";

import CommentsList from "../CommentsList/CommentsList";
import VideoDescription from "../VideoDescription/VideoDescription";
import VideosList from "../VideosList/VideosList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { useNavigate } from "react-router-dom";

function VideoDisplay({ selectedVideo, videos }) {
  const navigateTo = useNavigate();

  function clickHandler(id) {
    navigateTo(`/${id}`);
  }

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
        <VideosList
          clickHandler={clickHandler}
          filteredVideos={filteredVideos}
        />
      </section>
    </>
  );
}

export default VideoDisplay;
