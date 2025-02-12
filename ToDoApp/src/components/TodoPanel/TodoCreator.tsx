import { ChangeEvent } from "react";
import { useHandleCreation } from "../../hooks/useTodoHandlers";

const TodoCreator = () => {
  const [setCreatedTodo, handleCreation] = useHandleCreation();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreatedTodo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>Create a Task</h1>
      <form
        onSubmit={handleCreation as React.FormEventHandler<HTMLFormElement>}
      >
        <label htmlFor="name">
          Name:
          <input type="text" name="name" onChange={handleInputChange} />
          <br />
        </label>

        <label htmlFor="priority">
          Priority:
          <input type="text" name="priority" onChange={handleInputChange} />
          <br />
        </label>

        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default TodoCreator;
