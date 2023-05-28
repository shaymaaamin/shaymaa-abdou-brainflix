import "./VideoPlayer.scss";
function VideoPlayer({ poster }) {
  return (
    <section className="video-player__container">
      <div className="page__section">
        <video className="video-player" controls poster={poster}>
          Your browser does not support HTML video.
        </video>
      </div>
    </section>
  );
}

export default VideoPlayer;
