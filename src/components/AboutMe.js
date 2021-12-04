import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import jsPDF from "jspdf";
import Zoom from "react-reveal/Zoom";
import Helmet from "react-helmet";

const AboutMe = () => {
  const pdfGenerate = () => {
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage("/images/Suraj-Resume.jpg", "JPG", 50, 0, 450, 480);
    doc.save("Suraj-Yadav-Resume.pdf");
  };

  const [state] = React.useState({
    title: "Suraj Anil Yadav",
    text: "I am an innovative ReactJs Developer With 1 + Year Of experience in Web Development, Software Development and Digital Marketing.",
    image: "/images/Avatar.png",
  });

  return (
    <>
      <Helmet>
        <title>About Me</title>

        <meta
          name="description"
          content="I am an innovative ReactJs Developer With 1 + Year Of experience in Web Development, Software Development and Digital Marketing."
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, suraj yadav react developer, web developer, software developer, seo expert, react, react developer, javascript, javascript developer, node developer, frontend developer, digital marketing, seo, ppc, suraj yadav digital marketing "
        />
      </Helmet>
      <header className="">
        <div className="AboutMeBackground">
          <div className="container">
            <div className="row">
              <Zoom>
                {" "}
                <div className="col-6">
                  <div className="header__content">
                    <div className="header__section">
                      <ul className="header__ul">
                        <a
                          href="https://www.linkedin.com/in/suraj-yadav-01752b222/"
                          target="_blank"
                        >
                          <li>
                            <FaLinkedinIn
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

                        <a
                          href="https://www.instagram.com/suraj.28_11/"
                          target="_blank"
                        >
                          {" "}
                          <li>
                            <FaInstagram
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a href="https://github.com/sarry7045" target="_blank">
                          <li>
                            <FaGithub
                              className="headerIconGit"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=100010635822203"
                          target="_blank"
                        >
                          {" "}
                          <li>
                            <FaFacebookF
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                      </ul>
                      <h1>{state.title}</h1>
                      <p>{state.text}</p>
                      <div className="header_buttons">
                        <a
                          href="/"
                          className="btn btn-outline"
                          onClick={pdfGenerate}
                        >
                          Download Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Zoom>
              <Zoom>
                {" "}
                <div className="col-6">
                  <div className="banner__img">
                    <img src={state.image} alt="man" />
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AboutMe;
