// React
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

// CSS
import "../assets/stylesheets/application.scss";

// Component
import App from "./components/app";

// Recuders
import flatsReducer from "./reducers/flats_reducer";
import selectedFlatsReducer from "./reducers/selected_flats_recuder";

// Combine all reducers
const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatsReducer,
});

// Render App
const root = document.getElementById("root");
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    root
  );
}
