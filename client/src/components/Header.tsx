import { useNavigate } from "react-router-dom";
import "../assets/styles/Header.css";
interface HeaderProps {
  imgUrl: string;
  title: string;
  searchbar: string;
}
export default function Header({ imgUrl, title, searchbar }: HeaderProps) {
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
          <h1>{searchbar}</h1>
          <button className="button" type="button" onClick={handleClick}>
            {title}
          </button>
        </div>
      </header>
    </>
  );
}
