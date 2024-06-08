// *****************************************************************************
// This component displays the programming languages and technologies experience
// Goes to ==> MainSection.js Component
// *****************************************************************************
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Button, Divider, Grid, Paper, Typography, styled } from "@mui/material";
import Image from "mui-image";
import {
  AwsLogo, CSharpLogo, CssLogo, DockerLogo, HtmlLogo, JavaLogo, JavascriptLogo, JestLogo, LaravelLogo, LumenLogo,
  MysqlLogo, NginxLogo, NodejsLogo, PhpLogo, PostgresqlLogo, PryLogo, PythonLogo, RailsLogo, ReactLogo, RedisLogo,
  RspecLogo, RubyLogo
} from "../../../images";

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