import React from "react";
import { useSelector } from "react-redux";
import UnAuthorized from "../../components/ui/unAuthorized";

function PrivateLayout({ children }) {
  const { isLoggedIn, role } = useSelector((state) => state.user.userInfo);
  console.log("merjhana", isLoggedIn);
  return isLoggedIn ? children : <UnAuthorized />;
}

export default PrivateLayout;
