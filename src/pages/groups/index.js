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

export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost/users");
  return {
    props: { postData: response?.data },
  };
};
