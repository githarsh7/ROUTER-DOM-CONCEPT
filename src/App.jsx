import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Template from "./components/Template";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/services",
        element: <Services />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;