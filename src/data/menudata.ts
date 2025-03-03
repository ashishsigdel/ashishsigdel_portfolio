import { Menu } from "@/types/menu";
import { AiTwotoneAppstore } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import {
  FaFingerprint,
  FaGlobe,
  FaTag,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiBook2Fill } from "react-icons/ri";

export const MenuData: Menu[] = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
    icon: AiTwotoneAppstore,
  },

  {
    id: 8,
    name: "Projects",
    link: "/portfolio/project",
    icon: GrAppsRounded,
  },
  {
    id: 3,
    name: "Projects",
    link: "/asprog/project",
    icon: FaYoutube,
  },
  {
    id: 4,
    name: "Users",
    link: "/users",
    icon: FaUsers,
  },
  {
    id: 2,
    name: "StudyHere",
    link: "/studyhere",
    icon: FaUsers,
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
