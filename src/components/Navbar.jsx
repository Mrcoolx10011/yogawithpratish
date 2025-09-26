import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FcMenu } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import logo from "../assets/images/yoga-with-pratish-1.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const homeLink = document.getElementById("home-link");

    if (homeLink) {
      homeLink.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default navigation behavior
        handleScrollToTop(); // Scroll to top
        navigate("/"); // Navigate to the home route
        toggleNav(); // Close the navigation menu
      });
    }

    return () => {
      if (homeLink) {
        homeLink.removeEventListener("click", handleScrollToTop);
      }
    };
  }, [navigate]);

  return (
    <div className="navbar-container">
      <nav className={isOpen ? "navbar expanded" : "navbar"}>
        <div className="logo">
          <Link to="/" onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}>
            <img 
              src={logo} 
              alt="Yoga with Pratish" 
              style={{
                height: '50px',
                width: 'auto',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #d4af37',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </Link>
        </div>
        <div>
          <ul className={`nav-menu ${isOpen ? "show-menu" : ""}`}>
            <li className="item">
              <Link
                to="/"
                id="home-link"
                className="links link-color"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li className="item">
              <Link
                to="/aboutme"
                className="links link-color"
                activeClassName="active-link"
                onClick={toggleNav}
              >
                About
              </Link>
            </li>
            <li className="item">
              <Link
                to="/my-teachings"
                className="links link-color"
                activeClassName="active-link"
                onClick={toggleNav}
              >
                My Teachings
              </Link>
            </li>
            <li className="item">
              <Link
                to="/services"
                className="links link-color"
                activeClassName="active-link"
                onClick={toggleNav}
              >
                Services
              </Link>
            </li>
            <li className="item">
              <Link
                to="/batch-timings"
                className="links link-color"
                activeClassName="active-link"
                onClick={toggleNav}
              >
                Batch Timings
              </Link>
            </li>
            <li className="contact-btn item">
              <button>
                <Link
                  to="/contact"
                  className="links"
                  activeClassName="active-link"
                  onClick={toggleNav}
                >
                  Contact
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleNav}>
          {isOpen ? <GrClose /> : <FcMenu />}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
