import React from "react";
import { MdAppRegistration, MdOutlineFoodBank } from "react-icons/md";
import { AiOutlineForm, AiOutlineShoppingCart } from "react-icons/ai";
import { RiVideoChatLine } from "react-icons/ri";
import { TiWeatherCloudy } from "react-icons/ti";
import { GiNotebook } from "react-icons/gi";
import { BsTextareaT } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { MdQuiz } from "react-icons/md";
import { AiFillMobile } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";
import Helmet from "react-helmet";
import { motion } from "framer-motion";
import apk from "../components/Assets//EduVert.apk";
import "./css/Projects.css";

const Projects = () => {

  const [state] = React.useState([
    {
      id: 1,
      icon: <FaShoppingCart className="commonIcons" />,
      heading: "Shop-Mart",
      text: "In this Project i created one E-Commerce App, with almost all e-commerce app functionality.",
      href: "https://shopp-mart.netlify.app/",
      github: "https://github.com/sarry7045/E-Commerce-Web",
    },
    {
      id: 2,
      icon: <AiOutlineHome className="commonIcons" />,
      heading: "Rental Next-App",
      text: "Rental Homes for everyone, we can search and find easily the information about any Hotels.",
      href: "https://rentall.vercel.app/",
      github: "https://github.com/sarry7045/Rental",
    },
    {
      id: 3,
      icon: <CgGym className="commonIcons" />,
      heading: "Gym-Holic",
      text: "We can search any types of workouts with some good quality videos.",
      href: "https://gymholic.netlify.app/",
      github: "https://github.com/sarry7045/Gymholic",
    },

    {
      id: 4,
      icon: <MdAppRegistration className="commonIcons" />,
      heading: "Login Registration Form",
      text: "In this Project i created one basic Registraion and Login Form (Only Frontend Part Done).",
      href: "https://mern-client-side.netlify.app/",
      github: "https://github.com/sarry7045/MERN-Client-Side",
    },

    {
      id: 5,
      icon: <MdQuiz className="commonIcons" />,
      heading: "Quiz-App",
      text: "Multiple Choice Questions, we have to choose right answers, and at the end it will show final Results.",
      href: "https://quizzzzzz-app.netlify.app/",
      github: "https://github.com/sarry7045/Quiz-App",
    },
    {
      id: 6,
      icon: <AiOutlineForm className="commonIcons" />,
      heading: "Multi-Step Form",
      text: "In this Project i Created Multistep Form Using Formik and Some Functionality.",
      href: "https://multistepp-form.netlify.app/",
      github: "https://github.com/sarry7045/Multi-Step-Form",
    },
    {
      id: 7,
      icon: <RiVideoChatLine className="commonIcons" />,
      heading: "Video Chat App",
      text: "In this Project i created one Video Chat app using Socket.IO and Material-UI.",
      href: "https://videeo-chatt-app.netlify.app/",
      github: "https://github.com/sarry7045/Video-Chat-App",
    },

    {
      id: 8,
      icon: <FaRupeeSign className="commonIcons" />,
      heading: "Expense Tracker",
      text: "In this Project i created one Basic Expense Calculater Using Material UI",
      href: "https://expense-trracker.netlify.app/",
      github: "https://github.com/sarry7045/Expense-Tracker",
    },
    {
      id: 9,
      icon: <AiOutlineShoppingCart className="commonIcons" />,
      heading: "React Add-To-Cart",
      text: "In this Project i created one Add to Cart aap With Some Funcationality.",
      href: "https://shoppingg-caart.netlify.app/",
      github: "https://github.com/sarry7045/Shopping-Cart",
    },
    {
      id: 10,
      icon: <TiWeatherCloudy className="commonIcons" />,
      heading: "Weather App",
      text: "In this Project i created one Weather Checking app using Weather API.",
      href: "https://react-weatther-app.netlify.app/",
      github: "https://github.com/sarry7045/Weather-App",
    },

    {
      id: 11,
      icon: <BsNewspaper className="commonIcons" />,
      heading: "Programing News",
      text: "In this Project i Created one basic News Website for Programming things.",
      href: "https://programming-news.netlify.app/",
      github: "https://github.com/sarry7045/ReactJs-News-Blog",
    },
    {
      id: 12,
      icon: <BsTextareaT className="commonIcons" />,
      heading: "Text Converter",
      text: "In this Project i developed one text converter with some functionality using Javascript Logic.",
      href: "https://textz-converter.netlify.app/",
      github: "https://github.com/sarry7045/Text-Transform",
    },
    {
      id: 13,
      icon: <GiNotebook className="commonIcons" />,
      heading: "React Todo-List",
      text: "In this Project i created one basic Todo-List using Bootstrap and Some Javascript Logic.",
      href: "https://basic-reactt-todo-list.netlify.app/",
      github: "https://github.com/sarry7045/React-Todo-List",
    },

    {
      id: 14,
      icon: <MdOutlineFoodBank className="commonIcons" />,
      heading: "React Restaurant Web",
      text: "In this Project i created one Restaurant type Website with some categories.",
      href: "https://surajreactrestaurant.netlify.app/",
      github: "https://github.com/sarry7045/Suraj-React-Resturant",
    },
  ]);

  const windowWidth = window.innerWidth;

  return (
    <>
      <Helmet>
        <title>Projects</title>

        <meta
          name="description"
          content="I am an Innovative Front-End Developer with multiple Years of Experience in Web Development, Software Development and SEO."
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, software development, suraj yadav software developer, suraj yadav react developer, suraj yadav frontend developer, react developer, javascript developer, suraj yadav seo expert, seo expert, frontend developer, suraj yadav digital marketing"
        />
      </Helmet>
      <div className="projects">
        <div className="container">
          <div className="common">
            <h1 className="mainHeader">Projects</h1>

            <div className="commonBorder"></div>
          </div>

          <div className="row">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.9 }}
              className="col-4"
            >
              <Zoom>
                <div className="projects__box">
                  <AiFillMobile className="commonIcons" />
                  <div className="projects__box-header">Edu Vert</div>
                  <div>
                    In this Project i created one Basic Mobile App for Learn
                    Programming Languages.{" "}
                  </div>
                </div>
                <div
                  transition={{ type: "spring", stiffness: 1000 }}
                  style={{ margin: "2.5rem 0 4rem 2rem" }}
                  className="mainbuttons"
                >
                  <a
                    href={apk}
                    download="EduVert"
                    // target="_blank"
                    className="btn project-btn-outline"
                    rel="noreferrer"
                    title="EduVert"
                  >
                    Download APK
                  </a>

                  {windowWidth > 765 ? (
                    <a
                      href="https://github.com/sarry7045/Educational-App"
                      target="_blank"
                      className="btn project-btn-outline"
                      rel="noreferrer"
                      title="View Project"
                      style={{ marginLeft: "1rem" }}
                    >
                      View GitHub
                    </a>
                  ) : null}
                </div>
              </Zoom>
            </motion.div>
            {state.map((info) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.9 }}
                className="col-4"
              >
                <Zoom>
                  <div className="projects__box">
                    {info.icon}
                    <div className="projects__box-header">{info.heading}</div>
                    <div>{info.text}</div>
                  </div>
                  <div
                    transition={{ type: "spring", stiffness: 1000 }}
                    style={{ margin: "2.5rem 0 4rem 2rem" }}
                    className="mainbuttons"
                  >
                    <a
                      href={info.href}
                      target="_blank"
                      className="btn project-btn-outline"
                      rel="noreferrer"
                      title="View Project"
                    >
                      View Project
                    </a>
                    {windowWidth > 765 ? (
                      <a
                        href={info.github}
                        target="_blank"
                        className="btn project-btn-outline"
                        rel="noreferrer"
                        title="View Project"
                        style={{ marginLeft: "1rem" }}
                      >
                        View GitHub
                      </a>
                    ) : null}
                  </div>
                </Zoom>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
