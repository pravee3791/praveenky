import StickyNav from "../components/StickyNav";
import ScrollDown from "../components/ScrollDown";
import { useState } from "react";
import CustomCursor from "../components/CustomCursor";
import "./../App.css";
import Experiences from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  // const quoteText = ` * { box-sizing: border-box; }`;
  const quoteText =
    "Coding: where logic paints with creativity, and bugs add unexpected twists to the masterpiece.";
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
          <div className="card-hover">
            <div className="cardContent superLargeText ">
              Hi, I am Praveen Yadav{" "}
            </div>
            <div className="cardContent">
              Senior Software Engineer @ Care.com.
            </div>

            <div className="contactCard">
              <span>Berlin , Germany</span>
              <span>|</span>
              <span>(+49) 155 10263803</span>
            </div>
            <div className="card-para typewriter">
              Welcome to my small part of Internet. Here you will find my work
              experience, my personal projects, and my thought reflection in
              blogs.
              <br />
              I am always looking for exciting work and projects. My expertise
              lies in web application development, both front end and backend.
              <br />
              JAVA and JS are my chosen tools.
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
