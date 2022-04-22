import React from "react";
import ReactLoading from "react-loading";
export default function Loading() {
  return (
    <div className="container ">
      <div className="d-flex justify-content-center">
        <ReactLoading type="bubbles" color="#black" height={50} width={100} />
        <br />
      </div>
      <br />
      <h5 className="d-flex justify-content-center">Please Wait Loading...</h5>
    </div>
  );
}
