import { ElementType } from "react";
import { IconType } from "react-icons";

export type Menu = {
  id: number;
  name: string;
  link: string;
  subMenu?: Menu[];
  icon: ElementType;
};
