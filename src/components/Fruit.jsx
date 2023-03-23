export default function Fruit({ fruitInfo, onClick }) {
  //State
  // const fruitInfo = props.fruitInfo;
  // const onFruitDelete = props.onFruitDelete;

  //Comportements

  //Render
  return (
    <li>
      {fruitInfo.nom}
      {""}
      <button onClick={onClick}>X</button>
    </li>
  );
}
