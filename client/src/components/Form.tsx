import { useState } from "react";
import "../styles/Form.css";

export default function Form() {
  const [value, setValue] = useState("1");

  return (
    <>
      <h1 className="publish">Publier une annonce</h1>
      <form>
        <label>
          Je fais un don/ Je propose un service
          <select onChange={(event) => setValue(event.target.value)}>
            <option value="1">Je fais un don</option>
            <option value="2">Je propose un service</option>
          </select>
          {value === "1" ? (
            <label>
              Catégorie
              <select className="category">
                <option value="1">Alimentaire</option>
                <option value="2">Produits d'hygiène</option>
                <option value="3">Vêtements</option>
                <option value="4">Jouets</option>
                <option value="5">Electroménager</option>
                <option value="6">Meuble</option>
                <option value="7">Produits pour bébé</option>
                <option value="8">Informatique</option>
              </select>
            </label>
          ) : (
            <label>
              Catégorie
              <select>
                <option value="1">Bricolage</option>
                <option value="2">Aide aux courses</option>
                <option value="3">Garde d'animaux de compagnie</option>
                <option value="4">Garde d'enfants</option>
                <option value="5">Soutien aux personnes isolées</option>
              </select>
            </label>
          )}
        </label>

        <label>
          Titre de mon annonce
          <input type="text" name="name" />
        </label>
        <label>
          Description
          <input type="text" name="name" />
        </label>
        <label>
          Etat
          <select>
            <option value="1">Neuf sous emballage d'origine</option>
            <option value="2">Etat neuf</option>
            <option value="3">Très bon état</option>
            <option value="4">Bon état</option>
            <option value="5">Satisfaisant</option>
          </select>
        </label>
        <input className="submit" type="submit" value="Publier" />
      </form>
    </>
  );
}
