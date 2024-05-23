import React from "react";
import MenuLayout from "../menuLayout";
import ProfileLayout from "../profileLayout";
import ErrorDialog from "../../components/errorDialog";
import { useSelector } from "react-redux";
import RegisterDialog from "../../components/registerForm";

function MainLayout({ children }) {
  const { error, errorTitle, errorMessage } = useSelector(
    (state) => state.error
  );
  const { isShowRegisterForm } = useSelector((state) => state.global);
  return (
    <div id="mainWrapper">
      {isShowRegisterForm && <RegisterDialog />}
      {error && (
        <ErrorDialog
          title={errorTitle}
          description={errorMessage}
          isOkButton
          isCloseButton
        />
      )}
      <MenuLayout />
      {children}
      <ProfileLayout />
    </div>
  );
}

export default MainLayout;
