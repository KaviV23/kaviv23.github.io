import { Link } from 'react-scroll';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'skills', label: 'Skills' },
  { to: 'contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-center items-center h-16">
        <ul className="flex space-x-4 md:space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-300 hover:text-accent-blue cursor-pointer transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}