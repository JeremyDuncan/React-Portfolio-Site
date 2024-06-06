// *****************************************************************************
// This component displays the Military training section
// Goes to:
// ==>  Military.js Component
// *****************************************************************************
import SchoolIcon from "@mui/icons-material/School";
import { Box, Divider, Grid, Paper, Typography, styled } from '@mui/material';

import Image from "mui-image";
import NavyAbout from "./NavyAbout";
import honor_guard from '../../images/military-images/honor_guard.webp';
import me1 from '../../images/military-images/me1.webp';
import me2 from '../../images/military-images/me2.webp';
import me_hillary_clinton from '../../images/military-images/me_hillary_clinton.webp';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const militaryTrainingData = [
  {
    title: "Security Reaction Force Advanced",
    date: "2016",
    location: "Academi-Southwest, San Diego, CA",
  },
  {
    title: "Armed Sentry/Security Reaction Force- Basic",
    date: "2016",
    location: "Academi-Southwest, San Diego, CA",
  },
  {
    title: "Stabilized Glide Slope Indicator and Wave Off Light System Maintenance",
    date: "2016",
    location: "Center for Naval Aviation Technical Training Unit, North Island, San Diego, CA",
  },
  {
    title: "MarCom Integrated Voice Communication System (IVCS)",
    date: "2015",
    location: "Center for Surface Combat Systems, San Diego, CA",
  },
  {
    title: "Data Link Communication System Maintenance Technician (DLCSMT)",
    date: "2015",
    location: "Center for Surface Combat Systems, Dam Neck, Virginia Beach, VA",
  },
  {
    title: "AN/WSN-7(V) INS and AN/WSN-7B(V) RLG Operation and Maintenance",
    date: "2014",
    location: "Center for Surface Combat Systems, Dam Neck, Virginia Beach, VA",
  },
  {
    title: "Information Systems Maintenance Technician School",
    date: "2012",
    location: "Center for Information Dominance, Dam Neck, Virginia Beach, VA",
  },
  {
    title: "Instructional Delivery Continuum (IDC) - Journeyman Instructor Training (JIT) - Basic Instructor",
    date: "2011",
    location: "Navy Leadership Training, Norfolk, VA",
  },
  {
    title: "Microminiature Electronics Repair",
    date: "2010",
    location: "Fleet Training Center, Norfolk, VA",
  },
  {
    title: "AN/SPS-73 Surface Search Radar Set Combined Maintenance School",
    date: "2010",
    location: "Center for Surface Combat Systems, Norfolk, VA",
  },
  {
    title: "Miniature Electronics Repair",
    date: "2007",
    location: "Center for Surface Combat Systems, Norfolk, VA",
  },
  {
    title: "AN/SYQ-7 (V) 2 Naval Modular Automated Communications Systems Maintenance School",
    date: "2006",
    location: "Fleet Training Center, San Diego, CA",
  },
  {
    title: "Ultra High Frequency Systems (UHF) Technician School",
    date: "2006",
    location: "Center for Service Support Learning, San Diego, CA",
  },
  {
    title: "High Frequency Systems (HF) Maintenance Technician School",
    date: "2006",
    location: "Center for Service Support Learning, San Diego, CA",
  },
  {
    title: "Electronics Technician (ET) A School",
    date: "2005-2006",
    location: "Center for Surface Combat Systems, Great Lakes, IL",
  },
  {
    title: "Electronics Technician Apprentice Technical Training",
    date: "2005",
    location: "Center for Surface Combat Systems, Great Lakes, IL",
  },
];


const images = [
  { src: me1, shift: 'right', size: { xs: 5, sm: 5, md: 2.5, lg: 2.5, xl: 2.5 } },
  { src: me2, shift: 'bottom', size: { xs: 5, sm: 5, md: 2.5, lg: 2.5, xl: 2.5 } },
  { src: honor_guard, shift: 'top', size: { xs: 6.5, sm: 6.5, md: 3.3, lg: 3.3, xl: 3.3 } },
  { src: me_hillary_clinton, shift: 'left', size: { xs: 3.6, sm: 3.6, md: 1.84, lg: 1.84, xl: 1.84 } },
];



