// This is for the fake API. Do not delete!
import { worker } from "./mocks/browser";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
export const BASE_URL = "https://swapi.dev/api/people";

worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
