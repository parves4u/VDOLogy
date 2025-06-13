import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
// Custom Style
import "glightbox/dist/css/glightbox.min.css";
// Swiper
import "swiper/css";
import "swiper/css/bundle";
import "aos/dist/aos.css";
import "aos/dist/aos.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
