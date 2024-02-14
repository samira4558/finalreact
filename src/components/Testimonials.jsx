import React from "react";
import star from '../assets/icons/star.png'
import photo1 from '../assets/images/photo1.jpg'
import photo2 from '../assets/images/photo2.jpg'
import photo3 from '../assets/images/photo3.jpg'


const Testimonials = (props) => {
  return (
    <div className="testimonial">
      <p className="title">Testimonials</p>
      <div className="ratings-container">

      <div className="ratings">
        <p className="rating">5/5<img className="star" src={star} alt=""/></p>
        <div className="customer-photo-row">
          <img src={photo1} alt=""/>
          <p className="customer-name">Sara</p>
        </div>
        <p className="review-text">
        Every bite was a symphony of fresh, vibrant flavors
        </p>
      </div>
      <div className="ratings">
        <p className="rating">4/5<img className="star" src={star} alt=""/></p>
        <div className="customer-photo-row">
          <img src={photo2} alt=""/>
          <p className="customer-name">Sam</p>
        </div>
        <p className="review-text">
        Finding a restaurant that satisfies everyone in the family can be tricky, but Little Lemon always hits the spot.
        </p>
      </div>
      <div className="ratings">
        <p className="rating">5/5<img className="star" src={star} alt=""/></p>
        <div className="customer-photo-row">
          <img src={photo3} alt=""/>
          <p className="customer-name">Jon</p>
        </div>
        <p className="review-text">
        If you're looking for an authentic taste of the Mediterranean without leaving town, Little Lemon is a must-visit!
        </p>
      </div>

      </div>
      </div>

  )
};

export default Testimonials;