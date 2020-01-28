import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import MainReducer from "./reducers/MainReducer";
import App from "./App";
import { showAll } from "./actions/actionCreators";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  MainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(showAll());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
