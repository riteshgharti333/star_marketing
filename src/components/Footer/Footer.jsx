import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-item">
          <ul>
            <li>Design</li>
            <li>Development</li>
            <li>Marketing</li>
          </ul>
        </div>
        <div className="footer-top-item">
          <ul>
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"/founder"}>Founder's Massage</Link>{" "}
            </li>
            <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/design/web-design"}>Design</Link>
            </li>
            <li>
              <Link to={"/marketing/seo"}>Seo</Link>
            </li>
          </ul>
        </div>
        <div className="footer-address">
          <div className="footer-address-item">
            <div className="address-top">
              <p>Head Office </p>
              <p>
                Near by Fatima masjid Fathepur road, Sikar, 332001, Rajasthan
              </p>
              <p>+91 8209326351</p>
            </div>
          </div>

          <div className="footer-address-item">
            <div className="address-top">
              <p>Branch 01 London</p>
              <p>506a Ladymargret Road Southall Ub1 2np</p>
            </div>
          </div>

          <div className="footer-address-item">
            <div className="address-top">
              <p>Branch 02 Mumbai</p>
              <p>Opp Gcc club Mira Road, Est, Mumbai</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-center">
        <div className="footer-center-item">
          <p>Discover our creative side</p>
          <h5>Star Studio</h5>
        </div>
        <div className="footer-center-item">
          <ul>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <p>Copyright © Designed and Developed by Star Marketing</p>
        <div className="footer-bottom-right">
          <span>Sitemap</span>
          <span className="footer-bottom-line">|</span>
          <span>Policies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
