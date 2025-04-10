import "./Wordpress.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { aboutCards, chooseData } from "../../../assets/data";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { testingServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { wordpressDevelopmentApproachData } from "../../../assets/approachData/devApprochData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { wordpressServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";

const Wordpress = () => {
  const title =
    "Custom WordPress solutions tailored for performance and flexibility";
  const desc =
    "From theme customization to full-scale development, we build responsive, SEO-friendly WordPress websites that are easy to manage and built to grow with your business.";

  const smdesc = "WordPress Development";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="wordpress">
      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        dot="development"
      />

      <div className="wordpress-top">
        <h2>Tailored WordPress Solutions for Scalable Growth</h2>
        <p>
          Our custom WordPress solutions are designed to meet your unique
          business goals while maintaining the flexibility and performance your
          brand demands. Unlike off-the-shelf themes, we build bespoke WordPress
          websites that align seamlessly with your operational needs and visual
          identity.
        </p>
        <p>
          With full control over design, functionality, and integrations—from
          plugins and APIs to payment gateways—our custom approach delivers a
          smooth user experience and sets the foundation for future scalability.
          Whether you're launching an eCommerce store, portfolio, or business
          site, our WordPress experts will help you bring your vision to life
          with precision and purpose.
        </p>
      </div>

      <div className="wordpress-service-slider">
        <ServiceSlider serviceData={testingServiceData} dot="development" />
      </div>

      <Service approachData={wordpressDevelopmentApproachData} />

      <div className="wordpress-sollution">
        <div className="wordpress-sollution-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/wordpress/wordpress-tailored.jpg"
            alt=""
          />
        </div>
        <div className="wordpress-sollution-right">
          <h2>Expert WordPress Development & Ongoing Support</h2>
          <p>
            At Star Marketing, we specialise in delivering high-quality
            WordPress solutions tailored to your brand and business goals. From
            custom themes and plugin development to SEO optimisation and
            responsive design, we ensure your website not only looks exceptional
            but also performs seamlessly across all devices.
          </p>
          <p>
            We also offer managed WordPress hosting, routine maintenance, and
            security updates to keep your site fast, secure, and dependable.
            Whether you're building a new WordPress site or looking to elevate
            an existing one, our team provides end-to-end support to help you
            grow confidently online.
          </p>
        </div>
      </div>

      <div className="wordpress-teams">
        <div className="wordpress-teams-container">
          <ServiceOption serviceOption={wordpressServiceOption} />
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
        </div>
      </div>

      <div className="wordpress-user">
        <div className="wordpress-user-left">
          <h2>Reliable & Ongoing WordPress Support</h2>
          <p>
            We provide end-to-end WordPress support designed to keep your
            website secure, stable, and running at peak performance. From
            regular updates and plugin management to advanced security
            monitoring and performance tuning, our support ensures your site
            stays ahead of the curve.
          </p>
          <p>
            Whether you're facing technical challenges or simply need peace of
            mind, our dedicated team is here to deliver fast, reliable
            solutions. With Star Marketing as your WordPress partner, you can
            focus on growing your business while we handle the rest.
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
