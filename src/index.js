import React from "react";
import { render } from "react-dom";

import "./css/style.css";
import App from "./components/App";

import Routes from "./components/Routes";

render(<Routes />, document.querySelector("#main"));
