import React from "react";
import NoData from "./NoData";
function Cards({ Data }) {
    console.log(Data)
  return (
    <>
      <div className="row mt-5 p-5 gap-2 justify-content-center align-items-center">
        {Data && Data.length > 0 ? (
          Data.map(
            (
              {
                flags,
                altSpellings,
                capital,
                currencies,
                name,
                region,
                tld,
                languages,
                population,
              },
              index
            ) => (
              <div key={index} className="card p-1   col-lg-2">
                <img src={flags.svg} className="img-card-top" alt="Flag" />
                <div className="card-body">
                  <h5 className="card-title">{name.common}</h5>
                  <ul className="list-group">
                    <li className="d-flex gap-1">
                      <span className="fw-bolder">Capital: </span> {capital}
                    </li>
                    <li className="d-flex gap-1 ">
                      <span className="fw-bolder">Region: </span> {region}
                    </li>
                    <li className="d-flex gap-1">
                      <span className="fw-bolder">Population: </span>{" "}
                      {population}
                    </li>
                  </ul>
                </div>
              </div>
            )
          )
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
}

export default Cards;
