// *****************************************************************************
// This component displays my Resume Information
// Goes to to ==> MainSection.js Component
// *****************************************************************************
import DescriptionIcon from "@mui/icons-material/Description";
import { Box, Button } from "@mui/material";

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
        href="https://drive.google.com/file/d/1PGlstEol5OUk9diDouneruzw6PQe3Hx9/view?usp=sharing"
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
