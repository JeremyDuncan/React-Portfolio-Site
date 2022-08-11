// *****************************************************************************
// This component displays the Contact section in an Accordian Component
// Goes to ==> App.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div sx={{ boxShadow: "0px -18px 8px 3px rgba(0,0,0,1)" }}>
      {/* =============== === ACCORDIAN === ============*/}
      <Accordion
        sx={{ bgcolor: "primary.main", color: "contrast.textLight" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "contrast.textLight" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: "bold",
              margin: "auto",
            }}
          >
            Connect With Jeremy
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ bgcolor: "lightgrey", color: "primary.contrastText" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={0}
              gap={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ borderRadius: "0px" }}
            >
              {/* ============CONTACT LINK ==================================*/}
              <Button
                sx={{ color: "contrast.textLight" }}
                href="mailto:jeremy.duncan1984@gmail.com"
                target="_blank"
                rel="noopener"
                variant="contained"
              >
                <EmailRoundedIcon fontSize="large" />
              </Button>
              {/* ============CONTACT LINK END ==============================*/}
              {/* ============CONTACT LINK ==================================*/}
              <Button
                sx={{ color: "contrast.textLight" }}
                href="tel:770-309-2046"
                target="_blank"
                rel="noopener"
                variant="contained"
              >
                <PermPhoneMsgRoundedIcon fontSize="large" />
              </Button>
              {/* ============CONTACT LINK END ==============================*/}
              {/* ============CONTACT LINK ==================================*/}
              <Button
                sx={{ color: "contrast.textLight" }}
                href="https://www.linkedin.com/in/jeremy-duncan2021/"
                target="_blank"
                rel="noopener"
                variant="contained"
              >
                <LinkedInIcon fontSize="large" />
              </Button>
              {/* ============CONTACT LINK END ==============================*/}
              {/* ============CONTACT LINK ==================================*/}
              <Button
                sx={{ color: "contrast.textLight" }}
                href="https://github.com/JeremyDuncan"
                target="_blank"
                rel="noopener"
                variant="contained"
              >
                <GitHubIcon fontSize="large" />
              </Button>
              {/* ============CONTACT LINK END ==============================*/}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
