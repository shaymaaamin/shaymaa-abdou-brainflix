import "./VideoDisplay.scss";

import { useState } from "react";

import CommentsList from "../CommentsList/CommentsList";
import VideoDescription from "../VideoDescription/VideoDescription";
import VideosList from "../VideosList/VideosList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function VideoDisplay({ videos, videoDetails }) {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  function clickHandler(id) {
    const showedVideo = videoDetails.find((video) => {
      return video.id === id;
    });
    setSelectedVideo(showedVideo);
  }

  const filteredVideos = videos.filter((video) => {
    return video.id !== selectedVideo.id;
  });

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
