import "./Content.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";

const Content = () => {
  const title = "Driving businesses forward to meet their ambitions";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "Content Marketing Agency";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="content">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="content-top">
        <ServiceSlider />
      </div>


      <div className="content-approach">
        <div className="content-approach-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
            alt=""
          />
        </div>
        <div className="content-approach-right">
          <h2>Why content marketing matters </h2>
          <p>
            Content is an essential tool in your wider marketing strategy,
            whether you’re looking to get your social media soaring or support
            your SEO.
          </p>
          <p>
            Behind every successful piece of content is careful planning and a
            strong strategy to ensure it meets the requirements of not just your
            business, but of the end user. Our team is experienced in planning
            content and uncovering audience demand through keyword and
            competitor research.
          </p>
          <p>
            We create unique and compelling content, which can be shared via
            your marketing channels, including on your website, social media,
            brochures, and beyond. We are also able to assist in updating
            existing content to enhance any untapped SEO potential.
          </p>
        </div>
      </div>

      <div className="content-statics">
        <div className="content-statics-left">
          <h2>Content marketing statistics</h2>
          <p>
            Whatever your business goals and marketing tactics are, content is
            always at the centre. Without content your audience will have
            nothing to see, watch, or read, and yet the creation of high-value
            content can often become an afterthought. Having a clear,
            attainable, and data-driven strategy that allows your business to
            publish valuable content regularly can help skyrocket your marketing
            performance and hit your wider goals.
          </p>
        </div>
        <div className="content-statics-right">
          <div className="content-statics-right-items">
            <div className="content-statics-right-item">
              <h2>30%</h2>
              <p>billion active social media users in 2024</p>
            </div>

            <div className="content-statics-right-item">
              <h2>60%</h2>
              <p>
                different social media platforms used per person (on average)
              </p>
            </div>

            <div className="content-statics-right-item">
              <h2>90%</h2>
              <p>billion monthly active users on Facebook in 2024</p>
            </div>
          </div>
        </div>
      </div>

      <Service />

      <div className="content-teams">
        <div className="content-teams-container">
          <div className="content-info">
            <div className="content-info-left">
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

            <div className="content-info-right">
              <div className="content-info-right-items">
                {chooseData.map((item, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div className="content-info-right-item" key={index}>
                      <div
                        className="content-info-right-item-top"
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
                            className="content-info-right-item-desc"
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

      <div className="content-user">
        <div className="content-user-left">
       

          <h2>Content strategies that deliver results</h2>
          <p>
            Success in content marketing requires data-backed planning and a
            cross-channel approach, from whitepapers and guest posts to podcasts
            and videos. The real value of content comes from formulating a
            structured strategy to reach audiences far and wide.
          </p>
          <p>
            We pride ourselves on working closely with brands to support their
            strategy so that it aligns with their business goals, whether that
            be building brand awareness or establishing thought leadership. Our
            experts can provide a complete content marketing strategy for your
            brand, from the initial research through to ongoing content creation
            and outreach. We further combine our expertise with advanced
            software and AI technologies to provide insight-led strategies
            designed to deliver results.
          </p>
        </div>
        <div className="content-user-right">
        <img
            src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
