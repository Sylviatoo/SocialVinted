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

  // Original full data
  const [donations, setDonations] = useState<Donation[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  // Filtered data
  const [filteredDonations, setFilteredDonations] = useState<Donation[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);

  // Filter states
  const [filterType, setFilterType] = useState<
    "all" | "donations" | "services"
  >("all");
  const [donationStateFilter, setDonationStateFilter] = useState<string | null>(
    null,
  );
  const [serviceTypeFilter, setServiceTypeFilter] = useState<string | null>(
    null,
  );

  // Sort states
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [isFirstSort, setIsFirstSort] = useState(true);

  // Unique categories and states for filtering
  const [donationStates, setDonationStates] = useState<string[]>([]);
  const [serviceTypes, setServiceTypes] = useState<string[]>([]);

  useEffect(() => {
    // Fetch donations
    fetch("http://localhost:3310/api/donations/full")
      .then((response) => response.json())
      .then((data) => {
        const donationsData = data as Donation[];
        setDonations(donationsData);
        setFilteredDonations(donationsData);

        // Extract unique donation states
        const uniqueStates = [
          ...new Set(donationsData.map((d) => d.condition_category_name)),
        ];
        setDonationStates(uniqueStates);
      });

    // Fetch services
    fetch("http://localhost:3310/api/services/full")
      .then((response) => response.json())
      .then((data) => {
        const servicesData = data as Service[];
        setServices(servicesData);
        setFilteredServices(servicesData);

        // Extract unique service types
        const uniqueTypes = [
          ...new Set(
            servicesData.map((s) => s.service_category_name || "Autre"),
          ),
        ];
        setServiceTypes(uniqueTypes);
      });
  }, []);

  // Trigger filters when filter states change
  useEffect(() => {
    const applyFiltersInternal = () => {
      let filteredDonationsList = [...donations];
      let filteredServicesList = [...services];

      // Filter by donation state
      if (donationStateFilter) {
        filteredDonationsList = filteredDonationsList.filter(
          (donation) =>
            donation.condition_category_name === donationStateFilter,
        );
      }

      // Filter by service type
      if (serviceTypeFilter) {
        filteredServicesList = filteredServicesList.filter(
          (service) =>
            (service.service_category_name || "Autre") === serviceTypeFilter,
        );
      }

      // Filter by type (all/donations/services)
      switch (filterType) {
        case "donations":
          filteredServicesList = [];
          break;
        case "services":
          filteredDonationsList = [];
          break;
      }

      setFilteredDonations(filteredDonationsList);
      setFilteredServices(filteredServicesList);
    };

    applyFiltersInternal();
  }, [donations, services, donationStateFilter, serviceTypeFilter, filterType]);

  // Sort handler
  const handleSort = () => {
    const combinedItems = [
      ...filteredDonations.map((d) => ({ ...d, type: "donation" })),
      ...filteredServices.map((s) => ({ ...s, type: "service" })),
    ];

    const sortedItems = combinedItems.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

    const sortedDonations = sortedItems
      .filter((item) => item.type === "donation")
      .map((item) => item as Donation);

    const sortedServices = sortedItems
      .filter((item) => item.type === "service")
      .map((item) => item as Service);

    setFilteredDonations(sortedDonations);
    setFilteredServices(sortedServices);

    setSortOrder(isFirstSort ? "asc" : sortOrder === "asc" ? "desc" : "asc");
    setIsFirstSort(false);
  };

  // Reset all filters
  const resetFilters = () => {
    setFilterType("all");
    setDonationStateFilter(null);
    setServiceTypeFilter(null);
    setFilteredDonations(donations);
    setFilteredServices(services);
  };

  // Render filter dropdowns
  const renderFilterOptions = () => {
    return (
      <div className="filter-options">
        {/* Type filter */}
        <select
          onChange={(e) =>
            setFilterType(e.target.value as "all" | "donations" | "services")
          }
          value={filterType}
        >
          <option value="all">Tous</option>
          <option value="donations">Dons</option>
          <option value="services">Services</option>
        </select>

        {/* Donation state filter - only visible if "donations" is selected */}
        {filterType === "donations" && (
          <select
            onChange={(e) => setDonationStateFilter(e.target.value || null)}
            value={donationStateFilter || ""}
          >
            <option value="">Tous les états de dons</option>
            {donationStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        )}

        {/* Service type filter - only visible if "services" is selected */}
        {filterType === "services" && (
          <select
            onChange={(e) => setServiceTypeFilter(e.target.value || null)}
            value={serviceTypeFilter || ""}
          >
            <option value="">Tous les types de services</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        )}

        {/* Reset Filters Button */}
        <button
          type="button"
          onClick={resetFilters}
          className="reset-filters-btn"
        >
          Réinitialiser les filtres
        </button>
      </div>
    );
  };

  return (
    <div>
      <Header imgUrl={imgUrl} title={title} searchbar={searchbar} />
      <main>
        <div className="divButton">
          <FilterButton
            buttonFilter={buttonFilter}
            renderFilterOptions={renderFilterOptions}
          />
          <SortButton
            buttonSort={`${buttonSort} (${sortOrder === "desc" ? "Plus récent" : "Plus ancien"})`}
            onClick={handleSort}
          />
        </div>
        <section className="section-annonces">
          {filteredDonations.map((item) => (
            <DonationCard
              key={`donation-${item.id}`}
              user={item.user_name}
              title={item.title}
              state={item.condition_category_name}
              date={new Date(item.date).toLocaleDateString("fr-FR")}
              description={item.description}
              img={item.picture}
            />
          ))}
          {filteredServices.map((item) => (
            <ServiceCard
              key={`service-${item.id}`}
              user={item.user_name}
              title={item.title}
              date={new Date(item.date).toLocaleDateString("fr-FR")}
              description={item.description}
              img={item.picture}
            />
          ))}
        </section>
      </main>
      <Footer titleFooter={titleFooter} mentionslegales={mentionslegales} />
    </div>
  );
}
