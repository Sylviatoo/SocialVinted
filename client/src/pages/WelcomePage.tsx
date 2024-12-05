import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SortButton from "../components/SortButton";

export default function WelcomePage() {
  const imgUrl = "/src/assets/images/LOGO_Social_Vinted.png";
  const title = "+ Je propose";
  const searchbar = "Searchbar";
  const titleFooter = "Copyright © 2016 - 2019 - Tous droits réservés";
  const mentionslegales = "Mentions légales";
  const buttonFilter = "Filtrer";
  const buttonSort = "Trier";

  return (
    <div>
      <Header imgUrl={imgUrl} title={title} searchbar={searchbar} />
      <main>
        <div className="divButton">
          <FilterButton buttonFilter={buttonFilter} />
          <SortButton buttonSort={buttonSort} />
        </div>
      </main>
      <Footer titleFooter={titleFooter} mentionslegales={mentionslegales} />
    </div>
  );
}
