import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";

function HomePage({ videos }) {
  const videoId = videos[0]?.id;

  if (!videoId) {
    return <section>Loading...</section>;
  }

  return <VideoDisplay videoId={videoId} videos={videos} />;
}

export default HomePage;
