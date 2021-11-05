import React from "react";
import { Link } from "react-router-dom";
import "../css/wishlist.css";
import hero from "../images/hero/bread-1.jpg";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Partner from "./partner-carousel";

const Wishlist = () => {
  return (
    <section className="wishlist position-relative">
        <div className="top-sec text-center pt-5">
          <h3 className="text-uppercase fs-1 w-50">wishlist page </h3>{" "}
          <div className="text-capitalize  w-50">
            {" "}
            <Link to="/" className="text-dark">
              home{" "}
            </Link>
            <BiChevronRight />
            <span className="text-capitalize span">wishlist page</span>
          </div>
        </div>
      <div className="container mt-5">
        <table className="w-100 text-center">
          <thead>
            <tr>
              <th className="text-uppercase border p-3 bg">all products</th>
              <th className="text-uppercase border p-3 bg">price</th>
              <th className="text-uppercase border p-3 bg">view</th>
              <th className="text-uppercase border p-3 bg">remove</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-bottom one">
              <th className="text-capitalize p-3">air jordan one mid</th>
              <th className="text-capitalize p-3">150$</th>
              <th className="text-capitalize p-3">
                <Link to="/product-details">view product</Link>
              </th>
              <th className="text-capitalize p-3">
                {" "}
                <AiOutlineCloseCircle
                  className="close fs-2"
                  role="button"
                  onClick={() => {
                    document.querySelector(".one").remove();
                  }}
                />
              </th>
            </tr>
            <tr className="border-bottom two">
              <th className="text-capitalize p-3">air jordan one mid</th>
              <th className="text-capitalize p-3">150$</th>
              <th className="text-capitalize p-3">
                <Link to="/product-details">view product</Link>
              </th>
              <th className="text-capitalize p-3">
                {" "}
                <AiOutlineCloseCircle
                  className="close fs-2"
                  role="button"
                  onClick={() => {
                    document.querySelector(".two").remove();
                  }}
                />
              </th>
            </tr>
            <tr className="three">
              <th className="text-capitalize p-3">air jordan one mid</th>
              <th className="text-capitalize p-3">150$</th>
              <th className="text-capitalize p-3">
                <Link to="/product-details">view product</Link>
              </th>
              <th className="text-capitalize p-3">
                {" "}
                <AiOutlineCloseCircle
                  className="close fs-2"
                  role="button"
                  onClick={() => {
                    document.querySelector(".three").remove();
                  }}
                />
              </th>
            </tr>
          </tbody>
        </table>
        <Partner />
      </div>
    </section>
  );
};

export default Wishlist;
