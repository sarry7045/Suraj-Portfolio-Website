import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Helmet from "react-helmet";
import pdf from "../PDF/Suraj Resume.pdf";
import Typewriter from "typewriter-effect";
import Zoom from "react-reveal/Zoom";
// import { motion } from "framer-motion";

const AboutMe = () => {
  const [state] = React.useState({
    title: "Suraj Anil Yadav",
    text: "I am an innovative Front-End Developer With Multiple Years Of experience in Web Development, Software Development and SEO.",
    textt: "Also Learning: NodeJs, React Native",
    image: "/images/Avatar.png",
  });

  return (
    <>
      <Helmet>
        <title>Suraj Yadav | Software Development | SEO Expert</title>

        <meta
          name="description"
          content="I am an innovative Frontend-End Developer With Multiple Years Of experience in Web Development, Software Development and SEO."
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, suraj yadav react developer, web developer, software developer, seo expert, react, react developer, javascript, javascript developer, node developer, frontend developer, digital marketing, seo, ppc, suraj yadav digital marketing "
        />
      </Helmet>
      <header className="">
        <div className="AboutMeBackground">
          <div className="container">
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="row"
            > */}
            <Zoom>
              <div className="row">
                <div className="col-6">
                  <div className="header__content">
                    <div className="header__section">
                      <ul className="header__ul">
                        <a
                          href="https://www.linkedin.com/in/suraj-yadav-01752b222/"
                          target="_blank"
                          rel="noreferrer"
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
                        >
                          {" "}
                          <li>
                            <FaFacebookF
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>

                        <a href="mailto: sarry7045@gmail.com">
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
                              .typeString("Suraj Anil Yadav")
                              .pauseFor(500)
                              .deleteAll()
                              .typeString("Front-End Developer")
                              .pauseFor(500)
                              .start()
                              .deleteAll()
                              .typeString("Suraj Anil Yadav");
                          }}
                        />
                      </h1>
                      <p>{state.text}</p>
                      <p style={{ paddingBottom: "20px" }}>{state.textt}</p>
                      {/* <motion.div
                      whileHover={{
                        scale: 1.1,
                        originX: 0,
                      }}
                      transition={{ type: "spring", stiffness: 1000 }}
                      className="header_buttons"
                    > */}
                      <div className="header_buttons">
                        <a
                          href={pdf}
                          className="btn btn-outline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Download Resume
                        </a>
                        {/* </motion.div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="banner__img">
                    <img src={state.image} alt="man" />
                  </div>
                </div>
                {/* </motion.div> */}
              </div>
            </Zoom>
          </div>
        </div>
      </header>
    </>
  );
};

export default AboutMe;
