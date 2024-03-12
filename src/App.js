import Card from "./components/Card";
import Steps from "./components/Steps";
import DateCounter from "./components/DateCounter";
import RestApi from "./components/RestApi";
import Flashcards from "./components/Flashcards";
import TodoList from "./components/toDoList/ToDoList";
import ToDoDebounced from "./components/toDoDebounced/ToDoDebounced";
import DataCounterRange from "./components/DataCounterRange";

function App() {
  return (
    <div className="App">
      <Card />
      <Steps />
      <DateCounter />
      <DataCounterRange />
      <Flashcards />
      <RestApi />
      <TodoList />
      <ToDoDebounced />
    </div>
  );
}

export default App;
