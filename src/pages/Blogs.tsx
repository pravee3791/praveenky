import { useState } from "react";
import StickyNav from "../components/StickyNav";
import BlogComponent from "../components/BlogPage";

const Blogs = () => {
  const [isCustomCursor, setIsCustomCursor] = useState(true);
  return (
    <>
      {/* {isCustomCursor && <CustomCursor />} */}
      <StickyNav showMultiColor={true} setIsCustomCursor={setIsCustomCursor} />
      <BlogComponent></BlogComponent>
    </>
  );
};

export default Blogs;
