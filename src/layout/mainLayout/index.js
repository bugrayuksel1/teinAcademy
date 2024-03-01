import React from "react";
import MenuLayout from "../menuLayout";
import ProfileLayout from "../profileLayout";
import { useLocation } from "react-router-dom";

function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div id="mainWrapper">
      <MenuLayout />
      {children}
      <ProfileLayout />
    </div>
  );
}

export default MainLayout;
