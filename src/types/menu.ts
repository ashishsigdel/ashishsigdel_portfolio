import { ElementType } from "react";
import { IconType } from "react-icons";

export type SubMenu = {
  id: number;
  name: string;
  link: string;
  icon: ElementType;
};

export type Menu = {
  id: number;
  name: string;
  link?: string;
  subMenu?: SubMenu[];
  icon: ElementType;
};
