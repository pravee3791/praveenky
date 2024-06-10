import StickyNav from "../components/StickyNav";
import ScrollDown from "../components/ScrollDown";
import { useState } from "react";
import CustomCursor from "../components/CustomCursor";
import "./../App.css";
import Experiences from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  const quoteText = ` * { box-sizing: border-box; }`;
  const [isCustomCursor, setIsCustomCursor] = useState(true);

  return (
    <>
      {isCustomCursor && <CustomCursor />}
      <StickyNav setIsCustomCursor={setIsCustomCursor} />
      <div className="main-home">
        <div className="card">
          {/* <div className="background-text" id="backgroundText">
            {quoteText}
          </div> */}
          <div>
            <div className="cardContent">Hi, I am Praveen Yadav</div>
            <div className="cardContent">
              Senior Software Engineer @ Care.com.
            </div>
            <div className="contactCard">
              <span>Berlin , Germany</span>
              <span>|</span>
              <span>(+49) 155 10263803</span>
            </div>
          </div>
          {/* <div className="spacer"></div> */}
          <ScrollDown></ScrollDown>
        </div>
        <div className="card background-card2">
          <Experiences></Experiences>
        </div>
        <div className="card background-card3">
          <Projects></Projects>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
