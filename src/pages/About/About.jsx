import "./About.scss";

import AboutBanner from "../../components/AboutComp/AboutBanner/AboutBanner";
import AboutCulture from "../../components/AboutComp/AboutCulture/AboutCulture";
import AboutMission from "../../components/AboutComp/AboutMission/AboutMission";
import AboutPeople from "../../components/AboutComp/AboutPeople/AboutPeople";
import AboutSlider from "../../components/AboutComp/AboutSlider/AboutSlider";
import Choose from "../../components/AboutComp/Choose/Choose";
import Story from "../../components/AboutComp/Story/Story";


const About = () => {
  return (
    <div className="about">
      <AboutBanner />
      <Story />
      <AboutSlider />
      <AboutMission />
      <Choose />
      <AboutCulture />
      <AboutPeople />
      <div className="about-empty">

      </div>
    </div>
  );
};

export default About;
