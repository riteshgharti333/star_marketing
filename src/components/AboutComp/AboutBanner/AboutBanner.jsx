import "./AboutBanner.scss";

const AboutBanner = () => {
  const about_banner =
    "https://www.bluefrontier.co.uk/images/hero-banners/about-banner-mobile.jpg";
  return (
    <div className="about-banner">
      <div className="about-top">
        <img src={about_banner} alt="" />

        <div className="about-banner-desc">
          <span>
            <div className="dot"></div> About Us
          </span>
          <h1>
            We strongly believe in the power of creativity and forward thinking
          </h1>
          <p>
            Blue Frontier specialises in a full range of digital services for
            businesses. We have a dynamic group of exceptionally talented
            individuals who are all driven by a shared passion for what we do.
          </p>
        </div>
      </div>
      <div className="about-video">
        <img src={about_banner} alt="" />
      </div>
    </div>
  );
};

export default AboutBanner;
