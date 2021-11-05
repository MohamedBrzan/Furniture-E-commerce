import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "../css/product-list.css";
import hero from "../images/hero/bread-1.jpg";
import img2 from "../images/collection/home-2-3.jpg";
import item1 from "../images/product/Item-1.jpg";
import item2 from "../images/product/Item-2.jpg";
import item3 from "../images/product/Item-3.jpg";
import item4 from "../images/product/Item-9.jpg";
import item5 from "../images/product/Item-5.jpg";
import item6 from "../images/product/Item-6.jpg";
import item7 from "../images/product/Item-7.jpg";
import item8 from "../images/product/Item-8.jpg";
import { BiChevronRight } from "react-icons/bi";

const ProductList = () => {
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

  const [x, setX] = useState(0);
  const value = (props) => {
    setX(props.value);
    console.log(props.value);
    document.querySelector(".divRange").textContent =
      document.querySelector(".range").value + "$";
  };

  return (
    <section className="product-list">
      <div className="top-sec text-center pt-5">
        <h3 className="text-uppercase fs-1 w-50">product page </h3>{" "}
        <div className="text-capitalize  w-50">
          {" "}
          <Link to="/" className="text-dark">
            home{" "}
          </Link>
          <BiChevronRight />
          <span className="text-capitalize span">product list</span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-12 col-md-2">
            <div>
              {" "}
              <div className="fs-5 text-capitalize">
                <b>categories</b>
              </div>
              <div className="check ms-5 text-capitalize mb-3">tables</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">sofa</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">chair</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">lamb</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">polos</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">pants</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">short</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">t-shirt</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">running</div>
              <br />
              <div className="check ms-5 text-capitalize ">other</div>
            </div>
            <hr className="w-50" />
            <div className="position-relative">
              {" "}
              <div className="fs-5 text-capitalize py-3">
                <b>filter price</b>
              </div>
              <input
                className="range"
                type="range"
                min="5"
                max="250"
                value={x}
                onChange={value}
              />
              <div className="divRange position-absolute">
                5<span>$</span>
              </div>
              <br />
              <br />
              <Link
                to="/product-list"
                className="text-capitalize btn bg-dark link-light my-3 "
              >
                apply
              </Link>
            </div>
            <hr className="w-50" />
            <div>
              {" "}
              <div className="fs-5 text-uppercase py-3">
                <b>brands</b>
              </div>
              <div className="check ms-5 text-capitalize mb-3">nike (521)</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">adidas (76)</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">gucci (52)</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">dior (105)</div>
              <br />
              <div className="check ms-5 text-capitalize mb-3">B&G (21)</div>
              <br />
              <div className="check ms-5 text-capitalize">
                louis vuiton (108)
              </div>
            </div>
            <hr className="w-50" />
            <div>
              <div className="fs-5 text-uppercase py-3">
                <b>ads</b>
              </div>
              <img src={img2} className="img-thumbnail w-50" />
            </div>
          </div>
          <div className="col-12 col-md-10">
            {" "}
            <div className="row">
              {images.map((img, index) => {
                return (
                  <ul
                    className=" list-unstyled rounded text-center col"
                    key={index}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
