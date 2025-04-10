import "./WebDevelopment.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
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
import { webDevelopmentServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { webDevelopmentApproachData } from "../../../assets/approachData/devApprochData";
import { webParagraphData } from "../../../assets/paraData/paraData";

const WebDevelopment = () => {
  const title =
    "Build fast, scalable websites that turn ideas into digital experiences";
  const desc =
    "We develop high-performance, responsive websites using modern technologies—engineered to grow with your business and deliver seamless user experiences.";

  const smdesc = "Web Development Solutions";

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="webDevelopment">
      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        dot="development"
      />
      <div className="development-top">
        <ServiceSlider
          serviceData={webDevelopmentServiceData}
          dot="development"
        />
      </div>

      <Service approachData={webDevelopmentApproachData} />

      <div className="webDevelopment-teams">
        <div className="webDevelopment-teams-container">
          <div className="webDevelopment-teams-top">
            <p>
              <div className="dot"></div>Our Values Clients
            </p>
          </div>

          <div className="webDevelopment-cards">
            {aboutCards.map((item, index) => (
              <div className="webDevelopment-card" key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="webDevelopment-user">
        <div className="webDevelopment-user-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/react-clinson.jpg"
            alt=""
          />
        </div>
        <div className="webDevelopment-user-right">
          <h2>{webParagraphData.title}</h2>

          <ul>
            {webParagraphData.paragraphDataItems.map((item, index) => (
              <li key={index}>
                <GoDotFill className="dev-icon" />
                <p>
                  <span>{item.title} : </span>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="graphicDesign-studies">
        <div className="graphicDesign-studies-top">
          <h2>Case Studies</h2>
          <button>View all case studies</button>
        </div>

        <div className="graphicDesign-studies-cards">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={() => {
              setIsBeginning(false);
              setIsEnd(false);
            }}
            navigation={{
              prevEl: ".graphic-button-prev-custom",
              nextEl: ".graphic-button-next-custom",
            }}
            speed={1000}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 1.5 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
          >
            {graphicCards.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="graphicDesign-studies-card">
                  <img src={item.img} alt="" />
                  <h2>{item.title}</h2>
                  <div className="graphicDesign-studies-desc">
                    <span>{item.desc}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div className="graphic-nav-buttons">
            <div
              className={`graphic-button-prev-custom ${
                isBeginning ? "disabled" : ""
              }`}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <GoArrowLeft />
            </div>
            <div
              className={`graphic-button-next-custom ${
                isEnd ? "disabled" : ""
              }`}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <GoArrowRight />
            </div>
          </div>
        </div>

        <div className="bottom-btn">
          <button>View all case studies</button>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
