import { Link } from "react-router-dom";
import "./VideoItem.scss";

function VideoItem({ id, image, title, channel }) {
  return (
    <Link to={`/videos/${id}`} className="video-item">
      <img src={image} className="video-item__image" alt="video thumbnail" />
      <div className="video-item__content">
        <div className="video-item__title">{title}</div>
        <div className="video-item__channel">{channel}</div>
      </div>
    </Link>
  );
}

export default VideoItem;
