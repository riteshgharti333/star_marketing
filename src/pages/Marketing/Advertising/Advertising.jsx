import "./Advertising.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";

const Advertising = () => {
  const title = "Driving businesses forward to meet their ambitions";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "Paid Advertising";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="advertising">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="advertising-top">
        <ServiceSlider />
      </div>

      <div className="advertising-strategy">
        <h2>Benefits of having a advertising strategy </h2>

        <div className="advertising-strategy-cards">
          {Array(6)
            .fill()
            .map((_, index) => (
              <div className="advertising-strategy-card" key={index}>
                <h5>See shifts in your market</h5>
                <p>
                  Don’t be caught off guard by shifts in your market; find them
                  early and adapt where needed.
                </p>
              </div>
            ))}
        </div>
      </div>


      <div className="advertising-approach">
        <div className="advertising-approach-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
            alt=""
          />
        </div>
        <div className="advertising-approach-right">
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

      <div className="advertising-user">
        <div className="advertising-user-left">
          <h2>Why is paid advertising so important?</h2>
        </div>
        <div className="advertising-user-right">
         <div className="advertising-user-right-items">
            <div className="advertising-user-right-item">
              <h2>30%</h2>
              <p>Average click-through-rate for the first organic result on Google</p>
            </div>  

             <div className="advertising-user-right-item">
              <h2>60%</h2>
              <p>Average click-through-rate for the first organic result on Google</p>
            </div>  

             <div className="advertising-user-right-item">
              <h2>70%</h2>
              <p>Average click-through-rate for the first organic result on Google</p>
            </div>          
         </div>
        </div>
      </div>

      <Service />

      <div className="advertising-teams">
        <div className="advertising-teams-container">
          <div className="advertising-info">
            <div className="advertising-info-left">
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

            <div className="advertising-info-right">
              <div className="advertising-info-right-items">
                {chooseData.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div className="advertising-info-right-item" key={index}>
                      <div
                        className="advertising-info-right-item-top"
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
                            className="advertising-info-right-item-desc"
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
      <div className="marketing-empty">

      </div>
    </div>
  );
};

export default Advertising;
