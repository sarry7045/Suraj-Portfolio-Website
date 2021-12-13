import React from "react";
import Zoom from "react-reveal/Zoom";
import Helmet from "react-helmet";

const About = () => {
  const [state] = React.useState([
    { id: 1, title: "Company Website:", text: "www.ixarrobotic.com" },
    { id: 2, title: "Role:", text: "Web Developer, Digital Marketing" },
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
        <title>My Working Experience</title>

        <meta name="description" content="My Working Experience" />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, suraj yadav react developer, web developer, software developer, seo expert, react, react developer, javascript, javascript developer, node developer, frontend developer, digital marketing, seo, ppc, suraj yadav digital marketing "
        />
      </Helmet>
      <div className="about">
        <div className="container">
          {/* <div className="common"></div> */}
          <div className="row  h-650 alignCenter">
            <Zoom>
              {" "}
              <div
                style={{ padding: "1rem 3rem 0 0", margin: "5rem 0 0 0" }}
                className="col-6"
              >
                <div className="about__info__Experience">
                  <h1>IXAR Robotic Solutions Pvt. Ltd.</h1>
                  <div className="commonBorderExp"></div>
                  <div className="about__info-p1" style={{ fontSize: "1rem" }}>
                    Working as Front-end Web-Developer and Build Beautiful,
                    animated website using Reactjs, Nodejs, MongoDB, HTML and
                    CSS.
                  </div>
                  <div className="about__info-p2" style={{ fontSize: "1rem" }}>
                    Also Performed SEO (Search Engine Optimization) for website,
                    in-order to rank them on Google Search Engine.
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
                  <h1>Payment Gateway Solutions Pvt. Ltd.</h1>
                  <div className="commonBorderExp"></div>
                  <div className="about__info-p1" style={{ fontSize: "1rem" }}>
                    Working as ReactJs Developer
                  </div>
                  <div className="about__info-p2" style={{ fontSize: "1rem" }}>
                    Integrating API's, Working on all the Front-End part of
                    M-TRANSACT, TAKA-PAISA (Online Payment
                    Software) (White Lable Solution).
                  </div>{" "}
                  <a
                    className="Website-link"
                    href="https://cmob.paymentz.com/index/login?walletOwnerId=1"
                    target="_blank"
                  >
                    cmob.paymentz.com
                  </a>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
