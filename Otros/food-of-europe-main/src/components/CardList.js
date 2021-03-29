import data from '../store';

function CardList() {
  const food = data.map((dish) => {
    return (
      <li className="card" key={dish.id}>
        <img src={require(`../images/food/${dish.photo.src}`).default} alt={dish.name} />
        {/* necesita un container para poder hide/show on mouseover*/}
        <p>{dish.name}</p>
        <p>{dish.country}</p>
      </li>
    );
  });

  return <ul>{food}</ul>;
}

export default CardList;
