import React from "react";
import { FaReact } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import Helmet from "react-helmet";

const Services = () => {
  const [header] = React.useState({
    subHeading: "Projects",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaReact className="commonIcons" />,
      heading: "Login Registration Form",
      text: "In this Project i created one basic Registraion and Login Form (Only Frontend Part Done).",
      href: "https://mern-client-side.netlify.app/",
    },
    {
      id: 2,
      icon: <FaReact className="commonIcons" />,
      heading: "React-Formik",
      text: "In this Project i Validate Some Types of Forms Using React Formik..",
      href: "https://reactt-formik.netlify.app/",
    },
    {
      id: 3,
      icon: <FaReact className="commonIcons" />,
      heading: "React Restaurant Web",
      text: "In this Project i created one Restaurant type Website with some categories.",
      href: "https://surajreactrestaurant.netlify.app/",
    },
    {
      id: 4,
      icon: <FaReact className="commonIcons" />,
      heading: "Weather App",
      text: "In this Project i created one Weather Checking app using Weather API.",
      href: "https://react-weatther-app.netlify.app/",
    },
    {
      id: 5,
      icon: <FaReact className="commonIcons" />,
      heading: "Text Converter",
      text: "In this Project i developed one text converter with some functionality using Javascript Logic.",
      href: "https://textz-converter.netlify.app/",
    },
    {
      id: 6,
      icon: <FaReact className="commonIcons" />,
      heading: "React Features",
      text: "In this Project i Implement all the used-full and best packages of React.",
      href: "https://react-featuress.netlify.app/",
    },
    {
      id: 7,
      icon: <FaReact className="commonIcons" />,
      heading: "React Todo-List",
      text: "In this Project i created one basic Todo-List using Bootstrap and Some Javascript Logic.",
      href: "https://basic-reactt-todo-list.netlify.app/",
    },
    {
      id: 8,
      icon: <FaReact className="commonIcons" />,
      heading: "Redux Shopping-Store",
      text: "In this Project i created one fake shopping store using Redux and fake store API's.",
      href: "https://redux-shopping-store.netlify.app/",
    },
    {
      id: 9,
      icon: <FaReact className="commonIcons" />,
      heading: "Redux Todo-List",
      text: "In this Project i created a best Todo-list using Redux and Fake JSON Server API's.",
      href: "https://reduxx-todo-list.netlify.app/",
    },

    {
      id: 10,
      icon: <FaReact className="commonIcons" />,
      heading: "React Website",
      text: "In this Project i trying to developing one of the best Animated website using React.",
      href: "https://react-practice-website.netlify.app/",
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Projects</title>

        <meta
          name="description"
          content="My all Completed and Ongoing Projects"
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, suraj yadav react developer, web developer, software developer, seo expert, react, react developer, javascript, javascript developer, node developer, frontend developer, digital marketing, seo, ppc, suraj yadav digital marketing "
        />
      </Helmet>
      <div className="services">
        <div className="container">
          <div className="services__header">
            <div className="common">
              <h1 className="mainHeader">{header.subHeading}</h1>

              <div className="commonBorder"></div>
            </div>

            <div className="row bgMain">
              {state.map((info) => (
                <div className="col-4 bgMain">
                  <Zoom>
                    <div className="services__box">
                      {info.icon}
                      <div className="services__box-header">{info.heading}</div>
                      <div className="">{info.text}</div>
                    </div>
                  </Zoom>
                  <Zoom>
                    {" "}
                    <div
                      style={{ margin: "3rem 0 3rem 2.3rem" }}
                      className="header_buttons"
                    >
                      <a
                        href={info.href}
                        target="_blank"
                        className="btn btn-outline"
                      >
                        View Project
                      </a>
                    </div>
                  </Zoom>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
