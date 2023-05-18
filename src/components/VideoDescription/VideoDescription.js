import "./VideoDescription.scss";
function VideoDescription({ selectedVideo }) {
  const date = new Date(selectedVideo.timestamp).toLocaleDateString();

  return (
    <section class="description">
      <div className="page__section">
        <h1 className="description__title">{selectedVideo.title}</h1>
        <div className="divider divider--mobile"></div>
        <div className="description__info">
          <div className="description__info-section">
            <div className="description__info-channel">
              By {selectedVideo.channel}
            </div>
            <div className="description__info-date">{date}</div>
          </div>
          <div className="description__info-section">
            <div className="description__info-views icon icon--views">
              {selectedVideo.views}
            </div>
            <div className="description__info-likes icon icon--likes">
              {selectedVideo.likes}
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="description__content">{selectedVideo.description}</div>
      </div>
    </section>
  );
}

export default VideoDescription;
