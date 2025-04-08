import "./ServiceBanner.scss";

const ServiceBanner = ({ smdesc, title, desc, production }) => {
  const about_banner =
    "https://www.bluefrontier.co.uk/images/services/design/webdesign/web-design-banner-desktop.jpg";

  return (
    <div className="service-banner">
      <div className="service-top">
        <img src={about_banner} alt="" />

        <div className="service-banner-desc">
          <span>
            <div className="dot"></div> {smdesc}
          </span>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
      <div className={`service-video  ${production ? "production" : ""}`}>
        {production ? (
          <img
            src="https://www.bluefrontier.co.uk/images/services/digital/photography/photography-grid.jpg"
            alt=""
            className="production-img"
          />
        ) : (
          <img src={about_banner} alt="" className="service-video-img" />
        )}
      </div>
    </div>
  );
};

export default ServiceBanner;
