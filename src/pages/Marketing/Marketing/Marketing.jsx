import "./Marketing.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";

const Marketing = () => {
  const title = "Driving businesses forward to meet their ambitions";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "Marketing Strategy";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="marketing">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="marketing-top">
        <ServiceSlider />
      </div>

      <div className="marketing-strategy">
        <h2>Benefits of having a marketing strategy </h2>

        <div className="marketing-strategy-cards">
          {Array(6)
            .fill()
            .map((_, index) => (
              <div className="marketing-strategy-card" key={index}>
                <h5>See shifts in your market</h5>
                <p>
                  Don’t be caught off guard by shifts in your market; find them
                  early and adapt where needed.
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className="marketing-user">
        <div className="marketing-user-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
            alt=""
          />
        </div>
        <div className="marketing-user-right">
          <h2>Where do we get our data? </h2>
          <p>
            We are proud to be partnered with industry-leading research and data
            platforms, including Brandwatch Consumer Research. Using these
            platforms, we are able to gather both first-party and third-party
            data and insights to guide our strategic recommendations. The data
            we use is fully GDPR compliant, with our team working meticulously
            to validate sources for reliability, recency, and relevancy.
          </p>
          <p>
            We are proud to be partnered with industry-leading research and data
            platforms, including Brandwatch Consumer Research. Using these
            platforms, we are able to gather both first-party and third-party
            data and insights to guide our strategic recommendations. The data
            we use is fully GDPR compliant, with our team working meticulously
            to validate sources for reliability, recency, and relevancy.
          </p>
        </div>
      </div>

      <Service />

      <div className="marketing-teams">
        <div className="marketing-teams-container">
          <div className="marketing-info">
            <div className="marketing-info-left">
              <h2>Tailored application services</h2>
              <p>
                At Blue Frontier, we specialise in mobile app development across
                leading frameworks such as React Native, Maui, and Flutter. Our
                experienced team harnesses advanced technologies to deliver
                high-performing applications that are customised to your
                specific requirements. With a strong emphasis on user experience
                and functionality, we ensure your app excels in a competitive
                landscape.
              </p>
            </div>

            <div className="marketing-info-right">
              <div className="marketing-info-right-items">
                {chooseData.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div className="marketing-info-right-item" key={index}>
                      <div
                        className="marketing-info-right-item-top"
                        onClick={() => toggleDesc(index)}
                      >
                        <h3>{item.title}</h3>

                        <motion.span
                          initial={false}
                          animate={{
                            rotate: isOpen ? 180 : 0,
                            scale: isOpen ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className="icon"
                        >
                          {isOpen ? "-" : "+"}
                        </motion.span>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            className="marketing-info-right-item-desc"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p>{item.desc}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <ServiceTeam dev="dev" />
        </div>
      </div>

      <div className="marketing-service">
        <div className="marketing-service-left">
          <span>
            <div className="dot"></div>Strategy Services
          </span>
          <h2>Our other strategy offerings</h2>
          <p>
            We can provide audit and strategy services outside of digital
            marketing to benefit your wider business. From Website UX Audits, to
            Brand Audit & Strategies, to Digital Transformation Roadmaps, we
            have specialists across Blue Frontier who can bring data-backed
            recommendations to the forefront in a range of business
            applications.{" "}
          </p>
          <button>Get in touch</button>
        </div>
        <div className="marketing-service-right">
          <img
            src="https://www.bluefrontier.co.uk/images/services/digital/marketingstrategy/other-strategy-offerings.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
