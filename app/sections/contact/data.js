import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const data = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    link: "mailto:eylon@more-ways.co.il",
    label: "שליחת מייל",
  },

  {
    id: 3,
    icon: <AiOutlineFacebook />,
    link: "https://www.facebook.com/profile.php?id=100094083860874",
    label: "פייסבוק",
  },

  {
    id: 5,
    icon: <BsGlobe />,
    link: "https://www.more-ways.co.il/",
    label: "אתר More-Ways",
  },
];

export default data;
