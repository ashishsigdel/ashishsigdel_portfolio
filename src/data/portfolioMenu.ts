import { ElementType } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { IoHome, IoMail } from "react-icons/io5";
import { LuFolderGit2, LuMessageCircle } from "react-icons/lu";

interface Menu {
  id: number;
  name: string;
  link: string;
  icon: ElementType;
}

export const MenuData: Menu[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: IoHome,
  },
  {
    id: 2,
    name: "Education",
    link: "/education",
    icon: FaGraduationCap,
  },
  {
    id: 3,
    name: "Projects",
    link: "/projects",
    icon: LuFolderGit2,
  },
  //   {
  //     id: 4,
  //     name: "Blog",
  //     link: "/blog",
  //     icon: FiPenTool,
  //   },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
    icon: IoMail,
  },
];
