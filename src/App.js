import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import sha256 from "sha256";
import { setError } from "./redux/errorSlice";

function App() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  // request atılırken kullandığımız interceptor. servera gönderdiğimiz datayı değiştirebileceğimiz yer.
  axios.interceptors.request.use(
    function (config) {
      const hashedPayload = sha256(
        // payload datasına userInfo'dan s_key'i ekleyip bir hash elde ediyoruz.
        JSON.stringify({ ...config.data, s_key: userInfo.s_key })
      );
      config.headers.hmac = hashedPayload; // elde ettiğimiz hash'i header içinde "hmac" key'i ile request'e ekliyoruz.

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
      if (response?.data?.status === "error") {
        dispatch(
          setError({
            error: true,
            errorMessage: response.data.reason,
            errorTitle: response.data.error_title,
          })
        );
      }
      return response;
    },
    function (error) {
      // http hataları olduğunda error kısmına düşer ve http hata kodu ile yakalanabilir.
      if (error?.response?.status === 401) {
        dispatch(
          setError({
            error: true,
            errorMessage: "Token Geçersiz",
            errorTitle:
              "Bu işleme yetkiniz bulunmuyor. Lütfen tekrar login olmayı deneyin.",
          })
        );
      }
      if (error?.response?.status === 404) {
        dispatch(
          setError({
            error: true,
            errorMessage: "Sayfa Bulunamadı",
            errorTitle:
              "Ulaşmaya çalığınız servis kaldırılmış olabilir. Lütfen yardım masasına mail atınız.",
          })
        );
      }
      // return Promise.reject(error);
    }
  );
  // response geldiğinde kullandığımız interceptor. serverdan gelen datayı görebildiğimiz ve hata vs durumlarını yakalayabildiğimiz yer.

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
