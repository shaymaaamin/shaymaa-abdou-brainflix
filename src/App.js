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
  const [video, selectVideo] = useState(videoDetails[0]);

  return (
    <div className="app">
      <Topnav />
      <VideoPlayer poster={video.image} />
      <section className="page__section">
        <div>
          <VideoDescription selectedVideo={video} />
          <CommentsList />
        </div>
        <div className="divider divider--vertical"></div>
        <VideosList videos={videos} />
      </section>
    </div>
  );
}

export default App;