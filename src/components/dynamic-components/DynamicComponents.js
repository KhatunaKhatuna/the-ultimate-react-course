function H1({ text }) {
  return <h1 style={{ color: "red" }}>{text}</h1>;
}

function H6({ text }) {
  return <h6 style={{ color: "green" }}>{text}</h6>;
}
const components = {
  h1: H1,
  h6: H6,
};

function DynamicComponents({ type, text }) {
  // variable name must be uppercase
  const SpecificStory = components[type];
  return (
    <div className="container">
      <SpecificStory text={text} />
    </div>
  );
}
export default DynamicComponents;
