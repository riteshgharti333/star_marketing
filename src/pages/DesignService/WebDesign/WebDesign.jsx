import "./WebDesign.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import { webServiceData } from "../../../assets/serviceSliderData/serviceSliderData";

const WebDesign = () => {
  const title =
    "Elevate your online presence with stunning and strategic web design";
  const desc =
    "We craft visually striking, user-focused websites that not only look amazing but drive results—customized for your brand, your audience, and your goals.";

  const smdesc = "Web Design";

  return (
    <div className="webDesign">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="webDesign-content">
        <ServiceSlider serviceData={webServiceData} />

        {/* //////////////////// */}

        <div className="webDesign-content2">
          <div className="webDesign-content2-top">
            <div className="webDesign-content2-top-left"></div>
            <div className="webDesign-content2-top-right">
              <p>
                <div className="dot"></div>Selected Works
              </p>
              <h2>Take a look at some previous web design projects</h2>
            </div>
          </div>

          <div className="webDesign-content2-cards">
            <div className="webDesign-content2-card">
              <img
                src="https://www.bluefrontier.co.uk/images/case-studies/neighbourly/neighbourly-cs-header.jpg"
                alt=""
              />
              <h2>TK Producton Film</h2>
              <div className="webDesign-content2-card-desc">
                <span>TK Producton Film</span>
              </div>
            </div>
            <div className="webDesign-content2-card">
              <img
                src="https://www.bluefrontier.co.uk/images/case-studies/neighbourly/neighbourly-cs-header.jpg"
                alt=""
              />
              <h2>TK Producton Film</h2>
              <div className="webDesign-content2-card-desc">
                <span>TK Producton Film</span>
              </div>
            </div>{" "}
            <div className="webDesign-content2-card">
              <img
                src="https://www.bluefrontier.co.uk/images/case-studies/neighbourly/neighbourly-cs-header.jpg"
                alt=""
              />
              <h2>TK Producton Film</h2>
              <div className="webDesign-content2-card-desc">
                <span>TK Producton Film</span>
              </div>
            </div>
          </div>
          <div className="webDesign-btn">
            <button>View All Work</button>
          </div>
        </div>
      </div>

      <div className="webDesign-user">
        <div className="webDesign-user-container">
          <div className="webDesign-user-left">
            <h2>Crafting Exceptional Web Experiences</h2>
            <p>
              A great website goes beyond just looking good — it should be
              intuitive, goal-driven, and built with your audience in mind.
            </p>
            <p>
              Every design choice influences how a user interacts with your
              brand, from the structure of your navigation to the placement of
              calls to action. Our approach to web design focuses on creating
              user-first digital experiences that are both visually compelling
              and functionally seamless. By combining strategic layout,
              thoughtful content, and responsive design, we ensure your visitors
              are guided toward key actions that drive real results. Our web
              designers collaborate with developers, marketers, and content
              specialists to craft websites that don’t just look great — they
              convert.
            </p>
          </div>
          <div className="webDesign-user-right">
            <img
              src="https://www.bluefrontier.co.uk/images/services/design/graphicdesign/graphic-design-content.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="empty-div" style={{ paddingTop: "100px" }}></div>
    </div>
  );
};

export default WebDesign;
