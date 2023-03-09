import React from "react";
import { styled, Box, Typography } from "@mui/material";
import { Icons } from "./SkillsIcons";
import SkillsComponent from "./SkilsComponent";
import Helmet from "react-helmet";
import ReactNative from "../../Assets/ReactNative.svg";
import FramerMotion from "../../Assets/FramerMotion.svg";
import "../../Components/CSS/Skill.css";
import { Zoom } from "react-reveal";

const Skils = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "1300px",
    display: "flex",
    justifyContent: "space-between",
    mx: "auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const StackBox = styled(Box)(({ theme }) => ({
    marginLeft: "1.5rem",
    flex: 1,
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "3rem",
    },
  }));
  return (
    <>
      <Helmet>
        <title>Programming and SEO Skills</title>

        <meta
          name="description"
          content="My all Programming and Digital Marketing Skills"
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, software development, suraj yadav software developer, suraj yadav react developer, suraj yadav frontend developer, react developer, javascript developer, suraj yadav seo expert, seo expert, frontend developer, suraj yadav digital marketing"
        />
      </Helmet>
      <div className="skillscontainer">
        <Zoom>
          <div className="skillscontainer1">
            <Box sx={{ maxWidth: "1300px", mx: "auto", my: 22 }}>
              <CustomBox sx={{ my: 5, padding: 2 }}>
                <Box sx={{ flex: 1, my: 1.5 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "white", textAlign: "center", mb: 3 }}
                  >
                    Programming Skills{" "}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ color: "white", textAlign: "center", mb: 3 }}
                  >
                    Here's what I can help you with.{" "}
                  </Typography>
                </Box>
                <StackBox>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {Icons.map((item, i) => {
                      if (i < 2) {
                        return (
                          <SkillsComponent
                            key={item.id}
                            name={item.name}
                            src={item.src}
                          />
                        );
                      } else {
                        return "";
                      }
                    })}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {Icons.map((item, i) => {
                      if (i >= 2 && i < 4) {
                        return (
                          <SkillsComponent
                            key={item.id}
                            name={item.name}
                            src={item.src}
                          />
                        );
                      } else {
                        return "";
                      }
                    })}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {Icons.map((item, i) => {
                      if (i >= 4 && i < 6) {
                        return (
                          <SkillsComponent
                            key={item.id}
                            name={item.name}
                            src={item.src}
                          />
                        );
                      } else {
                        return "";
                      }
                    })}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {Icons.map((item, i) => {
                      if (i >= 6 && i < 8) {
                        return (
                          <SkillsComponent
                            key={item.id}
                            name={item.name}
                            src={item.src}
                          />
                        );
                      } else {
                        return "";
                      }
                    })}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <SkillsComponent
                      key={11}
                      name={"Native"}
                      src={ReactNative}
                    />
                    <SkillsComponent key={12} name={"FM"} src={FramerMotion} />
                  </Box>
                </StackBox>
              </CustomBox>
            </Box>
          </div>
        </Zoom>
      </div>
    </>
  );
};

export default Skils;
