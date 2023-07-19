// import React from "react";
// import { Container } from "reactstrap";
// import Slider from "react-slick";

// import { sliderData } from "../../../assets/fake-data/slider";
// import "../../../styles/slider.css";

// const HeroSlider = () => {
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };
//   return (
//     <section>
//       <Container>
//         <Slider {...settings}>
//           {sliderData.map((item) => (
//             <div key={item.id}>
//               <div className="hero__content  ">
//                 <h5 className="mb-3">Easy way to make an order</h5>
//                 <h1 className="mb-4 hero__title">
//                   <span>HUNGRY?</span> Just wait <br /> food at
//                   <span> your door</span>
//                 </h1>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.,<br/>
//                    Quimagni delectus tenetur autem, sint veritatis!
//                 </p>
//                 <div className="hero__btns d-flex align-items-center gap-5 mt-4">
//                   <button className="order__btn d-flex align-items-center justify-content-between">
//                     Order now <i class="ri-arrow-right-s-line"></i>
//                   </button>
//                   <button className="all__foods-btn">
//                   See all foods<i class="ri-arrow-right-s-line"></i>
//                   </button>
//                 </div>
//                 <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
//                   <p className=" d-flex align-items-center gap-2 ">
//                     <span className="shipping__icon">
//                       <i class="ri-car-line"></i>
//                     </span>{" "}
//                     No shipping charge
//                   </p>
//                   <p className=" d-flex align-items-center gap-2 ">
//                     <span className="shipping__icon">
//                       <i class="ri-shield-check-line"></i>
//                     </span>{" "}
//                     100% secure checkout
//                   </p>
//                 </div>

//                 <div className="slider__img w-100">
//                   <img src={item.imgUrl} alt="" className="w-50" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </Container>
//     </section>
//   );
// };

// export default HeroSlider;