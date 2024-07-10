import { createRoot } from "react-dom/client";
import App from "./App";
import Home from "./Compunent/Home";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import CountryDetail from "./Compunent/CountryDetail";
import Contect from "./Compunent/Contect";
let root = createRoot(document.querySelector('#root'))
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/contect",
          element: <Contect/>,
        },
        {
          path: "/:country",
          element: <CountryDetail/>,
        },
      ],
    },
  ]);
root.render(<RouterProvider router={router}/>)