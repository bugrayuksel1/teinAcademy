import React from "react";
import ManagerMenuList from "./managerMenuList";
function AdminLayout({ children }) {
  return (
    <div id="mainWrapper">
      <ManagerMenuList />
      {children}
    </div>
  );
}

export default AdminLayout;
