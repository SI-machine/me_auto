import { useEffect, useState } from "react";

import ClientsList from "../components/clients-info/clients-list/ClientsList";
import SearchBar from "../components/search-bar/SearchBar";
import AddClientForm from "../components/clients-info/add-client-form/AddClientForm";

import { Box, Typography, Button, Divider } from "@mui/material";

const ClientsInfo = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Список клиентов";
  }, []);

  const handleSearch = (searchTerm: string) => {
    // Handle search logic here
    // Examples:
    // 1. Filter local data
    // 2. Make API call
    // 3. Update state
    console.log("Searching for:", searchTerm);
  };
  return (
    <Box>
      <Typography gutterBottom variant="h2" component="div">
        Список клиентов
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <br />
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="contained"
      >
        Добавить
      </Button>
      <Divider sx={{ margin: "20px 0" }} />
      <ClientsList />

      {/* modal components */}
      <AddClientForm open={open} setOpen={setOpen} />
    </Box>
  );
};

export default ClientsInfo;
