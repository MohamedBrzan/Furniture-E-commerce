//  Function

// import React, { setX, useEffect } from "react";
// import "./slider.css";
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
// import img1 from "../images/slide/img-1.jpg";
// import img2 from "../images/slide/img-2.jpg";
// import img3 from "../images/slide/img-3.jpg";
// import img4 from "../images/slide/img-4.jpg";
// import img5 from "../images/slide/img-5.jpg";

// function Slider() {
//   const images = [
//     <img src={img1} alt="1" />,
//     <img src={img2} alt="2" />,
//     <img src={img3} alt="3" />,
//     <img src={img4} alt="4" />,
//     <img src={img5} alt="5" />,
//     <img src={img6} alt="6" />,
//   ];
//   const [x, SetX] = setX(0);
//   const left = () => {
//     x === 0 ? SetX(x - 100 * (images.length - 1)) : SetX(x + 100);
//     console.log(x);
//   };
//   const right = () => {
//     x === -100 * (images.length - 1) ? SetX(0) : SetX(x - 100);
//     console.log(x);
//   };

//   useEffect(() => {
//     setInterval(() => {
//       return document.querySelector(".right").click();
//     }, 2000);
//   });

//   return (
//     <div className="slider">
//       {images.map((item, index) => {
//         return (
//           <div
//             className="slide"
//             key={index}
//             style={{ transform: `translateX(${x}%) ` }}
//           >
//             {item}
//           </div>
//         );
//       })}
//       <button className="left" onClick={left}>
//         {" "}
//         <FaChevronLeft />
//       </button>
//       <button className="right" onClick={right}>
//         {" "}
//         <FaChevronRight />
//       </button>
//     </div>
//   );
// }

// export default Slider;

//  Class

import React, { Component } from "react";
import "../css/slider.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import img1 from "../images/slide/img-1.jpg";
import img2 from "../images/slide/img-2.jpg";
import img3 from "../images/slide/img-3.jpg";
import img4 from "../images/slide/img-4.jpg";
import img5 from "../images/slide/img-5.jpg";

class HomeSlider extends React.Component {
  state = {
    images: [
      <img src={img1} alt="1" />,
      <img src={img2} alt="2" />,
      <img src={img3} alt="3" />,
      <img src={img4} alt="4" />,
      <img src={img5} alt="5" />,
    ],
    x: 0,
  };

  left = () => {
    if (this.state.x === 0) {
      this.setState({ x: -100 * (this.state.images.length - 1) });
    } else {
      const x = x + 100;
      this.setState({ x });
    }
  };

  right = () => {
    if (this.state.x === -100 * (this.state.images.length - 1)) {
      this.setState({ x: 0 });
    } else {
      const x = this.state.x - 100;
      this.setState({ x });
    }
  };

  componentDidMount() {
    setInterval(this.right, 7000);
  }

  render() {
    return (
      <div className="slider  d-flex">
        {this.state.images.map((item, index) => {
          return (
            <div
              className="slide"
              key={index}
              style={{ transform: `translateX(${this.state.x}%) ` }}
            >
              {item}
            </div>
          );
        })}
        <button className="left" onClick={this.left}>
          {" "}
          <FaChevronLeft />
        </button>
        <button className="right" onClick={this.right}>
          {" "}
          <FaChevronRight />
        </button>
      </div>
    );
  }
}

export default HomeSlider;
