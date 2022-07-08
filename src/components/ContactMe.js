import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* =============== === ACCORDIAN === ============*/}
      <Accordion
        sx={{ bgcolor: "primary.dark", color: "primary.contrastText" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.contrastText" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 0, fontWeight: "bold" }}>
            Contact Info
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ bgcolor: "secondary.main", color: "primary.contrastText" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={0}
              gap={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {/* ============CONTACT LINK ================================================*/}
              <Button
                href="mailto:jeremy.duncan1984@gmail.com"
                target="_blank"
                rel="noopener"
                variant="contained"
              >
                <EmailRoundedIcon />
              </Button>
              {/* ============CONTACT LINK END ================================================*/}
              {/* ============CONTACT LINK ================================================*/}
              <Button
                href="tel:770-309-2046"
                target="_blank"
                rel="noopener"
                variant="contained"
              >
                <PermPhoneMsgRoundedIcon />
              </Button>
              {/* ============CONTACT LINK END ================================================*/}
              {/* ============CONTACT LINK ================================================*/}
              <Button
                href="https://www.linkedin.com/in/jeremy-duncan2021/"
                target="_blank"
                rel="noopener"
                variant="contained"
              >
                <LinkedInIcon />
              </Button>
              {/* ============CONTACT LINK END ================================================*/}
              {/* ============CONTACT LINK ================================================*/}
              <Button
                href="https://github.com/JeremyDuncan"
                target="_blank"
                rel="noopener"
                variant="contained"
              >
                <GitHubIcon />
              </Button>
              {/* ============CONTACT LINK END ================================================*/}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
