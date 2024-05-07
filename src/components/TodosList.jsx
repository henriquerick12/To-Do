import { useContext } from "react";
import Todo from "./Todo.jsx";
import { TodoContext } from "../context/TodoContext.jsx";

function TodosList() {
  const store = useContext(TodoContext);
  return (
    <>
      <div className="todos">
        {store.state.map((item) => (
          <Todo
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </>
  );
}

export default TodosList;
