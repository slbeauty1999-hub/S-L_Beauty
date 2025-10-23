import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Import Components
// Assuming these are styled internally or via Home.css
import ServiceBox from '../components/ServiceBox';
// We will integrate DiscountSection and Testimonial content directly for full control
// If you prefer them as separate components, you'd define their JSX here.

// Import Images - Adjusted to match the visual
import heroMainBg from '../img/hero-main-bg.png'; // New hero background image
// import heroModel from '../img/hero-model.png';   // Cut-out model for the hero section
// import decorativeBgSvg from '../img/background180.svg'; // Existing decorative SVG
import welcomeModel1 from '../img/welcome-model1.png'; // Specific models for welcome section
import welcomeModel2 from '../img/welcome-model2.png';
import welcomeModel3 from '../img/welcome-model3.png';
import welcomeModel4 from '../img/welcome-model4.png';

import discount25off from '../img/25off.png'; // Assuming this image is still used for 25% off

import bestBrindalOffer1 from '../img/bestbrindalOffer11.png'; // Existing bridal images
import bestBrindalOffer2 from '../img/bestbrindalOffer22.png';
import bestBrindalOffer3 from '../img/bestbrindalOffer33.jpg';

import testimonialPerson1 from '../img/testimonialPerson1.png'; // Specific testimonial avatars
import testimonialPerson2 from '../img/testimonialPerson2.png';
import testimonialPerson3 from '../img/testimonialPerson3.png';
import '../css/Home.css'; // Assuming specific styles for Home page

// Helper for image preloading
const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
};

