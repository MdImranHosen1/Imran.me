export const portfolios = {
  Web: [
    {
      type: "featured",
      name: "Hotel Management",
      image: require("./image/hotel_mangement.png"),
      description: "A simple Hotel management design using  HTML,CSS",
      demo: "https://imrancse190.github.io/HTML_CSE_Assignment/",
      source: "https://github.com/imrancse190/HTML_CSE_Assignment",
      tools: ["HTML", "CSS"],
    },
    {
      type: "featured",
      name: "Hotel Management Full Stack",
      image: require("./image/hotel_mangement.png"),
      description:
        "The same project of I build with Node JS and React JS. Everything is dynamic here.",
      demo: "https://github.com/imrancse190/Frontend-ReactJS-NodeJS-Assignment",
      source:
        "https://github.com/imrancse190/Frontend-ReactJS-NodeJS-Assignment",
      tools: ["HTML", "CSS", "NodeJS", "ReactJS"],
    },
    {
      type: "featured",
      name: "Viva Application",
      image: require("./image/vivaProject.png"),
      description:
        "This application is designed to help you prepare for viva exams effectively. It allows you to set a large number of questions, organized by topic. Each day, you can simulate a viva by facing questions selected from the topics you've chosen.",
      demo:
        "https://github.com/MdImranHosen1/Exam-Application-NextJs-ExpressJs",
      source:
        "https://github.com/MdImranHosen1/Exam-Application-NextJs-ExpressJs",
      tools: ["ExpressJS", "NextJS", "MongooDB", "Tailwind CSS"],
    },
    {
      type: "regular",
      name: "EcoSync",
      description: "This application ",
      demo: "https://github.com/MdImranHosen1/CS24-p2-BSMRSTU_Prefect_Number",
      source: "https://github.com/MdImranHosen1/CS24-p2-BSMRSTU_Prefect_Number",
      tools: ["ExpressJS", "NextJS", "MongooDB", "Tailwind CSS"],
    },
  ],
  Others: [
    {
      type: "featured",
      name: "DevTop",
      image: require("./image/vivaProject.png"),
      description:
        "Cross-platform desktop tool for the developers, does some useful job and make life easy",
      demo: "https://zonayedpca.github.io/DevTop",
      source: "https://github.com/zonayedpca/DevTop",
      tools: ["electron", "react"],
    },
  ],
}
