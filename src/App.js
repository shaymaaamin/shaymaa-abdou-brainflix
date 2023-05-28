import "./App.scss";

import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Topnav from "./components/Topnav/Topnav";

import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import VideoPage from "./pages/VideoPage/VideoPage";

import { getVideos } from "./api";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  return (
    <HashRouter>
      <Topnav />
      <Routes>
        <Route path="/" element={<HomePage videos={videos} />} />
        <Route path="/videos/:videoId" element={<VideoPage videos={videos} />} />
        <Route path="/upload" element={<UploadPage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
