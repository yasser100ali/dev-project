import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    ucsb,
    math,
    shopify,
    carrent,
    jobit,
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
      title: "Strong Math Background",
      icon: web,
    },
    {
      title: "High Level Statistics",
      icon: mobile,
    },
    {
      title: "Data Analysis",
      icon: backend,
    },
    {
      title: "Python Programming",
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
      name: "TypeScript",
      icon: typescript,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Client Relation, Accounts Coordinator",
      company_name: "Pro Wireless",
      //icon: find logo, or create one and insert here,
      iconBg: "",
      date: "Aug 2019 - Feb 2021",
      points: [
        "- Worked as an overall assistant to small cell phone business, Pro Wireless.",
        "- Would handle all purchase orders and invoices on QuickBooks Pro.",
        "- Searched and negotiated with various clients on prices, frequently handled customer relations.",
        "- Cost benefit analysis of various customers to assess which clients were most valuable to the company.",
      ],
    },
    {
      title: "Math Tutor",
      company_name: "Mathnasium",
      icon: math,
      iconBg: "#000000",
      date: "Mar 2021 - Sep 2021, Oct 2023 - Present",
      points: [
        "- At Mathnasium, I do my best to increase mathematical literacy among children grades K-12.",
        "- Rather than giving the students the answer straight, I try to ask questions so that they come to the conclusion themselves",
        "- In the process of teaching children hard mathematical concepts, I have developed strong intuition on what makes people learn."
      ],
    },
    {
      title: "College",
      company_name: "University of California, Santa Barbara",
      icon: ucsb,
      iconBg: "#FFFFFF",
      date: "Graduated Sep 2023",
      points: [
        "- Applied Mathematics, GPA of 3.2",
        "- Well versed in many advanced mathematical subjects such as Linear Algebra, Calculus, and Numerical Analysis.",
        "- Took a variety of statistics courses as well and familiar with many regression techniques.",
        "- Developed a strong sense of how to tackle difficult problems in a rigorous and mathemtical way.",
      ],
    },
    {
      title: "What I'm currently doing",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Present",
      points: [
        "- Learning computer algorithms to make my coding more efficient.",
        "- Taugh myself javascript, html, css and used it to build this website!",
        "- Building various projects, check github link.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    /*{
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },*/
  ];
  
  const projects = [
    {
      name: "Matrix Analysis using SVD",
      description:
        "Created a model based on 2022-23 season to predict NBA records for every team, spanning many decades using Linear Algebra technique called Singular Value Decompositon.",
      tags: [
        {
          name: "Linear Algebra",
          color: "blue-text-gradient",
        },
        {
          name: "Data Analysis",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      //image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Writer",
      description:
        "Writing and teaching fosters knowledge, so once a week, I'll publish an article on the various things I've learned to gain a better understanding and to help others learn.",
      tags: [
        {
          name: "Medium",
          color: "blue-text-gradient",
        },
        {
          name: "Knowledge",
          color: "green-text-gradient",
        },
      ],
      //image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Snake Game AI",
      description:
        "Built an AI that plays the snake game by itself. Play aweful at first but becomes damn good after many tries.",
      tags: [
        {
          name: "Artificial Intelligence",
          color: "blue-text-gradient",
        },
        {
          name: "Neural Networks",
          color: "green-text-gradient",
        },
        {
          name: "Game Design",
          color: "pink-text-gradient",
        },
      ],
      //image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };