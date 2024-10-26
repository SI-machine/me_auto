import { useEffect } from "react";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const content = [
  {
    id: 1,
    title: "Видео-Обзоры",
    description: "Видео-Обзоры",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Видео-Обзоры",
    description: "Видео-Обзоры",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Видео-Обзоры",
    description: "Видео-Обзоры",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Видео-Обзоры",
    description: "Видео-Обзоры",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Видео-Обзоры",
    description: "Видео-Обзоры",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Видео-Обзоры",
    description: "Видео-Обзоры",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const VideoReviews = () => {
  useEffect(() => {
    document.title = "Видео-Обзоры";
  }, []);
  return (
    <Box>
      {content.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default VideoReviews;
