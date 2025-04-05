import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Service from "../../components/Service/Service";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeBanner />
      <Service />
      <HomeAbout />
    </div>
  );
};

export default Homepage;
