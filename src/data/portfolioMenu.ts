import { Menu } from "@/types/menu";
import { FaGraduationCap } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { IoGitNetwork, IoHome } from "react-icons/io5";
import { LuFolderGit2, LuMessageCircle } from "react-icons/lu";
import { PiArticleNyTimesBold } from "react-icons/pi";

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
    icon: LuMessageCircle,
  },
];
