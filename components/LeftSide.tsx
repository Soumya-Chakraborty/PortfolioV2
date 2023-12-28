import { FC } from 'react';
import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin, SlSocialFacebook, SlSocialInstagram } from 'react-icons/sl';

const socialMediaLinks = [
  { href: 'https://github.com/Soumya-Chakraborty', icon: <TbBrandGithub /> },
  { href: 'https://www.linkedin.com/in/soumya-chakraborty-', icon: <SlSocialLinkedin /> },
  { href: 'https://www.facebook.com/profile.php?id=100089264288424&mibextid=ZbWKwL', icon: <SlSocialFacebook /> },
  { href: 'https://www.instagram.com/soumya_ckakraborty', icon: <SlSocialInstagram /> },
];

const LeftSide: FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        {socialMediaLinks.map((link, index) => (
          <a href={link.href} target="_blank" rel="noopener noreferrer" key={index}>
            <span className="w-10 h-10 text-xl inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                {link.icon}
            </span>
          </a>
        ))}
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;