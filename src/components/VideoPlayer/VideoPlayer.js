import "./VideoPlayer.scss";
function VideoPlayer({ poster }) {
  return (
    <section className="videoplayer">
      <div className="page__section">
        <video className="videoplayer__video" controls poster={poster}>
          Your browser does not support HTML video.
        </video>
      </div>
    </section>
  );
}

export default VideoPlayer;
