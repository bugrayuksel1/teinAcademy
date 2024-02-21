import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Groups from "../pages/groups";
import Grades from "../pages/grades";
import Departments from "../pages/departments";
import Class from "../pages/class";
import Administration from "../pages/administration";
import MainLayout from "../layout/mainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout children={<Dashboard />} />,
  },
  {
    path: "/groups",
    element: <MainLayout children={<Groups />} />,
  },
  {
    path: "/grades",
    element: <MainLayout children={<Grades />} />,
  },
  {
    path: "/departments",
    element: <MainLayout children={<Departments />} />,
  },
  {
    path: "/class",
    element: <MainLayout children={<Class />} />,
  },
  {
    path: "/administration",
    element: <MainLayout children={<Administration />} />,
  },
]);

export default router;
