import Webpage from "./webpage";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.querySelector(".webpageContainer"));
root.render(<StrictMode> < Webpage /> </StrictMode>);