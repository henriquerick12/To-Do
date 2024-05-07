import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";

import ModalWindow from "../components/Modal/ModalWindow.jsx";
import TodosList from "../components/TodosList.jsx";
import AddTodoModal from "../components/Modal/AddTodoModal.jsx";

function Home() {
  const { close } = useContext(TodoContext);

  return (
    <>
      {close && (
        <ModalWindow>
          <AddTodoModal />
        </ModalWindow>
      )}
      <div className="container">
        <TodosList />
      </div>
    </>
  );
}

export default Home;
