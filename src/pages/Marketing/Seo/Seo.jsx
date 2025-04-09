import "./Seo.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";

const Seo = () => {
  const title = "Driving businesses forward to meet their ambitions";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "SEO Service";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="seo">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="seo-top">
        <ServiceSlider />
      </div>

      <div className="seo-strategy">
        <h2>Benefits of having a seo strategy </h2>

        <div className="seo-strategy-cards">
          {Array(6)
            .fill()
            .map((_, index) => (
              <div className="seo-strategy-card" key={index}>
                <h5>See shifts in your market</h5>
                <p>
                  Don’t be caught off guard by shifts in your market; find them
                  early and adapt where needed.
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className="seo-user">
        <div className="seo-user-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/digital/seo/seo-stats.jpg"
            alt=""
          />
        </div>
        <div className="seo-user-right">
         <div className="seo-user-right-items">
            <div className="seo-user-right-item">
              <h2>30%+</h2>
              <p>Average click-through-rate for the first organic result on Google</p>
            </div>  

             <div className="seo-user-right-item">
              <h2>60%+</h2>
              <p>Average click-through-rate for the first organic result on Google</p>
            </div>  

             <div className="seo-user-right-item">
              <h2>70%+</h2>
              <p>Average click-through-rate for the first organic result on Google</p>
            </div>          
         </div>
        </div>
      </div>

      <Service />

      <div className="seo-teams">
        <div className="seo-teams-container">
          <div className="seo-info">
            <div className="seo-info-left">
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

            <div className="seo-info-right">
              <div className="seo-info-right-items">
                {chooseData.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div className="seo-info-right-item" key={index}>
                      <div
                        className="seo-info-right-item-top"
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
                            className="seo-info-right-item-desc"
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

export default Seo;
