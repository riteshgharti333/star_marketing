import "./SweDevelopment.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { aboutCards, graphicCards } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react"

const SweDevelopment = () => {
  const title =
    "Build your digital home, designed to welcome visitors and keep them coming back";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "Software Development";

  
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);


  return (
    <div className="sweDevelopment">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="development-top">
        <ServiceSlider />
      </div>

      <div className="sweDevelopment-user">
        <div className="sweDevelopment-user-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/development-toby.jpg"
            alt=""
          />
        </div>
        <div className="sweDevelopment-user-right">
          <h2>Comprehensive development and integration services</h2>
          <p>
            Blue Frontier specialises in delivering comprehensive software
            solutions, combining deep expertise in .NET and React for robust
            application development and custom portal creation. Our dedicated
            team excels in languages such as C, Ruby, SQL, and Python, using
            powerful frameworks like .NET and Rails to transform your concepts
            into fully realised commercial products, ready to scale.
          </p>
          <p>
            In addition to development, we provide seamless integration and
            complete API development services, ensuring your various systems
            communicate smoothly and efficiently. Supported by our in-house
            testing, security, and DevOps teams, we rigorously test and
            fine-tune every solution to guarantee the deployment of secure,
            high-performance applications tailored precisely to your business
            goals, ensuring ongoing success and technical stability.
          </p>
        </div>
      </div>

      <div className="sweDevelopment-teams">
        <div className="sweDevelopment-teams-container">
          <div className="sweDevelopment-teams-top">
            <p>
              <div className="dot"></div>Our Values Clients
            </p>
          </div>

          <div className="sweDevelopment-cards">
            {aboutCards.map((item, index) => (
              <div className="sweDevelopment-card" key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
          <ServiceTeam dev="dev" />
        </div>
      </div>

      <div className="sweDevelopment-studies">
        <div className="sweDevelopment-studies-top">
          <h2>Case Studies</h2>
          <button>View all case studies</button>
        </div>

        <div className="sweDevelopment-studies-cards">
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
                <div className="sweDevelopment-studies-card">
                  <img src={item.img} alt="" />
                  <h2>{item.title}</h2>
                  <div className="sweDevelopment-studies-desc">
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

export default SweDevelopment;
