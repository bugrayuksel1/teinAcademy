import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/groupsSlice";

function Groups() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div style={{ margin: "20px", backgroundColor: "#DDDDDD" }}>
            <h1>{user.user_name}</h1>
            <h2>{user.full_name}</h2>
            <h2>{user.role}</h2>
            <h2>{user.e_mail}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Groups;
