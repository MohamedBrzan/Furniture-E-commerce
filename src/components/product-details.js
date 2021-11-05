import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/product-details.css";
import Rating from "@mui/material/Rating";
import Partner from "./partner-carousel";
import hero from "../images/hero/bread-2.jpg";
import variants1 from "../images/product/variants/variant-1.jpg";
import variants2 from "../images/product/variants/variant-2.jpg";
import variants3 from "../images/product/variants/variant-3.jpg";
import variants4 from "../images/product/variants/variant-4.jpg";
import variants5 from "../images/product/variants/variant-5.jpg";
import item1 from "../images/product/Item-1.jpg";
import item2 from "../images/product/Item-2.jpg";
import item3 from "../images/product/Item-3.jpg";
import item4 from "../images/product/Item-9.jpg";
import item5 from "../images/product/Item-5.jpg";
import item6 from "../images/product/Item-6.jpg";
import item7 from "../images/product/Item-7.jpg";
import item8 from "../images/product/Item-8.jpg";

import { Quantity } from "./forms";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { BiChevronRight } from "react-icons/bi";

const ProductDetails = () => {
  const carousel = [
    <img src={item1} alt="img-7" style={({ width: 25 }, { height: 250 })} />,
    <img src={item2} alt="img-8" style={({ width: 25 }, { height: 250 })} />,
    <img src={item3} alt="img-9" style={({ width: 25 }, { height: 250 })} />,
    <img src={item4} alt="img-10" style={({ width: 25 }, { height: 250 })} />,
    <img src={item5} alt="img-11" style={({ width: 25 }, { height: 250 })} />,
    <img src={item6} alt="img-12" style={({ width: 25 }, { height: 250 })} />,
    <img src={item7} alt="img-13" style={({ width: 25 }, { height: 250 })} />,
    <img src={item8} alt="img-14" style={({ width: 25 }, { height: 250 })} />,
  ];
  const [z, setZ] = useState(0);

  const chevronRight = () => {
    if (z === 0) {
      return;
    } else {
      setZ(z + 100);
      console.log(z);
    }
  };
  const chevronLeft = () => {
    if (z <= -100 * (carousel.length - 4)) {
      return;
    } else {
      setZ(z - 100);
      console.log(z);
    }
  };

  const tabs = (e) => {
    const tab = document.querySelectorAll(".tabs .tab");
    const panel = document.querySelectorAll(".panel");
    const panels = document.querySelector(".panels");

    tab.forEach((tab) => {
      tab.classList.remove("active");
    });

    panel.forEach((panel) => {
      panel.classList.remove("active");
    });

    e.target.classList.add("active");

    panels
      .getElementsByClassName(e.target.getAttribute("data-toggle"))[0]
      .classList.add("active");
  };

  const images = [variants1, variants2, variants3, variants4, variants5];
  const [y, setY] = useState(variants1);
  const changeImages = (e) => {
    setY(e.target.src);
  };

  return (
    <section className="product-details border-bottom">
      <div className="top-sec text-center pt-5">
        <h3 className="text-uppercase fs-1 w-50">product details </h3>{" "}
        <div className="text-capitalize  w-50">
          {" "}
          <Link to="/" className="text-dark">
            home{" "}
          </Link>
          <BiChevronRight />
          <span className="text-capitalize span">product details</span>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-2 small-images">
            {images.map((img, index) => {
              return (
                <div key={index} className="box">
                  <img
                    src={img}
                    className="img-thumbnail w-50 mb-2"
                    onClick={changeImages}
                  />{" "}
                </div>
              );
            })}
          </div>
          <div className="col-5 role='button'">
            <div className="large-img">
              <img src={y} alt="img-change" className="img-thumbnail w-100" />
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col">
                <Rating defaultValue={3} size="large" />
              </div>
              <di className="text-capitalize col">(see all reviews)</di>
            </div>
            <h2 className="text-capitalize">sofa collection summer</h2>
            <p className="text-capitalize">
              men shoes table home, chair, sofa & chair
            </p>
            <div className="text-dark">
              <del className="text-secondary">330$</del> 115$
            </div>
            <p className="text-capitalize mb-3">
              stow linens and serveware in the dining room or add extra storage
              space to the entryway with this auburn cherry-finished cabinet ...
            </p>
            <p className="text-capitalize fs-4">choose your color</p>
            <hr />
            <ul className="list-unstyled ul-color">
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
              <li className="rounded-circle m-2" role="button"></li>
            </ul>
            <p className="text-capitalize fs-4">choose size & quantity</p>
            <hr /> <Quantity />
            <div className="text-capitalize">
              <b>share this : </b>{" "}
              <FaFacebook className="fs-4 me-2 text-primary" />{" "}
              <AiFillTwitterCircle className="fs-4 me-2 text-info" />{" "}
              <AiFillYoutube className="fs-4 text-danger" />
            </div>
          </div>
        </div>

        <ul className="list-unstyled tabs text-center">
          <li
            className="text-uppercase p-3 position-relative  tab active"
            role="button"
            data-toggle="overview"
            onClick={tabs}
          >
            overview
          </li>
          <li
            className="text-uppercase p-3 position-relative  tab"
            role="button"
            data-toggle="review"
            onClick={tabs}
          >
            review
          </li>
          <li
            className="text-uppercase p-3 position-relative tab"
            role="button"
            data-toggle="product-tags"
            onClick={tabs}
          >
            product tags
          </li>
          <li
            className="text-uppercase p-3 position-relative  tab"
            role="button"
            data-toggle="additional"
            onClick={tabs}
          >
            additional
          </li>
        </ul>
        <div className="panels">
          <p className="panel overview text-center active">
            Caramels tootsie roll carrot cake sugar plum. Sweet roll jelly bear
            claw liquorice. Gingerbread lollipop dragée cake. Pie topping
            jelly-o. Fruitcake dragée candy canes tootsie roll. Pastry jelly-o
            cupcake. Bonbon brownie soufflé muffin. Sweet roll soufflé oat cake
            apple pie croissant. Pie gummi bears jujubes cake lemon drops gummi
            bears croissant macaroon pie. Fruitcake tootsie roll chocolate cake
            Carrot cake cake bear claw jujubes topping cake apple pie. Jujubes
            gummi bears soufflé candy canes topping gummi bears cake soufflé
            cake. Cotton candy soufflé sugar plum pastry sweet roll..
          </p>
          <p className="panel review text-center">
            Caramels tootsie roll carrot cake sugar plum. Sweet roll jelly bear
            claw liquorice. Gingerbread lollipop dragée cake. Pie topping cake.
            Cotton candy soufflé sugar plum pastry sweet roll..
          </p>
          <p className="panel product-tags text-center">
            roll carrot cake sugar plum. Sweet roll jelly bear claw liquorice.
            Gingerbread lollipop dragée cake. Pie topping
          </p>
          <p className="panel additional text-center">
            carrot cake sugar plum. Sweet roll jelly bear claw liquorice.
            Gingerbread lollipop dragée cake. Pie topping
          </p>
        </div>
        <div className="carousel text-center">
          <p className="text-capitalize text-secondary">
            here are key products that bring fashionistas to furniture store.
          </p>
          <h2 className="text-uppercase mb-4">you might also like</h2>
          <div className="line mx-auto rounded  mb-2 mb-4 position-relative "></div>
          <div className="row flex-nowrap  position-relative">
            {carousel.map((img, index) => {
              return (
                <ul
                  className="rounded text-center col"
                  key={index}
                  style={{
                    transform: `translateX(${z}%)`,
                  }}
                >
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
          </div>{" "}
          <GoChevronLeft
            className="position-absolute top-50 start-0 p-2 bg-warning fs-1 left"
            onClick={chevronLeft}
          />{" "}
          <GoChevronRight
            className=" position-absolute top-50 end-0 p-2 bg-warning fs-1 right"
            onClick={chevronRight}
          />
        </div>
      </div>
      <Partner />
    </section>
  );
};

export default ProductDetails;
