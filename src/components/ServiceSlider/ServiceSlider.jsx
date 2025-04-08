import "./ServiceSlider.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef, useState } from "react";
import { webCards } from "../../assets/data";

const ServiceSlider = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);
  return (
    <div className="serviceSlider">
      <div className="serviceSlider-top">
        <h2>Covering all areas of web design</h2>
        <p>
          Whether you want it to convert leads, make sales, or drive traffic,
          your website will be carefully crafted by our experts to achieve your
          goals.
        </p>
      </div>

      <div className="serviceSlider-cards">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          // onSwiper={(swiper) => (swiperRef.current = swiper)}
          // onReachBeginning={() => setIsBeginning(true)}
          // onReachEnd={() => setIsEnd(true)}
          // onFromEdge={() => {
          //   setIsBeginning(false);
          //   setIsEnd(false);
          // }}
          navigation={{
            prevEl: ".web-button-prev-custom",
            nextEl: ".web-button-next-custom",
          }}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {webCards.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="serviceSlider-card">
                <span>
                  <div className="dot"></div>Service
                </span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="web-nav-buttons">
          <div
            className={`web-button-prev-custom ${
              isBeginning ? "disabled" : ""
            }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <GoArrowLeft />
          </div>
          <div
            className={`web-button-next-custom ${isEnd ? "disabled" : ""}`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
