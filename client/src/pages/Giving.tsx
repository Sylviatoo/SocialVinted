import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Form from "../components/Form";
import "../assets/styles/Giving.css";
import "../assets/styles/Footer.css";

export default function Giving() {
  const imgUrl = "/src/assets/images/LOGO_Social_Vinted.png";
  const titleFooter = "Copyright © 2016 - 2019 - Tous droits réservés";
  const mentionslegales = "Mentions légales";
  const navigate = useNavigate();
  const handleClick = () => {
    const setPage = "/";
    navigate(setPage);
  };
  return (
    <>
      <header>
        <div
          className="header"
          id="header-giving"
          onClick={handleClick}
          onKeyDown={handleClick}
        >
          <img className="logo" alt="logo du site" src={imgUrl} />
          <h2 className="title">Social Vinted</h2>
        </div>
      </header>
      <main>
        <Form />
      </main>
      <Footer titleFooter={titleFooter} mentionslegales={mentionslegales} />
    </>
  );
}
