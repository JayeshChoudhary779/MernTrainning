import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {

    console.log("showperpage:",showPerPage)
    console.log("total length:",total)
    console.log("math.ceil:", Math.ceil(total / showPerPage))


    const [counter, setCounter] = useState(1);
    

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (( Math.ceil(total / showPerPage)) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };


  return (
    <div className="d-flex justify-content-center" style={{marginBottom:"4rem",marginTop:"2rem"}}>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              class="page-link bg-primary text-light"
              onClick={() => onButtonClick("prev")}
            >
              Previous
            </a>
          </li>

          {new Array( Math.ceil(total / showPerPage)).fill("").map((el, index) => (
            <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
              <a
                class="page-link"
                onClick={() => setCounter(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li class="page-item">
            <a
              class="page-link bg-primary text-light"
              onClick={() => onButtonClick("next")}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
