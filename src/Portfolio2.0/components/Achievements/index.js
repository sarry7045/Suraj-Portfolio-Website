import React from "react";
import {
  Container,
  Wrapper,
  CardContainer,
} from "../Projects/ProjectsStyle.js";
import styled from "styled-components";
import { achievements } from "../../Datas";
import AchievementsCards from "../Cards/AchievementCards.jsx";
import { Helmet } from "react-helmet";

const Title = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 35px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Achievements = () => {
  return (
    <Container id="achievements">
      <Helmet>
        <title>Suraj Yadav | Software Development | SEO Expert</title>
        <meta name="description" content="Achievements" />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, software development, suraj yadav software developer, suraj yadav react developer, suraj yadav frontend developer, react developer, javascript developer, suraj yadav seo expert, seo expert, frontend developer, suraj yadav digital marketing"
        />
      </Helmet>
      <Wrapper>
        <Title>Achievements</Title>
        <CardContainer>
          {achievements?.map((values) => (
            <AchievementsCards values={values} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Achievements;
