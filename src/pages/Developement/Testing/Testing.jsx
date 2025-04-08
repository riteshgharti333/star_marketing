import "./Testing.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import Service from "../../../components/Service/Service";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { aboutCards } from "../../../assets/data";

import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";

const Testing = () => {
  const title =
    "Keep your digital assets running smoothly, providing users with the best experience";
  const desc =
    "We'll collaborate closely with you to craft a website that perfectly captures the essence of your business, showcasing your unique selling points and leaving a lasting impression on your audience.";
  const smdesc = "Testing";


  return (
    <div className="testing">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="testing-top">
        <h2>Custom testing solutions</h2>
        <p>
          A custom testing website solution empowers businesses to build a site
          that aligns perfectly with their specific operational requirements and
          brand vision. Unlike standard templated options, a custom-built
          website offers true flexibility, enabling seamless system integration,
          and payment gateways. This adaptability allows for enhanced user
          experience, paving the way for improved scalability as the business
          grows.{" "}
        </p>
      </div>

      <div className="testing-service-slider">
        <ServiceSlider />
      </div>

      <Service />

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
          <ServiceTeam dev="dev" />
        </div>
      </div>

      <div className="testing-user">
        <div className="testing-user-left">
          <h2>Providing holistic support for your testing business</h2>
          <p>
            As the Holistic Plus+TM Digital Agency, we can go beyond website
            development to support your testing business in a range of other
            ways. From app development through to branding and ongoing digital
            marketing support, we can help ensure to the growth and success of
            your business. By partnering with Blue Frontier, you gain access to
            a team of over 100 experts across every digital specialism,
            including testing SEO, graphic design, video production, and paid
            advertising.
          </p>
          <p>
            If you'd like to find out more about our holistic working
            methodology, then please visit our Digital Partner page..
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
