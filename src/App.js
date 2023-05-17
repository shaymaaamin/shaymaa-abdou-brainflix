import "./App.scss";
import Topnav from "./components/Topnav/Topnav";
import CommentsList from "./components/CommentsList/CommentsList";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import VideosList from "./components/VideosList/VideosList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <div className="app">
      <Topnav />
      {/* <VideoPlayer />
      <section className="app__body">
        <VideoDescription />
        <CommentsList />
        <VideosList />
      </section> */}
    </div>
  );
}

export default App;
