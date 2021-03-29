import "../style/Card.scss";

function Card(props) {
  return (
    <article className="card">
      <img className="card__img" src={props.imgSrc} alt={props.dish} />
      <p className="card__attribution">
        {/* necesita el update con un if para decidir si es Flickr o Wikimiedia Commons */}
        <a href={props.imgUrl} target="_blank">
          Flickr / {props.author}
        </a>
      </p>
      <h2>{props.dish}</h2>
      <h3>{props.country}</h3>
      <p>{props.description}</p>
    </article>
  );
}

export default Card;
