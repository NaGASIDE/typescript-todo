import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware = (store) => (next) => (
  action
) => {
  if (true) {
    console.log(action.payload);

    // localStorage.setItem("todoList", JSON.stringify(action.payload));
  }

  return next(action);
};
