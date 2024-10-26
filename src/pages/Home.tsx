import { useEffect } from "react";

import CarCarousel from "../components/home/car-carousel/CarCarousel";
import SearchBar from "../components/home/search-bar/SearchBar";
const Home = () => {
  useEffect(() => {
    document.title = "Главная";
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
    <div>
      <h1>АвтоФаны</h1>
      <SearchBar onSearch={handleSearch} />
      <br />
      <CarCarousel />
    </div>
  );
};

export default Home;
