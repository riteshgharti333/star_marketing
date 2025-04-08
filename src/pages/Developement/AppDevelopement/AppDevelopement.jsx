import "./AppDevelopement.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { aboutCards, chooseData } from "../../../assets/data";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AppDevelopement = () => {
  const title =
    "Build your digital home, designed to welcome visitors and keep them coming back";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "Mobile App Development";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="appDevelopement">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="appDevelopement-top">
        <h2>Custom appDevelopement solutions</h2>
        <p>
          A custom appDevelopement website solution empowers businesses to build
          a site that aligns perfectly with their specific operational
          requirements and brand vision. Unlike standard templated options, a
          custom-built website offers true flexibility, enabling seamless system
          integration, and payment gateways. This adaptability allows for
          enhanced user experience, paving the way for improved scalability as
          the business grows.
        </p>
        <p>
          That’s where we excel. At Blue Frontier, our expert application
          developers design and build bespoke iOS and Android apps tailored to
          your exact requirements. Our team is proficient in a variety of
          technologies, including React Native, Maui, and Flutter, ensuring your
          app performs flawlessly.
        </p>
      </div>

      <div className="appDevelopement-quality">
        <div className="appDevelopement-quality-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
            alt=""
          />
        </div>

        <div className="appDevelopement-quality-right">
          <h2>Committed to quality</h2>
          <p>
            We firmly believe that collaboration is essential to achieving
            success. By actively engaging with you and your users, we
            continually refine your mobile app to meet your objectives. You'll
            be involved in every step of the prototyping process, providing
            valuable insights into the final product while shaping its
            development. Our team adheres to the highest quality standards,
            ensuring you receive the app you envisioned, backed by the
            confidence of a fully accredited Quality Management System (QMS).
          </p>
        </div>
      </div>

      <div className="appDevelopement-teams">
        <div className="appDevelopement-teams-container">
          <div className="appDevelopement-info">
            <div className="appDevelopement-info-left">
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

            <div className="appDevelopement-info-right">
              <div className="appDevelopement-info-right-items">
                {chooseData.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div className="appDevelopement-info-right-item" key={index}>
                      <div
                        className="appDevelopement-info-right-item-top"
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
                            className="appDevelopement-info-right-item-desc"
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

          <div className="appDevelopement-teams-top">
            <p>
              <div className="dot"></div>Our Values Clients
            </p>
          </div>

          <div className="appDevelopement-cards">
            {aboutCards.map((item, index) => (
              <div className="appDevelopement-card" key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
          <ServiceTeam dev="dev" />
        </div>
      </div>

      <div className="appDevelopement-user">
        <div className="appDevelopement-user-left">
          <h2>Providing holistic support for your appDevelopement business</h2>
          <p>
            As the Holistic Plus+TM Digital Agency, we can go beyond website
            development to support your appDevelopement business in a range of
            other ways. From app development through to branding and ongoing
            digital marketing support, we can help ensure to the growth and
            success of your business. By partnering with Blue Frontier, you gain
            access to a team of over 100 experts across every digital
            specialism, including appDevelopement SEO, graphic design, video
            production, and paid advertising.
          </p>
          <p>
            If you'd like to find out more about our holistic working
            methodology, then please visit our Digital Partner page..
          </p>

          <button>Your Digital Partner</button>
        </div>
        <div className="appDevelopement-user-right">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/custom-ecom/custom-ecom-systems.jpg"
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default AppDevelopement;
