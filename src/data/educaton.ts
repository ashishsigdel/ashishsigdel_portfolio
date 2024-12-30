import TuIcon from "@/assets/portfolio/education/tu.png";
import courseraLogo from "@/assets/portfolio/education/coursera.png";
import udemyLogo from "@/assets/portfolio/education/udemy.png";
import youtubeLogo from "@/assets/portfolio/education/youtube.png";

export const degrees = [
  {
    id: 1,
    university: "Western Regional Campus, IOE TU",
    program: "Bachelor in Computer Engineering",
    from: "2021",
    to: "running",
    points: [
      {
        name: "Focused on software development, data structures, and algorithms.",
      },

      {
        name: "Worked on projects involving AI, machine learning, and IoT.",
      },
      {
        name: "Collaborated on team-based software engineering projects.",
      },
      {
        name: "Participated in hackathons and coding competitions.",
      },
    ],
    link: "https://ioe.tu.edu.np/",
    image: TuIcon,
  },
];

export const certifications = [
  {
    id: 1,
    name: "Machine Learning",
    author: "Andrew Ng",
    Link: "https://www.coursera.org/learn/machine-learning/home/week/1",
    image: courseraLogo,
  },
  {
    id: 2,
    name: "Deep Learning",
    author: "Andrew Ng",
    Link: "https://www.coursera.org/specializations/deep-learning",
    image: courseraLogo,
  },
  {
    id: 3,
    name: "Full Stack Web Development",
    author: "Prerak Mehta",
    Link: "https://www.udemy.com/course/master-full-stack-web-development-novice-to-expert",
    image: udemyLogo,
  },
  {
    id: 4,
    name: "Machine Learning",
    author: "Code Basics",
    Link: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw",
    image: youtubeLogo,
  },
];
