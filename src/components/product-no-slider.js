import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "../css/product-no-slider.css";
import hero from "../images/hero/bread-1.jpg";
import item1 from "../images/product/Item-1.jpg";
import item2 from "../images/product/Item-2.jpg";
import item3 from "../images/product/Item-3.jpg";
import item4 from "../images/product/Item-9.jpg";
import item5 from "../images/product/Item-5.jpg";
import item6 from "../images/product/Item-6.jpg";
import item7 from "../images/product/Item-7.jpg";
import item8 from "../images/product/Item-8.jpg";
import { BiChevronRight } from "react-icons/bi";

const ProductNoSlider = () => {
  const images = [
    <img src={item1} alt="item-1" style={({ width: 25 }, { height: 250 })} />,
    <img src={item2} alt="item-2" style={({ width: 25 }, { height: 250 })} />,
    <img src={item3} alt="item-3" style={({ width: 25 }, { height: 250 })} />,
    <img src={item1} alt="item-1" style={({ width: 25 }, { height: 250 })} />,
    <img src={item1} alt="item-1" style={({ width: 25 }, { height: 250 })} />,
    <img src={item2} alt="item-2" style={({ width: 25 }, { height: 250 })} />,
    <img src={item4} alt="item-4" style={({ width: 25 }, { height: 250 })} />,
    <img src={item5} alt="item-5" style={({ width: 25 }, { height: 250 })} />,
    <img src={item3} alt="item-3" style={({ width: 25 }, { height: 250 })} />,
    <img src={item3} alt="item-3" style={({ width: 25 }, { height: 250 })} />,
    <img src={item1} alt="item-1" style={({ width: 25 }, { height: 250 })} />,
    <img src={item6} alt="item-6" style={({ width: 25 }, { height: 250 })} />,
    <img src={item7} alt="item-7" style={({ width: 25 }, { height: 250 })} />,
    <img src={item3} alt="item-3" style={({ width: 25 }, { height: 250 })} />,
    <img src={item3} alt="item-3" style={({ width: 25 }, { height: 250 })} />,
    <img src={item2} alt="item-2" style={({ width: 25 }, { height: 250 })} />,
    <img src={item8} alt="item-8" style={({ width: 25 }, { height: 250 })} />,
    <img src={item4} alt="item-4" style={({ width: 25 }, { height: 250 })} />,
    <img src={item1} alt="item-1" style={({ width: 25 }, { height: 250 })} />,
    <img src={item2} alt="item-2" style={({ width: 25 }, { height: 250 })} />,
    <img src={item2} alt="item-2" style={({ width: 25 }, { height: 250 })} />,
    <img src={item3} alt="item-3" style={({ width: 25 }, { height: 250 })} />,
    <img src={item4} alt="item-4" style={({ width: 25 }, { height: 250 })} />,
    <img src={item4} alt="item-4" style={({ width: 25 }, { height: 250 })} />,
  ];
  const show = () => {
    document.querySelector(".burger-menu").classList.toggle("show");
    document.querySelector(".filters").classList.toggle("smooth");
  };

  return (
    <section className="product-no-slider">
      <div className="top-sec text-center pt-5">
        <h3 className="text-uppercase fs-1 w-25">product page </h3>{" "}
        <div className="text-capitalize  w-25">
          {" "}
          <Link to="/" className="text-dark">
            home{" "}
          </Link>
          <BiChevronRight />
          <span className="text-capitalize span">product no slider</span>
        </div>
      </div>
      <div className="container mt-5">
        {" "}
        <span onClick={show} role="button">
          {" "}
          <span className="burger-menu mb-2 d-inline-block position-relative"></span>{" "}
        </span>
        <span className="text-capitalize h3 col">filter product</span>
        <div className="row filters ">
          <div className="col-12 col-md-3">
            <div className="text-capitalize title mb-3">
              <b>sort categories by</b>
            </div>
            <p className="text-capitalize" role="button">
              all
            </p>
            <p className="text-capitalize" role="button">
              men
            </p>
            <p className="text-capitalize" role="button">
              woman
            </p>
            <p className="text-capitalize" role="button">
              suite & jean
            </p>
            <p className="text-capitalize" role="button">
              accessories
            </p>
            <p className="text-capitalize" role="button">
              kids
            </p>
            <p className="text-capitalize" role="button">
              handmade
            </p>
          </div>
          <div className="col-12 col-md-3">
            <div className="text-capitalize title mb-3">
              <b>sort product by</b>
            </div>
            <p className="text-capitalize" role="button">
              default sorting
            </p>
            <p className="text-capitalize" role="button">
              popularity
            </p>
            <p className="text-capitalize" role="button">
              average rating
            </p>
            <p className="text-capitalize" role="button">
              newness
            </p>
            <p className="text-capitalize" role="button">
              price: low to high
            </p>
            <p className="text-capitalize" role="button">
              price: high to low
            </p>
          </div>
          <div className="col-12 col-md-3">
            <div className="text-capitalize title mb-3">
              <b>filter by price</b>
            </div>
            <p className="text-capitalize" role="button">
              all
            </p>
            <p role="button">$10.00 - $110.00</p>
            <p role="button">$110.00 - $210.00</p>
            <p role="button">$210.00 - $310.00</p>
            <p className="text-capitalize" role="button">
              price: low to high
            </p>
            <p role="button">$310.00 +</p>
          </div>
          <div className="col-12 col-md-3">
            <div className="text-capitalize title mb-3">
              <b>filter by color</b>
            </div>
            <ul className="list-unstyled ul-color">
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
              <br />
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
              <br />
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <div className="row mt-5">
        {images.map((img, index) => {
          return (
            <ul className=" list-unstyled rounded text-center col" key={index}>
              <li> {img}</li>
              <li className="my-3 d-block">
                <Rating defaultValue={2} size="small" />
              </li>
              <li className="text-uppercase m-0 d-block">
                vedbo version 2022{" "}
              </li>
              <li className="text-capitalize m-0 text-secondary  d-block">
                armchair{" "}
              </li>
              <li className="fs-4   ">
                <del className=" text-secondary fs-5 m-0">350$</del>{" "}
                {Math.ceil(Math.random() * 100 + 150) + "$"}
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default ProductNoSlider;
