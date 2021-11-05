import React from "react";
import { Link } from "react-router-dom";
import "../css/aside-nav.css";

import { ResSearch } from "./forms.js";
import { GrClose } from "react-icons/gr";
import { CgChevronDown } from "react-icons/cg";

class AsideNav extends React.Component {
  show = (e) => {
    e.target.nextElementSibling.classList.toggle("d-none");

    if (e.target.childNodes[1].style.transform !== "rotate(180deg)") {
      e.target.childNodes[1].style.transition = "0.3s";
      e.target.childNodes[1].style.transform = "rotate(180deg)";
    } else {
      e.target.childNodes[1].style.transition = "0.3s";
      e.target.childNodes[1].style.transform = "rotate(0deg)";
    }
  };

  toggle = (e) => {
    document.querySelector(".float-row").classList.toggle("d-none");
  };

  hide = () => {
    document.querySelector(".float-row").classList.add("d-none");
  };

  render() {
    return (
      <div className="aside-nav">
        <div className="row float-row p-5 bg-white position-fixed d-none">
          <GrClose
            role="button"
            className="position-absolute close  w-100 fs-3 "
            onClick={this.hide}
          />
          <ResSearch />
          <ul className="list-unstyled text-start">
            <li>
              {" "}
              <Link
                className="btn text-uppercase border border-5 mb-3"
                to="/"
                onClick={this.show}
              >
                home <CgChevronDown className="chevron" />
              </Link>
              <ul className="list-unstyled d-none bg-warning py-2 rounded drop-menu fit-content ">
                <li>
                  {" "}
                  <Link
                    to="/"
                    className=" text-capitalize btn "
                    onClick={this.hide}
                  >
                    Home page 1
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/"
                    className=" text-capitalize btn "
                    onClick={this.hide}
                  >
                    Home page 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="text-uppercase ">
              {" "}
              <Link
                to="/"
                className=" text-capitalize btn border border-5   mb-3"
                onClick={this.show}
              >
                departments
                <CgChevronDown className="chevron " />
              </Link>{" "}
              <div className="drop-menu mt-3 d-none bg-warning p-3">
                {" "}
                <div className="col ">
                  <div
                    className="text-uppercase head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      <b>new release</b>
                    </Link>
                  </div>
                  <div
                    className="text-uppercase head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      <b>features store</b>
                    </Link>
                  </div>
                  <div
                    className="text-uppercase head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      <b>best sellers</b>
                    </Link>
                  </div>
                  <div
                    className="text-uppercase head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      <b>now trending</b>
                    </Link>
                  </div>
                  <div
                    className="text-uppercase head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      <b>summer essentials</b>
                    </Link>
                  </div>
                  <div
                    className="text-uppercase head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      <b>mother's day</b>
                    </Link>
                  </div>
                  <div
                    className="text-uppercase head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      <b>for kids</b>
                    </Link>
                  </div>
                </div>
                <div className="col   ">
                  <div className="text-uppercase  text-white text-start ">
                    <b>lighting</b>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      all shoes
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      running
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      training & gym
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      basketball
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      football
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      soccer
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      baseball
                    </Link>
                  </div>
                </div>
                <div className="col ">
                  <div className="text-uppercase text-white  text-start ">
                    <b>sofa & chair</b>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      compression & nike pro
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      tops & t-shirts
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      polos
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      hoodies & sweatshirts
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      jackets & vests
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      pants & tights
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      shorts
                    </Link>
                  </div>
                </div>
                <div className="col ">
                  <div className="text-uppercase text-white text-start ">
                    <b>cabinets & chests</b>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      compression & nike pro
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      tops & t-shirts
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      polos
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      hoodies & sweatshirts
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      jackets & vests
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      pants & tights
                    </Link>
                  </div>
                  <div
                    className="text-capitalize head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      shorts
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="text-uppercase text-white text-start ">
                    <b>brand</b>
                  </div>
                  <div
                    className="text-uppercase head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      nike
                    </Link>
                  </div>
                  <div
                    className="text-uppercase head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      adidas
                    </Link>
                  </div>
                  <div
                    className="text-uppercase head text-start "
                    role="button"
                  >
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      dior
                    </Link>
                  </div>
                  <div className="text-uppercase head text-start ">
                    <Link
                      className=" text-dark "
                      to="/product-list"
                      onClick={this.hide}
                    >
                      b&g
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {" "}
              <Link
                className="btn text-uppercase  border border-5  mb-3 "
                to="/room-ideas"
                onClick={this.hide}
              >
                room ideas
              </Link>
            </li>{" "}
            <li>
              {" "}
              <Link
                className=" text-capitalize btn border border-5   mb-3"
                to="/pages"
                onClick={this.show}
              >
                pages
                <CgChevronDown className="chevron" />
              </Link>
              <ul className="list-unstyled bg-warning drop-menu p-3 d-none">
                <li className="text-capitalize text-start text-white d-block product-page">
                  <b>product page</b>
                  <ul className="list-unstyled p-3">
                    <Link
                      to="/product-list"
                      className="text-capitalize text-dark head text-start d-block"
                      onClick={this.hide}
                    >
                      product list
                    </Link>
                    <Link
                      to="/product-list-no-slider"
                      className="text-capitalize text-dark head text-start d-block"
                      onClick={this.hide}
                    >
                      product list no slider
                    </Link>
                    <Link
                      to="/product-details"
                      className="text-capitalize  text-dark head text-start d-block"
                      onClick={this.hide}
                    >
                      product details
                    </Link>
                  </ul>
                </li>
                <li className="text-capitalize text-start text-white d-block other-pages">
                  <b> other pages</b>
                  <ul className="list-unstyled p-3">
                    <Link
                      to="/shopping-cart"
                      className="text-capitalize text-dark head text-start d-block"
                      onClick={this.hide}
                    >
                      shopping cart
                    </Link>
                    <Link
                      to="/not-found"
                      className="text-capitalize text-dark head text-start d-block"
                      onClick={this.hide}
                    >
                      page 404
                    </Link>
                    <Link
                      to="/checkout"
                      className="text-capitalize text-dark head text-start d-block"
                      onClick={this.hide}
                    >
                      checkout
                    </Link>
                    <Link
                      to="/compare"
                      className="text-capitalize text-dark head text-start d-block"
                      onClick={this.hide}
                    >
                      compare
                    </Link>
                    <Link
                      to="/wishlist"
                      className="text-capitalize text-dark head text-start d-block"
                      onClick={this.hide}
                    >
                      wishlist
                    </Link>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              {" "}
              <Link
                className="btn text-uppercase  border border-5   mb-3"
                to="/contact"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AsideNav;
