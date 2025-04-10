import "./Analytics.scss";

import ServiceBanner from "../../../components/ServiceBanner/ServiceBanner";
import ServiceSlider from "../../../components/ServiceSlider/ServiceSlider";
import Service from "../../../components/Service/Service";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { chooseData } from "../../../assets/data";
import ServiceTeam from "../../../components/ServiceTeam/ServiceTeam";
import { dataAnalyticsReportingServiceData } from "../../../assets/serviceSliderData/markSliderData";
import { analyticApproachData } from "../../../assets/approachData/marketingApproachData";
import ServiceOption from "../../../components/ServiceOption/ServiceOption";
import { dataAnalyticsServiceOption } from "../../../assets/serviceOptionData/serviceOptionData";

const Analytics = () => {
  const title = "Unlock actionable insights with data analytics and reporting";
  const desc =
    "We transform raw data into clear, strategic insights—delivering custom dashboards, performance reports, and analytics that guide smarter decisions and drive measurable business outcomes.";

  const smdesc = "Data Analytics & Reporting";

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDesc = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="analytics">
      <ServiceBanner title={title} desc={desc} smdesc={smdesc} dot="mark" />

      <div className="analytics-top">
        <ServiceSlider
          serviceData={dataAnalyticsReportingServiceData}
          dot="mark"
        />
      </div>

      <div className="analytics-approach">
        <div className="analytics-approach-left">
          <img
            src="https://www.bluefrontier.co.uk/images/services/development/mobile-app-development/mobile-application.jpg"
            alt=""
          />
        </div>
        <div className="analytics-approach-right">
          <h2>Data Analytics & Reporting That Drives Growth</h2>
          <p>
            In today’s digital landscape, data is more than just numbers — it’s
            the foundation for impactful decision-making. Our Data Analytics and
            Reporting services turn raw metrics into actionable insights,
            helping you understand user behavior, campaign performance, and
            business trends.
          </p>
          <p>
            From tracking website traffic and conversion rates to monitoring
            social media engagement and paid ad performance, we provide
            comprehensive analytics solutions. Our team leverages
            industry-leading tools to ensure accuracy, clarity, and relevance in
            every report.
          </p>
          <p>
            We don’t just deliver reports — we offer strategic interpretations.
            Whether you're aiming to optimize marketing ROI, refine customer
            journeys, or identify growth opportunities, our data-driven approach
            ensures your decisions are backed by reliable insights.
          </p>
        </div>
      </div>

      <Service approachData={analyticApproachData} />

      <div className="analytics-teams">
        <div className="analytics-teams-container">
          <ServiceOption serviceOption={dataAnalyticsServiceOption} />

          <div className="analytics-teams-reporting">
            <div className="analytics-teams-reporting-left">
              <img
                src="https://www.bluefrontier.co.uk/images/services/digital/analyticsreporting/integrated-report.jpg"
                alt=""
              />
            </div>

            <div className="analytics-teams-reporting-right">
              <h2>Integrated Analytics & Custom Dashboards</h2>
              <p>
                Unlock the full potential of your marketing data with integrated
                reporting solutions powered by Looker Studio. At Blue Frontier,
                we build dynamic, easy-to-navigate dashboards that centralise
                metrics from all your digital channels—delivering performance
                insights in one place.
              </p>
              <p>
                Our bespoke reporting tools go beyond surface-level stats.
                Designed to align with your unique KPIs, they simplify complex
                data into visually rich, actionable reports. Whether you're
                monitoring campaign efficiency or uncovering growth
                opportunities, our integrated analytics provide the clarity
                needed to refine your strategy and drive measurable
                results—without the need for endless spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="marketing-empty"></div>
    </div>
  );
};

export default Analytics;
