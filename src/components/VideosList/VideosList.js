import "./VideosList.scss";

import VideoItem from "../VideoItem/VideoItem";

function VideosList({ videos }) {
  return (
    <section className="videos-list">
      <h3 className="videos-list__title">Next Videos</h3>
      <div className="videos-list__items">
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

export default VideosList;
