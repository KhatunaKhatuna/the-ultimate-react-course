import "./Card.css";

export default function Card() {
  return (
    <div className="container">
      <div>
        <h2 className="challenge">Challenge 1</h2>
        <div className="card">
          <div className="cardAvatarContainer">
            <Avatar />
          </div>
          <div className="data">
            <Intro />
            <SkillList />
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="cardAvatar" src="images/img-1.jpeg" alt="Avatar" />;
}
function Intro() {
  return (
    <>
      <h1 className="introAuthor">Khatuna Chitishvili</h1>
      <p className="introSummery">
        Web Developer with more than 2 years experience working with HTML, CSS,
        JavaScript, Drupal and React. Highly adept at both independent and
        collaborative projects, with an emphasis on landing page and website
        development
      </p>
    </>
  );
}
function SkillList() {
  return (
    <div className="skill-list ">
      <Skill skill="HTML" emoji="👍️" color="red" />
      <Skill skill="JavaScript" emoji="👍️" color="blue" />
      <Skill skill="Css" emoji="👍️" color="red" />
      <Skill skill="React" emoji=" 🤞" color="blue" />
      <Skill skill="Drupal" emoji="🤞" color="blue" />
      <Skill skill="Git" emoji="👍️" color="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
