import { Menu } from "@/types/menu";
import { AiTwotoneAppstore } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import {
  FaAddressBook,
  FaDesktop,
  FaFingerprint,
  FaGlobe,
  FaTag,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { RiBook2Fill } from "react-icons/ri";

export const MenuData: Menu[] = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: AiTwotoneAppstore,
  },
  {
    id: 2,
    name: "Portfolio",
    link: "/portfolio",
    icon: FaGlobe,
    subMenu: [
      {
        id: 1,
        name: "About",
        link: "/portfolio/about",
        icon: FaFingerprint,
      },
      {
        id: 2,
        name: "Project",
        link: "/portfolio/project",
        icon: GrAppsRounded,
      },
      {
        id: 3,
        name: "Service",
        link: "/portfolio/service",
        icon: FaDesktop,
      },
      {
        id: 4,
        name: "Contacts",
        link: "/portfolio/contact",
        icon: RiBook2Fill,
      },
    ],
  },
  {
    id: 3,
    name: "AsProg",
    link: "/asprog",
    icon: FaYoutube,
    subMenu: [
      {
        id: 1,
        name: "Project",
        link: "/asprog/project",
        icon: GrAppsRounded,
      },
      {
        id: 2,
        name: "Tags",
        link: "/portfolio/tags",
        icon: FaTag,
      },
    ],
  },
  {
    id: 4,
    name: "Users",
    link: "/users",
    icon: FaUsers,
  },
  {
    id: 5,
    name: "Settings",
    link: "/settings",
    icon: CiSettings,
  },
];
