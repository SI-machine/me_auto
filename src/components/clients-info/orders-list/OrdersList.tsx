import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import styles from "./OrdersList.module.css";
import { Order } from "../../../types/order.types";

interface OrdersListProps {
  orders: Order[];
  loading?: boolean;
  error?: string | null;
}

const OrdersList = ({ orders, loading, error }: OrdersListProps) => {
  if (loading) {
    return (
      <div className={styles.cardsContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.cardsContainer}>
        <Alert severity="error">{error}</Alert>
      </div>
    );
  }
  console.log(orders);
  return (
    <div className={styles.cardsContainer}>
      {orders.map((item) => (
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
              <Typography variant="body2" color="text.secondary">
                {item.status}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.employeesName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default OrdersList;
