import { SetStateAction, useState } from "react";
import { Icon } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import data from "../data/experience.json";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="experience">
        <div className="experience-head">
          <div className="experience-dot"></div>
          <div className="experience-overline">WORK</div>
        </div>
        <div className="experience-bod">
          {data.map((experience, index) => (
            <div className="experience-card" key={experience.company}>
              <div className="experience-card-title">
                <div className="experience-heading info-experience">
                  {experience.year} | {experience.company}{" "}
                  <Icon
                    onClick={() => handleToggle(index)}
                    onMouseEnter={() => handleToggle(index)}
                  >
                    <NorthEastIcon fontSize={"medium"} />
                  </Icon>
                  <span className="experience-tech">{experience.tech}</span>
                </div>
              </div>
              <div
                className={`experience-card-description ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="experience-subheading info">
                  {experience.role}
                </div>
                <div className="text-info-meta">{experience.date}</div>
                <ul>
                  {experience.description.map((description, i) => (
                    <li key={i}>{description}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
