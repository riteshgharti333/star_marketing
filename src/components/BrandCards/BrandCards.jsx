import "./BrandCards.scss";

import { brandCards } from "../../assets/serviceSliderData/partnerCards";

const BrandCards = () => {
  return (
    <div className="brandCards">
      <p>
        <div className="dot"></div>Who we've partnered with
      </p>

      <div className="brand-cards">
        {brandCards.map((item, index) => (
          <div className="brand-card" key={index}>
            <img src={item.img} alt="brand-image" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCards;
