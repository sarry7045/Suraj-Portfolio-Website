import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Helmet from "react-helmet";
import { motion } from "framer-motion";
import Avatar from "../Assets/Avatar.png";
// import "../Components/CSS/Contact.css"
import "./css/Contact.css";

const Contact = () => {
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Suraj Anil Yadav" },
    { id: 2, title: "Email:", text: "surajyadav112820@gmail.com" },
    { id: 3, title: "Phone:", text: "91+ 7977368668" },
    { id: 4, title: "Address", text: "Amboli, Andheri(W), Mumbai 400058" },
  ]);

  const socialMedia = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/suraj-yadav-01752b222/",
      title: "LinkedIn",
      icon: <FaLinkedinIn className="headerIcon" style={{ color: "#FFF" }} />,
    },
    {
      id: 2,
      link: "https://github.com/sarry7045",
      title: "GitHub",
      icon: <FaGithub className="headerIconGit" style={{ color: "#FFF" }} />,
    },
    {
      id: 3,
      link: "https://www.instagram.com/suraj.28_11/",
      title: "Instagram",
      icon: <FaInstagram className="headerIcon" style={{ color: "#FFF" }} />,
    },
    {
      id: 4,
      link: "https://www.facebook.com/profile.php?id=100010635822203",
      title: "Facebook",
      icon: <FaFacebookF className="headerIcon" style={{ color: "#FFF" }} />,
    },
    {
      id: 5,
      link: "mailto: surajyadav112820@gmail.com",
      title: "Mail",
      icon: <AiFillMail className="headerIcon" style={{ color: "#FFF" }} />,
    },
  ];

  const windowWidth = window.innerWidth;
  console.log("windowHeight", windowWidth);

  return (
    <>
      <Helmet>
        <title>Contact Me</title>

        <meta
          name="description"
          content="Contact me for Website Development , Software Development, or Digital Marketing Like SEO, PCC, SMO etc."
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, software development, suraj yadav software developer, suraj yadav react developer, suraj yadav frontend developer, react developer, javascript developer, suraj yadav seo expert, seo expert, frontend developer, suraj yadav digital marketing"
        />
      </Helmet>
      <div className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="row  h-650 alignCenter"
          >
            <div className="col-6">
              <div className="contact_img">
                {windowWidth > 765 ? <img src={Avatar} alt="Avatar" /> : null}
              </div>
            </div>
            <div className="col-6">
              <div className="contact__info">
                <h1>Empowering your web identity</h1>

                <div className="info__contacts">
                  <div className="row">
                    {state.map((info) => (
                      <div className="col-6">
                        <strong>{info.title}</strong>
                        <p>{info.text}</p>
                      </div>
                    ))}
                    <ul className="contact__header__ul">
                      {socialMedia.map((item) => {
                        return (
                          <>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              title={item.title}
                            >
                              <li>{item.icon}</li>
                            </a>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
