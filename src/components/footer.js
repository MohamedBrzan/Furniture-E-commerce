import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../images/logo.png";
import Paypal from "../images/payment/1.png";
import Visa from "../images/payment/2.png";
import Mastercard from "../images/payment/3.png";
import "../css/footer.css";

const footer = () => {
  return (
    <Router>
      <footer className="footer pt-5 text-center">
        <div className="container">
          <div className="row ">
            <div className=" col-xl-6 text-start">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <p className="text-capitalize text-secondary">
                furniture is a global shop destination for 20-somethings. We
                sell cutting-edge fashion and offer a wide variety of
                fashion-related content, making Furniture Store the hub of a
                thriving fashion community.
              </p>
              <h5 className="text-capitalize">contact info</h5>
              <p className="text-capitalize">
                Egypt , Cairo , Tanta <br /> what'sApp : (+20) 111 377 2369
              </p>
              <div className="links">
                <i class="fab fa-github p-1 fs-4 link " role="button"></i>
                <i class="fab fa-facebook p-1 fs-4  link " role="button"></i>
                <i class="fab fa-behance p-1 fs-4 link  " role="button"></i>
                <i class="fab fa-instagram p-1 fs-4  link " role="button"></i>
              </div>
            </div>
            <div className=" col-md-4 col-xl-2 text-start">
              <p className=" mb-2  text-uppercase fs-5">
                <b> working hour</b>
              </p>
              <div className="footer-line me-auto rounded  position-relative "></div>
              <p className="text-capitalize pt-3">
                Monday - Friday
                <br /> 08:00 am - 08:30 pm <br />
                ==== <br />
                Satuday - Sunday
                <br /> 10:00 am - 4:30 pm
              </p>
            </div>
            <div className="col-md-4 col-xl-2 text-start">
              <p className=" mb-2  text-uppercase fs-5">
                <b> our brand</b>
              </p>
              <div className="footer-line me-auto rounded   position-relative "></div>
              <ul className=" list-unstyled text-uppercase pt-3">
                <li className="  pb-2 d-block  d-block " role="button">
                  dkny
                </li>
                <li className="  pb-2 d-block   " role="button">
                  gucci
                </li>
                <li className="   pb-2 d-block   " role="button">
                  banana & dolce
                </li>
                <li className="   pb-2 d-block   " role="button">
                  hermer
                </li>
                <li className=" " role="button">
                  chanel
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-xl-2 text-start">
              <p className=" mb-2  text-uppercase fs-5">
                <b> your account</b>
              </p>
              <div className="footer-line me-auto rounded   position-relative "></div>
              <ul className=" list-unstyled text-uppercase pt-3">
                <li className="  pb-2 d-block  " role="button">
                  your account
                </li>
                <li className="  pb-2 d-block   " role="button">
                  newsletter
                </li>
                <li className="   pb-2 d-block   " role="button">
                  information
                </li>
                <li className="   pb-2 d-block   " role="button">
                  payment method
                </li>
                <li className=" " role="button">
                  your wishlist
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-links mt-5 p-2 bg-dark">
          <div className="container">
            {" "}
            <div className="row">
              <div className=" text-start col-4 col-md-6 ">
                <Link to="/" className="myLink text-capitalize text-white">
                  m.mahmoud
                </Link>
              </div>
              <div className="payment text-end col-8 col-md-6  ">
                <img src={Paypal} className="pe-2" />
                <img src={Visa} className="pe-2" />
                <img src={Mastercard} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default footer;
