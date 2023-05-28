import { formatTimestamp } from "../../utils";
import "./VideoDescription.scss";

function VideoDescription({
  title,
  timestamp,
  channel,
  description,
  views,
  likes,
}) {
  const date = formatTimestamp(timestamp);

  return (
    <section className="description">
      <h1 className="description__title">{title}</h1>
      <div className="divider divider--mobile"></div>
      <div className="description__info">
        <div className="description__info-section">
          <div className="description__info-channel">By {channel}</div>
          <div className="description__info-date">{date}</div>
        </div>
        <div className="description__info-section">
          <div className="description__info-views icon icon--views">
            {views}
          </div>
          <div className="description__info-likes icon icon--likes">
            {likes}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="description__content">{description}</div>
    </section>
  );
}

export default VideoDescription;
