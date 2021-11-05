import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/blog.css";
import home1 from "../images/post/home-1.jpg";
import home2 from "../images/post/home-2.jpg";
import home3 from "../images/post/home-3.jpg";
import home4 from "../images/post/home-4.jpg";
import home5 from "../images/post/home-5.jpg";
import home from "../images/background/home-feature.jpg";
import {
  RiTruckFill,
  RiSecurePaymentFill,
  Ri24HoursLine,
} from "react-icons/ri";
import { GiSofa } from "react-icons/gi";

const Blog = () => {
  return (
    <Router>
      <section className="blog">
        <div className=" pt-5 text-center">
          <p className=" mb-2 text-secondary text-capitalize">
            just only december
          </p>
          <h2 className="text-uppercase mb-4">deal of the month</h2>
          <div className="line mx-auto rounded  mb-2 mb-4 position-relative "></div>
          <div className="container ">
            <div className="row">
              <div className=" col-md-12 first-img col-lg-12  col-xl-6 position-relative p-0 mb-4 ">
                <img
                  className=" w-100 position-relative"
                  src={home1}
                  alt="Home-1"
                />
                <div className="text position-absolute top-50 start-50 text-start translate-middle w-75 bg-transparent text-white ">
                  <p className="text-capitalize">
                    by <span className="text-warning">Mohamed</span> / october
                    2021
                  </p>
                  <h3 className="text-capitalize">new design with react.js</h3>
                  <p className="text-capitalize">
                    don't hear to anyone just do it and don't be afraid
                  </p>
                  <Link to="/" className="text-capitalize text-warning fs-4">
                    read more
                  </Link>
                </div>
                <div className="overlayP"></div>
              </div>
              <div className=" col-md-12  col-lg-6 col-xl-3 ">
                <div className="col mb-4 position-relative">
                  {" "}
                  <img className=" w-100  " src={home2} alt="Home-2" />
                  <div className="text position-absolute top-50 start-50 text-start translate-middle w-75 bg-transparent text-white">
                    <p className="text-capitalize ">
                      by <span className="text-warning">Mohamed</span> / october
                      2021
                    </p>
                    <p className="text-capitalize ">
                      <b>new design with react.js</b>
                    </p>
                    <p className="text-capitalize  ">
                      don't hear to anyone just do it and don't be afraid
                    </p>
                    <Link to="/" className="text-capitalize text-warning fs-5">
                      read more
                    </Link>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="col position-relative mb-4 ">
                  <img className=" w-100 " src={home3} alt="Home-3" />
                  <div className="text position-absolute top-50 start-50 text-start translate-middle w-75 bg-transparent text-white">
                    <p className="text-capitalize ">
                      by <span className="text-warning">Mohamed</span> / october
                      2021
                    </p>
                    <p className="text-capitalize ">
                      <b>new design with react.js</b>
                    </p>
                    <p className="text-capitalize  ">
                      don't hear to anyone just do it and don't be afraid
                    </p>
                    <Link to="/" className="text-capitalize text-warning fs-5">
                      read more
                    </Link>
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>{" "}
              <div className=" col-md-12  col-lg-6  col-xl-3">
                <div className="col mb-4 position-relative">
                  {" "}
                  <img className=" w-100 " src={home4} alt="Home-4" />
                  <div className="text position-absolute top-50 start-50 text-start translate-middle w-75 bg-transparent text-white">
                    <p className="text-capitalize ">
                      by <span className="text-warning">Mohamed</span> / october
                      2021
                    </p>
                    <p className="text-capitalize ">
                      <b>new design with react.js</b>
                    </p>
                    <p className="text-capitalize  ">
                      don't hear to anyone just do it and don't be afraid
                    </p>
                    <Link to="/" className="text-capitalize text-warning fs-5">
                      read more
                    </Link>
                  </div>
                  <div className="overlay"></div>
                </div>
                <div className="col position-relative mb-4 ">
                  {" "}
                  <img className=" w-100 " src={home5} alt="Home-5" />
                  <div className="text position-absolute top-50 start-50 text-start translate-middle w-75 bg-transparent text-white">
                    <p className="text-capitalize ">
                      by <span className="text-warning">Mohamed</span> / october
                      2021
                    </p>
                    <p className="text-capitalize ">
                      <b>new design with react.js</b>
                    </p>
                    <p className="text-capitalize  ">
                      don't hear to anyone just do it and don't be afraid
                    </p>
                    <Link to="/" className="text-capitalize text-warning fs-5">
                      read more
                    </Link>
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
            </div>
            <button className="mx-auto  btn mt-3 blog-button">
              view all blog
            </button>
          </div>
          <div className="visit mt-5  position-relative">
            <img className=" w-100  " src={home} alt="background" />
            <div className="text position-absolute top-50 start-50 translate-middle p-5 w-50 h-75">
              <h1 className="text-capitalize text-warning">visit our store</h1>
              <p className="text-capitalize">
                Egypt, Cairo , Tanta <br /> what'sApp : (+20 ) 111 377 2369
              </p>
              <div className="down">
                <button className="mx-auto  btn my-3 blog-button">
                  contact us
                </button>
                <br />
                <hr />
                <p className="text-capitalize pt-2">
                  <b>opening hour</b>
                </p>
                <p className="text-capitalize  ">
                  monday to friday: 07:00 aM to 20:00 pM <br />
                  saturday to sunday: 08:00 aM to 18:00 pM
                </p>
              </div>
            </div>
          </div>
          <div className="info pt-5">
            <div className="container ">
              <div className="row ">
                <div className="col-md-6 col-xl-3">
                  {" "}
                  <div>
                    {" "}
                    <RiTruckFill className="fs-1 font-awesome mt-5 mb-3" />
                  </div>
                  <h3 className="text-uppercase text-warning m-0 p-0">
                    free shipping
                  </h3>
                  <h5 className="text-uppercase ">on order over $199</h5>
                  <p className="text-capitalize  text-secondary pb-5 ">
                    want to track a package? Find <br />
                    tracking information and order <br />
                    details from Your Orders.
                  </p>
                </div>
                <div className="col-md-6 col-xl-3">
                  {" "}
                  <div>
                    {" "}
                    <GiSofa className="fs-1 font-awesome mt-5 mb-3" />
                  </div>
                  <h3 className="text-uppercase text-warning m-0 p-0">
                    everything home
                  </h3>
                  <h5 className="text-uppercase ">choose your item</h5>
                  <p className="text-capitalize text-secondary  pb-5 ">
                    shop zillions of finds, with new <br />
                    arrivals added daily.
                  </p>
                </div>
                <div className="col-md-6 col-xl-3">
                  {" "}
                  <div>
                    {" "}
                    <RiSecurePaymentFill className="fs-1 font-awesome mt-5 mb-3" />
                  </div>
                  <h3 className="text-uppercase text-warning m-0 p-0">
                    secure payment
                  </h3>
                  <h5 className="text-uppercase ">information security</h5>
                  <p className="text-capitalize text-secondary  pb-5 ">
                    use the shop card for exclusive <br />
                    savings and financing options.
                  </p>
                </div>
                <div className="col-md-6 col-xl-3">
                  {" "}
                  <div>
                    {" "}
                    <Ri24HoursLine className="fs-1 font-awesome mt-5 mb-3 " />
                  </div>
                  <h3 className="text-uppercase text-warning m-0 p-0">
                    support 24/7
                  </h3>
                  <h5 className="text-uppercase ">always listen</h5>
                  <p className="text-capitalize text-secondary pb-5 ">
                    we offer a 24/7 customer hotline so <br />
                    you’re never alone if you have a<br /> question.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Router>
  );
};

export default Blog;
