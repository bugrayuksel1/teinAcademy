import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router;
