// *****************************************************************************
// This component displays the programming languages and technologies experience
// Goes to ==> MainSection.js Component
// *****************************************************************************

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Button, Divider, Grid, Paper, Typography, styled } from "@mui/material";
import Image from "mui-image";
import AwsLogo from '../images/languages/aws_logo.webp';
import CSharpLogo from '../images/languages/cSharp_logo_Scaled.webp';
import CssLogo from '../images/languages/css-logo_Scaled.webp';
import DockerLogo from '../images/languages/docker_logo.webp';
import HtmlLogo from '../images/languages/html_logo_Scaled.webp';
import JavaLogo from '../images/languages/java_logo_Scaled.webp';
import JavascriptLogo from '../images/languages/javascript_logo_Scaled.webp';
import JestLogo from '../images/languages/jest_logo_Scaled.webp';
import LaravelLogo from '../images/languages/laravel_logo.webp';
import LumenLogo from '../images/languages/lumen_logo.webp';
import MysqlLogo from '../images/languages/mysql_logo.webp';
import NginxLogo from '../images/languages/nginx_logo.webp';
import NodejsLogo from '../images/languages/Node.js_logo.webp';
import PhpLogo from '../images/languages/php_logo.webp';
import PostgresqlLogo from '../images/languages/Postgresql_logo.webp';
import PryLogo from '../images/languages/pry_logo.webp';
import PythonLogo from '../images/languages/python_logo_Scaled.webp';
import RailsLogo from '../images/languages/rails_logo_Scaled.webp';
import ReactLogo from '../images/languages/react_Scaled.webp';
import RedisLogo from '../images/languages/redis_logo.webp';
import RspecLogo from '../images/languages/rspec_logo_Scaled.webp';
import RubyLogo from '../images/languages/ruby_LOGO_Scaled.webp';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const techList = [
  {
    category: "Languages",
    items: [
      { name: "HTML", src: HtmlLogo },
      { name: "CSS", src: CssLogo },
      { name: "JavaScript", src: JavascriptLogo },
      { name: "Ruby", src: RubyLogo },
      { name: "PHP", src: PhpLogo },
      { name: "Python", src: PythonLogo },
      { name: "Java", src: JavaLogo },
      { name: "C#", src: CSharpLogo },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "React.js", src: ReactLogo },
      { name: "Node.js", src: NodejsLogo },
      { name: "Rails", src: RailsLogo },
      { name: "Laravel", src: LaravelLogo },
      { name: "Lumen", src: LumenLogo },
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MySQL", src: MysqlLogo },
      { name: "PostgreSQL", src: PostgresqlLogo },
      { name: "Redis", src: RedisLogo },
    ],
  },
  {
    category: "General",
    items: [
      { name: "AWS", src: AwsLogo },
      { name: "Docker", src: DockerLogo },
      { name: "NGINX", src: NginxLogo },
    ],
  },
  {
    category: "Testing",
    items: [
      { name: "Pry", src: PryLogo },
      { name: "RSpec", src: RspecLogo },
      { name: "Jest", src: JestLogo },
    ],
  },
];

const Skills = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {techList.map((techCategory, categoryIndex) => (
        <Box key={categoryIndex} sx={{ mb: 4 }}>
          <Divider>
            <Typography variant="h6" sx={{ }}>
              {techCategory.category}
            </Typography>
          </Divider>
          <br/>
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
            {techCategory.items.map((tech, itemIndex) => (
              <Grid key={itemIndex} item xs={4} sm={3} md={2} lg={1.5}>
                <Item elevation={6} sx={{ bgcolor: "primary.main" }}>
                  <Image
                    src={tech.src}
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
                  {tech.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
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

export default Skills;