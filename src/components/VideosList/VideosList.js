import "./VideosList.scss";

import VideoItem from "../VideoItem/VideoItem";

function VideosList({ videos }) {
  return (
    <section className="videos-list">
      <h3 className="videos-list__title">Next Videos</h3>
      <div className="videos-list__items">
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
          />
        ))}
      </div>
    </section>
  );
}

export default VideosList;
