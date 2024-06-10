import { Icon } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
const Projects = () => {
  return (
    <>
      <div className="experience">
        <div className="experience-head">
          <div className="experience-dot"></div>
          <div className="experience-overline">PROJECTS</div>
        </div>
        <div className="project-bod ">
          <div className="project-card">
            <div className="project-card-title">
              WirTwo
              <Icon>
                <NorthEastIcon fontSize={"medium"} />
              </Icon>
            </div>
            <div className="project-card-description">
              An app that helps two people set up their tasks and have
              conversation over it. An easiest way to get things done for folks
              who shar something between them. A project, A child or maybe just
              some love.
            </div>
          </div>
        </div>

        <div className="project-bod ">
          <div className="project-card">
            <div className="project-card-title">
              Simple Calculator
              <Icon>
                <NorthEastIcon fontSize={"medium"} />
              </Icon>
            </div>
            <div className="project-card-description">
              A modern take on calculator design. Inspired by dribble designs.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
