import "./Homepage.scss";

import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Partner from "../../components/Partner/Partner";
import Service from "../../components/Service/Service";
import { homeServiceData } from "../../assets/data";
import SEO from "../../components/SEO/SEO";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  const location = useLocation();
  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://www.wingstarmarketing.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <div className="homepage">
      <SEO
        title="WingStar Marketing | SEO, Branding, Website Design, Development & More in India & UK"
        description="WingStar Marketing offers expert services in SEO, Social Media Marketing, Branding, Paid Ads (PPC), Website Design & Development, Content Marketing, Influencer Marketing, E-commerce Marketing, Local SEO & Lead Generation. Serving clients across India & UK."
        keywords="digital marketing agency, SEO services, PPC ads, branding agency, social media marketing, website design, web development, content marketing, influencer marketing, ecommerce marketing, local SEO, lead generation, UK marketing, India marketing, Sikar agency, London SEO, Mumbai marketing, best marketing company"
        url={fullUrl}
      />
      <HomeBanner />
      <Service approachData={homeServiceData} />
      <HomeAbout />
      <Partner />
    </div>
  );
};

export default Homepage;
