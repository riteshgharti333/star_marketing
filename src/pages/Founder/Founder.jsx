import "./Founder.scss";

import founder_img from "../../assets/images/founder.jpeg";

import { FaUserGraduate, FaCode, FaSmile, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const founderCards = [
  {
    icon: <FaUserGraduate className="icon" />,
    text: "Led by a young digital marketing expert in India",
  },
  {
    icon: <FaCode className="icon" />,
    text: "Customized web development and SEO solutions/ app development and many more.",
  },
  {
    icon: <FaSmile className="icon" />,
    text: "200+ happy clients in just 3.5 years",
  },
  {
    icon: <FaChartLine className="icon" />,
    text: "Proven results with data-driven strategies",
  },
];

const Founder = () => {
  return (
    <div className="founder">
      <section class="founder-section">
        <div class="floating-shapes">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div class="grid-overlay"></div>

        <div class="particles" id="particles-js"></div>

        <div class="founder-content">
          <div className="founder-content-container">
            <div className="founder-content-left">
              <h2>Meet Our Founder</h2>
              <p>
                Sohel Ali: From Passion to Purpose – The Story Behind Star
                Marketing
              </p>

              <p>
                In the heart of Sikar, Rajasthan, a young visionary named Sohel
                Ali was born in 2001 with a deep-rooted passion for computers
                and technology. Unlike most, Sohel didn’t just follow trends—he
                created his own path.
              </p>
              <p>
                In 2018, while most of his peers were still figuring out life,
                Sohel made a bold decision: he wanted to do something unique,
                something that would stand out. His journey began humbly as a
                sales executive at Hinduja Housing. The road wasn’t smooth—he
                faced betrayal and fraud, but never gave up. These experiences
                only made his vision clearer and his determination stronger.
              </p>
              <Link to={"/contact-us"} className="founder-btn">Connect With Us</Link>
            </div>
            <div className="founder-content-right">
              <img src={founder_img} alt="" />
            </div>
          </div>

          <div className="founder-content-desc">
            <p>
              Soon, Sohel found himself working with HikeMe, a digital marketing
              agency, where he discovered his true calling. He dove deep into
              the world of digital marketing and web development, mastering
              strategies, platforms, and the art of client communication. It was
              here he realized that success isn't just about selling—it's about
              understanding the client's needs and building long-term
              relationships.
            </p>
            <p>
              On 9th August 2022, Sohel turned his dreams into reality and
              founded Star Marketing, with a mission to redefine digital growth.
              Starting with just one client—Morchang Hotel in Sikar—the results
              were outstanding. One happy client turned into ten, and ten into
              hundreds.
            </p>
            <p>
              Today, with 200+ clients across 3.5 years, Sohel Ali has built
              Star Marketing into one of the best digital marketing agencies in
              India. His approach is simple but powerful: treat every brand like
              it’s your own. From SEO and social media marketing to web
              development services and branding, Star Marketing offers
              innovative solutions tailored to every client.
            </p>
            <p>
              Sohel’s story is more than just a success tale—it’s a testament to
              passion, perseverance, and purpose.
            </p>
          </div>
        </div>
        <div class="custom-wave"></div>
      </section>

      <div className="founder-choose">
        <h2>Why Choose Star Marketing?</h2>

        <div className="founder-choose-cards">
          {founderCards.map((card, index) => (
            <div key={index} className="founder-choose-card">
              {card.icon}
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <p className="founder-last-desc">
          Let’s Write Your Success Story Together. Get in touch with Star
          Marketing – where growth is not just a goal, it’s a guarantee.
        </p>
      </div>
    </div>
  );
};

export default Founder;
