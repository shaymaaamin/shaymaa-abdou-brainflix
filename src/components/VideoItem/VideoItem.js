import { Link } from "react-router-dom";
import "./VideoItem.scss";

function VideoItem({ video }) {
  return (
    <Link to={`/videos/${video.id}`} className="video-item">
      <img src={video.image} className="video-item__image" alt="video thumbnail" />
      <div className="video-item__content">
        <div className="video-item__title">{video.title}</div>
        <div className="video-item__channel">{video.channel}</div>
      </div>
    </Link>
  );
}

export default VideoItem;
