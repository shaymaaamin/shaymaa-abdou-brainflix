import { useParams } from "react-router-dom";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";

function VideoPage({ videos }) {
  const { videoId } = useParams();

  return <VideoDisplay videoId={videoId} videos={videos} />;
}

export default VideoPage;
