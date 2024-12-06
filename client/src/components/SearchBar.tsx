import { useEffect, useState } from "react";
import "../assets/styles/SearchBar.css";
import type { Card } from "../types/interface";

interface SearchBarProps {
  setShowCard: (show: boolean) => void;
  setIdCard: (id: number) => void;
  setSearchResult: (search: string) => void;
}

/*const apiKey = import.meta.env.VITE_API_KEY;*/

const SearchBar = ({
  setSearchResult,
  setShowCard,
  setIdCard,
}: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Card[]>([]);

  useEffect(() => {
    if (searchText.trim()) {
      searchBarQuery(searchText);
      console.info(setIdCard, setShowCard);
    } else {
      setSearchResults([]);
    }
  }, [searchText, setIdCard, setShowCard]);

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
    <div className="search-container">
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
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => (
            <div key={result.id} className="search-result-item">
              {result.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
