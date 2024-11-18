import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import CarCarousel from "../components/home/car-carousel/CarCarousel";
import SearchBar from "../components/home/search-bar/SearchBar";
import { fetchCars } from "../store/features/testSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector((state) => state.cars.items);

  useEffect(() => {
    document.title = "Главная";
    //Fetch cars from API when component mounts
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSearch = (searchTerm: string) => {
    // Handle search logic here
    // Examples:
    // 1. Filter local data
    // 2. Make API call
    // 3. Update state
    console.log("Searching for:", searchTerm);
    console.log("Available cars:", cars);
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
