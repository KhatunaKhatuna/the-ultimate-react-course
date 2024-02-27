import Card from "./components/Card";
import Steps from "./components/Steps";
import DateCounter from "./components/DateCounter";
import RestApi from "./components/RestApi";
import Flashcards from "./components/Flashcards";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Card />
      <Steps />
      <DateCounter />
      <Flashcards />
      <RestApi />

      <Test />
    </div>
  );
}

export default App;
