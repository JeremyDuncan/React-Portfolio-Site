// *****************************************************************************
// This component displays my Resume Information
// Goes to to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import DownloadIcon from "@mui/icons-material/Download";
import DescriptionIcon from "@mui/icons-material/Description";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import MyResume from "../download/JeremyDuncan_Resume.docx";

const Resume = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <br />
      <Button
        className="btn ga-btn"
        sx={{ color: "button.textLight" }}
        href="https://drive.google.com/file/d/1v36ahJFkS5oRo8GlDjGuVvi36hk9lafL/view?usp=sharing"
        rel="noopener"
        target="_blank"
        // href={MyResume}
        // download
        variant="contained"
        endIcon={<DescriptionIcon />}
      >
        My Resume
      </Button>
    </Box>
  );
};

export default Resume;
