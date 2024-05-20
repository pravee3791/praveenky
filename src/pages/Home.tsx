import StickyNav from "../components/StickyNav";
import ScrollDown from "../components/ScrollDown";
import { useState } from "react";
import CustomCursor from "../components/CustomCursor";
import "./../App.css";
const Home = () => {
  const [isCustomCursor, setIsCustomCursor] = useState(true);
  return (
    <>
      {isCustomCursor && <CustomCursor />}
      <StickyNav setIsCustomCursor={setIsCustomCursor} />
      <div className="main">
        <div className="card">
          <div>
            <div>Testing Github workflow</div>
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
          <ScrollDown></ScrollDown>
        </div>
        <div className="card">
          <div>Experiences</div>
          <div className="cardContent">Under Construction...</div>
        </div>
        <div className="card">
          Projects <div className="cardContent">Under Construction...</div>
        </div>
      </div>
    </>
  );
};

export default Home;
