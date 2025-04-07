import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MobileMenu.scss";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "Services", submenu: ["Web Design", "App Development", "SEO"] },
  { title: "About", link: "/about-us" },
  { title: "Contact", link: "/contact" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleSubmenu = (index) =>
    setActiveSubmenu(activeSubmenu === index ? null : index);

  const location = useLocation();

  useEffect(() => {
    setActiveSubmenu(false);
    setIsOpen(false);
  }, [location]);
  // 🔥 Close on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
      setActiveSubmenu(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mobileMenu" ref={menuRef}>
      {/* Toggle Button */}
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Animate Presence for Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="menuList"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {menuItems.map((item, i) => (
              <li key={i}>
                {item.submenu ? (
                  <>
                    <div
                      className="submenu-title"
                      onClick={() => toggleSubmenu(i)}
                    >
                      {item.title}
                      <span
                        className={`plus ${activeSubmenu === i ? "open" : ""}`}
                      ></span>
                    </div>
                    <AnimatePresence>
                      {activeSubmenu === i && (
                        <motion.ul
                          className="submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.submenu.map((sub, j) => (
                            <li key={j}>{sub}</li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link to={item.link}>{item.title}</Link>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
