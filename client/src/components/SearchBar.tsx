/*import { useEffect, useState } from "react";
import "../assets/images/SearchBar.css";
import "../assets/images/loupe.png";

interface SearchBarProps {
  setShowCard: (show: boolean) => void;
  setIdCard: (id: number) => void;
  setSearchResult: (search: string) => void;
}

const SearchBar = ({
  setShowCard,
  setIdCard,
  setSearchResult,
}: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Card[]>([]);

  useEffect(() => {
    if (searchText.trim()) {
      searchBarQuery(searchText);
    } else {
      setSearchResults([]);
    }
  }, [searchText]);

  async function searchBarQuery(searchTerm: string) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/cards/search/${searchTerm}`,
      );
      const responseJson = await response.json();
      setSearchResults(responseJson.results);
      setSearchResult(searchTerm);
    } catch (err) {
      console.error(err);
      setSearchResults([]);
    }
  }

  return (
    <form className="search-bar">
      <input
        type="text"
        value={searchText}
        placeholder="Rechercher..."
        className="search-input"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        type="button"
        className="search-button"
        onClick={() => {
          if (searchText.trim()) {
            searchBarQuery(searchText);
          }
        }}
      >
        <img
          className="image-loupe"
          src="/src/assets/loupe.png"
          alt="Rechercher"
        />
      </button>
    </form>
  );
};

export default SearchBar;*/
