import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    functionUp,
    gym,
    kanban,
    chatApp,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer Trainee",
      company_name: "FunctionUp",
      icon: functionUp,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        "Received comprehensive training in HTML, CSS, JavaScript, and React JS,acquiring a strong foundation in front-end development.",
        "Successfully created multiple single-page applications (SPAs) as front-endassignments, utilizing React.js to ensure seamless user experiences.",
        "Demonstrated effective collaboration by actively participating with teammembers on GitHub, fostering efficient code sharing and version control.",
        "Developed a range of mini-projects employing technologies such as React,Recoil, MUI, and react-router, showcasing adaptability to various tools andframeworks.",
        "Showcased exceptional leadership and teamwork skills, consistentlycontributing to the team's synergy and achieving timely project deliveries."
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "FunctionUp",
      icon: functionUp,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Present",
      points: [
        "Mentored and provided valuable guidance to aspiring front-end developers,aiding in their skill development and professional growth.",
        "Assumed responsibility for reviewing projects and assignments of fellow front-end developers, offering constructive feedback and contributing to overallproject quality.",
        "Led interactive and engaging learning sessions, fostering an environmentconducive to effective knowledge sharing and collaborative learning.",
      ],
    }
  ];
  
  const projects = [
    {
      name: "Gym Website",
      description:
        "Developed a responsive and user-friendly Gym website utilizing a robust techstack including React.js, HTML, CSS, JavaScript, and react-router. The project'sprimary objective was to create a platform where users can seamlessly registerand login.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/Rohit-2012/GYM-project-2.0",
    },
    {
      name: "Kanban Board",
      description:
        "The project's central objective wasto craft an efficient platform enabling users to establish multiple task lists,implement drag-and-drop functionality for tasks between lists, and facilitateseamless task and list management through updates and deletions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-beautiful-dnd",
          color: "green-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: kanban,
      source_code_link: "https://github.com/Rohit-2012/Kanban-board",
    },
    {
      name: "Real-time Chat App",
      description:
        "My real-time chat application exemplifies the fusion of React.js, HTML, CSS, JavaScript, socket.io, express, and cors to deliver an engaging and dynamic platform where multiple users can gather, converse, and connect in a truly real-time environment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: chatApp,
      source_code_link: "https://github.com/Rohit-2012/Real-time-chat-app",
    },
  ];
  
  export { services, technologies, experiences, projects };