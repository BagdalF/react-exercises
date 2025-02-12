import { createContext, ReactNode, useContext, useState } from "react";
import { TodoType } from "../types/Todo.types";

const SelectedTodoContext = createContext<TodoType | null>(null);
const ChangeTodoContext = createContext<any>(null);

export const useTodoContext = () => {
  return useContext(SelectedTodoContext);
};

export const useChangeTodoContext = () => {
  return useContext(ChangeTodoContext);
};

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  const changeTodo = (todo: TodoType) => {
    setSelectedTodo(todo);
  };

  return (
    <SelectedTodoContext.Provider value={selectedTodo}>
      <ChangeTodoContext.Provider value={changeTodo}>
        {children}
      </ChangeTodoContext.Provider>
    </SelectedTodoContext.Provider>
  );
};

export default TodoProvider;
