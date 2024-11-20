import { useState } from "react";

import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["search-container"]}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className={styles["search-input"]}
      />
      <button type="submit" className={styles["search-button"]}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
