import "./Card.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Git",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Drupal",
    level: "beginner",
    color: "#FF3B00",
  },
];
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
    <ul className="skill-list ">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </ul>
  );
}

function Skill({ skill, level, color }) {
  return (
    <li className="skill" style={{ backgroundColor: color }} key={skill}>
      <span>{skill}</span>
      <span>
        {level === "intermediate" && "👍️"}
        {level === "beginner" && "🤞"}
        {level === "advanced" && ""}
      </span>
    </li>
  );
}
