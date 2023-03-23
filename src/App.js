import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  //State (état ou des données de la data)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
    { id: 4, nom: "Orange" }
  ]);

  //un ensemble de comportement
  const handleDelete = (id) => {
    //Faire un copie du state
    const fruitsCopy = [...fruits];

    //Manipuler le state
    const fruitsCopyUpdate = fruitsCopy.filter((fruit) => fruit.id !== id);

    //Actualiser le state avce le setter
    setFruits(fruitsCopyUpdate);
  };

  const handleAdd = (fruitAAjouter) => {
    //1.Copie du state
    const fruitsCopy = [...fruits];
    //2.Manipulation sur la copie du state
    fruitsCopy.push(fruitAAjouter);

    //3.Modifier le state sur le setter
    setFruits(fruitsCopy);
  };

  const AfficherFruitPrefere = (fruitNom) => {
    alert(`J'aime trop ce fruit !: ${fruitNom}`);
  };
  //un affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => AfficherFruitPrefere(fruit.nom)}
            key={fruit.id}
          />
        ))}
      </ul>

      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}
export default App;

//Gestion du formulaire
//1.Création du formulaire
//2.Soumission du formulaire (onSubmit / handleSubmit)
//3.Collecte des données du formulaire
// 3a. methode 1: En react on intervient jamais directement sur le doc, documentGetElementById = (useRef en react)
// 3b. methode 2: sync descendante / ascendante (onChange / handleChange)
