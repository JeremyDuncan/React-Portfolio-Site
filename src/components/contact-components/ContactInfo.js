// *****************************************************************************
// This is the ContactInfo Component.
// Goes to:
// ==> Contact.js Component
// *****************************************************************************
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "mui-image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContactInfo = () => {
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
            Let's Connect
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
            Let's Connect
          </Typography>

          <Typography
            variant="h3"
            mb={1}
            sx={{
              color: "lightgrey",
              textAlign: "center",
              display: { xs: "none", sm: "none", md: "initial" },
            }}
          >
            My Contact Info
          </Typography>
          <Typography
            variant="h5"
            mb={1}
            sx={{
              color: "lightgrey",
              textAlign: "center",
              display: { xs: "initial", sm: "initial", md: "none" },
            }}
          >
            My Contact Info
          </Typography>

          <Grid
            xs={6}
            sx={{
              height: "1px",
              border: {
                xs: "4px solid gray",
                sm: "4px solid gray",
                md: "6px solid gray",
                lg: "6px solid gray",
                xl: "6px solid gray",
              },
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItem: "center",
              margin: "auto",
              width: { xs: "350px", md: "500px" },
              borderRadius: "20px",
              marginBottom: { xs: "1rem", sm: "1.3rem" },
            }}
          />
        </Grid>
        {/* //============== Contact Info Section =======================||*/}
        <Grid>
          {/* //=== Big screen format === */}
          <Item elevation={12} sx={{ bgcolor: "darkGrey" }}>
            <Item
              sx={{
                bgcolor: "primary.dark",
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                mb={1}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: { xs: "none", sm: "none", md: "initial" },
                }}
              >
                Phone:
              </Typography>
            </Item>
            <Item
              sx={{
                background:
                  "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)",
                color: "contrast.textDark",
                textShadow: "0px 3px 8px #8a8a8a",
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                mb={1}
                sx={{
                  textAlign: "center",
                  display: { xs: "none", sm: "none", md: "initial" },
                }}
              >
                (770) 309-2046
              </Typography>
            </Item>
            {/* //=== Small screen format === */}
            <Item
              sx={{
                bgcolor: "primary.dark",
                display: { xs: "flex", sm: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                mb={1}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: { xs: "initial", sm: "initial", md: "none" },
                }}
              >
                Phone:
              </Typography>
            </Item>
            <Item
              sx={{
                background:
                  "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)",
                color: "contrast.textDark",
                textShadow: "0px 3px 8px #8a8a8a",
                display: { xs: "flex", sm: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                mb={1}
                sx={{
                  textAlign: "center",
                  display: { xs: "initial", sm: "initial", md: "none" },
                }}
              >
                (770) 309-2046
              </Typography>
            </Item>

            {/* //=== Big screen format === */}
            <Item
              sx={{
                bgcolor: "primary.dark",
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                mb={1}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: { xs: "none", sm: "none", md: "initial" },
                }}
              >
                Email:
              </Typography>
            </Item>
            <Item
              sx={{
                background:
                  "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)",
                color: "contrast.textDark",
                textShadow: "0px 3px 8px #8a8a8a",
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                mb={1}
                sx={{
                  textAlign: "center",
                  display: { xs: "none", sm: "none", md: "initial" },
                }}
              >
                jeremy.duncan1984@gmail.com
              </Typography>
            </Item>
            {/* //=== Small screen format === */}
            <Item
              sx={{
                bgcolor: "primary.dark",
                display: { xs: "flex", sm: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                mb={1}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: { xs: "initial", sm: "initial", md: "none" },
                }}
              >
                Email:
              </Typography>
            </Item>
            <Item
              sx={{
                background:
                  "linear-gradient(to right, #A6B7C3 0%, #D2E8F7 50%, #A6B7C3 100%)",
                color: "contrast.textDark",
                textShadow: "0px 3px 8px #8a8a8a",
                display: { xs: "flex", sm: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <Typography
                mb={1}
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontSize: "1.15rem",
                  display: { xs: "initial", sm: "initial", md: "none" },
                }}
              >
                jeremy.duncan1984@gmail.com
              </Typography>
            </Item>
          </Item>
        </Grid>
        {/* //============== END Contact Info Section ===================||*/}

        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: "1rem",
            pb: "3rem",
            gap: "1rem",
          }}
        >
          <Item elevation={12} sx={{ bgcolor: "darkGrey" }}>
            <Item
              sx={{
                bgcolor: "primary.dark",

                justifyContent: "center",
              }}
            >
              <Button
                className="contactLink"
                href="tel:770-309-2046"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <PhoneIcon fontSize="large" />
              </Button>

              <Button
                className="contactLink"
                href="mailto:jeremy.duncan1984@gmail.com"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <EmailRoundedIcon fontSize="large" />
              </Button>
              <Button
                className="contactLink"
                href="https://www.linkedin.com/in/jeremy-duncan2021/"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <LinkedInIcon fontSize="large" />
              </Button>
              <Button
                className="contactLink"
                href="https://github.com/JeremyDuncan"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <GitHubIcon fontSize="large" />
              </Button>
            </Item>
          </Item>
        </Grid>
        {/*//========================= Pictures GRID BOX ================> */}
        <Grid
          sx={{
            gap: { xs: ".3rem", sm: ".3rem", md: "1rem", xl: "1rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: { xs: "0rem", md: "1rem" },
          }}
        >
          <Grid item xs={6} sm={6} md={5} lg={5} xl={5} mb={10}>
            {/*==> Image Link <== ===*/}
            <Image
              src={require("../../images/Jeremy_duncan_logo_React.webp")}
              sx={{ borderRadius: "5px" }}
              shift="top"
              distance={400}
            />
          </Grid>
        </Grid>
        {/*//================= PICTURE GRID END =========================> */}
      </Grid>
    </Box>
  );
};

export default ContactInfo;
