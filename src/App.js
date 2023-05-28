import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topnav from "./components/Topnav/Topnav";

import HomePage from "./pages/HomePage/HomePage";

import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json";

function App() {
  return (
    <BrowserRouter>
      <Topnav />
      <Routes>
        <Route
          path="/"
          element={<HomePage videos={videos} videoDetails={videoDetails} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
