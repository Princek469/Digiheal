// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./index.css";
import BComp from "./pages/OurServices/BComp";
import WebDev from "./pages/OurServices/WebDev";
import IntegrationTech from "./pages/OurServices/IntegrationTech";
import Programming from "./pages/OurServices/Programming";
import ItConsul from "./pages/OurServices/ItConsul";
import SoftDevSupp from "./pages/OurServices/SoftDevSupp";
import NetSolu from "./pages/OurServices/NetSolu";
import AI from "./pages/OurServices/AI";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "basicsOfComputer", element: <BComp /> },
      { path: "webDevelopment", element: <WebDev /> },
      { path: "integration", element: <IntegrationTech /> },
      { path: "programmingCoding", element: <Programming /> },
      { path: "itConsulting", element: <ItConsul /> },
      { path: "softwareDev", element: <SoftDevSupp /> },
      { path: "netSolu", element: <NetSolu /> },
      { path: "artificialIntelligence", element: <AI /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
