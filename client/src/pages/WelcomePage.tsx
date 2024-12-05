import Card from "../components/Card";
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
        <section className="section-annonces">
          <Card
            user="Charlotte"
            title="Ordi ultra performant"
            state="t'inquiètes"
            date="05/12/2024"
            description="Je fais don de mon ordinateur de compète. Apprenez à le dompter et vous serez satisfait."
            img="https://i.ebayimg.com/images/g/kJUAAOSw76Bmfo0j/s-l1600.webp"
          />
          <Card
            user="Julien"
            title="Grande étagère"
            state="très bon état"
            date="06/12/2024"
            description="Je me débarasse de cette étagère quasi neuve pour cause de déménagement."
            img="https://www.robindesbois.com/6428-large_default/etagere-bibliotheque-bois-et-metal-dante.jpg"
          />
        </section>
      </main>
      <Footer titleFooter={titleFooter} mentionslegales={mentionslegales} />
    </div>
  );
}
