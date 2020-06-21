import React from "react";
import css from '../pagination/pagination.module.css'

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={css.list}>
        {pageNumbers.map((number) => (
          <li className={css.listItem} key={number}>
            <a className={css.link} onClick={() => paginate(number)} href="!#">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;