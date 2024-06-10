import { useState, useEffect } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Icon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface NavBarProps {
  setIsCustomCursor: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavBar: React.FC<NavBarProps> = ({ setIsCustomCursor }) => {
  const [isLightMode, setIsLightMode] = useState(false);
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isLightMode]);
  const removePointerDecoration = () => {
    setIsCustomCursor(false);
  };
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };
  const addPointerDecoration = () => {
    setIsCustomCursor(true);
  };
  return (
    <>
      <div className="nav">
        <div className="nav-pill-wrapper">
          <div
            className="nav-pill"
            onMouseEnter={removePointerDecoration}
            onMouseLeave={addPointerDecoration}
          >
            <div className="nav-pill-content">
              <Link to="/">Work </Link>
            </div>
            <span className="divider">|</span>

            <div className="nav-pill-content">
              {" "}
              <Link to="/blogs">Blog </Link>
            </div>

            <span className="divider">|</span>
            <div className="nav-pill-content">
              <Link to="/resume">Resume</Link>
            </div>
            <span className="divider">|</span>
            <div className="nav-pill-content">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/praveen3791/"
                >
                  <Icon style={{ fontSize: 20 }}>
                    <LinkedInIcon></LinkedInIcon>
                  </Icon>
                  <Icon style={{ fontSize: 20 }}>
                    <ArrowOutwardIcon />
                  </Icon>
                </a>
              </div>
            </div>
            <span className="divider">|</span>
            <div className="nav-pill-content">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/praveenyadavcare"
                >
                  <Icon style={{ fontSize: 24 }}>
                    <GitHubIcon></GitHubIcon>
                  </Icon>
                  <Icon style={{ fontSize: 20 }}>
                    <ArrowOutwardIcon />
                  </Icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-pill-wrapper">
          <Icon onClick={toggleTheme}>
            <DarkModeIcon></DarkModeIcon>
          </Icon>
        </div>
      </div>
    </>
  );
};

export default NavBar;
