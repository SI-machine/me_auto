import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AddClientForm: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
}> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const createClient = async (clientData: {
    clientsName: string;
    phoneNumber: string;
    carName: string;
    description: string;
    servicePrice: number;
  }) => {
    const response = await fetch("http://localhost:3001/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientData),
    });
    return response.json();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const clientData = {
              clientsName: String(formJson.clientsName || ""),
              phoneNumber: String(formJson.phoneNumber || ""),
              carName: String(formJson.carName || ""),
              description: String(formJson.description || ""),
              servicePrice: Number(formJson.servicePrice || 0),
            };
            createClient(clientData);
            handleClose();
          },
        }}
      >
        <DialogTitle>Сохранение заказа</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Заполните все поля для сохранения информации о клиенте
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="clientsName"
            name="clientsName"
            label="Имя клиета"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="phoneNumber"
            name="phoneNumber"
            label="Номер телефона"
            type="tel"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="carName"
            name="carName"
            label="Название автомобиля"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="servicePrice"
            name="servicePrice"
            label="Стоимость услуги"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="description"
            name="description"
            label="История заказа"
            type="text"
            multiline
            rows={4}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="contained" type="submit">
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddClientForm;
