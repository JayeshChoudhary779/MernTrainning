import React from 'react';
import { Link } from 'react-router-dom';

import './shoplistgrid.css';
const Pagination = ({ postsPerPage , totalPosts, paginate } :any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul  style={{}} className='pagination bg-primary mt-3 mb-3'>
        {pageNumbers.map(number => (
          <li style={{ fontSize:".7rem", paddingTop:"0px" , paddingBottom:"0px"}} key={number} className='page-item text-primary'>
            <Link to ="/Goodsgrid"><a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;