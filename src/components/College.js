// *****************************************************************************
// This component displays my Colleges and Degrees
// Goes to to ==> MainSection.js Component
// *****************************************************************************
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { Box, Button, Divider, Grid, List, Typography } from '@mui/material';
import React from 'react';
import BachelorDegree from "./BachelorDegree.js";
import Degrees from "./Degrees.js";

const degreeData = [
  {
    type: "Bachelor of Science",
    title: "Computer Information Systems, Software Programming",
    university: "DeVry University",
    date: "May 2021 - October 2023",
    grade: "4.0 GPA, Summa Cum Laude",
    component: <BachelorDegree />,
  },
  {
    type: "Associate of Applied Science",
    title: "Information Technology and Networking",
    university: "DeVry University",
    date: "May 2021 - June 2022",
    grade: "4.0 GPA, Honors",
    component: <Degrees />,
  },
];

const College = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 2 }}>
      <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
        <List sx={{ width: "100%", maxWidth: 750 }}>
          {degreeData.map((data, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: "primary.light",
                color: "contrast.textDark",
                borderRadius: 2,
                boxShadow: 3,
                mb: 2,
                p: 2,
              }}
            >
              <Divider>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <SchoolRoundedIcon sx={{ color: "contrast.textDark", mr: 1 }} />
                <Typography sx={{ fontWeight: "bold" }}>{data.type}</Typography>
              </Box>
              </Divider>
              <Box sx={{ textAlign: { xs: 'center'} }}>
                  <Typography sx={{ fontWeight: "bold", fontStyle: "italic", textAlign: { xs: 'center'} }}>
                    {data.title}
                  </Typography>
                <Typography sx={{ color: "secondaryList.text", fontStyle: "italic", textAlign: { xs: 'center'} }}>
                  {data.university}
                </Typography>
                <Typography sx={{ color: "secondaryList.text", fontStyle: "italic", textAlign: { xs: 'center'} }}>
                  {data.date}
                </Typography>
                <Typography sx={{ color: "secondaryList.text", fontStyle: "italic", textAlign: { xs: 'center'} }}>
                  Grade: {data.grade}
                </Typography>
              </Box>
              <Box sx={{ mt: 2, textAlign: { xs: 'center', sm: 'left' } }}>
                {data.component}
              </Box>
            </Box>
          ))}
        </List>
        <Button
          sx={{ color: "button.textLight", mt: 2 }}
          href="/DeVry-University-Projects"
          variant="contained"
          endIcon={<SchoolRoundedIcon />}
        >
          See My College Projects
        </Button>
      </Grid>
    </Box>
  );
};

export default College;
