import "./VideoDisplay.scss";

import { useEffect, useState } from "react";
import { getVideoDetails } from "../../api";

import CommentsList from "../CommentsList/CommentsList";
import VideoDescription from "../VideoDescription/VideoDescription";
import VideosList from "../VideosList/VideosList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function VideoDisplay({ videoId, videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getVideoDetails(videoId).then(setSelectedVideo);
  }, [videoId]);

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
        <VideosList videos={videos.filter((video) => video.id !== videoId)} />
      </section>
    </>
  );
}

export default VideoDisplay;
