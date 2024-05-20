import { AppBar, Toolbar, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import MailIcon from "@mui/icons-material/Mail";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "black", height: "2vh" }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          edge="end"
          color="inherit"
          href="https://www.linkedin.com"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          href="https://yourblog.com"
          target="_blank"
        >
          <ArticleIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          href="mailto:your-email@example.com"
        >
          <MailIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
