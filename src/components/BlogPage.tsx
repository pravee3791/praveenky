import React, { useEffect, useState } from "react";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { Icon } from "@mui/material";
import data from "../blogs-data/main.json";
import { marked } from "marked";

const BlogComponent: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null); // Correct type for selectedBlog
  const [blogContent, setBlogContent] = useState<string>(""); // Ensure initial state is a string

  useEffect(() => {
    if (selectedBlog !== null) {
      const fetchMarkdownContent = async () => {
        try {
          const markdownResponse = await fetch(`./mddata/{selectedBlog}.md`);
          const markdownText = await markdownResponse.text();
          const parsedMarkdown = await marked(markdownText);
          console.log(parsedMarkdown);
          setBlogContent(parsedMarkdown); // Set the parsed markdown content
        } catch (error) {
          console.error("Error fetching markdown content:", error);
        }
      };
      fetchMarkdownContent();
    }
  }, [selectedBlog]);

  const handleBlogClick = (index: number) => {
    setSelectedBlog(index);
  };

  return (
    <div className="blogPage">
      <div className="experience">
        <div className="experience-head">
          <div className="experience-dot"></div>
          <div className="experience-overline">PROJECTS</div>
        </div>
        {data.blogPosts.map((item, index) => (
          <div key={index} className="project-bod">
            <div className="project-card">
              <div className="project-card-title">
                {item.heading}
                <Icon onClick={() => handleBlogClick(index)}>
                  <SouthEastIcon fontSize={"medium"} />
                </Icon>
              </div>
              <div className="project-card-description">
                {item.displayContent}
                {selectedBlog === index && (
                  <div
                    className="blog-details"
                    dangerouslySetInnerHTML={{ __html: blogContent }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
