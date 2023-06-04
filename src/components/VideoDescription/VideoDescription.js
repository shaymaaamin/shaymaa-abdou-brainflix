import { formatTimestamp } from "../../utils";
import "./VideoDescription.scss";

function VideoDescription({ video }) {
  const date = formatTimestamp(video.timestamp);

  return (
    <section className="description">
      <h1 className="description__title">{video.title}</h1>
      <div className="divider divider--mobile"></div>
      <div className="description__info">
        <div className="description__info-section">
          <div className="description__info-channel">By {video.channel}</div>
          <div className="description__info-date">{date}</div>
        </div>
        <div className="description__info-section">
          <div className="description__info-views icon icon--views">
            {video.views}
          </div>
          <div className="description__info-likes icon icon--likes">
            {video.likes}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="description__content">{video.description}</div>
    </section>
  );
}

export default VideoDescription;
