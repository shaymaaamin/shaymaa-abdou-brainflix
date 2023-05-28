import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";

function HomePage({ videos, videoDetails }) {
  const selectedVideo = videoDetails[0];

  return (
    <VideoDisplay
      video={selectedVideo}
      videos={videos}
      videoDetails={videoDetails}
    />
  );
}

export default HomePage;
