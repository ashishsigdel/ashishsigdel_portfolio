import youtube from "@/assets/icons/youtube.svg";
import github from "@/assets/icons/github.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import instagram from "@/assets/icons/instagram.svg";
import facebook from "@/assets/icons/facebook.svg";
import website from "@/assets/icons/website.png";
import letter from "@/assets/icons/letter.svg";
import { StaticImageData } from "next/image";

export const socialLinks: {
  name: string;
  link: string;
  icon: StaticImageData;
}[] = [
  {
    name: "Github",
    link: "https://github.com/ashishsigdel",
    icon: github,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/aasisigdel/",
    icon: linkedin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/aasissigdel/",
    icon: instagram,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/ashish.sgdl.9/",
    icon: facebook,
  },
];

export const links = {
  github: "https://github.com/ashishsigdel",
  linkedin: "https://www.linkedin.com/in/aasisigdel/",
  instagram: "https://www.instagram.com/aasissigdel/",
  facebook: "https://www.facebook.com/ashish.sgdl.9/",
};

export const asProgLinks: {
  name: string;
  link: string;
  icon: StaticImageData;
}[] = [
  {
    name: "asprog.",
    link: "https://asprog.ashishsigdel.com.np",
    icon: website,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/@as-prog?sub_confirmation=1",
    icon: youtube,
  },
  {
    name: "Newsletter",
    link: "https://asprog.ashishsigdel.com.np/resources",
    icon: letter,
  },
];
