import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import "./Portfolio2.0.css";

const darkTheme = {
    bg: "#1C1C27",
    bgLight: "#1C1E27",
    primary: "#854CE6",
    text_primary: "#F2F3F4",
    text_secondary: "#b1b2b3",
    card: "#171721",
    card_light: '#191924',
    button: "#854CE6",
    white: "#FFFFFF",
    black: "#000000",
}

const lightTheme = {
    bg: "#FFFFFF",
    bgLight: "#f0f0f0",
    primary: "#be1adb",
    text_primary: "#111111",
    text_secondary: "#48494a",
    card: "#FFFFFF",
    button: "#5c5b5b",
}

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`


function Portfolio2() {

    const [darkMode] = useState(true);
    const [openModal, setOpenModal] = useState({ state: false, project: null });

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Router >
                <Navbar />
                <Body>
                    <HeroSection />
                    <Wrapper>
                        <Skills />
                        <Experience />
                    </Wrapper>
                    <Projects openModal={openModal} setOpenModal={setOpenModal} />
                    <Wrapper>
                        <Education />
                        <Contact />
                    </Wrapper>
                    <Footer />
                    {openModal.state &&
                        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                    }
                </Body>
            </Router>
        </ThemeProvider>
    );
}

export default Portfolio2;
