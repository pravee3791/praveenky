import { useState } from "react";
import StickyNav from "../components/StickyNav";
import BlogComponent from "../components/BlogPage";

const Blogs = () => {
  const [isCustomCursor, setIsCustomCursor] = useState(true);
  return (
    <>
      <StickyNav showMultiColor={false} setIsCustomCursor={setIsCustomCursor} />
      <BlogComponent></BlogComponent>
    </>
  );
};

export default Blogs;
