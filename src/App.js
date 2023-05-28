import "./App.scss";

import Topnav from "./components/Topnav/Topnav";
import VideoDisplay from "./components/VideoDisplay/VideoDisplay";

import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

function App() {
  return (
    <div className="app">
      <Topnav />
      <VideoDisplay videos={videos} videoDetails={videoDetails} />
    </div>
  );
}

export default App;
