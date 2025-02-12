import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { TodoType } from "../types/Todo.types";
import Todo from "./Todo/Todo";

const TodoDisplay = () => {
  const [todos, setTodos] = useLocalStorage<TodoType[] | []>("todos", []);

  useEffect(() => {
    const handleTodosUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      setTodos(customEvent.detail); // Update state with the new `todos`
    };

    window.addEventListener("todos-updated", handleTodosUpdate);

    // Cleanup listener when the component unmounts
    return () => {
      window.removeEventListener("todos-updated", handleTodosUpdate);
    };
  }, []);

  return (
    <>
      {todos && todos.length > 0 ? (
        todos.map((todo) => <Todo todo={todo} key={todo.id} />)
      ) : (
        <div>
          <h1>No Tasks Yet</h1>
        </div>
      )}
    </>
  );
};

export default TodoDisplay;
