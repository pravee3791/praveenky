import StickyNav from "../components/StickyNav";
import ScrollDown from "../components/ScrollDown";
import { useEffect, useRef, useState } from "react";
import CustomCursor from "../components/CustomCursor";
import "./../App.css";
import Experiences from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";

const Home = () => {
  // const quoteText = ` * { box-sizing: border-box; }`;
  const [showTechStack, setShowTechStack] = useState(false);
  const targetDivRef = useRef<HTMLDivElement>(null);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [isCustomCursor, setIsCustomCursor] = useState(true);
  return (
    <>
      {isCustomCursor && <CustomCursor />}
      <StickyNav
        setIsCustomCursor={setIsCustomCursor}
        showMultiColor={inView}
      />
      <div className="main-home">
        <div className="card">
          <div
            className="card-hover"
            onMouseEnter={() => {
              setShowTechStack(true);
            }}
            onMouseLeave={() => {
              setShowTechStack(false);
            }}
          >
            <div className="cardContent superLargeText " ref={targetDivRef}>
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

            {/* {showTechStack && (
              <div className="card-techStack ">
                I craft softwares with passion and love.I believe coding is a
                perfect combination of arts and science.
                <br />
                In the world full of AI chatbots , I feel human hand made
                softwares are still the best. I love product and design and
                cherish the feeling of bringing them to life.
                <br />
                Say hi! on linkedIn if you want to have a chat.
              </div>
            )} */}
          </div>
          {/* <div className="spacer"></div> */}

          <ScrollDown></ScrollDown>
        </div>
        <div className="card background-card2" ref={ref}>
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
