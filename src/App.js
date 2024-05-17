import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import axios from "axios";
import { useSelector } from "react-redux";
import ErrorDialog from "./components/errorDialog";
import { useState } from "react";

function App() {
  const { userInfo } = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorTitle, setErrorTitle] = useState("");

  // request atılırken kullandığımız interceptor. servera gönderdiğimiz datayı değiştirebileceğimiz yer.
  axios.interceptors.request.use(
    function (config) {
      config.headers.Authorization = userInfo?.token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // request atılırken kullandığımız interceptor. servera gönderdiğimiz datayı değiştirebileceğimiz yer.

  // response geldiğinde kullandığımız interceptor. serverdan gelen datayı görebildiğimiz ve hata vs durumlarını yakalayabildiğimiz yer.
  axios.interceptors.response.use(
    function (response) {
      // http hatalarının dışında gelen hata mesajları burada yakalanabilir.
      console.log("response: ", response);
      if (response?.data?.status === "error") {
        setError(true);
        setErrorMessage(response.data.reason);
        setErrorTitle(response.data.error_title);
      }
      return response;
    },
    function (error) {
      // http hataları olduğunda error kısmına düşer ve http hata kodu ile yakalanabilir.
      if (error?.response?.status === 401) {
        setError(true);
        setErrorTitle("Token Geçersiz");
        setErrorMessage(
          "Bu işleme yetkiniz bulunmuyor. Lütfen tekrar login olmayı deneyin."
        );
      }
      if (error?.response?.status === 404) {
        setError(true);
        setErrorTitle("Sayfa Bulunamadı");
        setErrorMessage(
          "Ulaşmaya çalığınız servis kaldırılmış olabilir. Lütfen yardım masasına mail atınız."
        );
      }
      return Promise.reject(error);
    }
  );
  // response geldiğinde kullandığımız interceptor. serverdan gelen datayı görebildiğimiz ve hata vs durumlarını yakalayabildiğimiz yer.

  return (
    <>
      {error && (
        <ErrorDialog
          title={errorTitle}
          description={errorMessage}
          isOkButton
          isCloseButton
          okButtonHandler={setError}
          closeButtonHandler={setError}
        />
      )}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
