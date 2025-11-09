import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function SocialIcons() {
  const icons = [
    { href: "https://www.facebook.com/praneeth.sandaruwan.357", icon: <FaFacebookF className="w-5 h-5" /> },
    { href: "https://x.com/praneethsb99", icon: <FaXTwitter className="w-5 h-5" /> },
    { href: "https://www.instagram.com/praneeth.sl/", icon: <FaInstagram className="w-5 h-5" /> },
    { href: "https://www.linkedin.com/in/praneeth-liyanage/", icon: <FaLinkedinIn className="w-5 h-5" /> },
  ];

  return (
    <div>
      <div className="flex items-center justify-center md:justify-start space-x-5 mt-6 mb-8">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-violet-400 bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300 shadow-md"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialIcons;
