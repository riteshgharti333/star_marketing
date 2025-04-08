import "./Support.scss";

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

const Support = () => {
  const title =
    "Keep your digital assets running smoothly, providing users with the best experience";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "Support & Maintenance";

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="support">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="support-top">
        <h2>Custom support solutions</h2>
        <p>
          A custom support website solution empowers businesses to build a
          site that aligns perfectly with their specific operational
          requirements and brand vision. Unlike standard templated options, a
          custom-built website offers true flexibility, enabling seamless system
          integration, and payment gateways. This adaptability allows for
          enhanced user experience, paving the way for improved scalability as
          the business grows.{" "}
        </p>
      </div>

      <div className="support-service-slider">
        <ServiceSlider />
      </div>

      <Service />

      <div className="support-teams">
        <div className="support-teams-container">
          <div className="support-teams-top">
            <p>
              <div className="dot"></div>Our Values Clients
            </p>
          </div>

          <div className="support-cards">
            {aboutCards.map((item, index) => (
              <div className="support-card" key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
          <ServiceTeam dev="dev" />
        </div>
      </div>

      <div className="support-user">
        <div className="support-user-left">
          <h2>Providing holistic support for your support business</h2>
          <p>
            As the Holistic Plus+TM Digital Agency, we can go beyond website
            development to support your support business in a range of other
            ways. From app development through to branding and ongoing digital
            marketing support, we can help ensure to the growth and success of
            your business. By partnering with Blue Frontier, you gain access to
            a team of over 100 experts across every digital specialism,
            including support SEO, graphic design, video production, and paid
            advertising.
          </p>
          <p>
            If you'd like to find out more about our holistic working
            methodology, then please visit our Digital Partner page..
          </p>

          <button>Your Digital Partner</button>
        </div>
        <div className="support-user-right">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/custom-ecom/custom-ecom-systems.jpg"
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default Support;
