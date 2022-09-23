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
        className="btn"
        sx={{ color: "button.textLight" }}
        href="https://docs.google.com/document/d/1snAOXQbBoo5nFXIvBxIIokE2Ld9oTf9V/edit?usp=sharing&ouid=112160917683681091638&rtpof=true&sd=true"
        target="_blank"
        rel="noopener"
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
