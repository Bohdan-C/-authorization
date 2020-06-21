import React, { useState, useEffect } from "react";
import { asyncGetData } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import UsersList from "../usersList/UsersList";
import Pagination from "../pagination/Pagination"
import CreateUser from "../createUser/CreateUser";
import css from '../appp/app.module.css'
import UpdateUser from '../updateUser/UpdateUser'

const App = () => {
const [users, setUsers] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [usersPerPage] = useState(5);

//Get users
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetData);
    axios
    .get("http://77.120.241.80:8911/api/users")
    .then((data) => {
        setUsers(data.data);
    })
    .catch((err) => {
      console.log("Error!", err);
    });
  })

  //Get current users
  const indexOfTheLastUser = currentPage * usersPerPage;
  const indexOfTheFirstUser = indexOfTheLastUser - usersPerPage;
  const currentUser = users.slice(indexOfTheFirstUser, indexOfTheLastUser)

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
      <div className={css.container}>
        <CreateUser />
        <UsersList data={currentUser}/>
        <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}/>
        <UpdateUser />
      </div>
    );
  
}

export default connect(null, { asyncGetData })(App);