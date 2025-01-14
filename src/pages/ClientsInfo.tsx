import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchClients } from "../store/features/clientsSlice";

import ClientsList from "../components/clients-info/clients-list/ClientsList";
import SearchBar from "../components/search-bar/SearchBar";
import AddClientForm from "../components/clients-info/add-client-form/AddClientForm";

import { Box, Button, Divider } from "@mui/material";

const ClientsInfo = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { clients, loading, error } = useSelector(
    (state: RootState) => state.clients
  );

  useEffect(() => {
    document.title = "Список клиентов";
  }, []);

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
      <ClientsList clients={clients} />

      {/* modal components */}
      <AddClientForm open={open} setOpen={setOpen} />
    </Box>
  );
};

export default ClientsInfo;
