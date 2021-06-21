import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { BrowserRouter } from 'react-router-dom';
import { store } from "./redux/index";
import { loadState, saveState } from "./redux/localStorage";

store.subscribe(() => {
  saveState(store.getState());
});

const root = document.getElementById("root")

const app = (
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(
  app,
  root
);
