import React from "react";

function Search_Country({Search}) {
  return (
    <>
      <div className=" row d-flex mt-5 gap-2 justify-content-center align-items-center">
        <div className=" col-lg-4 col-9">
          <input
          onChange={(event) => Search(event.target.value)}
            type="text"
            className="form-control p-3  text-dark"
            placeholder="Search your Country"
          />

        </div>
      </div>
    </>
  );
}

export default Search_Country;
