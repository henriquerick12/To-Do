/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

import "./Todo.scss";

function Todo({ data }) {
  const { dispatch } = useContext(TodoContext);

  return (
    <>
      <div className={`todo ${data.isDone ? "done" : ""}`}>
        <button
          onClick={() => dispatch({ type: "DELETE_TODO", payload: data.id })}
          className="erase"
        >
          x erase
        </button>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="task-check">
          <input
            type="checkbox"
            defaultChecked={data.isDone}
            onClick={() => dispatch({ type: "CHECKER", payload: data.id })}
          />
          <label>{!data.isDone ? "To-Do" : "Done"}</label>
        </div>
      </div>
    </>
  );
}

export default Todo;
