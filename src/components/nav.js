import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/nav.css";
import HomeSlider from "./slider";
import AsideNav from "./aside-nav";
import Categories from "./categories";
import Product from "./product";
import BackgroundImage from "./background-image";
import Deal from "./deal";
import Blog from "./blog";
import Footer from "./footer";
import ProductList from "./product-list";
import ProductNoSlider from "./product-no-slider";
import ProductDetails from "./product-details";
import ShoppingCart from "./shopping-cart";
import Checkout from "./checkout";
import Compare from "./compare";
import Wishlist from "./wishlist";
import Contact from "./contact";
import NotFound from "./not-found";
import { DropDown, Search, ResSearch, Login, Register } from "./forms.js";
import logo from "../images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { CgChevronDown } from "react-icons/cg";
import { TableFooter } from "@mui/material";

window.onscroll = () => {
  if (window.scrollY >= 300) {
    document.querySelector(".container").classList.add("scrolling");
  } else {
    document.querySelector(".container").classList.remove("scrolling");
  }
};

class Nav extends React.Component {
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
      <Router>
        <div className="myNav">
          <AsideNav />
          <div className="container">
            <div className="row py-2 align-items-center bg-warning ">
              <div className="col-lg-7  col-md-12  col-xs-12 ">
                <p className="m-0">
                  Egypt, Cairo, Tanta - Hotline & WhatsApp : (+20)111 377 2369
                </p>
                <i className="furniture-market"></i>
              </div>
              <div className="row text-center col-lg-5  col-md-12  col-xs-12">
                {" "}
                <DropDown />
                <div className="col">
                  <div>
                    <Link className="text-uppercase" to="/login-register">
                      login & regiser
                    </Link>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="row  py-3 justify-content-between align-items-center">
              <div className="logo  col-2  ">
                <Link to="/">
                  {" "}
                  <img src={logo} alt="logo" />{" "}
                </Link>
              </div>
              <ul className="list-unstyled m-0 col-md-6   text-center  ">
                <li className="  p-2  ul">
                  {" "}
                  <Link className="btn text-uppercase " to="/">
                    home
                  </Link>
                </li>
                <li className=" p-2 position-relative departments ul">
                  {" "}
                  <Link className="btn text-uppercase " to="/departments">
                    departments <CgChevronDown />
                  </Link>
                  <div className="row p-5 bg-white department-section position-absolute">
                    {" "}
                    <div className="col border-end border-1 border-dark">
                      <div className="text-uppercase head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          <b>new release</b>
                        </Link>
                      </div>
                      <div className="text-uppercase head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          <b>features store</b>
                        </Link>
                      </div>
                      <div className="text-uppercase head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          <b>best sellers</b>
                        </Link>
                      </div>
                      <div className="text-uppercase head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          <b>now trending</b>
                        </Link>
                      </div>
                      <div className="text-uppercase head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          <b>summer essentials</b>
                        </Link>
                      </div>
                      <div className="text-uppercase head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          <b>mother's day</b>
                        </Link>
                      </div>
                      <div className="text-uppercase head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          <b>for kids</b>
                        </Link>
                      </div>
                    </div>
                    <div className="col border-end border-1 border-dark">
                      <div className="text-uppercase  text-start ">
                        <b>lighting</b>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          all shoes
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          running
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          training & gym
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          basketball
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          football
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          soccer
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          baseball
                        </Link>
                      </div>
                    </div>
                    <div className="col border-end border-1 border-dark">
                      <div className="text-uppercase  text-start ">
                        <b>sofa & chair</b>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          compression & nike pro
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          tops & t-shirts
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          polos
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          hoodies & sweatshirts
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          jackets & vests
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          pants & tights
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          shorts
                        </Link>
                      </div>
                    </div>
                    <div className="col border-end border-1 border-dark">
                      <div className="text-uppercase  text-start ">
                        <b>cabinets & chests</b>
                      </div>
                      <div className="text-capitalize head text-start ">
                        {" "}
                        <Link className=" text-dark " to="/product-list">
                          compression & nike pro
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          tops & t-shirts
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          polos
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          hoodies & sweatshirts
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          jackets & vests
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          pants & tights
                        </Link>
                      </div>
                      <div className="text-capitalize head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          shorts
                        </Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="text-uppercase  text-start ">
                        <b>brand</b>
                      </div>
                      <div className="text-uppercase head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          nike
                        </Link>
                      </div>
                      <div className="text-uppercase head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          adidas
                        </Link>
                      </div>
                      <div className="text-uppercase head text-start ">
                        <Link className=" text-dark " to="/product-list">
                          dior
                        </Link>
                      </div>

