import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Icon } from "@mui/material";
const ScrollDown = () => {
  return (
    // <div className="container">
    //   <div className="chevron"></div>
    //   <div className="chevron"></div>
    //   <div className="chevron"></div>
    //   <span className="text">Scroll down</span>
    // </div>
    <div className="scroll-down">
      <Icon>
        <KeyboardDoubleArrowDownIcon className="svg-scroll-down"></KeyboardDoubleArrowDownIcon>
        <span>Scroll down</span>
      </Icon>
    </div>
  );
};
export default ScrollDown;
