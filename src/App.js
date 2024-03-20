import Card from "./components/Card";
import Steps from "./components/Steps";
import DateCounter from "./components/DateCounter";
import RestApi from "./components/RestApi";
import Flashcards from "./components/Flashcards";
import TodoList from "./components/toDoList/ToDoList";
import ToDoDebounced from "./components/toDoDebounced/ToDoDebounced";
import DataCounterRange from "./components/DataCounterRange";
import DynamicComponents from "./components/dynamic-components/DynamicComponents";
import RenderProps from "./components/render-props/RenderProps";
import Acordion from "./components/acordion/Acordion";
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
      <DynamicComponents type="h1" text="hello from Dynamic Components" />
      <RenderProps />
      <Acordion />
    </div>
  );
}

export default App;
