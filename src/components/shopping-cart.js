import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/shopping-cart.css";
import hero from "../images/hero/bread-1.jpg";
import { BiChevronRight } from "react-icons/bi";
import shopping1 from "../images/shopping-cart/1.jpg";
import shopping2 from "../images/shopping-cart/2.jpg";
import shopping3 from "../images/shopping-cart/3.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Partner from "./partner-carousel";

const ShoppingCart = () => {
  const [n, setN] = useState(1);
  const [m, setM] = useState(165);
  const [o, setO] = useState(1);
  const [p, setP] = useState(225);
  const [x, setX] = useState(1);
  const [y, setY] = useState(315);

  const MN = m * n;
  const OP = o * p;
  const XY = x * y;

  const plus = (e) => {
    setN(n + 1);
  };

  const minus = (e) => {
    if (n === 1) {
      return;
    } else {
      setN(n - 1);
    }
  };

  const plusOne = (e) => {
    setO(o + 1);
  };

  const minusOne = (e) => {
    if (o === 1) {
      return;
    } else {
      setO(o - 1);
    }
  };
  const plusTwo = (e) => {
    setX(x + 1);
  };

  const minusTwo = (e) => {
    if (x === 1) {
      return;
    } else {
      setX(x - 1);
    }
  };

  return (
    <section className="shopping-cart position-relative">
        <div className="top-sec text-center pt-5">
          <h3 className="text-uppercase fs-1 w-50">shopping page </h3>{" "}
          <div className="text-capitalize  w-50">
            {" "}
            <Link to="/" className="text-dark">
              home{" "}
            </Link>
            <BiChevronRight />
            <span className="text-capitalize span">shopping page</span>
          </div>
        </div>
      <div className="container mt-5">
        <table className="w-100 text-center">
          <thead>
            <tr>
              <th className="text-uppercase bg border p-3">all products</th>
              <th className="text-uppercase bg border p-3">price</th>
              <th className="text-uppercase bg border p-3">quantity</th>
              <th className="text-uppercase bg border p-3">total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border one">
              <td className="border-end">
                {" "}
                <img
                  src={shopping1}
                  alt="shopping-1"
                  style={{ width: 100, height: 100 }}
                />{" "}
                <span className="text-capitalize mt-5">air jordan one</span>
              </td>
              <td className="border-end">150$</td>
              <td className="border-end quantity">
                <div className="row align-items-center justify-content-center">
                  {" "}
                  <div
                    className="col-lg-2 bg-dark p-1 rounded theBtn"
                    onClick={minus}
                  >
                    {" "}
                    <span className="text-white fs-5" role="button">-</span>
                  </div>
                  <div className="col-lg-5 bg-primary rounded theBtn">
                    {" "}
                    <span className="text-white fs-4">{n}</span>
                  </div>
                  <div
                    className="col-lg-2 bg-warning p-1 rounded"
                    onClick={plus}
                  >
                    {" "}
                    <span className="text-white fs-5" role="button">+</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="row">
                  {" "}
                  <div className="col">
                    {" "}
                    <b>{MN}$</b>
                  </div>
                  <div className="col">
                    {" "}
                    <AiOutlineCloseCircle
                      className=" fs-2"
                      role="button"
                      onClick={() => {
                        document.querySelector(".one").remove();
                      }}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border one">
              <td className="border-end">
                {" "}
                <img
                  src={shopping2}
                  alt="shopping-2"
                  style={{ width: 100, height: 100 }}
                />{" "}
                <span className="text-capitalize mt-5">air jordan one</span>
              </td>
              <td className="border-end">225$</td>
              <td className="border-end quantity">
                <div className="row align-items-center justify-content-center">
                  {" "}
                  <div
                    className="col-lg-2 bg-dark p-1 rounded theBtn"
                    onClick={minusOne}
                  >
                    {" "}
                    <span className="text-white fs-5" role="button">-</span>
                  </div>
                  <div className="col-lg-5 bg-primary rounded theBtn">
                    {" "}
                    <span className="text-white fs-4">{o}</span>
                  </div>
                  <div
                    className="col-lg-2 bg-warning p-1 rounded"
                    onClick={plusOne}
                  >
                    {" "}
                    <span className="text-white fs-5" role="button">+</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="row">
                  {" "}
                  <div className="col">
                    {" "}
                    <b>{OP}$</b>
                  </div>
                  <div className="col">
                    {" "}
                    <AiOutlineCloseCircle
                      className=" fs-2"
                      role="button"
                      onClick={() => {
                        document.querySelector(".one").remove();
                      }}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border one">
              <td className="border-end">
                {" "}
                <img
                  src={shopping3}
                  alt="shopping-3"
                  style={{ width: 100, height: 100 }}
                />{" "}
                <span className="text-capitalize mt-5">air jordan one</span>
              </td>
              <td className="border-end">315$</td>
              <td className="border-end quantity">
                <div className="row align-items-center justify-content-center">
                  {" "}
                  <div
                    className="col-lg-2 bg-dark p-1 rounded theBtn"
                    onClick={minusTwo}
                  >
                    {" "}
                    <span className="text-white fs-5" role="button">-</span>
                  </div>
                  <div className="col-lg-5 bg-primary rounded theBtn">
                    {" "}
                    <span className="text-white fs-4">{x}</span>
                  </div>
                  <div
                    className="col-lg-2 bg-warning p-1 rounded"
                    onClick={plusTwo}
                  >
                    {" "}
                    <span className="text-white fs-5" role="button">+</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="row">
                  {" "}
                  <div className="col">
                    {" "}
                    <b>{XY}$</b>
                  </div>
                  <div className="col">
                    {" "}
                    <AiOutlineCloseCircle
                      className=" fs-2"
                      role="button"
                      onClick={() => {
                        document.querySelector(".one").remove();
                      }}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="text-end" colspan="4">
                <div className="button">
                  <div className="link-1 text-end">
                    <div className="text-capitalize ps-3 fs-4 my-3">
                      total price :{" "}
                      <span className="d-inline-block ms-4">
                        <b>{MN + OP + XY}$</b>
                      </span>
                    </div>
                    <Link
                      to="/checkout"
                      className="btn bg-warning text-uppercase"
                    >
                      process to checkout
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
        <Partner />
      </div>
    </section>
  );
};

export default ShoppingCart;
