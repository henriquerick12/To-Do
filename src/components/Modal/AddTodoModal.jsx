import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

function AddTodoModal() {
  const { state, dispatch, setClose } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");

  function hamdlerAddToTodo() {
    if (title && description) {
      dispatch({
        type: "ADD_TODO",
        data: {
          id: state.length + 1,
          title,
          description,
          isDone: false,
        },
      });
      setClose(false);
      setTitle("");
      setDesc("");
    }
  }

  return (
    <>
      <div className="form">
        <h3>Add a new task</h3>
        <label htmlFor="title">Title *</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          name="title"
          placeholder="Enter a title..."
        />
        <br />
        <label htmlFor="description">Description *</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
          rows="4"
          placeholder="Enter a description..."
        />
        <br />
        <button onClick={() => hamdlerAddToTodo()} className="btn gray">
          Add Task
        </button>
      </div>
    </>
  );
}

export default AddTodoModal;
