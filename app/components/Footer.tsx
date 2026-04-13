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
    <footer id="footer" className="border-t border-border bg-navy">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted">
            <span className="text-primary">{'>'}</span> brodie@portfolio:~$
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Brodie Lewis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
