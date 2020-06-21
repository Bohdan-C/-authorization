import React from "react";
import css from "../usersList/usersList.module.css";
import UserListItem from "../userListItem/UserListItem";

const UsersList = (props) => {
  const data = props.data;

  return (
    <ul className={css.list}>
      {data.map((user) => (
        <UserListItem key={user.id} user={user}/>
      ))}
    </ul>
  );
};

export default UsersList;