const MilitaryTraining = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            color="lightgray"
            sx={{
              fontWeight: "500",
              textAlign: "center",
              display: { xs: "none", sm: "none", md: "initial" },
            }}
          >
            Military Career
          </Typography>
          <Typography
            variant="h4"
            color="lightgrey"
            sx={{
              fontWeight: "500",
              textAlign: "center",
              display: { xs: "initial", sm: "initial", md: "none" },
            }}
          >
            Military Career
          </Typography>

 
        </Grid>
        <Grid
          elevation={12}
          mb={5}
          xs={10}
          sx={{
            height: "1px",
            border: "2px solid clear",
            borderRadius: "20px",
          }}
        />
        {/*//========================= Pictures GRID BOX ================> */}
        <Grid
          sx={{
            gap: { xs: ".3rem", sm: ".3rem", md: "1rem", xl: "1rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          pb={5}
          pr={2}
          pl={2.5}
        >

        {images.map((image, index) => (
          <Grid item {...image.size} key={index}>
            <Item sx={{ bgcolor: 'primary.secondary' }} elevation={12}>
              <Image
                src={image.src}
                sx={{ borderRadius: '5px' }}
                shift={image.shift}
                distance={400}
              />
            </Item>
          </Grid>
        ))}
        </Grid>
        {/*//================= PICTURE GRID END =========================> */}
    
        <Grid item xs={11} md={11} lg={11} xl={6} sx={{ mt: 5, pl: "20px", pr: "20px"  }}>
          <Item elevation={14} sx={{ bgcolor: "primary.main"}}>
            <Item sx={{ bgcolor: "primary.dark", color: "contrast.textLight", textShadow: "1.5px 1.5px 4px #292727", fontWeight: "bold" }}>
              <Typography variant="h4" sx={{ paddingBottom: 1, display: { xs: "none", sm: "initial" } }}>
                Professional Accomplishments
              </Typography>
              <Typography variant="h5" sx={{ paddingBottom: 0, display: { xs: "initial", sm: "none" } }}>
                Professional Accomplishments
              </Typography>
            </Item>
            <Item sx={{ background: "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)", color: "contrast.textDark", textShadow: "0px 3px 8px #8a8a8a" }}>
              <NavyAbout />
            </Item>
          </Item>
        </Grid>

        <Grid item xs={11} md={11} lg={11} xl={6} sx={{ mt: 5, pl: "20px", pr: "20px" }}>
          <Item elevation={14} sx={{ bgcolor: "primary.main" }}>
            <Item
              sx={{
                bgcolor: "primary.dark",
                color: "contrast.textLight",
                textShadow: "1.5px 1.5px 4px #292727",
                fontWeight: "bold"
              }}
            >
              <Typography
                variant="h4"
                sx={{ paddingBottom: 1, display: { xs: "none", sm: "initial" } }}
              >
                Military Training      
              </Typography>
              <Typography
                variant="h5"
                sx={{ paddingBottom: 0, display: { xs: "initial", sm: "none" } }}
              >
                Military Training
              </Typography>
            </Item>
            <Item
              sx={{
                background:
                  "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)",
                color: "contrast.textDark",
                textShadow: "0px 3px 8px #8a8a8a"
              }}
            >
              {militaryTrainingData.map((training, idx) => (
                <Box key={idx} sx={{ mb: 3 }}>
                  <Typography
                    sx={{
                      color: "contrast.textDark",
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", sm: "1.3rem", md: "1.4rem" },
                      textAlign: "left"
                    }}
                  >
                    <SchoolIcon fontSize="small" /> {training.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "contrast.textDark",
                      fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                      pl: 4,
                      textAlign: "left"
                    }}
                  >
                    {training.date} | {training.location}
                  </Typography>
                  {idx < militaryTrainingData.length - 1 && (
                    <Divider sx={{ my: 3, borderColor: "gray" }} />
                  )}
                </Box>
              ))}
            </Item>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MilitaryTraining;

   
