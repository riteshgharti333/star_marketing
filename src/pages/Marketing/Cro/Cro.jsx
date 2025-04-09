import "./Cro.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";

import { FaArrowUpLong } from "react-icons/fa6";

const Cro = () => {
  const title = "Driving businesses forward to meet their ambitions";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "Conversion Rate Optimisiation";

  return (
    <div className="cro">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="cro-top">
        <ServiceSlider />
      </div>


      <div className="cro-approach">
        <div className="cro-approach-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
            alt=""
          />
        </div>
        <div className="cro-approach-right">
          <h2>Why cro marketing matters </h2>
          <p>
            cro is an essential tool in your wider marketing strategy,
            whether you’re looking to get your social media soaring or support
            your SEO.
          </p>
          <p>
            Behind every successful piece of cro is careful planning and a
            strong strategy to ensure it meets the requirements of not just your
            business, but of the end user. Our team is experienced in planning
            cro and uncovering audience demand through keyword and
            competitor research.
          </p>
          <p>
            We create unique and compelling cro, which can be shared via
            your marketing channels, including on your website, social media,
            brochures, and beyond. We are also able to assist in updating
            existing cro to enhance any untapped SEO potential.
          </p>
        </div>
      </div>

      <div className="cro-user">
        <div className="cro-user-left">
          <h2>The impact of CRO</h2>
          <p>
          If you're looking to grow your business by increasing sales and revenue, then conversion rate optimisation is a crucial step to success. 
          </p>
        </div>
        <div className="cro-user-right">
          <div className="cro-user-right-items">
            <div className="cro-user-right-item">
              <h2>30% <FaArrowUpLong className="up-arrow"/></h2>
              <p>billion active social media users in 2024</p>
            </div>

            <div className="cro-user-right-item">
              <h2>60% <FaArrowUpLong className="up-arrow"/></h2>
              <p>
                different social media platforms used per person (on average)
              </p>
            </div>

            <div className="cro-user-right-item">
              <h2>90% <FaArrowUpLong className="up-arrow"/></h2>
              <p>billion monthly active users on Facebook in 2024</p>
            </div>
          </div>
        </div>
      </div>

      <Service />

      <div className="cro-teams">
        <div className="cro-teams-container">
    
          <ServiceTeam  />
        </div>
      </div>
    </div>
  );
};

export default Cro;
