import "./App.scss";
import Topnav from "./components/Topnav/Topnav";
import CommentsList from "./components/CommentsList/CommentsList";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import VideosList from "./components/VideosList/VideosList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

import { useState } from "react";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  function clickHandler(id) {
    const showedVideo = videoDetails.find((video) => {
      return video.id === id;
    });
    setSelectedVideo(showedVideo);
  }
  const filteredVideos = videos.filter((video) => {
    return video.id !== selectedVideo.id;
  });

  return (
    <div className="app">
      <Topnav />
      <VideoPlayer poster={selectedVideo.image} />
      <section className="page__section">
        <div>
          <VideoDescription selectedVideo={selectedVideo} />
          <CommentsList comments={selectedVideo.comments} />
        </div>
        <div className="divider divider--vertical"></div>
        <VideosList
          clickHandler={clickHandler}
          filteredVideos={filteredVideos}
        />
      </section>
    </div>
  );
}

export default App;
