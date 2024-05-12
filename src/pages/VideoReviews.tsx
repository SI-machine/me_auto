import { useEffect } from "react";

const VideoReviews = () => {
  useEffect(() => {
    document.title = "Видео-Обзоры";
  }, []);
  return (
    <div>
      <h1>VideoReviews</h1>
    </div>
  );
};

export default VideoReviews;
