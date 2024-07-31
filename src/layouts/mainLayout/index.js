import React from "react";
import MenuLayout from "../menuLayout";
import ProfileLayout from "../profileLayout";
import ErrorDialog from "../../components/ui/errorDialog";
import { useSelector } from "react-redux";
import RegisterDialog from "../../components/ui/registerForm";

function MainLayout({ children }) {
  const { error, errorTitle, errorMessage } = useSelector(
    (state) => state.error
  );
  const { isShowRegisterForm } = useSelector((state) => state.global);
  return (
    <div id="mainWrapper">
      {isShowRegisterForm && <RegisterDialog />}{" "}
      {/* &&: öncesindeki değer var ise sağdaqki durumu çalıştırır.
      önceki değer yok ise sağdaki durumu çalıştırmaz. 
      ||: soldaki değer varsa soldaki değeri çalıştırır. soldaki değer yoksa sağdaki değeri çalıştırır.
      */}
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
