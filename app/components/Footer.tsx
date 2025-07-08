import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { Github } from "lucide-react";

const footerLinks = [
  { href: "#", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About me" },
  { href: "#contact", label: "Contact" },
  { href: "#testimonials", label: "Testimonials" },
];

const socialLinks = [
  { href: "#", icon: Github },
  { href: "#", icon: FaLinkedinIn },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold text-dark mb-4 md:mb-0">
            <Link href="#">Brodie Lewis</Link>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-6 mb-4 md:mb-0">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-dark hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
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
      </div>
    </footer>
  );
};

export default Footer;
