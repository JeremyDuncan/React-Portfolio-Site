// *****************************************************************************
// This component displays my Colleges and Degrees
// *****************************************************************************
import { SchoolRoundedIcon, WorkspacePremiumIcon } from "../../../mui-icons";
import { Box, Button, Divider, Grid, List, Paper, styled, Typography } from "@mui/material";
import React from "react";
import Image from "mui-image";

const degreeData = [
  {
    type: "Bachelor of Science",
    title: "Computer Information Systems, Software Programming",
    university: "DeVry University",
    date: "May 2021 - October 2023",
    grade: "4.0 GPA, Summa Cum Laude",
    imageUrl: require("../../../images/degrees/bachelor-degree.webp"),
    verifyUrl: "https://www.parchment.com/u/award/1849b0b0895e9e86b45d54af3e2d1823",
  },
  {
    type: "Associate of Applied Science",
    title: "Information Technology and Networking",
    university: "DeVry University",
    date: "May 2021 - June 2022",
    grade: "4.0 GPA, Honors",
    imageUrl: require("../../../images/degrees/associate-degree.webp"),
    verifyUrl: "https://www.parchment.com/u/award/877ddb7d34111e1741c380984dfeb7a4",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DegreeComponent = ({ imageUrl, verifyUrl }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={6}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={imageUrl}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Button
          sx={{ mt: "5px", color: "button.textLight" }}
          href={verifyUrl}
          target="_blank"
          rel="noopener"
          variant="contained"
          endIcon={<WorkspacePremiumIcon />}
        >
          Verify
        </Button>
      </Grid>
    </Box>
  );
};

const College = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: 2 }}>
      <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
        <List sx={{ width: "100%", maxWidth: 750 }}>
          {degreeData.map((data, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: "background.paper",
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
              <Box sx={{ textAlign: { xs: "center" } }}>
                <Typography sx={{ fontWeight: "bold", fontStyle: "italic", textAlign: { xs: "center" } }}>
                  {data.title}
                </Typography>
                <Typography sx={{ color: "secondaryList.text", fontStyle: "italic", textAlign: { xs: "center" } }}>
                  {data.university}
                </Typography>
                <Typography sx={{ color: "secondaryList.text", fontStyle: "italic", textAlign: { xs: "center" } }}>
                  {data.date}
                </Typography>
                <Typography sx={{ color: "secondaryList.text", fontStyle: "italic", textAlign: { xs: "center" } }}>
                  Grade: {data.grade}
                </Typography>
              </Box>
              <Box sx={{ mt: 2, textAlign: { xs: "center", sm: "left" } }}>
                <DegreeComponent imageUrl={data.imageUrl} verifyUrl={data.verifyUrl} />
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
