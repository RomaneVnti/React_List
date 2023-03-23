import { useState } from "react";
export default function FruitForm({ handleAdd }) {
  //State
  const [nouveauFruit, setNouveauFruit] = useState("");

  //Comportements
  const handleSubmit = (event) => {
    event.preventDefault();

    //2.Manipulation sur la copie du state
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  //Render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        type="text"
        placeholder="Ajouter un fruit..."
        onChange={handleChange}
      />
      <button>Ajouter</button>
    </form>
  );
}
