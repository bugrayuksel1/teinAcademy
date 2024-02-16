import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
