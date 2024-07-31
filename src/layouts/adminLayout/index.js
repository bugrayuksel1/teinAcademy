import React from "react";
import ManagerMenuList from "./managerMenuList";
import { useSelector } from "react-redux";
import ErrorDialog from "../../components/ui/errorDialog";
function AdminLayout({ children }) {
  const { error, errorTitle, errorMessage } = useSelector(
    (state) => state.error
  );
  return (
    <div id="mainWrapper">
      {error && (
        <ErrorDialog
          title={errorTitle}
          description={errorMessage}
          isOkButton
          isCloseButton
        />
      )}
      <ManagerMenuList />
      {children}
    </div>
  );
}

export default AdminLayout;
