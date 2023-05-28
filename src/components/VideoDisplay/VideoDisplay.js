import "./VideoDisplay.scss";

import { useEffect, useState } from "react";
import { getVideoDetails } from "../../api";

import CommentsList from "../CommentsList/CommentsList";
import VideoDescription from "../VideoDescription/VideoDescription";
import VideosList from "../VideosList/VideosList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function VideoDisplay({ videoId, videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getVideoDetails(videoId).then((data) => {
      setSelectedVideo(data);
      setRefresh(false);
    });
  }, [videoId, refresh]);

  if (!selectedVideo) {
    return <section>Loading...</section>;
  }

  return (
    <>
      <VideoPlayer poster={selectedVideo.image} />
      <section>
        <div>
          <VideoDescription
            title={selectedVideo.title}
            channel={selectedVideo.channel}
            timestamp={selectedVideo.timestamp}
            description={selectedVideo.description}
            views={selectedVideo.views}
            likes={selectedVideo.likes}
          />
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
