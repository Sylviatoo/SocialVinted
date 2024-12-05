import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        title="Pleins de jouets pour Noël"
        date="aujourd'hui"
        description="J'offre de vieux jouets qui ne sont plus utilisé les enfants ayant passé l'âge de les utiliser."
        user="Vincent Dejean"
        state="bon état"
        img="https://im.qccdn.fr/node/guide-d-achat-jouets-2731/thumbnail_800x480px-122194.jpg"
      />
    </>
  );
}

export default App;
