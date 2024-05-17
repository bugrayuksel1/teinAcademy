import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import axios from "axios";
import { useSelector } from "react-redux";

function App() {
  const { userInfo } = useSelector((state) => state.user);

  axios.interceptors.request.use(
    function (config) {
      config.headers.Authorization = userInfo?.token;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
