import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/checkout.css";
import hero from "../images/hero/bread-1.jpg";
import { BiChevronRight } from "react-icons/bi";
import Partner from "./partner-carousel";
import { Billing } from "./forms";
import Paypal from "../images/payment/1.png";
import Visa from "../images/payment/2.png";
import Mastercard from "../images/payment/3.png";

const Checkout = () => {
  return (
    <section className="checkout position-relative">
      <div className="top-sec text-center pt-5">
        <h3 className="text-uppercase fs-1 w-50">checkout page</h3>{" "}
        <div className="text-capitalize  w-50">
          {" "}
          <Link to="/" className="text-dark">
            home{" "}
          </Link>
          <BiChevronRight />
          <span className="text-capitalize span">checkout page</span>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <Billing />
          </div>
          <div className="col-lg-4 ">
            <div className="bg-primary text-white  p-5 rounded h-75">
              {" "}
              <h3 className="text-uppercase pb-3 border-bottom">your order</h3>
              <div className="row">
                <div className="col text-uppercase">
                  <b>product</b>
                </div>
                <div className="col">
                  <b>total</b>
                </div>
              </div>
              <div className="row text-uppercase">
                <div className="col">haditant xl</div>
                <div className="col">300.00$</div>
              </div>
              <div className="row text-capitalize">
                <div className="col">card subtitle</div>
                <div className="col">300.00$</div>
              </div>
              <div className="row text-capitalize mb-5">
                <div className="col">order total</div>
                <div className="col">300.00$</div>
              </div>
              <h3 className="text-uppercase mb-3 pb-3 border-bottom">
                payment method
              </h3>
              <div className="py-3 border-bottom">
                {" "}
                <input id="cheque" type="radio" value="1" />
                <label for="cheque" className="text-capitalize ms-2">
                  cheque payment
                </label>
                <p className="text-capitalize">
                  please send your cheque to store name, store street, store
                  town, store state / county, store postcode.
                </p>
              </div>
              <div className="py-3 border-bottom">
                {" "}
                <input id="paypal" type="radio" value="1" />
                <label for="paypal" className="text-capitalize ms-2">
                  paypal
                </label>
                <img src={Visa} alt="visa" className="ms-3 me-1 bg-white" />
                <img src={Paypal} alt="Paypal" className="mx-1 bg-white" />
                <img
                  src={Mastercard}
                  alt="Mastercard"
                  className="mx-1 bg-white"
                />
              </div>
              <Link
                to="/place-order"
                className="btn bg-warning rounded-pill w-100 mt-4 text-uppercase"
              >
                place order
              </Link>
            </div>
            <div className="border p-3 mt-3">
              <h3 className="text-uppercase">free shipping</h3>
              <p className="text-uppercase">
                your order qualifies for free shipping . <br />{" "}
                <Link to="/register" className="text-danger">
                  signup
                </Link>{" "}
                for free shipping on every order , every time .
              </p>
            </div>
          </div>
        </div>
        <Partner />
      </div>
    </section>
  );
};

export default Checkout;
