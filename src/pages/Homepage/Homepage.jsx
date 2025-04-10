import "./Homepage.scss";

import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Partner from "../../components/Partner/Partner";
import Service from "../../components/Service/Service";
import { homeServiceData } from "../../assets/data";


const Homepage = () => {
  return (
    <div className="homepage">
      <HomeBanner />
      <Service approachData={homeServiceData} />
      <HomeAbout />
      <Partner />
    </div>
  );
};

export default Homepage;
