import "./VideosList.scss";

function VideosList({ clickHandler, filteredVideos }) {
  const listItems = filteredVideos.map((video) => (
    <div
      key={video.id}
      className="videos-list__item"
      onClick={() => clickHandler(video.id)}
    >
      <img src={video.image} className="videos-list__item-image" />
      <div className="videos-list__item-content">
        <div className="videos-list__item-title">{video.title}</div>
        <div className="videos-list__item-channel">{video.channel}</div>
      </div>
    </div>
  ));

  return (
    <section className="videos-list">
      <h3 className="videos-list__title">Next Videos</h3>
      <div className="videos-list__items">{listItems}</div>
    </section>
  );
}

export default VideosList;
