// import images
import Hero_person from "./assets/images/Hero/mypic_.png";

// top languages icons
import python from "./assets/images/Skills/python.png";
import c from "./assets/images/Skills/c.png";
import cpp from "./assets/images/Skills/cpp.png";
import sql from "./assets/images/Skills/sql.png";

// developer tools icons
import sketch from "./assets/images/Skills/fire.png";
import aws from "./assets/images/Skills/aws.png";
import cloud from "./assets/images/Skills/cloud.png";
import git from "./assets/images/Skills/git.png";
import streamlit from "./assets/images/Skills/streamlit.png";
import eclipse from "./assets/images/Skills/eclipse.png";

// frameworks icons 
import react from "./assets/images/Skills/react.png";
import node from "./assets/images/Skills/node.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";


import project2 from "./assets/images/Projects/website.webp";

import person_project from "./assets/images/Hero/mypic_.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hero/mypic_.png";
import Hireme_person2 from "./assets/images/Hero/mypic_.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    // {
    //   link: "#services",
    //   icon: RiServiceLine,
    // },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Parveen",
    LastName: "Jaiswal",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experience in Web development. Software Engineer Intern skilled in automated testing and scalable web apps, with Technical Associate experience in workflow optimization and network security.",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP LANGUAGES",
    skills_content: [
      {
        name: "Python",
        para: "",
        logo: python,
      },
      {
        name: "C",
        para: "",
        logo: c,
      },
      {
        name: "C++",
        para: "",
        logo: cpp,
      },
      {
        name: "MySQL",
        para: "",
        logo: sql,
      },
      // {
      //   name: "Firebase",
      //   para: "",
      //   logo: sketch,
      // },
      // {
      //   name: "Python",
      //   para: "",
      //   logo: python,
      // },
    ],
    icon: MdArrowForward,
  },

  // Developer Tools
  DeveloperTools: {
    subtitle: "Developer Tools",
    tools_content: [
      {
        name: "Firebase",
        para: "",
        logo: sketch,
      },
      {
        name: "Amazon Web Services",
        para: "",
        logo: aws,
      },
      {
        name: "Google Cloud Platform",
        para: "",
        logo: cloud,
      },
      {
        name: "Github",
        para: "",
        logo: git,
      },
      {
        name: "Streamlit",
        para: "",
        logo: streamlit,
      },
      {
        name: "Eclipse",
        para: "",
        logo: eclipse,
      },
      
    ],
  },

  Frameworks:{
    subtitle: "Frameworks",
    frame_content: [
      {
        name: "React",
        para: "",
        logo: react,
      },
      {
        name: "Node.js",
        para: "",
        logo: node,
      },
      
      {
        name: "Bootstrap",
        para: "",
        logo: bootstrap,
      },
      {
        name: "MongoDB",
        para: "",
        logo: '',
      },
      {
        name: "Next JS",
        para: "",
        logo: '',
      },
      {
        name: "Angular",
        para: "",
        logo: '',
      },
      {
        name: "Typescript",
        para: "",
        logo: '',
      },
      {
        name: "PHP",
        para: "",
        logo: '',
      },
      
      
    ],
  },

  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Toureila",
        image: project2,
        link:"https://github.com/Rockstar100/toureila"
      },
      {
        title: "Clickmaster",
        image: project2,
        link:" "
      },
     
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Education",

    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am pursuing  B.Tech CSE from Swami Vivekanand Institute of Engineering and Technology , Chandigarh.",
    // btnText: "GDSC Application",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "GDSC Apllication ",
  },
};
