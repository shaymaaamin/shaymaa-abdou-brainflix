import "./VideoDisplay.scss";

import { useEffect, useState } from "react";
import { getVideoDetails } from "../../api";

import CommentsList from "../CommentsList/CommentsList";
import VideoDescription from "../VideoDescription/VideoDescription";
import VideosList from "../VideosList/VideosList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function VideoDisplay({ videoId, videos }) {
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getVideoDetails(videoId).then((data) => {
      if (!data) {
        setError(true);
      } else {
        setSelectedVideo(data);
        setRefresh(false);
      }
    });
  }, [videoId, refresh]);

  if (error) {
    return <section>Video not found!</section>;
  } else if (!selectedVideo) {
    return <section>Loading...</section>;
  }

  return (
    <>
      <VideoPlayer poster={selectedVideo.image} />
      <section>
        <div>
          <VideoDescription video={selectedVideo} />
          <CommentsList
            videoId={selectedVideo.id}
            setRefresh={setRefresh}
            comments={selectedVideo.comments}
          />
        </div>
        <div className="divider divider--vertical"></div>
        <VideosList videos={videos.filter((video) => video.id !== videoId)} />
      </section>
    </>
  );
}

export default VideoDisplay;
