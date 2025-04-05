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
            <li>Technical</li>
            <li>Consultancy</li>
            <li>MedTech</li>
          </ul>
        </div>
        <div className="footer-top-item">
          <ul>
            <li>Our work</li>
            <li>Latest News</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Design</li>
            <li>Meet the Team</li>
          </ul>
        </div>

        <div className="footer-top-item">
          <div className="address-top">
            <p>Head Office</p>
            <p>
              Unit 1, The Woodford Centre, Lysander Way, Salisbury, SP4 6BU, UK
            </p>
            <p>+91 1234567899</p>
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
          <p>Visit our cyber security experts</p>
          <h5>Star Studion</h5>
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
