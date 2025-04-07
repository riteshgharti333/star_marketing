import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [openCard, setOpenCard] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "blurred" : ""}`}>
      <div className="navbar-left">
        <img src={logo} alt="" />
      </div>
      <div className="nav-mobile-menu">
        <MobileMenu />
      </div>
      <div className="navbar-center">
        <ul>
          <li>
            <Link to={"/about-us"}>About</Link>
          </li>
          <li>
            <Link onClick={() => setOpenCard(!openCard)}>Conect</Link>

            {openCard && (
              <div className="nav-card">
                <div className="nav-card-left">
                  <div className="nav-card-left-top">
                    <p>All About Us</p>
                    <p>
                      Find out more about who we are, our values and culture,
                      our history, and our incredible team.
                    </p>
                  </div>
                  <hr />
                  <div className="nav-card-left-bottom">
                    <p>Explore</p>
                    <div className="nav-card-links">
                      <span>Our Work</span>
                      <span>Latest News</span>
                      <span>Meet the Team</span>
                    </div>
                  </div>
                </div>
                <div className="nav-card-right">
                  <img
                    src="https://www.bluefrontier.co.uk/images/menu/digital-horizons-menu-block.jpg"
                    alt=""
                  />
                  <p>Download our latest free whitepaper</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum impedit doloribus nihil, quos quam totam quod, ipsum
                    quas, sit natu
                  </p>
                  <span>Download Today</span>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link>Design</Link>
          </li>
          <li>
            <Link>Development</Link>
          </li>
          <li>
            <Link>Marketing</Link>
          </li>
          <li>
            <Link>Technical</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Navbar;
