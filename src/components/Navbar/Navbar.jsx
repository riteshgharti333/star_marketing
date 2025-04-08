import "./Navbar.scss";

import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleCard = (index) => {
    setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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

  const location = useLocation();

  useEffect(() => {
    setOpenCardIndex(null);
  }, [location.pathname]);

  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setOpenCardIndex(null);
      }
    };

    if (openCardIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCardIndex]);

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
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about-us"}>About</Link>
          </li>
          <li>
            <Link onClick={() => toggleCard(0)}>Design</Link>

            {openCardIndex === 0 && (
              <div className="nav-card" ref={cardRef}>
                <div className="nav-card-left">
                  <div className="nav-card-left-top">
                    <p>All Design</p>
                    <p>
                      Find out more about who we are, our values and culture,
                      our history, and our incredible team.
                    </p>
                  </div>
                  <hr />
                  <div className="nav-card-left-bottom">
                    <p>Explore</p>
                    <div className="nav-card-links">
                      <Link to={"/design/web-design"} className="nav-card-link">
                        <span>Web Design</span>
                      </Link>
                      <Link
                        to={"/design/graphic-design"}
                        className="nav-card-link"
                      >
                        <span>Graphic Design</span>
                      </Link>
                      <Link to={"/design/branding"} className="nav-card-link">
                        <span>Branding</span>
                      </Link>
                      <Link to={"/design/production"} className="nav-card-link">
                        <span>Production</span>
                      </Link>
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
            <Link onClick={() => toggleCard(1)}>Development</Link>

            {openCardIndex === 1 && (
              <div className="nav-card" ref={cardRef}>
                <div className="nav-card-left">
                  <div className="nav-card-left-top">
                    <p>All Development</p>
                    <p>
                      Find out more about who we are, our values and culture,
                      our history, and our incredible team.
                    </p>
                  </div>
                  <hr />
                  <div className="nav-card-left-bottom">
                    <p>Explore</p>
                    <div className="nav-card-links">
                      <Link
                        to={"/development/web-development"}
                        className="nav-card-link"
                      >
                        <span>Web Development</span>
                      </Link>
                      <Link
                        to={"/development/software-development"}
                        className="nav-card-link"
                      >
                        <span>Software Development</span>
                      </Link>
                      <Link
                        to={"/development/e-commerce"}
                        className="nav-card-link"
                      >
                        <span>e Commerce</span>
                      </Link>
                      <Link
                        to={"/development/app-development"}
                        className="nav-card-link"
                      >
                        <span>App Developement</span>
                      </Link>
                      <Link
                        to={"/development/support-and-maintenance"}
                        className="nav-card-link"
                      >
                        <span>Support & Maintenance</span>
                      </Link>
                      <Link
                        to={"/development/testing"}
                        className="nav-card-link"
                      >
                        <span>Testing</span>
                      </Link>
                      <Link
                        to={"/development/wordpress-development"}
                        className="nav-card-link"
                      >
                        <span>Wordpress</span>
                      </Link>
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
