import { useEffect, useState } from "react";

import ClientsList from "../components/clients-info/clients-list/ClientsList";
import SearchBar from "../components/search-bar/SearchBar";
import AddClientForm from "../components/clients-info/add-client-form/AddClientForm";

import { Box, Button, Divider } from "@mui/material";

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
      <br />
      <SearchBar onSearch={handleSearch} />
      <br />
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant="contained"
        >
          Добавить
        </Button>
      </Box>
      <Divider sx={{ margin: "20px 0" }} />
      <ClientsList />

      {/* modal components */}
      <AddClientForm open={open} setOpen={setOpen} />
    </Box>
  );
};

export default ClientsInfo;
