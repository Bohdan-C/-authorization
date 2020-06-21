import React, { useState } from "react";
import axios from "axios";
import css from "../updateUser/updateUser.module.css";

const IDS = {
  NAME: "name",
  SURNAME: "surname",
  DESC: "desc",
};

const UpdateUser = (props) => {

  const [state, setState] = useState({
    [IDS.NAME]: "",
    [IDS.SURNAME]: "",
    [IDS.DESC]: "",
  });

  const onChange = (e) => {
    const { id, value } = e.target;

    setState((currentState) => ({
      ...currentState,
      [id]: value,
    }));
  };

  const onSubmit = (id) => {
    axios.put(`http://77.120.241.80:8911/api/users${id}`, {
      body: JSON.stringify(state)
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className={css.container}>
      <h2 className={css.title}>Update User</h2>
      <form
        onSubmit={onSubmit}
      >
        <input
          id={IDS.NAME}
          placeholder="Name"
          value={state[IDS.NAME]}
          onChange={onChange}
          className={css.input}
        />
        <input
          placeholder="Surname"
          id={IDS.SURNAME}
          value={state[IDS.SURNAME]}
          onChange={onChange}
          className={css.input}
        />
        <input
          placeholder="Description"
          id={IDS.DESC}
          value={state[IDS.DESC]}
          onChange={onChange}
          className={css.inputDesc}
        />
        <button className={css.btn} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
