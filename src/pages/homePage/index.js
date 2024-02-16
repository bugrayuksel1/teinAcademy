import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const { projectName } = useSelector((state) => state.global);
  return (
    <div>
      <h1>{projectName}</h1>
    </div>
  );
}

export default HomePage;
