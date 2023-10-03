import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles.css'

import {Whitelabel} from './components/WhiteLabel/Whitelabel.jsx'
import { Home } from "./components/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/:profissionalname",
    element: <Whitelabel/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);