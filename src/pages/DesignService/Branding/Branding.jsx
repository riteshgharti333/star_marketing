import "./Branding.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { aboutCards, graphicCards } from "../../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import { brandingServiceData } from "../../../assets/serviceSliderData/serviceSliderData";

const Branding = () => {
  const title = "Build a brand that stands out and speaks volumes";
  const desc =
    "We craft distinctive brand identities that reflect your vision, connect with your audience, and create lasting impact across digital and print platforms.";

  const smdesc = "Branding";

  const [selectedProject, setSelectedProject] = useState("Lila");

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <div className="branding">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="branding-content">
        <ServiceSlider serviceData={brandingServiceData} />
      </div>
      <div className="branding-works">
        <div className="branding-works-container">
          <div className="branding-works-top">
            <button
              className={selectedProject === "Lila" ? "active" : ""}
              onClick={() => setSelectedProject("Lila")}
            >
              Lila Connect
            </button>
            <button
              className={selectedProject === "Aria" ? "active" : ""}
              onClick={() => setSelectedProject("Aria")}
            >
              Aria Science
            </button>
            <button
              className={selectedProject === "Greensleeveless" ? "active" : ""}
              onClick={() => setSelectedProject("Greensleeveless")}
            >
              Greensleevless
            </button>
          </div>

          <div className="branding-works-cards">
            {selectedProject === "Lila" && (
              <img
                src="https://www.bluefrontier.co.uk/images/services/design/workexamples/lila-story-cards.jpg"
                alt="Lila Connect"
              />
            )}

            {selectedProject === "Aria" && (
              <img
                src="https://www.bluefrontier.co.uk/images/services/design/workexamples/arias-science-passes.jpg"
                alt="Aria Science"
              />
            )}

            {selectedProject === "Greensleeveless" && (
              <img
                src="https://www.bluefrontier.co.uk/images/services/design/workexamples/lila-story-cards.jpg"
                alt="Greensleevless"
              />
            )}
          </div>
        </div>
      </div>

      {/* //////////////////     */}
      <div className="branding-user">
        <div className="branding-user-container">
          <div className="branding-user-left">
            <h2>Building a Brand That Lasts</h2>
            <p>
              Your brand is more than just a logo — it's the complete identity
              of your business and the first impression you leave with your
              audience.
            </p>
            <p>
              Effective branding builds trust, creates recognition, and
              emotionally connects with your target audience. Our branding
              experts work with you to define your brand’s voice, values, and
              visual identity, ensuring every touchpoint communicates a
              consistent and compelling message. From brand strategy and naming
              to logo design and brand guidelines, we craft identities that are
              memorable, authentic, and built to grow with your business.
              Whether you're starting fresh or rebranding, we'll help you tell
              your story with clarity and confidence.
            </p>
          </div>
          <div className="branding-user-right">
            <img
              src="https://www.bluefrontier.co.uk/images/services/design/graphicdesign/graphic-design-content.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="branding-studies">
        <div className="branding-studies-top">
          <h2>Selected Case Studies</h2>
          <button>View all case studies</button>
        </div>

        <div className="branding-studies-cards">
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
                <div className="branding-studies-card">
                  <img src={item.img} alt="" />
                  <h2>{item.title}</h2>
                  <div className="branding-studies-desc">
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

export default Branding;
