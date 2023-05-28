import "./App.scss";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topnav from "./components/Topnav/Topnav";

import HomePage from "./pages/HomePage/HomePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";

import { getVideos } from "./api";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  return (
    <BrowserRouter>
      <Topnav />
      <Routes>
        <Route path="/" element={<HomePage videos={videos} />} />
        <Route path="/videos/:videoId" element={<VideoPage videos={videos} />} />
        <Route path="/upload" element={<UploadPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
