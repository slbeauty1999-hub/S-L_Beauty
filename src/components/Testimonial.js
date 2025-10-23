import React from 'react';

function Testimonial() {
  return (
    <section className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>"Amazing service! The team at AK Beauty Salon made me look absolutely stunning for my wedding day."</p>
          <div className="client-info">
            <strong>- Sarah Johnson</strong>
          </div>
        </div>
        <div className="testimonial">
          <p>"Professional staff and excellent results. I always leave feeling beautiful and confident."</p>
          <div className="client-info">
            <strong>- Maria Rodriguez</strong>
          </div>
        </div>
        <div className="testimonial">
          <p>"The best beauty salon I've ever visited. Highly recommend their services!"</p>
          <div className="client-info">
            <strong>- Emily Chen</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial; 