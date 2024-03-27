import React from "react";
import { useSelector } from "react-redux";
import UnAuthorized from "../components/UnAuthorized";

function PrivateRoute({ Component }) {
  const { isLoggedIn } = useSelector((state) => state.user.userInfo);
  return isLoggedIn ? Component : <UnAuthorized />;
}

export default PrivateRoute;
