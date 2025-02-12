import Header from "./components/Header/Header";
import TodoDisplay from "./components/TodoDisplay";
import TodoPanel from "./components/TodoPanel/TodoPanel";
import TodoWireframe from "./components/TodoWireframe/TodoWireframe";
import TodoProvider from "./context/SelectedTodoContext";

function App() {
  return (
    <>
      <Header />
      <TodoProvider>
        <TodoWireframe>
          <TodoDisplay />
          <TodoPanel />
        </TodoWireframe>
      </TodoProvider>
    </>
  );
}

export default App;
