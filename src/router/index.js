import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Groups from "../pages/groups";
import Grades from "../pages/grades";
import Departments from "../pages/departments";
import Class from "../pages/class";
import Administration from "../pages/administration";
import MainLayout from "../layout/mainLayout";
import PostDetail from "../pages/postDetail";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout children={<Dashboard />} />,
  },
  {
    path: "/groups/",
    element: <MainLayout children={<Groups />} />,
  },
  {
    path: "/grades",
    element: <MainLayout children={<Grades />} />,
  },
  {
    path: "/grades/postdetail/:id",
    element: <MainLayout children={<PostDetail />} />,
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
    element: (
      <PrivateRoute Component={<MainLayout children={<Administration />} />} />
    ),
  },
]);

export default router;
