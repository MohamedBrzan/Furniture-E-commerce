import React from "react";
import "../css/product.css";
import item1 from "../images/product/Item-1.jpg";
import item2 from "../images/product/Item-2.jpg";
import item3 from "../images/product/Item-3.jpg";
import item4 from "../images/product/Item-9.jpg";
import item5 from "../images/product/Item-5.jpg";
import item6 from "../images/product/Item-6.jpg";
import item7 from "../images/product/Item-7.jpg";
import item8 from "../images/product/Item-8.jpg";
import Rating from "@mui/material/Rating";

const Product = () => {
  const images = [
    <img src={item1} alt="item-1" style={({ width: 25 }, { height: 250 })} />,
    <img src={item2} alt="item-2" style={({ width: 25 }, { height: 250 })} />,
    <img src={item3} alt="item-3" style={({ width: 25 }, { height: 250 })} />,
    <img src={item4} alt="item-4" style={({ width: 25 }, { height: 250 })} />,
    <img src={item5} alt="item-5" style={({ width: 25 }, { height: 250 })} />,
    <img src={item6} alt="item-6" style={({ width: 25 }, { height: 250 })} />,
    <img src={item7} alt="item-7" style={({ width: 25 }, { height: 250 })} />,
    <img src={item8} alt="item-8" style={({ width: 25 }, { height: 250 })} />,
  ];
  return (
    <section className="product">
      <div className=" py-5 text-center ">
        <div className="container mb-5">
          <p className=" mb-2 text-secondary text-capitalize">
            choose your need item
          </p>
          <h2 className="text-uppercase mb-4">best our product</h2>
          <div className="line mx-auto rounded  mb-2 mb-4 position-relative "></div>
          <div className="row">
            {images.map((img, index) => {
              return (
                <ul className="list-unstyled rounded text-center col" key={index}>
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
          <button className="mx-auto  btn mt-3 product-button">
            view all products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
