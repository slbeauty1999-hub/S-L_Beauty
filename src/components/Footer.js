import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
      <div className="beforefooter">
        <div className="box">
          <div className="logo">S & L Beauty</div>
          <p className="para">We bring professional beauty services to the comfort of your home. From personalized skincare and hair care treatments to relaxing pampering sessions, we ensure every visit leaves you feeling confident, radiant, and rejuvenated. Your beauty, our passion!</p>
        </div>

        <div className="box">
          <div className="bf-text">Quick Links</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="bf-text">Follow Us</div>
          <div className="icons">
            {/* <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faGoogle} /></a> */}
            <a href="https://www.instagram.com/s.and.l_beauty?igsh=YTRic3c2dG5pbjFp"><FontAwesomeIcon icon={faInstagram} /></a>
            {/* <a href="#"><FontAwesomeIcon icon={faYoutube} /></a> */}
          </div>
        </div>

        <div className="box">
          <div className="bf-text">Say Hi!</div>
          <ul className="SayHi">
            <li><Link to="mailto:info@example.com">sl.beauty1999@gmail.com</Link></li>
            {/* <li><Link to="mailto:contact@example.com">contact@example.com</Link></li> */}
          </ul>

          <div className="bf-text">Call Us</div>
          <ul className="SayHi">
            <li>Phone: +1 6474094430</li>
            {/* <li>Toll Free: +1 2334325532</li> */}
          </ul>

          <div className="bf-text">Find Us</div>

          <div className="address">
            Toronto, Canada
          </div>
        </div>
      </div>

      <footer>
        <div className="fbox">Copyright &copy; {new Date().getFullYear()} S & L Beauty</div>
        <div className="fbox">Powered By S & L Beauty</div>
      </footer>
    </>
  );
}

export default Footer;