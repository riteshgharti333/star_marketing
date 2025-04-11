import "./GraphicDesign.scss";

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
import { graphicServiceData } from "../../../assets/serviceSliderData/serviceSliderData";
import BrandCards from "../../../components/BrandCards/BrandCards";
import { useLocation } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

const GraphicDesign = () => {
  const title =
    "Bring your brand to life with impactful and modern graphic design";
  const desc =
    "As a full-service digital agency, we deliver high-quality visuals—from branding to marketing assets—that resonate with your audience and elevate your brand identity.";

  const smdesc = "Graphic Design";

  const [selectedProject, setSelectedProject] = useState("Lila");

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="graphicDesign">
      <SEO
        title="Graphic Design Services | WingStar Marketing - Logos, Branding & Creatives India & UK"
        description="WingStar Marketing delivers professional graphic design solutions including logo creation, brand identity, social media creatives, brochures, and banners. Serving businesses in India and the UK with impactful visual storytelling."
        keywords="graphic design India, branding design UK, logo design, social media creatives, visual branding, brochure design, flyer design, poster design, creative agency India, london graphic designers, mumbai design agency, brand identity design"
        url={fullUrl}
      />

      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="graphicDesign-content">
        <ServiceSlider serviceData={graphicServiceData} />
      </div>
      <div className="graphicDesign-works">
        <div className="graphicDesign-works-container">
          <div className="graphicDesign-works-top">
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

          <div className="graphicDesign-works-cards">
            {selectedProject === "Lila" && (
              <img
                src="https://www.bluefrontier.co.uk/images/services/design/workexamples/lila-story-cards.jpg"
                alt="Lila Connect"
                loading="lazy"
              />
            )}

            {selectedProject === "Aria" && (
              <img
                src="https://www.bluefrontier.co.uk/images/services/design/workexamples/arias-science-passes.jpg"
                alt="Aria Science"
                loading="lazy"
              />
            )}

            {selectedProject === "Greensleeveless" && (
              <img
                src="https://www.bluefrontier.co.uk/images/services/design/workexamples/lila-story-cards.jpg"
                alt="Greensleevless"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>

      {/* //////////////////     */}
      <div className="graphicDesign-user">
        <div className="graphicDesign-user-container">
          <div className="graphicDesign-user-left">
            <h2>Design That Speaks Your Brand</h2>
            <p>
              Graphic design is more than just aesthetics — it’s a powerful
              communication tool that shapes how your audience perceives your
              brand.
            </p>
            <p>
              From color palettes to typography, every design element plays a
              role in telling your story and influencing user behavior. Our
              graphic designers craft visuals that are not only eye-catching but
              purposeful — aligning with your brand values and resonating with
              your target audience. Whether it’s a logo, marketing material, or
              social media content, we create designs that make a lasting
              impression. We work collaboratively with your team to ensure every
              visual touchpoint is consistent, impactful, and strategically
              designed to elevate your brand.
            </p>
          </div>
          <div className="graphicDesign-user-right">
            <img
              src="https://www.bluefrontier.co.uk/images/services/design/graphicdesign/graphic-design-content.jpg"
              alt="graphic-design-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="graphicDesign-partner">
        <BrandCards />
      </div>

      <div className="graphicDesign-studies">
        <div className="graphicDesign-studies-top">
          <h2>Selected Case Studies</h2>
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
                  <img src={item.img} alt="work-image" loading="lazy" />
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

export default GraphicDesign;
