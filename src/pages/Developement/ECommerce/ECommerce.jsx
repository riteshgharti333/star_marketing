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

const ECommerce = () => {
  const title =
    "Build your digital home, designed to welcome visitors and keep them coming back";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "Custom eCommerce Development";

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="eCommerce">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="eCommerce-top">
        <h2>Custom eCommerce solutions</h2>
        <p>
          A custom eCommerce website solution empowers businesses to build a
          site that aligns perfectly with their specific operational
          requirements and brand vision. Unlike standard templated options, a
          custom-built website offers true flexibility, enabling seamless system
          integration, and payment gateways. This adaptability allows for
          enhanced user experience, paving the way for improved scalability as
          the business grows.{" "}
        </p>
      </div>

      <div className="eCommerce-service-slider">
        <ServiceSlider />
      </div>

      <Service />

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
          <ServiceTeam dev="dev" />
        </div>
      </div>

      <div className="eCommerce-user">
        <div className="eCommerce-user-left">
          <h2>Providing holistic support for your eCommerce business</h2>
          <p>
            As the Holistic Plus+TM Digital Agency, we can go beyond website
            development to support your eCommerce business in a range of other
            ways. From app development through to branding and ongoing digital
            marketing support, we can help ensure to the growth and success of
            your business. By partnering with Blue Frontier, you gain access to
            a team of over 100 experts across every digital specialism,
            including eCommerce SEO, graphic design, video production, and paid
            advertising.
          </p>
          <p>
            If you'd like to find out more about our holistic working
            methodology, then please visit our Digital Partner page..
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
          <div className="eCommerce-content-top-left"></div>
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
