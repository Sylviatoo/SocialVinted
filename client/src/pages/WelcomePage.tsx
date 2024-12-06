import { useEffect, useState } from "react";
import DonationCard from "../components/DonationCard";
import FilterButton from "../components/FilterButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import SortButton from "../components/SortButton";
import type { Donation, Service } from "../types/social-vinted-types";

export default function WelcomePage() {
  const imgUrl = "/src/assets/images/LOGO_Social_Vinted.png";
  const title = "+ Je propose";
  const searchbar = "Searchbar";
  const titleFooter = "Copyright © 2016 - 2019 - Tous droits réservés";
  const mentionslegales = "Mentions légales";
  const buttonFilter = "Filtrer";
  const buttonSort = "Trier";

  const [donations, setDonations] = useState<Donation[]>(Array<Donation>(0));
  const [services, setServices] = useState<Service[]>(Array<Service>(0));

  useEffect(() => {
    fetch("http://localhost:3310/api/donations/full")
      .then((response) => response.json())
      .then((data) => setDonations(data as Donation[]));
    fetch("http://localhost:3310/api/services/full")
      .then((response) => response.json())
      .then((data) => setServices(data as Service[]));
  }, []);

  return (
    <div>
      <Header imgUrl={imgUrl} title={title} searchbar={searchbar} />
      <main>
        <div className="divButton">
          <FilterButton buttonFilter={buttonFilter} />
          <SortButton buttonSort={buttonSort} />
        </div>
        <section className="section-annonces">
          {donations.map((item) => {
            return (
              <DonationCard
                key={`donation-${item.id}`}
                user={item.user_name}
                title={item.title}
                state={item.condition_category_name}
                date={new Date(item.date).toLocaleDateString("fr-FR")}
                description={item.description}
                img={item.picture}
              />
            );
          })}
          {services.map((item) => {
            return (
              <ServiceCard
                key={`service-${item.id}`}
                user={item.user_name}
                title={item.title}
                date={new Date(item.date).toLocaleDateString("fr-FR")}
                description={item.description}
                img={item.picture}
              />
            );
          })}
        </section>
      </main>
      <Footer titleFooter={titleFooter} mentionslegales={mentionslegales} />
    </div>
  );
}
