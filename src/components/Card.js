import Profile from "../images/profile1.jpg";
function Card() {
  return (
    <div className="card">
      <div>
        <img src={Profile} />
      </div>
      <div className="status">
        <i class="fa-solid fa-star"></i>
        <span>5.0</span>
        <span className="gray">(6)</span>
        <span className="gray">&#8226;</span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with OJ Simpsons</p>
      <p>
        <span className="bold"> From $136</span> / person
      </p>
    </div>
  );
}

export default Card;
