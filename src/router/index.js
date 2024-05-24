import { createBrowserRouter } from "react-router-dom";
import routes from "../consts/routes";
import Dashboard from "../pages/dashboard";
import Groups from "../pages/groups";
import Grades from "../pages/grades";
import Departments from "../pages/departments";
import Class from "../pages/class";
import Administration from "../pages/administration";
import MainLayout from "../layout/mainLayout";
import PostDetail from "../pages/postDetail";
import PrivateRoute from "./PrivateRoute";
import Manager from "../pages/manager";
import AdminLayout from "../layout/adminLayout";
import UserControl from "../pages/manager/usercontrol";

const router = createBrowserRouter([
  {
    path: routes.home.path,
    element: <MainLayout children={<Dashboard />} />,
  },
  {
    path: routes.groups.path,
    element: <MainLayout children={<Groups />} />,
  },
  {
    path: routes.grades.path,
    element: <MainLayout children={<Grades />} />,
  },
  {
    path: routes.postdetail.path,
    element: <MainLayout children={<PostDetail />} />,
  },
  {
    path: routes.departments.path,
    element: <MainLayout children={<Departments />} />,
  },
  {
    path: routes.class.path,
    element: <MainLayout children={<Class />} />,
  },
  {
    path: routes.administration.path,
    element: (
      <PrivateRoute
        route={routes.administration.name}
        Component={<MainLayout children={<Administration />} />}
      />
    ),
  },
  {
    path: routes.manager.path,
    element: (
      <PrivateRoute
        route={routes.manager.name}
        Component={<AdminLayout children={<Manager />} />}
      />
    ),
  },
  {
    path: routes.usercontrol.path,
    element: (
      <PrivateRoute
        route={routes.usercontrol.name}
        Component={<AdminLayout children={<UserControl />} />}
      />
    ),
  },
]);

export default router;
