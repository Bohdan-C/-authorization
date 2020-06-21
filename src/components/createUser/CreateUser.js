import React, { useState } from "react";
import css from '../createUser/createUser.module.css'

const IDS = {
  NAME: "name",
  SURNAME: "surname",
  DESC: "desc",
};

function CreateUser() {
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

  const onFormSubmit = () => {
    fetch("http://77.120.241.80:8911/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    }).then((res) => console.log(res));
  };

  return (
    <div className={css.container}>
    <h2 className={css.title}>Add User</h2>
      <form onSubmit={onFormSubmit}>
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
        <button className={css.btn} type="submit">Register</button>
      </form>
    </div>
  );
}

export default CreateUser;
