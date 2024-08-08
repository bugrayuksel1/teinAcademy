import MainLayout from "@/layouts/mainLayout";
import axios from "axios";
import GroupsElement from "@/components/ui/groupsElement";

function Grades({ postData }) {
  return (
    <MainLayout>
      <div>
        <GroupsElement items={postData} />
      </div>
    </MainLayout>
  );
}

export default Grades;

export const getServerSideProps = async (context) => {
  const { req } = context;
  const cookies = req.headers.cookie;
  console.log(cookies.split("=")[1], "bura");

  const response = await axios.get("http://localhost/users", {
    headers: {
      Authorization: cookies.split("=")[1],
    },
    withCredentials: true,
  });

  return {
    props: { postData: response?.data },
  };
};
