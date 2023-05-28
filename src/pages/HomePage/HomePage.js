import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";

function HomePage({ videos }) {
  const videoId = videos[0]?.id;

  if (!videoId) {
    return <div className="page__section">Loading...</div>;
  }

  return <VideoDisplay videoId={videoId} videos={videos} />;
}

export default HomePage;
