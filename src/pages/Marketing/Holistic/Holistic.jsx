import "./Holistic.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { holisticMarketingServiceData } from "../../../assets/serviceSliderData/markSliderData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { holisticMarketingServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import { holisticMarketingBenefitData } from "../../../assets/serviceBenefitData/serviceBenefitData";

const Holistic = () => {
  const title =
    "Connect every touchpoint with a unified holistic marketing approach";
  const desc =
    "We align your brand’s messaging, channels, and customer experience into one cohesive strategy—driving deeper engagement, stronger loyalty, and sustainable growth across all platforms.";

  const smdesc = "Holistic Marketing";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="holistic">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="mark" />

      <div className="holistic-top">
        <ServiceSlider serviceData={holisticMarketingServiceData} dot="mark" />
      </div>

      <ServiceBanefits benefitsData={holisticMarketingBenefitData} />

      <div className="holistic-user">
        <div className="holistic-user-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
            alt=""
          />
        </div>
        <div className="holistic-user-right">
          <h2>How do we power our holistic marketing approach?</h2>
          <p>
            Our holistic marketing strategies are built on a deep understanding
            of consumer behavior, market trends, and brand positioning. We
            leverage insights from multiple trusted data platforms and marketing
            analytics tools to create unified, impactful campaigns across all
            channels. This ensures every element — from SEO to social media to
            offline touchpoints — works together seamlessly to support your
            business goals.
          </p>
          <p>
            With a commitment to transparency and data integrity, our team
            ensures all marketing insights are derived from ethically sourced,
            GDPR-compliant data. Every recommendation we make is backed by
            real-time analytics, behavioral research, and industry benchmarks to
            give you confidence in both the strategy and the results.
          </p>
        </div>
      </div>

      <div className="holistic-teams">
        <div className="holistic-teams-container">
          <ServiceOption serviceOption={holisticMarketingServiceOption} />
        </div>
      </div>
      <div className="holistic-empty"></div>
    </div>
  );
};

export default Holistic;
