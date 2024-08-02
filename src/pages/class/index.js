import React from "react";
import Deneme from "../../components/ui/deneme";
import MainLayout from "@/layouts/mainLayout";
import axios from "axios";

function Class({ photos }) {
  return (
    <MainLayout>
      <div>
        <Deneme photos={photos} />
      </div>
    </MainLayout>
  );
}

export default Class;
export const getServerSideProps = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return { props: { photos: response.data } };
};
