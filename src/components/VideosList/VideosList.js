import { Link } from "react-router-dom";
import "./VideosList.scss";

function VideosList({ filteredVideos }) {
  const listItems = filteredVideos.map((video) => (
    <Link to={`/${video.id}`} key={video.id} className="videos-list__item">
      <img
        src={video.image}
        className="videos-list__item-image"
        alt="video thumbnail"
      />
      <div className="videos-list__item-content">
        <div className="videos-list__item-title">{video.title}</div>
        <div className="videos-list__item-channel">{video.channel}</div>
      </div>
    </Link>
  ));

  return (
    <section className="videos-list">
      <h3 className="videos-list__title">Next Videos</h3>
      <div className="videos-list__items">{listItems}</div>
    </section>
  );
}

export default VideosList;
