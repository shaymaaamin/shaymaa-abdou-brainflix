import { useParams } from "react-router-dom";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";

function VideoPage({ videos }) {
  const params = useParams();
  const videoId = params.videoId || videos[0]?.id;

  if (!videoId) {
    return <section>Loading...</section>;
  }

  return <VideoDisplay videoId={videoId} videos={videos} />;
}

export default VideoPage;
