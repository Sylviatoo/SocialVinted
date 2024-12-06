import { useEffect, useState } from "react";
import "../styles/Form.css";
import { useNavigate } from "react-router-dom";
import type {
  Condition,
  DonationCategory,
  ServiceCategory,
} from "../types/social-vinted-types";

export default function Form() {
  const [value, setValue] = useState("1");
  const navigate = useNavigate();
  const handleClick = () => {
    const setPage = "/";
    navigate(setPage);
  };

  const [conditionCategories, setConditionCategories] = useState<Condition[]>(
    Array<Condition>(0),
  );

  const [donationCategories, setDonationCategories] = useState<
    DonationCategory[]
  >(Array<DonationCategory>(0));

  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>(
    Array<DonationCategory>(0),
  );

  useEffect(() => {
    fetch("http://localhost:3310/api/condition_categories")
      .then((response) => response.json())
      .then((data) => setConditionCategories(data as Condition[]));
    fetch("http://localhost:3310/api/donation_categories")
      .then((response) => response.json())
      .then((data) => setDonationCategories(data as DonationCategory[]));
    fetch("http://localhost:3310/api/service_categories")
      .then((response) => response.json())
      .then((data) => setServiceCategories(data as ServiceCategory[]));
  }, []);

  return (
    <>
      <form>
        <h1 className="publish">Publier une annonce</h1>
        <label>
          Je fais un don/ Je propose un service
          <select onChange={(event) => setValue(event.target.value)}>
            <option value="1">Je fais un don</option>
            <option value="2">Je propose un service</option>
          </select>
        </label>
        {value === "1" ? (
          <label>
            Catégorie
            <select className="category">
              {donationCategories.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>
        ) : (
          <label>
            Catégorie
            <select>
              {serviceCategories.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>
        )}

        <label>
          Titre de mon annonce
          <input type="text" name="name" />
        </label>
        <label>
          Description
          <input type="text" name="name" />
        </label>
        {value === "1" ? (
          <label>
            Etat
            <select>
              {conditionCategories.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </label>
        ) : (
          <></>
        )}
        <div className="nav-form">
          <input className="submit" type="submit" value="Publier" />
          <input
            className="leave-button"
            type="button"
            value="Quitter"
            onClick={handleClick}
          />
        </div>
      </form>
    </>
  );
}
