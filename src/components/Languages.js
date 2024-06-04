// *****************************************************************************
// This component displays the programming languages and technologies experience
// Goes to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GitHubIcon from "@mui/icons-material/GitHub";
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

const Languages = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        sx={{
          textShadow: "0px 3px 8px #8a8a8a",
        }}
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* ========= This section renders all the programming language logos =======*/}
        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main" }}>
            <Image
              src={require("../images/languages/html_logo_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            HTML
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}
        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/css-logo_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            CSS
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}
        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/javascript_logo_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            JavaScript
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/php_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            PHP
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}




        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/python_logo_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Python
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}
        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/java_logo_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Java
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}
        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/cSharp_logo_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            C#
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/ruby_LOGO_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Ruby
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/react_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            React.js
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}
        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/Node.js_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Node.js
          </Typography>
        </Grid>

        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/rails_logo_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Rails
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/laravel_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Laravel
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/lumen_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Lumen
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/mysql_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            MySQL
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/Postgresql_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            PostgreSQL
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/redis_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Redis
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/aws_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            AWS
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/docker_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Docker
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/nginx_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            NGINX
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}


        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/pry_logo.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Pry
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}
        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/rspec_logo_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            RSpec
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}
        {/*//=========== GRID BOX ===============> */}
        <Grid item xs={4} sm={3} md={2} lg={1.5}>
          <Item elevation={6} sx={{ bgcolor: "primary.main", color: "white" }}>
            <Image
              src={require("../images/languages/jest_logo_Scaled.webp")}
              style={{ borderRadius: 16 }}
              shift="top"
              distance={400}
            />
          </Item>
          <Typography
            fontWeight="bold"
            variant="caption"
            color="contrast.textDark"
          >
            Jest
          </Typography>
        </Grid>
        {/*//=========== GRID END ===============> */}

      </Grid>
      <br />
      <Button
        sx={{ color: "button.textLight" }}
        href="https://github.com/JeremyDuncan"
        target="_blank"
        rel="noopener"
        variant="contained"
        endIcon={<GitHubIcon />}
      >
        Visit my GitHub
      </Button>
    </Box>
  );
};

export default Languages;
