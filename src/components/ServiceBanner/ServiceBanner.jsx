import "./ServiceBanner.scss";

const ServiceBanner = ({ smdesc, title, desc, dot }) => {
  const about_banner =
    "https://www.bluefrontier.co.uk/images/services/design/webdesign/web-design-banner-desktop.jpg";

  return (
    <div className="service-banner">
      <div className="service-top">
        <img src={about_banner} alt="" />

        <div className="service-banner-desc">
          <span>
            <div className={`dot ${dot}`}></div> {smdesc}
          </span>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
