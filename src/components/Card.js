function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <div>
        <img src={props.item.coverImg} />
      </div>
      <div className="status">
        <i class="fa-solid fa-star"></i>
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount})</span>
        <span className="gray">&#8226;</span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold"> From ${props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
