import { useState } from "react";
import CustomCursor from "../components/CustomCursor";
import StickyNav from "../components/StickyNav";

const Blogs = () => {
  const [isCustomCursor, setIsCustomCursor] = useState(true);
  return (
    <>
      {isCustomCursor && <CustomCursor />}
      <StickyNav setIsCustomCursor={setIsCustomCursor} />
      <div className="cardContent">Blogs Page</div>
      <div className="cardContent">Coming Soon</div>
    </>
  );
};

export default Blogs;
