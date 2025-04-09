import "./Analytics.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";

const Analytics = () => {
  const title = "Driving businesses forward to meet their ambitions";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "Data Analytics & Reporting";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="analytics">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="analytics-top">
        <ServiceSlider />
      </div>

      <div className="analytics-approach">
        <div className="analytics-approach-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
            alt=""
          />
        </div>
        <div className="analytics-approach-right">
          <h2>Why analytics marketing matters </h2>
          <p>
            analytics is an essential tool in your wider marketing strategy,
            whether you’re looking to get your social media soaring or support
            your SEO.
          </p>
          <p>
            Behind every successful piece of analytics is careful planning and a
            strong strategy to ensure it meets the requirements of not just your
            business, but of the end user. Our team is experienced in planning
            analytics and uncovering audience demand through keyword and
            competitor research.
          </p>
          <p>
            We create unique and compelling analytics, which can be shared via
            your marketing channels, including on your website, social media,
            brochures, and beyond. We are also able to assist in updating
            existing analytics to enhance any untapped SEO potential.
          </p>
        </div>
      </div>

      <div className="analytics-info">
        <div className="analytics-info-left">
          <h2>Tailored application services</h2>
          <p>
            At Blue Frontier, we specialise in mobile app development across
            leading frameworks such as React Native, Maui, and Flutter. Our
            experienced team harnesses advanced technologies to deliver
            high-performing applications that are customised to your specific
            requirements. With a strong emphasis on user experience and
            functionality, we ensure your app excels in a competitive landscape.
          </p>
        </div>

        <div className="analytics-info-right">
          <div className="analytics-info-right-items">
            {chooseData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div className="analytics-info-right-item" key={index}>
                  <div
                    className="analytics-info-right-item-top"
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
                        className="analytics-info-right-item-desc"
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

      <Service />

      <div className="analytics-teams">
        <div className="analytics-teams-container">
          <div className="analytics-teams-reporting">
            <div className="analytics-teams-reporting-left">
            <img
                src="https://www.bluefrontier.co.uk/images/services/digital/analyticsreporting/integrated-report.jpg"
                alt=""
              />
            </div>

            <div className="analytics-teams-reporting-right">
              <h2>Integrated reporting</h2>
              <p>Streamline your data with integrated Looker Studio reporting, a powerful tool we offer at Blue Frontier to bring your marketing performance into sharp focus. We create custom, interactive dashboards that consolidate data from all your digital marketing channels, giving you insights at your fingertips.</p>
              <p>Our tailored reports provide a clear, comprehensive view of your campaigns, helping you track KPIs, identify trends, and make data-driven decisions with ease. No more sifting through spreadsheets, our Looker Studio reporting makes complex data simple, actionable, and visually engaging, empowering you to optimise your strategies for greater success.</p>
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

export default Analytics;