function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const bridalOfferSlides = [
    bestBrindalOffer1,
    bestBrindalOffer2,
    bestBrindalOffer3,
  ];

  // Preload images for a smoother experience
  useEffect(() => {
    const imagesToPreload = [
      heroMainBg,
      welcomeModel1, welcomeModel2, welcomeModel3, welcomeModel4,
      discount25off,
      ...bridalOfferSlides,
      testimonialPerson1, testimonialPerson2, testimonialPerson3
    ];
    Promise.all(imagesToPreload.map(preloadImage))
      .then(() => console.log('All essential images preloaded'))
      .catch((error) => console.error('Failed to preload images:', error));
  }, [bridalOfferSlides]); // Dependency array should include all dynamic images

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === bridalOfferSlides.length - 1 ? 0 : prevIndex + 1
    );
  }, [bridalOfferSlides.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? bridalOfferSlides.length - 1 : prevIndex - 1
    );
  }, [bridalOfferSlides.length]);

  // Auto-advance slider
  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 6000); // Slower advance for elegance
    return () => clearInterval(slideInterval);
  }, [goToNextSlide]);


  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-main-background" style={{ backgroundImage: `url(${heroMainBg})` }}></div>
        <div className="hero-content">
          <div className="location-tag">Toronto, Canada</div>
          <h1 className="main-heading">S & L Beauty</h1>
          <p className="description-text">
            Discover your perfect look with S & L Beauty Salon. Our expert stylists
            and personalized services are designed to bring out your natural beauty.
          </p>
          <div className="button-group">
            {/* <Link to="/services" className="button primary-button">Get Gorgeous</Link> */}
            <Link to="/contact" className="button secondary-button">Contact Now</Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-info">
          <div className="sub-heading">Welcome To</div>
          <h2 className="section-title">My Beauty Studio</h2>
          <p className="description-text">
            At My Beauty Studio, we believe in enhancing your natural allure.
            Our dedicated team provides a range of premium beauty services,
            tailored to meet your individual needs and preferences, ensuring
            every visit leaves you feeling refreshed and confident.
          </p>
          {/* <Link to="/about" className="button primary-button">Know More</Link> */}
        </div>
        <div className="gallery-grid">
          <img src={welcomeModel1} alt="Woman with perfect hairstyle" className="gallery-item" />
          <img src={welcomeModel2} alt="Woman receiving facial treatment" className="gallery-item" />
          <img src={welcomeModel3} alt="Woman with elegant evening makeup" className="gallery-item" />
          <img src={welcomeModel4} alt="Woman with radiant skin" className="gallery-item" />
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview-section">
        <h2 className="section-title">Services For Every Occasion</h2>
        <p className="section-description">
          Explore our comprehensive range of services, perfectly curated for
          special occasions like weddings, parties, photoshoots, and everyday
          glamour.
        </p>

        <div className="services-grid">
          <ServiceBox
            title="Weddings Makeup"
            description="Our bridal makeup artists create stunning looks that last all day, ensuring you glow on your special day."
          />
          <ServiceBox
            title="Party Makeup"
            description="From subtle elegance to bold statements, we craft party makeup that perfectly complements your style and event."
          />
          <ServiceBox
            title="Fashion Makeup"
            description="Stay on-trend with our fashion-forward makeup services, ideal for professional shoots and avant-garde events."
          />
          {/* <ServiceBox
            title="Photo Makeup"
            description="Achieve camera-ready perfection with makeup designed to look flawless under any lighting condition."
          /> */}
        </div>
      </section>

      {/* Discount Callout (Integrated with other content for visual) */}
      <div className="discount-callout-section">
        <div className="discount-image-wrapper">
          <img src={discount25off} alt="25% off promotional banner" className="discount-image" />
        </div>
        <div className="discount-callout-content">
          <h2 className="callout-title">Book Your Appointment Now</h2>
          <p className="callout-description">
            And Get 25% Off on All Professional Make Up. Awesome Monsoon Sale!
          </p>
          <Link to="/contact" className="button primary-button">BOOK AN APPOINTMENT</Link>
        </div>
      </div>

      {/* Priced Solutions Intro */}
      <div className="callout-banner">
        <h2 className="banner-title">Priced Beauty Solutions</h2>
        <p className="banner-description">
          Browse our detailed menu of beauty services, offering transparent
          pricing for exceptional quality and transformative results.
        </p>
      </div>

      {/* Beauty Solutions Section */}
      {/* <section className="beauty-solutions-section">
        <BeautySolution
          title="Hair Cuts"
          services={[
            { name: "Women's Haircut", price: "$95" },
            { name: "Teen's Haircut", price: "$40+" },
            { name: "Stylish Haircut", price: "$55" },
            { name: "Children's Haircut", price: "$40+" }
          ]}
        />
        <BeautySolution
          title="Make Up"
          services={[
            { name: "Bridal Makeup", price: "$150" },
            { name: "Party Makeup", price: "$75" },
            { name: "Natural Look", price: "$60" },
            { name: "Photoshoot Makeup", price: "$90" }
          ]}
        />
        <BeautySolution
          title="Hair Color"
          services={[
            { name: "Full Color", price: "$120" },
            { name: "Highlights", price: "$90+" },
            { name: "Balayage", price: "$150+" },
            { name: "Root Touch Up", price: "$60" }
          ]}
        />
        <BeautySolution
          title="Skin Care"
          services={[
            { name: "Facial", price: "$80" },
            { name: "Chemical Peel", price: "$120" },
            { name: "Microdermabrasion", price: "$100" },
            { name: "LED Therapy", price: "$75" }
          ]}
        />
      </section> */}

      {/* Bridal Offer Slider Section */}
      <section className="bridal-offer-slider-section">

        <div className="slider-text-content">
          <h2 className="slider-heading">The Best Bridal Makeup Offer</h2>
          <p className="slider-description">
            We provide an exclusive bridal package, meticulously designed to cover
            every beauty need for your wedding journey, from pre-wedding shoots
            to the grand day itself.
          </p>

          <div className="service-details-list">
            <div className="service-detail-item">
              <div className="item-heading">Pre-Wedding Photo shoot</div>
              <p className="item-description">
                Expert makeup and styling for your pre-wedding photoshoot, ensuring
                you look flawless and radiant in every shot.
              </p>
            </div>
            <div className="service-detail-item">
              <div className="item-heading">The Engagement Day</div>
              <p className="des">Glamorous and elegant makeup artistry for your engagement ceremony,
                making you feel confident and beautiful.</p>
            </div>
            <div className="service-detail-item">
              <div className="item-heading">The Grand Wedding Day</div>
              <p className="des">Comprehensive bridal makeup package for your wedding day,
                including touch-ups and personalized styling.</p>
            </div>
          </div>
        </div>
        <div className="image-slider-container">
          {bridalOfferSlides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Bridal offer ${index + 1}`}
              className={`slider-image ${index === currentSlideIndex ? 'active' : ''}`}
            />
          ))}

          <button onClick={goToPrevSlide} className="slider-nav-button prev-button" aria-label="Previous slide">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={goToNextSlide} className="slider-nav-button next-button" aria-label="Next slide">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* Testimonials Section (integrated directly for full control over visual) */}
      <section className="testimonial-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-description">
          Hear from our happy clients about their transformative experiences at S & L Beauty Salon.
        </p>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src={testimonialPerson1} alt="Client Name" className="testimonial-avatar" />
            <p className="testimonial-quote">
              "S & L Beauty Salon transformed my look for my wedding day! The makeup was flawless,
              and I felt absolutely beautiful. Highly recommend their bridal package!"
            </p>
            <span className="testimonial-author">Sarah L.</span>
            <div className="testimonial-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={testimonialPerson2} alt="Client Name" className="testimonial-avatar" />
            <p className="testimonial-quote">
              "I've been coming here for years for my haircuts and color. The stylists are
              incredibly talented, always listening to what I want and delivering amazing results."
            </p>
            <span className="testimonial-author">Jessica H.</span>
            <div className="testimonial-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>

          <div className="testimonial-card">
            <img src={testimonialPerson3} alt="Client Name" className="testimonial-avatar" />
            <p className="testimonial-quote">
              "The facial treatments are divine! My skin feels incredibly smooth and radiant
              after every visit. It's my go-to place for pampering and self-care."
            </p>
            <span className="testimonial-author">Maria K.</span>
            <div className="testimonial-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;