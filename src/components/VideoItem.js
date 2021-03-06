import React from "react";
import "../styles/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header clr-header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
