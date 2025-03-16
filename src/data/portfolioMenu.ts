import { ElementType } from "react";
import {
  BiSolidBot,
  BiSolidHeart,
  BiSolidMessageSquareDots,
} from "react-icons/bi";
import { HiOutlineFingerPrint } from "react-icons/hi";
import { IoHome } from "react-icons/io5";

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
    link: "home",
    icon: IoHome,
  },
  {
    id: 2,
    name: "About",
    link: "about",
    icon: HiOutlineFingerPrint,
  },
  {
    id: 4,
    name: "Services",
    link: "services",
    icon: BiSolidHeart,
  },

  {
    id: 3,
    name: "Projects",
    link: "projects",
    icon: BiSolidBot,
  },

  {
    id: 5,
    name: "Contact",
    link: "contact",
    icon: BiSolidMessageSquareDots,
  },
];
