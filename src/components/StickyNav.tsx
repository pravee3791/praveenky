import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Icon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

interface NavBarProps {
  setIsCustomCursor: React.Dispatch<React.SetStateAction<boolean>>;
}
const NavBar: React.FC<NavBarProps> = ({ setIsCustomCursor }) => {
  const removePointerDecoration = () => {
    setIsCustomCursor(false);
  };
  const addPointerDecoration = () => {
    setIsCustomCursor(true);
  };
  return (
    <>
      {/* <img src={logo} alt="" /> */}
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
            {/* <a href={pdfURL} target="_blank">
              Resume
            </a> */}
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
    </>
  );
};

export default NavBar;
