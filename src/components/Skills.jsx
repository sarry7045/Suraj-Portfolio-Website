import React from "react";
import "../components/css/Skills.css";
import Zoom from "react-reveal/Zoom";
import Helmet from "react-helmet";

function Skills() {
  const [header] = React.useState({
    subHeading: "Programming Skills",
  });
  const [secondheader] = React.useState({
    subHeading: "Digital Marketing Skills",
  });

  const [thirdheader] = React.useState({
    subHeading: "Computer Proficiency",
  });

  return (
    <>
      <Helmet>
        <title>Programming and Digital Marketing Skills</title>

        <meta
          name="description"
          content="My all Programming and Digital Marketing Skills"
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, suraj yadav react developer, web developer, software developer, seo expert, react, react developer, javascript, javascript developer, node developer, frontend developer, digital marketing, seo, ppc, suraj yadav digital marketing "
        />
      </Helmet>
      <div>
        <div className="skillscontainer">
          <div className="skillscontainer1">
            <div className="common">
              <h1 className="mainHeader">{header.subHeading}</h1>
              <div className="commonBorder"></div>
            </div>
            <div className="Skill-Container">
              <Zoom>
                {" "}
                <ul>
                  <li class="React">React.Js</li>
                  <li class="Redux">Next.Js</li>
                  <li class="Formik">Redux</li>
                  <li class="Nodejs">Rest-API's</li>
                  <li class="API">Material-UI</li>
                  <li class="MongoDB">Node.Js</li>
                  <li class="Tailwind">ECMA-Script</li>
                  <li class="HTML">HTML, SCSS</li>
                  {/* <li class="CSS">SCSS</li> */}
                </ul>
              </Zoom>
            </div>
            <div className="common">
              <h1 className="mainHeader">{secondheader.subHeading}</h1>
              <div className="commonBorder"></div>
            </div>
            <div className="Skill-Container">
              <Zoom>
                <ul>
                  <li className="SEO">SEO</li>
                  <li className="SEM">SEM</li>
                  <li className="SMO">SMO</li>
                  <li className="SMM">PPC</li>
                  <li className="Google">Google Adds</li>
                </ul>
              </Zoom>
            </div>
            <div className="common">
              <h1 className="mainHeader">{thirdheader.subHeading}</h1>
              <div className="commonBorder"></div>
            </div>
            <div className="Skill-Container">
              <Zoom>
                <ul>
                  <li className="Word">Microsoft Word (Certified)</li>
                  <li className="Excel">Microsoft Excel (Certified)</li>
                  <li className="Powerpoint">
                    Microsoft Powerpoint (Certified)
                  </li>
                  <li className="Typing">Typing-40WPM (Certified)</li>
                  <li className="Canva">Canva</li>
                  <li className="Photoshop">Photoshop</li>
                </ul>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
