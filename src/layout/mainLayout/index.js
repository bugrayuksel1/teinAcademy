import React from "react";
import MenuLayout from "../menuLayout";
import ProfileLayout from "../profileLayout";
import { useLocation } from "react-router-dom";

function MainLayout({ children }) {
  const location = useLocation();

  const menuLayout = ["/", "/grades", "/class", "/groups", "/administration"];

  return (
    <div id="mainWrapper">
      {menuLayout.includes(location.pathname) && <MenuLayout />}
      {children}
      {menuLayout.includes(location.pathname) && <ProfileLayout />}
    </div>
  );
}

export default MainLayout;