                      <div className="text-uppercase head text-start ">
                        {" "}
                        <Link className=" text-dark " to="/product-list">
                          b&g
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="p-2 ul">
                  {" "}
                  <Link className="btn text-uppercase " to="/room-ideas">
                    room ideas
                  </Link>
                </li>
                <li className="p-2 ul position-relative pages">
                  {" "}
                  <Link className="btn text-uppercase " to="#">
                    pages <CgChevronDown />
                    <ul className="list-unstyled position-absolute page-drop">
                      <li className="text-capitalize head text-start d-block product-page">
                        product page
                        <ul className="list-unstyled product-drop p-3">
                          <Link
                            to="/product-list"
                            className="text-capitalize text-dark head text-start d-block"
                          >
                            product list
                          </Link>
                          <Link
                            to="/product-list-no-slider"
                            className="text-capitalize text-dark head text-start d-block"
                          >
                            product list no slider
                          </Link>
                          <Link
                            to="/product-details"
                            className="text-capitalize  text-dark head text-start d-block"
                          >
                            product details
                          </Link>
                        </ul>
                      </li>
                      <li className="text-capitalize  head text-start d-block other-pages">
                        other pages
                        <ul className="list-unstyled other p-3">
                          <Link
                            to="/shopping-cart"
                            className="text-capitalize text-dark head text-start d-block"
                          >
                            shopping cart
                          </Link>
                          <Link
                            to="/not-found"
                            className="text-capitalize text-dark head text-start d-block"
                          >
                            page 404
                          </Link>
                          <Link
                            to="/checkout"
                            className="text-capitalize text-dark head text-start d-block"
                          >
                            checkout
                          </Link>
                          <Link
                            to="/compare"
                            className="text-capitalize text-dark head text-start d-block"
                          >
                            compare
                          </Link>
                          <Link
                            to="/wishlist"
                            className="text-capitalize text-dark head text-start d-block"
                          >
                            wishlist
                          </Link>
                        </ul>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li className="   p-2 ul">
                  {" "}
                  <Link className="btn text-uppercase " to="/contact">
                    contact
                  </Link>
                </li>
              </ul>
              <Search />
              <div className="col position-relative">
                {" "}
                <AiOutlineMenu
                  className="menu  position-absolute"
                  role="button"
                  onClick={this.toggle}
                />
              </div>
            </div>
          </div>{" "}
          <Switch>
            <Route exact path="/">
              {" "}
              <HomeSlider />
              <Categories />
              <Product />
              <BackgroundImage />
              <Deal />
              <Blog />
              <Footer />
            </Route>
            <Route path="/login-register">
              <Login />
              <TableFooter />
            </Route>
            <Route path="/product-list">
              <ProductList />
              <Footer />
            </Route>
            <Route path="/product-list-no-slider">
              <ProductNoSlider />
              <Footer />
            </Route>
            <Route path="/product-details">
              <ProductDetails />
              <Footer />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart />
              <Footer />
            </Route>
            <Route path="/checkout">
              <Checkout />
              <Footer />
            </Route>
            <Route path="/compare">
              <Compare />
              <Footer />
            </Route>
            <Route path="/wishlist">
              <Wishlist />
              <Footer />
            </Route>
            <Route path="/contact">
              <Contact />
              <Footer />
            </Route>
            <Route path="/register">
              <Register />
              <Footer />
            </Route>
            <Route path="/">
              <NotFound />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Nav;
