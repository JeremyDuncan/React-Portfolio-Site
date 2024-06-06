// *****************************************************************************
// This component displays the Contact section in an Accordion Component
// Goes to ==> Military.js Component
// *****************************************************************************
import { EmailRoundedIcon, ExpandMoreIcon, GitHubIcon, LinkedInIcon, PermPhoneMsgRoundedIcon } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const MilitaryContactMe = () => {
  const [expanded, setExpanded] = useState(false);
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
};

export default MilitaryContactMe;
