import "../styles/Footer.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Form from "./Form";

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
        <div className="header">
          <img
            className="logo"
            alt="logo du site"
            src={imgUrl}
            onClick={handleClick}
            onKeyDown={handleClick}
          />
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
