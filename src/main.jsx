import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AuthContextComp from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextComp>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextComp>
  </React.StrictMode>
);
