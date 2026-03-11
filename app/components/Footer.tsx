import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://github.com/lewi0239', icon: FaGithub, label: 'GitHub profile' },
  {
    href: 'https://www.linkedin.com/in/brodie-lewis/',
    icon: FaLinkedinIn,
    label: 'LinkedIn profile',
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="mb-4 text-xl font-bold text-dark md:mb-0"></div>
          <div className="mb-4 flex flex-wrap items-center justify-center space-x-6 md:mb-0"></div>
          <div className="flex justify-center space-x-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Brodie Lewis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
