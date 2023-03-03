import React, { useState, useDeferredValue } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Helmet from "react-helmet";
import pdf from "../PDF/SurajYadav.pdf";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Zoom } from "react-reveal";

const AboutMe = () => {
  const [state] = useState({
    title: "Suraj Anil Yadav",
    text: "Frontend Developer with 2+ Years of Professional Experience in User Interface Development with hands on Experience in JavaScript, React, TypeScript, Redux etc.",
    textt: "Also Learning: React Native, NodeJs",
    image: "/Images/Avatar.png",
  });
  const fastState = useDeferredValue(state);

  return (
    <>
      <Helmet>
        <title>Suraj Yadav | Software Development | SEO Expert</title>

        <meta
          name="description"
          content="I am an Innovative Front-End Developer with multiple Years of Experience in Web Development, Software Development and SEO."
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, software development, suraj yadav software developer, suraj yadav react developer, suraj yadav frontend developer, react developer, javascript developer, suraj yadav seo expert, seo expert, frontend developer, suraj yadav digital marketing"
        />
      </Helmet>
      <header className="">
        <div className="AboutMeBackground">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.9 }}
              className="row"
            >
              <div className="col-6">
                <div className="header__content">
                  <div className="header__section">
                    <ul className="header__ul">
                      <a
                        href="https://www.linkedin.com/in/suraj-yadav-01752b222/"
                        target="_blank"
                        rel="noreferrer"
                        title="LinkedIn"
                      >
                        <li>
                          <FaLinkedinIn
                            className="headerIcon"
                            style={{ color: "#FFF" }}
                          />
                        </li>
                      </a>
                      <a
                        href="https://github.com/sarry7045"
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                      >
                        <li>
                          <FaGithub
                            className="headerIconGit"
                            style={{ color: "#FFF" }}
                          />
                        </li>
                      </a>
                      <a
                        href="https://www.instagram.com/suraj.28_11/"
                        target="_blank"
                        rel="noreferrer"
                        title="Instagram"
                      >
                        {" "}
                        <li>
                          <FaInstagram
                            className="headerIcon"
                            style={{ color: "#FFF" }}
                          />
                        </li>
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=100010635822203"
                        target="_blank"
                        rel="noreferrer"
                        title="Facebook"
                      >
                        {" "}
                        <li>
                          <FaFacebookF
                            className="headerIcon"
                            style={{ color: "#FFF" }}
                          />
                        </li>
                      </a>

                      <a href="mailto: sarry7045@gmail.com" title="Mail">
                        {" "}
                        <li>
                          <AiFillMail
                            className="headerIcon"
                            style={{ color: "#FFF" }}
                          />
                        </li>
                      </a>
                    </ul>

                    <h1>
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .typeString("Suraj Yadav")
                            .pauseFor(500)
                            .deleteAll()
                            .typeString("Frontend Developer")
                            .pauseFor(500)
                            .start()
                            .deleteAll()
                            .typeString("Suraj Yadav");
                        }}
                      />
                    </h1>
                    <p>{fastState.text}</p>
                    <p style={{ paddingBottom: "20px" }}>{fastState.textt}</p>
                    <div className="header_buttons">
                      <a
                        href={pdf}
                        className="btn btn-outline"
                        target="_blank"
                        rel="noreferrer"
                        title="Resume"
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Zoom>
                <div className="col-6">
                  <div className="banner__img">
                    <img src={fastState.image} alt="man" loading="lazy" />
                  </div>
                </div>
              </Zoom>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AboutMe;
