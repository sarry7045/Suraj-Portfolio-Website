import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { Helmet } from "react-helmet";
import { projects } from "../../Datas";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="projects">
      <Helmet>
        <title>Suraj Yadav | Fullstack Software Engineer | AI Engineer</title>

        <meta
          name="description"
          content="I am an Innovative Front-End Developer with multiple Years of Experience in Web Development, Software Development and SEO."
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, software development, suraj yadav software developer, suraj yadav react developer, suraj yadav frontend developer, react developer, javascript developer, suraj yadav seo expert, seo expert, frontend developer, suraj yadav digital marketing"
        />
      </Helmet>
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on mutiple projects. From web apps to android apps. Here
          are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton
              active
              value="android app"
              onClick={() => setToggle("android app")}
            >
              ANDROID APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="android app"
              onClick={() => setToggle("android app")}
            >
              ANDROID APP'S
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects?.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            ?.filter((item) => item?.category === toggle)
            ?.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
