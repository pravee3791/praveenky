import React, { useEffect, useState } from "react";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { Icon } from "@mui/material";
import showdown from "showdown";
import data from "../blogs-data/main.json";

const BlogComponent: React.FC = () => {
  const [visibleBlogs, setVisibleBlogs] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [blogContents, setBlogContents] = useState<{ [key: number]: string }>(
    {}
  );

  const fetchMarkdown = async (index: number, filePath: string) => {
    try {
      const response = await fetch("../blogs-data/1.md");
      console.log(response);
      const text = await response.text();
      console.log(text);
      const converter = new showdown.Converter();
      const html = converter.makeHtml(text);
      setBlogContents((prevState) => ({
        ...prevState,
        [index]: html,
      }));
    } catch (error) {
      console.error("Error fetching markdown file:", error);
    }
  };

  const expandBlog = (index: number, filePath: string) => {
    setVisibleBlogs((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));

    if (!visibleBlogs[index]) {
      fetchMarkdown(index, filePath);
    }
  };

  return (
    <div className="blogPage">
      {data.blogPosts.map((item, index) => {
        return (
          <div key={index} className="blogCard">
            <div className="blogInfo">{item.date}</div>
            <div className="blogHeader">{item.heading}</div>
            <div className="blogSnap">
              {item.displayContent}
              <Icon onClick={() => expandBlog(index, item.filePath)}>
                <SouthEastIcon style={{ color: "white" }} fontSize="medium" />
              </Icon>
            </div>
            <div
              className={`blogBody ${
                visibleBlogs[index] ? "visible" : "hidden"
              }`}
            >
              <div dangerouslySetInnerHTML={{ __html: blogContents[index] }} />
            </div>
            <div className="blog-divider"></div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogComponent;
