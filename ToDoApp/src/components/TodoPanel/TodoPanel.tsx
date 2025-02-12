import { useTodoContext } from "../../context/SelectedTodoContext";
import TodoCreator from "./TodoCreator";
import TodoEditor from "./TodoEditor";

const TodoPanel = () => {
  const todo = useTodoContext();

  return <aside>{!todo ? <TodoCreator /> : <TodoEditor todo={todo} />}</aside>;
};

export default TodoPanel;
