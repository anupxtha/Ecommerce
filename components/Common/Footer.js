import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="innerFooter">
        <div className="logo">
          <div className="innerLogo">
            <img src="/images/2BGamer.png" alt="Logo" />
          </div>
          <div className="logoPara">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              metus sapien, mollis sed urna eu, lacinia vestibulum nisi.
            </p>
          </div>
        </div>
        <div className="service">
          <div className="innerService">
            <p>CUSTOMER SERVICES</p>
            <p>Contact Us</p>
            <p>Shipping And Delivery</p>
            <p>FAQs</p>
            <p>About Us</p>
            <p>Help Center</p>
          </div>
        </div>
        <div className="contact">
          <div className="innerContact">
            <p>CONTACT DETAILS</p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Location
            </p>
            <p>
              <i className="fa-regular fa-envelope"></i> Email
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> Number
            </p>
            <p>FOLLOW US ON</p>
            <div className="icons">
              <i className="fa-brands fa-facebook-square"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
