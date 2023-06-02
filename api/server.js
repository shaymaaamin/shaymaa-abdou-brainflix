const express = require("express");
const fs = require("fs");
const uuid = require("uuid");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const videosPath = "./data/videos.json";
const videoDetailsPath = "./data/video-details.json";

const getVideos = () => {
  return JSON.parse(fs.readFileSync(videosPath));
};
const getVideoDetails = () => {
  return JSON.parse(fs.readFileSync(videoDetailsPath));
};

app.get("/videos", (req, res) => {
  const videos = getVideos();
  res.json(videos);
});

app.get("/videos/:videoId", (req, res) => {
  const videoDetails = getVideoDetails();
  const videoId = req.params.videoId;
  const video = videoDetails.find((v) => v.id === videoId);
  if (!video) {
    res.status(404).send("No video with that id exists");
  } else {
    res.json(video);
  }
});

app.post("/videos/:videoId/comments", (req, res) => {
  const videoDetails = getVideoDetails();
  const videoId = req.params.videoId;
  const video = videoDetails.find((v) => v.id === videoId);

  if (!video) {
    res.status(404).send("No video with that id exists");
  } else {
    const id = uuid.v4();
    const { name, comment } = req.body;

    const commentObject = {
      id,
      name,
      comment,
      likes: 0,
      timestamp: Date.now(),
    };

    if (!video.comments) {
      video.comments = [];
    }

    video.comments.push(commentObject);

    fs.writeFileSync(videoDetailsPath, JSON.stringify(videoDetails));
    res.json(commentObject);
  }
});

app.delete("/videos/:videoId/comments/:commentId", (req, res) => {
  const videoDetails = getVideoDetails();
  const videoId = req.params.videoId;
  const video = videoDetails.find((v) => v.id === videoId);
  const videoIndex = videoDetails.findIndex((v) => v.id === videoId);

  if (!video) {
    res.status(404).send("No video with that id exists");
  } else {
    const comments = video.comments;
    const commentId = req.params.commentId;
    const comment = comments.find((c) => c.id === commentId);
    if (!comment) {
      res.status(404).send("No comment with that id exists");
    } else {
      video.comments = comments.filter((comment) => comment.id !== commentId);
      videoDetails[videoIndex] = video;

      fs.writeFileSync(videoDetailsPath, JSON.stringify(videoDetails, null, 4));
      res.send(video);
    }
  }
});

app.put("/videos/:videoId/likes", (req, res) => {
  const videoDetails = getVideoDetails();
  const videoId = req.params.videoId;
  const video = videoDetails.find((v) => v.id === videoId);
  const videoIndex = videoDetails.findIndex((v) => v.id === videoId);

  if (!video) {
    res.status(404).send("No video with that id exists");
  } else {
    if (!video.likes) {
      video.likes = 0;
    }

    video.likes++;
    videoDetails[videoIndex] = video;

    fs.writeFileSync(videoDetailsPath, JSON.stringify(videoDetails, null, 4));
    res.send(video);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
