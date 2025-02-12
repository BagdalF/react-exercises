import { ChangeEvent } from "react";
import { TodoType } from "../../types/Todo.types";
import { useHandleEdition } from "../../hooks/useTodoHandlers";

const TodoEditor = ({ todo }: { todo: TodoType }) => {
  const [editedTodo, setEditedTodo, handleEdition] = useHandleEdition(todo);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedTodo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>Edit the Task{todo.name.length < 16 && `: ${todo.name}`}</h1>

      <form onSubmit={handleEdition}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={editedTodo.name || ""}
            onChange={handleInputChange}
          />
          <br />
        </label>

        <label htmlFor="priority">
          Priority:
          <input
            type="text"
            name="priority"
            value={editedTodo.priority || ""}
            onChange={handleInputChange}
          />
          <br />
        </label>
        <button type="submit">Edit</button>
      </form>
    </>
  );
};

export default TodoEditor;
