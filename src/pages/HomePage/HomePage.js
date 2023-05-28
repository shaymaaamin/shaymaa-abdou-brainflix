import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";

function HomePage({ videos, videoDetails }) {
  const selectedVideo = videoDetails[0];

  return <VideoDisplay selectedVideo={selectedVideo} videos={videos} />;
}

export default HomePage;
