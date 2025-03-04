import { Menu } from "@/types/menu";
import { AiTwotoneAppstore } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { DiYeoman } from "react-icons/di";
import { FaFingerprint, FaUsers, FaYoutube } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { IoMdBook } from "react-icons/io";
import { MdDashboard, MdOutlineAlternateEmail } from "react-icons/md";
import { RiBook2Fill } from "react-icons/ri";

export const MenuData: Menu[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: MdDashboard,
  },
  {
    id: 9,
    name: "Portfolio",
    icon: DiYeoman,
    subMenu: [
      {
        id: 9,
        name: "Profie",
        link: "/portfolio/about",
        icon: FaFingerprint,
      },
      {
        id: 8,
        name: "Projects",
        link: "/portfolio/project",
        icon: GrAppsRounded,
      },
    ],
  },
  {
    id: 3,
    name: "AsProg",
    icon: FaYoutube,
    subMenu: [
      {
        id: 3,
        name: "Projects",
        link: "/asprog/project",
        icon: AiTwotoneAppstore,
      },
    ],
  },
  {
    id: 4,
    name: "Users",
    icon: FaUsers,
    subMenu: [
      {
        id: 4,
        name: "Asprog",
        link: "/users",
        icon: FaYoutube,
      },
      {
        id: 2,
        name: "StudyHere",
        link: "/studyhere",
        icon: IoMdBook,
      },
    ],
  },

  {
    id: 7,
    name: "Inbox",
    link: "/inbox",
    icon: RiBook2Fill,
  },
  {
    id: 6,
    name: "Email Manager",
    link: "/email-manager",
    icon: MdOutlineAlternateEmail,
  },
  {
    id: 5,
    name: "Settings",
    link: "/settings",
    icon: CiSettings,
  },
];
