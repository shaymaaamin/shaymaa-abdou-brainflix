import { useParams } from "react-router-dom";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";
import { useEffect, useState } from "react";

function VideoPage({ videos, videoDetails }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const video = videoDetails.find((video) => video.id === id);
    setSelectedVideo(video);
  }, [id]);

  return <VideoDisplay selectedVideo={selectedVideo} videos={videos} />;
}

export default VideoPage;
