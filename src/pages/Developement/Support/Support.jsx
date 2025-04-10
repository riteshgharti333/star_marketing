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
import { supportAndMaintenanceServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { supportAndMaintenanceApproachData } from "../../../assets/approachData/devApprochData";

const Support = () => {
  const title =
    "Keep your digital products running smoothly with expert support & maintenance";
  const desc =
    "From regular updates to performance monitoring and issue resolution, we provide ongoing support to ensure your website, app, or software stays secure, efficient, and up-to-date.";

  const smdesc = "Support & Maintenance";

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="support">
      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        dot="development"
      />

      <div className="support-top">
        <h2>Dedicated Support & Maintenance Solutions</h2>
        <p>
          Your digital product doesn’t end at launch — that’s where ongoing
          support becomes critical. Our tailored Support & Maintenance services
          ensure your platform stays secure, updated, and running at peak
          performance. Whether it’s routine updates, bug fixes, or system
          monitoring, we provide responsive and reliable assistance to keep your
          digital presence smooth and uninterrupted.
        </p>
        <p>
          Unlike off-the-shelf solutions, our custom support plans are designed
          around your unique business needs, with flexible service levels,
          proactive improvements, and seamless integration with your existing
          infrastructure. As your business grows, our support scales with you.
        </p>
      </div>

      <div className="support-service-slider">
        <ServiceSlider
          dot="development"
          serviceData={supportAndMaintenanceServiceData}
        />
      </div>

      <Service approachData={supportAndMaintenanceApproachData} />

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
        </div>
      </div>

      <div className="support-user">
        <div className="support-user-left">
          <h2>End-to-End Support & Maintenance for Your Digital Solutions</h2>
          <p>
            At Star Marketing, we believe long-term success comes from
            consistent care and attention. Our holistic Support & Maintenance
            services go far beyond simple fixes—we offer proactive monitoring,
            regular updates, security patching, performance optimization, and
            on-demand troubleshooting to keep your systems running smoothly.
          </p>
          <p>
            Whether it’s a custom-built website, mobile app, or enterprise
            software, our experienced team ensures stability, speed, and
            security through every stage of your digital journey. With access to
            over 100 specialists across development, design, SEO, and marketing,
            we deliver integrated support that evolves with your business needs.
          </p>
          <p>
            Want to learn more about how our all-in-one support approach can
            drive long-term reliability and performance? Visit our Digital
            Partner page or speak with our team today.
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
