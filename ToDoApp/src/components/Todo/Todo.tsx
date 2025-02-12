import { useRef } from "react";
import { TodoType } from "../../types/Todo.types";

import "./Todo.css";
import useSelection from "../../hooks/useSelection";
import { FaTrash } from "react-icons/fa";
import { useHandleDeletion } from "../../hooks/useTodoHandlers";

const Todo = ({ todo }: { todo: TodoType }) => {
  const todoRef = useRef<HTMLDivElement>(null);

  const handleDeletion = useHandleDeletion(todo);

  useSelection<TodoType>(todoRef, todo);

  return (
    <article ref={todoRef} className="todoItem">
      <input type="checkbox" name="" />
      <h1>{todo.name}</h1>

      <FaTrash onClick={handleDeletion} />
    </article>
  );
};

export default Todo;
