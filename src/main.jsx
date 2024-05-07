import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { TodoProvider } from "./context/TodoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
