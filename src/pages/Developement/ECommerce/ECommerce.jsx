import "./ECommerce.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { aboutCards, graphicCards } from "../../../assets/data";

import { GoDotFill } from "react-icons/go";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { ecommerceServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { ecommerceDevelopmentApproachData } from "../../../assets/approachData/devApprochData";

const ECommerce = () => {
  const title =
    "Launch high-converting eCommerce platforms that drive sales and scale";
  const desc =
    "We build seamless, secure, and user-friendly online stores optimized for performance—designed to grow your brand and deliver a smooth shopping experience across all devices.";

  const smdesc = "Custom eCommerce Development";

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="eCommerce">
      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        dot="development"
      />

      <div className="eCommerce-top">
        <h2>Future-Ready eCommerce Solutions</h2>
        <p>
          At Star Marketing, we craft custom eCommerce experiences designed to
          drive sales, streamline operations, and scale with your business. Our
          bespoke platforms go beyond cookie-cutter templates — we develop
          purpose-built online stores that reflect your brand, connect
          seamlessly with your backend systems, and deliver a frictionless
          shopping journey for your customers.
        </p>
        <p>
          From secure payment gateway integration to inventory management and
          personalised user flows, every element is engineered for performance
          and conversion. Whether you're launching a D2C brand or expanding B2B
          sales online, our eCommerce solutions give you the agility and control
          needed to thrive in a fast-evolving digital marketplace.
        </p>
      </div>

      <div className="eCommerce-service-slider">
        <ServiceSlider serviceData={ecommerceServiceData} dot="development" />
      </div>

      <Service approachData={ecommerceDevelopmentApproachData} />

      <div className="eCommerce-teams">
        <div className="eCommerce-teams-container">
          <div className="eCommerce-teams-top">
            <p>
              <div className="dot"></div>Our Values Clients
            </p>
          </div>

          <div className="eCommerce-cards">
            {aboutCards.map((item, index) => (
              <div className="eCommerce-card" key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="eCommerce-user">
        <div className="eCommerce-user-left">
          <h2>Holistic eCommerce Support for Sustainable Growth</h2>
          <p>
            At Star Marketing, we don’t just build eCommerce websites — we
            become your long-term growth partner. Our holistic approach means we
            support your business at every stage, from intuitive UX design and
            mobile app development to brand identity, performance marketing, and
            beyond.
          </p>
          <p>
            Our cross-functional team brings together specialists in eCommerce
            SEO, paid media, graphic design, content marketing, and analytics to
            create a powerful ecosystem around your store. With our end-to-end
            support, your business gains the digital edge it needs to thrive in
            a competitive market.
          </p>

          <button>Your Digital Partner</button>
        </div>
        <div className="eCommerce-user-right">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/custom-ecom/custom-ecom-systems.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="eCommerce-content">
        <div className="eCommerce-content-top">
          <div className="eCommerce-content-top-right">
            <p>
              <div className="dot"></div>Selected Works
            </p>
            <h2>Take a look at some previous web design projects</h2>
          </div>
        </div>

        <div className="eCommerce-content-cards">
          <div className="eCommerce-content-card">
            <img
              src="https://www.bluefrontier.co.uk/images/case-studies/neighbourly/neighbourly-cs-header.jpg"
              alt=""
            />
            <h2>TK Producton Film</h2>
            <div className="eCommerce-content-card-desc">
              <span>TK Producton Film</span>
            </div>
          </div>
          <div className="eCommerce-content-card">
            <img
              src="https://www.bluefrontier.co.uk/images/case-studies/neighbourly/neighbourly-cs-header.jpg"
              alt=""
            />
            <h2>TK Producton Film</h2>
            <div className="eCommerce-content-card-desc">
              <span>TK Producton Film</span>
            </div>
          </div>
        </div>
        <div className="eCommerce-btn">
          <button>View All Work</button>
        </div>
      </div>
    </div>
  );
};

export default ECommerce;
