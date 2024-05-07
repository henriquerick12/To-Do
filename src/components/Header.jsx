import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

import "./Header.scss";

function Header({ appName }) {
  const { setClose } = useContext(TodoContext);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-side">
            <h1>{appName}</h1>
          </div>
          <div className="header-side">
            <button className="btn secondary" onClick={() => setClose(true)}>
              + Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
