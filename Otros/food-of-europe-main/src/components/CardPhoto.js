function CardPhoto(props) {
  return (
    <li>
      <img src={props.imgSrc} alt={props.dish} />
      <div>
        <p>{props.dish}</p>
        <p>{props.country}</p>
      </div>
    </li>
  );
}

export default CardPhoto;
