import "./Production.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { graphicCards } from "../../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import { productionServiceData } from "../../../assets/serviceSliderData/serviceSliderData";
import SEO from "../../../components/SEO/SEO";
import { useLocation } from "react-router-dom";

const Production = () => {
  const title =
    "Create powerful content that captures attention and drives engagement";
  const desc =
    "From concept to final cut, our production team delivers high-quality visuals that tell your story, elevate your brand, and perform across all platforms.";
  const smdesc = "Production";

  const [selectedProject, setSelectedProject] = useState("Lila");

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="production">
      <SEO
        title="Production Services | WingStar Marketing - Video, Photo & Creative Content in India & UK"
        description="WingStar Marketing offers high-quality production services including corporate video production, product shoots, creative content creation, and commercial photography. Serving brands across India and the UK with professional visual storytelling."
        keywords="video production India, corporate shoot UK, content creation agency, product photography, creative production house, commercial video services, professional shoots, visual content agency, marketing production services"
        url={fullUrl}
      />

      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        production="production"
      />

      <div className="production-content">
        <ServiceSlider serviceData={productionServiceData} />
      </div>

      <div className="production-user">
        <div className="production-user-container">
          <div className="production-user-container-top">
            <img
              src="https://www.bluefrontier.co.uk/images/services/digital/photography/photography-grid.jpg"
              alt="production-image"
              loading="lazy"
            />
          </div>
          <div className="production-user-container-bottom">
            <div className="production-user-left">
              <h2>From Concept to Final Delivery</h2>
              <p>
                Production is where your ideas come to life. Whether it’s video,
                animation, photography, or multimedia content, our team ensures
                every detail is crafted with precision and purpose.
              </p>
              <p>
                We manage the entire production process — from pre-production
                planning and storyboarding to shooting, editing, and
                post-production — delivering high-quality content that resonates
                with your audience. With cutting-edge tools and a creative
                mindset, we transform your vision into impactful visuals that
                strengthen your brand and drive engagement. Our goal is to
                deliver production assets that not only look stunning but also
                align perfectly with your marketing strategy.
              </p>
            </div>
            <div className="production-user-right">
              <img
                src="https://www.bluefrontier.co.uk/images/services/design/graphicdesign/graphic-design-content.jpg"
                alt="production-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="production-studies">
        <div className="production-studies-top">
          <h2>Selected Case Studies</h2>
          <button>View all case studies</button>
        </div>

        <div className="production-studies-cards">
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
                <div className="production-studies-card">
                  <img src={item.img} alt="work-image" loading="lazy" />
                  <h2>{item.title}</h2>
                  <div className="production-studies-desc">
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

export default Production;
