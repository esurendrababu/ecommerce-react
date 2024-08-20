import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="index.html">
                <img
                  src="https://purepng.com/public/uploads/large/purepng.com-shopping-cartshoppingcarttrolleycarriagebuggysupermarkets-14215265323129kdoe.png"
                  alt="Footer logo"
                  className="img-fluid logo-footer"
                />
              </a>
              <div className="footer-about">
                <p id="footertext">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="useful-link">
                <h2 id="footertext1">Useful Links</h2>
                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                <ul className="use-links">
                  <li>
                    <a href="/home">
                      <i className="fa-solid fa-angles-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="/about-us">
                      <i className="fa-solid fa-angles-right"></i> About Us
                    </a>
                  </li>
                  <li>
                    <a href="/gallery">
                      <i className="fa-solid fa-angles-right"></i> Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/contact">
                      <i className="fa-solid fa-angles-right"></i> Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="social-links">
                <h2 id="footertext1">Follow Us</h2>
                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                <ul className="social-icons">
                  <li>
                    <a href="https://facebook.com">
                      <i className="fa-brands fa-facebook-f"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com">
                      <i className="fa-brands fa-instagram"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com">
                      <i className="fa-brands fa-linkedin-in"></i> Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="address">
                <h2 id="footertext1">Address</h2>
                <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
                <ul className="address-links">
                  <li className="address1">
                    <p id="footertext1">
                      <i className="fa-solid fa-location-dot"></i> Hyderabad <br /> sr nagar 500038
                    </p>
                  </li>
                  <li>
                    <a href="tel:+916281345040">
                      <i className="fa-solid fa-phone"></i> +91 6281345040
                    </a>
                  </li>
                  <li>
                    <a href="mailto:naidusurendra407@gmail.com">
                      <i className="fa-solid fa-envelope"></i> naidusurendra407@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section id="copy-right">
        <div className="copy-right-sec">
          <i className="fa-solid fa-copyright"></i>{' '}
          <p id="footertext1">
            lorem ispum lorem ispum 2022 Powered By{' '}
            <a href="./">SurendraMart</a>{' '}
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
