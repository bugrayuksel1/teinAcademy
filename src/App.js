import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import MenuLayout from "./layout/menuLayout";
import ProfileLayout from "./layout/profileLayout";

function App() {
  return (
    <div id="mainWrapper">
      <MenuLayout />
      <RouterProvider router={router} />
      <ProfileLayout />
    </div>
  );
}

export default App;
