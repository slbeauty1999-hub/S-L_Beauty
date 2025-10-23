import React from 'react';
import { Link } from 'react-router-dom';
import discount25off from '../img/25off.png';

function DiscountSection() {
  return (
    <section className="DiscountSection">
      <div className="img">
        <img src={discount25off} alt="25% off" />
      </div>

      <div className="textinfo">
        <h2>Book Your Appointment Now And Get 25% Off</h2>
        <p>Awesome Monsoon Sale - 25% Off on All Professional Make Up only 5$</p>
      </div>

      <Link to="/contact">BOOK AN APPOINTMENT</Link>
    </section>
  );
}

export default DiscountSection;