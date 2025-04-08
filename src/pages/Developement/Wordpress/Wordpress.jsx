import "./Wordpress.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { aboutCards, chooseData } from "../../../assets/data";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wordpress = () => {
  const title =
    "Keep your digital assets running smoothly, providing users with the best experience";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "WordPress Development";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="wordpress">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="wordpress-top">
        <h2>Custom wordpress solutions</h2>
        <p>
          A custom wordpress website solution empowers businesses to build a
          site that aligns perfectly with their specific operational
          requirements and brand vision. Unlike standard templated options, a
          custom-built website offers true flexibility, enabling seamless system
          integration, and payment gateways. This adaptability allows for
          enhanced user experience, paving the way for improved scalability as
          the business grows.{" "}
        </p>
      </div>

      <Service />

      <div className="wordpress-sollution">
        <div className="wordpress-sollution-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/wordpress/wordpress-tailored.jpg"
            alt=""
          />
        </div>
        <div className="wordpress-sollution-right">
          <h2>Tailored WordPress solutions </h2>
          <p>
            Our expert team offers comprehensive WordPress development services,
            including custom designs, plugin integrations, and ongoing support.
            We create websites that are not only visually stunning but also
            optimised for performance and security.
          </p>
          <p>
            With dedicated WordPress hosting and routine backups, we ensure your
            site remains reliable and efficient. Whether you need a new website
            or support for your existing one, we provide the expertise and
            solutions to meet your needs.
          </p>
        </div>
      </div>

      <div className="wordpress-teams">
        <div className="wordpress-teams-container">
          <div className="wordpress-info">
            <div className="wordpress-info-left">
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

            <div className="wordpress-info-right">
              <div className="wordpress-info-right-items">
                {chooseData.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div className="wordpress-info-right-item" key={index}>
                      <div
                        className="wordpress-info-right-item-top"
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
                            className="wordpress-info-right-item-desc"
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
          <div className="wordpress-teams-top">
            <p>
              <div className="dot"></div>Our Values Clients
            </p>
          </div>

          <div className="wordpress-cards">
            {aboutCards.map((item, index) => (
              <div className="wordpress-card" key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
          <ServiceTeam dev="dev" />
        </div>
      </div>

      <div className="wordpress-user">
        <div className="wordpress-user-left">
          <h2>Expert WordPress support</h2>
          <p>
            Our WordPress support services include everything from routine
            backups to plugin development and security enhancements. We ensure
            your website operates smoothly and remains up to date with the
            latest technologies.
          </p>
          <p>
            Our team’s expertise in handling various WordPress components means
            that no matter the issue, we provide swift and effective solutions.
            Trust us to keep your site secure, optimised, and fully functional.
          </p>

        </div>
        <div className="wordpress-user-right">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/custom-ecom/custom-ecom-systems.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Wordpress;
