import "./Social.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { paidSocialMediaServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { socialMediaApproachData } from "../../../assets/approachData/marketingApproachData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { socialMediaServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";
import ServiceBanefits from "../../../components/ServiceBanefits/ServiceBanefits";
import { socialMediaAdvertisingBenefitData } from "../../../assets/serviceBenefitData/serviceBenefitData";

const Social = () => {
  const title =
    "Drive engagement and conversions with paid social media campaigns";
  const desc =
    "We craft strategic, creative ad campaigns across platforms like Instagram, Facebook, and LinkedIn—designed to reach your ideal audience and deliver measurable results at every stage of the funnel.";

  const smdesc = "Paid social";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="social">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="mark" />

      <div className="social-top">
        <ServiceSlider serviceData={paidSocialMediaServiceData} dot="mark" />
      </div>

      <ServiceBanefits benefitsData={socialMediaAdvertisingBenefitData} />

      <div className="social-approach">
        <div className="social-approach-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
            alt=""
          />
        </div>
        <div className="social-approach-right">
          <h2>How do we power our social media strategies?</h2>
          <p>
            Our social media strategies are built on a strong foundation of
            insights sourced from leading analytics and listening tools such as
            Brandwatch, Sprout Social, and native platform data like Meta
            Insights and Twitter Analytics. These platforms allow us to gather
            both first-party and third-party data to guide every content
            decision, campaign, and engagement strategy.
          </p>
          <p>
            All insights we use are GDPR compliant and verified for accuracy,
            relevance, and timeliness. Our team carefully analyses audience
            behavior, platform trends, and performance metrics to ensure that
            your social media presence not only resonates with your audience but
            also drives meaningful results across channels like Instagram,
            LinkedIn, Facebook, X, and TikTok.
          </p>
        </div>
      </div>

      <div className="social-user">
        <div className="social-user-left">
          <h2>The power of social media </h2>
          <p>
            Social media is the most-used marketing channel, with over
            two-thirds of the world's population being active on at least one
            social platform.{" "}
          </p>
        </div>
        <div className="social-user-right">
          <div className="social-user-right-items">
            <div className="social-user-right-item">
              <h2>5.17</h2>
              <p>billion active social media users in 2024</p>
            </div>

            <div className="social-user-right-item">
              <h2>7</h2>
              <p>
                different social media platforms used per person (on average)
              </p>
            </div>

            <div className="social-user-right-item">
              <h2>3</h2>
              <p>billion monthly active users on Facebook in 2024</p>
            </div>
          </div>
        </div>
      </div>

      <Service approachData={socialMediaApproachData} />

      <div className="social-teams">
        <div className="social-teams-container">
          <ServiceOption serviceOption={socialMediaServiceOption} />
        </div>
      </div>
      <div className="marketing-empty"></div>
    </div>
  );
};

export default Social;
