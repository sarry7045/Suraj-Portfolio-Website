import React from "react";
import Helmet from "react-helmet";
import Zoom from "react-reveal/Zoom";
// import { motion } from "framer-motion";

const About = () => {
  const [state] = React.useState([
    {
      id: 1,
      title: "Company Website:",
      text: (
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="http://ixarrobotic.com/#/"
          target="_blank"
          rel="noreferrer"
        >
          www.ixarrobotic.com
        </a>
      ),
    },
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
    {
      id: 1,
      title: "Company Website:",
      text: (
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://paymentz.com/"
          target="_blank"
          rel="noreferrer"
        >
          www.paymentz.com
        </a>
      ),
    },
    { id: 2, title: "Role:", text: "ReactJs Developer" },
    {
      id: 3,
      title: "Working Duration:",
      text: "September-2021 - September-2022",
    },
    {
      id: 4,
      title: "Address:",
      text: "Aditya Industrial Estate, Mindspace, Malad(W) Mumbai 400064",
    },
  ]);

  const [stateee] = React.useState([
    {
      id: 1,
      title: "Company Website:",
      text: (
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://wealthdesk.in/"
          target="_blank"
          rel="noreferrer"
        >
          www.wealthdesk.in
        </a>
        
        
      ),
    },
    { id: 2, title: "Role:", text: "Front-End Developer" },
    {
      id: 3,
      title: "Working Duration:",
      text: "September-2022 - Present",
    },
    {
      id: 4,
      title: "Address:",
      text: "Boston House, Western Express Highyway, Andheri (East) Mumbai 400093",
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
        <div className="experienceHeight">
          <div className="container">
            {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="row  h-650 alignCenter"
          > */}
            <div className="row  h-650 alignCenter">
              <Zoom>
                {" "}
                <div
                  style={{ padding: "1rem 3rem 0 0", margin: "5rem 0 0 0" }}
                  className="col-6"
                >
                  <div className="about__info__Experience">
                    <h1>IXAR Robotic Solutions</h1>
                    <div className="commonBorderExp"></div>
                    <div
                      className="about__info-p1"
                      style={{ fontSize: "1rem" }}
                    >
                      Worked as a Front-end Developer and build beautiful
                      Responsive Website using HTML, CSS, ReactJs, Material-UI,
                      Formik etc.
                    </div>
                    <div
                      className="about__info-p2"
                      style={{ fontSize: "1rem" }}
                    >
                      Fixed bug in existing website and also reduced the size of
                      code and Improve website performance. Also Performed SEO
                      for Website, In order to Rank them on Google Search
                      Engine.
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
              </Zoom>
              <Zoom>
                <div
                  style={{ padding: "1rem 3rem 0 0", margin: "5rem 0 0 0" }}
                  className="col-6"
                >
                  <div className="about__info__Experience">
                    <h1>Payments Gateway Solutions</h1>
                    <div className="commonBorderExp"></div>
                    <div
                      className="about__info-p1"
                      style={{ fontSize: "1rem" }}
                    >
                      Managing UI using HTML, CSS, JavaScript, and ReactJs.
                    </div>
                    <div
                      className="about__info-p2"
                      style={{ fontSize: "1rem" }}
                    >
                      Worked on Integrating API’s using Redux and all the
                      Frontend part of M-TRANSACT (Online Payment Software).
                    </div>{" "}
                    {/* <div
                      className="about__info-p2"
                      style={{ fontSize: "1rem" }}
                    >
                      Tools we are using: Redux, Material UI, React-Bootstrap,
                      Formik, Chart.js, Axios, i18 next, Babel, Webpack, GIT
                      etc.
                    </div> */}
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
              </Zoom>
              <Zoom>
                <div
                  style={{ padding: "1rem 3rem 0 0", margin: "5rem 0 0 0" }}
                  className="col-6"
                >
                  <div className="about__info__Experience">
                    <h1>PhonePe-WealthDesk</h1>
                    <div className="commonBorderExp"></div>
                    <div
                      className="about__info-p1"
                      style={{ fontSize: "1rem" }}
                    >
                      Develop and maintain pages to match business requirements.
                    </div>
                    <div
                      className="about__info-p2"
                      style={{ fontSize: "1rem" }}
                    >
                      Working on Integrating API’s and all the Frontend part of
                      WealthBasket's (ETF Portfolios from Experts) and EWG
                      (Embedded WealthDesk Gateway) .
                    </div>{" "}
                    {/* <div
                      className="about__info-p2"
                      style={{ fontSize: "1rem" }}
                    >
                      Tools we are using: Axios, Typescript, Crypto-JS, Material
                      UI, Sass, Formik, Chart.js, Babel, Webpack, GIT, BitBucket
                      etc.
                    </div> */}
                    <div className="info__contacts">
                      <div className="row">
                        {stateee.map((infoo) => (
                          <div className="col-6">
                            <strong>{infoo.title}</strong>

                            <p>{infoo.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* </motion.div> */}
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
