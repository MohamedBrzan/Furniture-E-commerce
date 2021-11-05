import React from "react";
import { Link } from "react-router-dom";
import "../css/not-found.css";
import ErrorLink from "../images/404.png";

const NotFound = () => {
  return (
    <>
      {" "}
      <div className="text-center bg text-uppercase">
        <h1 className="h1 text-warning">404</h1> <h1>page not found</h1>{" "}
        <h5 className="my-4">
          we are looking for your page … but we can’t find it
        </h5>{" "}
        <Link to="/" className="btn bg-warning ">
          back to home
        </Link>{" "}
        <br />
      </div>{" "}
      <div className="text-center bg pt-5">
        <img
          src={ErrorLink}
          alt="not-found"
          style={{ width: 500, height: 500 }}
        />
      </div>
    </>
  );
};

export default NotFound;
