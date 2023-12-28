import React from "react";
import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const socialMediaLinks = [
  {
    href: "https://github.com/Soumya-Chakraborty",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/soumya-chakraborty-",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100089264288424&mibextid=ZbWKwL",
    icon: <FaFacebook />,
  },
  {
    href: "https://www.instagram.com/soumya_ckakraborty",
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <footer className="hidden md:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4 bg-footerColor">
      {socialMediaLinks.map((link, index) => (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            {link.icon}
          </span>
        </a>
      ))}
    </footer>
  );
};

export default Footer;