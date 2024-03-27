import React from "react";
import MenuLayout from "../menuLayout";
import ProfileLayout from "../profileLayout";

function MainLayout({ children }) {
  return (
    <div id="mainWrapper">
      <MenuLayout />
      {children}
      <ProfileLayout />
    </div>
  );
}

export default MainLayout;
