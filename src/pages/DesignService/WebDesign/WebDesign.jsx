import "./WebDesign.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";

const WebDesign = () => {
  const title =
    "Catch the eye of your users with clever and creative graphic design";
  const desc =
    "From enhancing your brand identity to creating professional packaging and print designs, we provide bespoke graphic design services for businesses in every sector.";
  const smdesc = "Web Design";

  return (
    <div className="webDesign">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} />

      <div className="webDesign-content">
        <ServiceSlider />

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
            <h2>Designing for the end user</h2>
            <p>
              A website should be engaging, easy to navigate and focused on your
              target audience.
            </p>
            <p>
              The user journey dictates whether you will be successful in
              converting a prospect into a profitable customer, and each
              decision you make about the design of your website will affect how
              a user interacts with your brand. Alongside an eye-catching
              design, you’ve got to include the right information so that users
              can make informed decisions, and your calls to action should drive
              them toward a key goal. Our web designers can create a website
              that puts your users first. We’ll guide you on the best features
              and create user-focused designs with smooth navigation, working
              closely with our content writers and marketing team to make sure
              your website converts.
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

      <ServiceTeam />
    </div>
  );
};

export default WebDesign;
