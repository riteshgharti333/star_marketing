import "./Testing.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { aboutCards } from "../../../assets/data";

import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { testingServiceData } from "../../../assets/serviceSliderData/devSliderData";
import { testingApproachData } from "../../../assets/approachData/devApprochData";

const Testing = () => {
  const title =
    "Ensure flawless performance with thorough and reliable testing";
  const desc =
    "We offer end-to-end testing services—from functionality and usability to performance and security—ensuring your digital products deliver a seamless and bug-free user experience.";
  const smdesc = "Testing";

  return (
    <div className="testing">
      <ServiceBanner
        title={title}
        desc={desc}
        smdesc={smdesc}
        dot="development"
      />

      <div className="testing-top">
        <h2>Custom Testing Solutions for Quality Assurance</h2>
        <p>
          Our tailored testing solutions are designed to ensure your digital
          products meet the highest standards of performance, security, and
          reliability. Unlike off-the-shelf approaches, our testing services are
          customized to align with your unique infrastructure and business
          goals, helping you minimize risk and avoid costly issues post-launch.
        </p>
        <p>
          Whether you're building a website, mobile app, or enterprise platform,
          our team conducts comprehensive testing—from functionality and
          compatibility to load and security testing—ensuring a seamless and
          bug-free experience for your end users. With flexible integration into
          your development process, we support smooth rollouts and long-term
          product stability.
        </p>
      </div>

      <div className="testing-service-slider">
        <ServiceSlider serviceData={testingServiceData} dot="development" />
      </div>

      <Service approachData={testingApproachData} />

      <div className="testing-teams">
        <div className="testing-teams-container">
          <div className="testing-teams-top">
            <p>
              <div className="dot"></div>Our Values Clients
            </p>
          </div>

          <div className="testing-cards">
            {aboutCards.map((item, index) => (
              <div className="testing-card" key={index}>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="testing-user">
        <div className="testing-user-left">
          <h2>End-to-End Support for Your Testing Process</h2>
          <p>
            At Star Marketing, we offer comprehensive testing support that goes
            beyond traditional methods. Our team ensures your digital platforms,
            applications, and systems function seamlessly across all user
            scenarios. Whether you're launching a new product or refining an
            existing one, our testing services are designed to deliver
            performance, accuracy, and reliability.
          </p>
          <p>
            Working with us means tapping into a network of over 100 experts
            across design, SEO, video, branding, and more. From user experience
            testing to load and performance analysis, we tailor every solution
            to match your unique business needs—ensuring smooth functionality,
            optimal speed, and complete confidence in every launch.
          </p>

          <button>Your Digital Partner</button>
        </div>
        <div className="testing-user-right">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/custom-ecom/custom-ecom-systems.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testing;
