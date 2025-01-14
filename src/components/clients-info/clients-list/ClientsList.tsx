import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import styles from "./ClientsList.module.css";
import { Client } from "../../../types/client.types";

// const content = [
//   {
//     id: 1,
//     title: "Видео-Обзоры",
//     description: "Видео-Обзоры",
//     url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
//   {
//     id: 2,
//     title: "Видео-Обзоры",
//     description: "Видео-Обзоры",
//     url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
//   {
//     id: 3,
//     title: "Видео-Обзоры",
//     description: "Видео-Обзоры",
//     url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
//   {
//     id: 4,
//     title: "Видео-Обзоры",
//     description: "Видео-Обзоры",
//     url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
//   {
//     id: 5,
//     title: "Видео-Обзоры",
//     description: "Видео-Обзоры",
//     url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
//   {
//     id: 6,
//     title: "Видео-Обзоры",
//     description: "Видео-Обзоры",
//     url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//   },
// ];

const ClientsList = ({ clients }: { clients: Client[] }) => {
  console.log(clients);
  return (
    <div className={styles.cardsContainer}>
      {clients.map((item) => (
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
                {item.clientsName}
              </Typography>
              <Typography variant="body2" component="div">
                {item.phoneNumber}
              </Typography>
              <Typography variant="body2" component="div">
                {item.carName}
              </Typography>
              <Typography variant="body2" component="div">
                {item.servicePrice}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default ClientsList;
