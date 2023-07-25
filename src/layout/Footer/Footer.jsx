import React from 'react';
import './footer.css';
import FooterLink from './FooterLink';
import FooterData from '../../data/FooterData';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/footer_logo.png';

const Footer = () => {
  return (
    <section className="footer py-3 py-md-4 py-lg-5">
      <div className="container py-3 py-md-4 py-lg-5">
        <div className="row justify-content-between gy-3 gy-md-4 gy-lg-0">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="single-box">
              <img src={logo} className="img-fluid" alt="img" />
              <p className="m-0 p-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
              <div className="social-links  mt-2  ">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <FooterLink FooterData={FooterData} />
          <div className="col-12 col-md-6 col-lg-3">
            <div className=" links single-box">
              <h4 className=" position-relative">Contact Information</h4>
              <p>
                <strong>Phone: </strong>+000 313 577 111
              </p>
              <p>
                <strong>Email: </strong>demo@example.com
              </p>
              <p>
                <strong>Address: </strong>4035 Heavens, Los Angeles, California
              </p>
              <div className="input-form ">
                <input
                  type="email"
                  className="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn rounded-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
