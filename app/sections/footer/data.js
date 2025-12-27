import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";

export const links = [
  { id: 1, link: "#", title: "דף הבית" },
  { id: 2, link: "#about", title: "עליי" },
  { id: 3, link: "#services", title: "שירותים" },
  { id: 4, link: "#portfolio", title: "עבודות" },
  { id: 5, link: "#contact", title: "יצירת קשר" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.more-ways.co.il/",
    icon: <BsGlobe />,
    label: "אתר More-Ways",
  },
  {
    id: 2,
    link: "https://www.facebook.com/profile.php?id=100094083860874",
    icon: <AiOutlineFacebook />,
    label: "Facebook",
  },
  {
    id: 3,
    link: "https://instagram.com/UC4WJzzrhDnZVAiFkgM6Krfw",
    icon: <AiOutlineInstagram />,
    label: "Instagram",
  },
  {
    id: 4,
    link: "mailto:eylon@more-ways.co.il",
    icon: <HiOutlineMail />,
    label: "Email",
  },
];
