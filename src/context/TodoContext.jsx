/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import { createContext, useEffect, useReducer, useState } from "react";

export const TodoContext = createContext([]);

const initialState = localStorage.getItem("@data")
  ? JSON.parse(localStorage.getItem("@data"))
  : [];

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [close, setClose] = useState(false);
  useEffect(() => {
    localStorage.setItem("@data", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
        close,
        setClose,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

function todoReducer(state, action) {
  switch (action.type) {
    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.payload);

    case "CHECKER":
      return state.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
          return item;
        } else {
          return item;
        }
      });

    case "ADD_TODO":
      return [...state, action.data];
  }
}
