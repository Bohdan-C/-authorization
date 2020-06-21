import React, { useState } from "react";
import axios from "axios";
import css from "../userListItem/userListItem.module.css";

function UserListItem(props) {
  const user = props.user;

  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://77.120.241.80:8911/api/user/${id}`)
      .then((response) => {
        if (response.data != null) {
          alert("Deletet successfully.");
          setUsers({
            users: users.filter((user) => user.id !== id),
          });
        }
      });
  };

  return (
    <li className={css.listItem} key={user.id}>
      <div className={css.userInfo}>
        <p>Name: {user.name}</p>
        <p>Surname: {user.surname}</p>
        <p>Description: {user.desc}</p>
      </div>
      <div className={css.btnContainer}>
        <button>Edit</button>
        <button
          type="submit"
          onClick={() => handleDelete(user.id)}
          className={css.buttonDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default UserListItem;
