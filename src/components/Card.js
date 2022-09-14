function Card(props) {
  return (
    <div className="card">
      <div>
        <img src={props.img} />
      </div>
      <div className="status">
        <i class="fa-solid fa-star"></i>
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount})</span>
        <span className="gray">&#8226;</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold"> From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
