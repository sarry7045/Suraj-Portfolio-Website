import React from "react";
import Zoom from "react-reveal/Zoom";
import Helmet from "react-helmet";
import { motion } from "framer-motion";

const About = () => {
  const [state] = React.useState([
    { id: 1, title: "Company Website:", text: "www.ixarrobotic.com" },
    { id: 2, title: "Role:", text: "Web Developer, SEO Expert" },
    {
      id: 3,
      title: "Working Duration:",
      text: "September-2020 - September 2021",
    },
    {
      id: 4,
      title: "Address:",
      text: "102, Faizan-Apartment, S.V Road Jogeshwari(W), Mumbai 400102",
    },
  ]);
  const [statee] = React.useState([
    { id: 1, title: "Company Website:", text: "www.paymentz.com" },
    { id: 2, title: "Role:", text: "ReactJs Developer" },
    { id: 3, title: "Working Duration:", text: "September-2021 - Present" },
    {
      id: 4,
      title: "Address:",
      text: "Aditya Industrial Estate, Mindspace, Malad(W) Mumbai 400064",
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Working Experience</title>

        <meta name="description" content="Working Experience" />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, suraj yadav react developer, web developer, software developer, seo expert, react, react developer, javascript, javascript developer, node developer, frontend developer, digital marketing, seo, ppc, suraj yadav digital marketing "
        />
      </Helmet>
      <div className="about">
        <div className="container">
          {/* <div className="common"></div> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="row  h-650 alignCenter"
          >
            {/* <Zoom> */}{" "}
            <div
              style={{ padding: "1rem 3rem 0 0", margin: "5rem 0 0 0" }}
              className="col-6"
            >
              <div className="about__info__Experience">
                <h1>IXAR Robotic Solutions</h1>
                <div className="commonBorderExp"></div>
                <div className="about__info-p1" style={{ fontSize: "1rem" }}>
                  Worked as a Front-end Developer and build beautiful Responsive
                  Website using HTML, CSS, ReactJs, Material-UI, Formik etc.
                </div>
                <div className="about__info-p2" style={{ fontSize: "1rem" }}>
                  Fixed bug in existing website and also reduced the size of
                  code and Improve website performance. Also Performed SEO for
                  Website, In order to Rank them on Google Search Engine.
                </div>

                <div className="info__contacts">
                  <div className="row">
                    {state.map((info) => (
                      <div className="col-6">
                        <strong>{info.title}</strong>
                        <p>{info.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* </Zoom>
            <Zoom> */}
            <div
              style={{ padding: "1rem 3rem 0 0", margin: "5rem 0 0 0" }}
              className="col-6"
            >
              <div className="about__info__Experience">
                <h1>Payments Gateway Solutions</h1>
                <div className="commonBorderExp"></div>
                <div className="about__info-p1" style={{ fontSize: "1rem" }}>
                  Develop and maintain pages to match client requirements.
                </div>
                <div className="about__info-p2" style={{ fontSize: "1rem" }}>
                  Working on Integrating API’s using Redux and all the Frontend
                  part of M-TRANSACT (Online Payment Software).
                </div>{" "}
                <div className="about__info-p2" style={{ fontSize: "1rem" }}>
                  Tools we are using: Redux, Material UI, React-Bootstrap,
                  Formik, Chart.js, Axios, i18 next, Babel, Webpack, GIT etc.
                </div>{" "}
                {/* <a
                    className="Website-link"
                    href="https://cmob.paymentz.com/index/login?walletOwnerId=1"
                    target="_blank"
                  >
                    cmob.paymentz.com
                  </a> */}
                <div className="info__contacts">
                  <div className="row">
                    {statee.map((infoo) => (
                      <div className="col-6">
                        <strong>{infoo.title}</strong>

                        <p>{infoo.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* </Zoom> */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
