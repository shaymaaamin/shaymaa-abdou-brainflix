import "./VideoPlayer.scss";
function VideoPlayer({ poster }) {
  return (
    <video className="video-player" controls poster={poster}>
      Your browser does not support HTML video.
    </video>
  );
}

export default VideoPlayer;
