import React from "react";
import { Link } from "react-router-dom";
import "../css/compare.css";
import hero from "../images/hero/bread-1.jpg";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import shopping1 from "../images/shopping-cart/1.jpg";
import shopping2 from "../images/shopping-cart/2.jpg";
import shopping3 from "../images/shopping-cart/3.jpg";
import Partner from "./partner-carousel";
import Rating from "@mui/material/Rating";

const Compare = () => {
  return (
    <section className="compare position-relative">
      <div className="top-sec text-center pt-5">
        <h3 className="text-uppercase fs-1 w-50">compare page</h3>{" "}
        <div className="text-capitalize  w-50">
          {" "}
          <Link to="/" className="text-dark">
            home{" "}
          </Link>
          <BiChevronRight />
          <span className="text-capitalize span">compare page</span>
        </div>
      </div>
      <div className="container text-center pt-5">
        <table className="w-100">
          <thead>
            <tr>
              <th className="text-uppercase px-5 border bg">product</th>
              <th className="text-uppercase px-5 border">
                <img
                  src={shopping1}
                  alt="shopping-1"
                  style={{ width: 100, height: 100 }}
                />{" "}
                <span className="text-uppercase">air jordan one mid</span>
              </th>
              <th className="text-uppercase px-5 border">
                <img
                  src={shopping2}
                  alt="shopping-2"
                  style={{ width: 100, height: 100 }}
                />{" "}
                <span className="text-uppercase">air jordan one mid</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-center ">
            <tr>
              <td className="text-uppercase border p-3 bg">pricing</td>
              <td className="border p-3">450$</td>
              <td className="border p-3">450$</td>
            </tr>
            <tr>
              <td className="text-uppercase border p-3 bg">rating</td>
              <td className="border p-3">
                <Rating defaultValue={3} size="large" />
              </td>
              <td className="border p-3">
                <Rating defaultValue={4} size="large" />
              </td>
            </tr>
            <tr>
              <td className="text-uppercase border p-3 bg">available</td>
              <td className="text-uppercase border p-3 text-success">
                in stock
              </td>
              <td className="text-uppercase border p-3 text-secondary">
                out of stock
              </td>
            </tr>
            <tr>
              <td className="text-uppercase border p-3 bg">size</td>
              <td className="border p-3">9, 9.5, 10, 10.5, 11, 11.5</td>
              <td className="border p-3">9, 9.5, 10, 10.5, 12</td>
            </tr>
            <tr>
              <td className="text-uppercase border p-3 bg">color</td>
              <td className="text-uppercase border p-3">red</td>
              <td className="text-uppercase border p-3">yellow</td>
            </tr>
          </tbody>
          <tfoot className="text-center">
            <tr>
              <td className="text-uppercase border p-3 bg">order</td>
              <td className="border p-3">
                <Link
                  to="/shopping-cart"
                  className="btn text-capitalize bg-warning rounded-pill"
                >
                  add to cart{" "}
                </Link>{" "}
                <AiOutlineHeart className="bg-secondary rounded-circle p-2 fs-2" />
              </td>
              <td className="border p-3">
                <Link
                  to="/shopping-cart"
                  className="btn text-capitalize bg-warning rounded-pill"
                >
                  add to cart{" "}
                </Link>{" "}
                <AiOutlineHeart className="bg-secondary rounded-circle p-2 fs-2" />
              </td>
            </tr>
          </tfoot>
        </table>
        <Partner />
      </div>
    </section>
  );
};

export default Compare;
