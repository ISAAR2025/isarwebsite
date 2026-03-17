import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import logo from "../logo1.webp";
import "../styles/global.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const closeNavbar = () => setIsNavbarOpen(false);
  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <>
      {/* TOP BAR */}
      <div className={`top-tagline-bar ${isMobile ? "d-none" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <span className="tagline-text">
                Indian Scientific Aerospace & Robotics
              </span>

              <div className="d-flex align-items-center gap-3">
                <span className="tagline-text">
                  <BiEnvelope /> admin@isaar.in &nbsp;&nbsp;
                  <BiPhone /> +91-6374720788
                </span>
              
              <a
  href="https://store.isaar.in"
  target="_blank"
  rel="noopener noreferrer"
  className="top-store-btn"
>
  Visit Our Store
</a>

         

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`navbar navbar-expand-lg custom-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img src={logo} alt="ISAR Logo" className="navbar-logo me-2" />
            <span className="isar-text">ISAR</span>
          </Link>

          <button className="navbar-toggler" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/Institute", "Institute"],
                ["/services", "Services"],
                ["/careers", "Careers"],
                ["/gallery", "Gallery"],
                ["/contact", "Contact"],
              ].map(([path, label]) => (
                <li className="nav-item" key={path}>
                  <Link
                    to={path}
                    onClick={closeNavbar}
                    className={`nav-link ${location.pathname === path ? "active" : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
