import { useNavigate } from "react-router-dom";
import "../assets/styles/Header.css";
import SearchBar from "../components/SearchBar";

interface HeaderProps {
  imgUrl: string;
  title: string;
  searchbar: string;
}
export default function Header({ imgUrl, title }: HeaderProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    const setPage = "/giving";
    navigate(setPage);
  };
  return (
    <>
      <header>
        <div className="header">
          <img className="logo" alt="logo du site" src={imgUrl} />
          <h2 className="title">Social Vinted</h2>
        </div>
        <div className="welcome">
          <SearchBar
            setShowCard={(show: boolean) => {
              console.info(show);
            }}
            setIdCard={(id: number) => {
              console.info(id);
            }}
            setSearchResult={(search: string) => {
              console.info(search);
            }}
          />
          <button className="button" type="button" onClick={handleClick}>
            {title}
          </button>
        </div>
      </header>
    </>
  );
}
