import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import axios from "axios";
import sha256 from "sha256";

export default function App({ Component, pageProps, kukiToken }) {
  const { userInfo } = store.getState().user;
  console.log(userInfo?.token, "access token");
  console.log(kukiToken, "kuki");

  // axios.interceptors.request.use(
  //   function (config) {
  //     const hashedPayload = sha256(
  //       // payload datasına userInfo'dan s_key'i ekleyip bir hash elde ediyoruz.
  //       JSON.stringify(
  //         decodeURIComponent({ ...config.data, s_key: userInfo.s_key })
  //       )
  //     );
  //     // config.headers.hmac = hashedPayload; // elde ettiğimiz hash'i header içinde "hmac" key'i ile request'e ekliyoruz.
  //     config.headers.Authorization = userInfo?.token || kukiToken;
  //     return config;
  //   },
  //   function (error) {
  //     return Promise.reject(error);
  //   }
  // );
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export const getServerSideProps = (context) => {
  const { req } = context;
  const cookies = req.headers.cookie;

  return {
    props: { kukiToken: cookies.split("=")?.[1] },
  };
};
