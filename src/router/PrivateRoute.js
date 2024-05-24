import React from "react";
import { useSelector } from "react-redux";
import UnAuthorized from "../components/UnAuthorized";
import routes from "../consts/routes";

function PrivateRoute({ route, Component }) {
  const { isLoggedIn, role } = useSelector((state) => state.user.userInfo);
  const routeData = routes[route];
  const roles = {
    public: true,
    user: isLoggedIn,
    admin: isLoggedIn && (role === "admin" || role === "superadmin"),
    superadmin: isLoggedIn && role === "superadmin",
  };

  return roles[routeData.access] ? Component : <UnAuthorized />;
}

export default PrivateRoute;
