import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { Github } from "lucide-react";

const socialLinks = [
  { href: "#", icon: Github },
  { href: "#", icon: FaLinkedinIn },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center opacity-50">
          <div className="text-xl font-bold text-dark mb-4 md:mb-0"></div>
          <div className="flex flex-wrap justify-center items-center space-x-6 mb-4 md:mb-0"></div>
          <div className="flex justify-center space-x-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="text-dark hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center opacity-50">
          &copy; {new Date().getFullYear()} Brodie Lewis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
