import { useState } from 'react';
import { useIsDesktop } from '../hooks/useIsDesktop.js';
import { scrollToId } from '../utils/scrollToId.js';

const NAV_LINKS = [
  { target: 'profile', label: 'Home' },
  { target: 'about', label: 'About' },
  { target: 'experience', label: 'Skills' },
  { target: 'projects', label: 'Projects' },
  { target: 'experience-2', label: 'Resume' },
  { target: 'contact', label: 'Contact' },
];

// Shared "floating pill" styling
const PILL_BASE =
  'fixed top-6 left-1/2 -translate-x-1/2 z-[1000] rounded-full ' +
  'bg-[#0a0e17] shadow-[0_8px_30px_rgba(0,0,0,0.35)]';

function Navbar() {
  const isDesktop = useIsDesktop(1200);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function handleKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  }

  function handleNavClick(e, target) {
    e.preventDefault();
    scrollToId(target);
    setIsMenuOpen(false);
  }

  if (isDesktop) {
    return (
      <nav
        className={`${PILL_BASE} w-fit max-w-[calc(100%-3rem)] flex items-center gap-10 px-10 py-2.5`}
      >
        <ul className="flex gap-10 list-none text-base m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="text-gray-300 hover:text-white transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav
      className={`${PILL_BASE} w-[calc(100%-3rem)] max-w-[480px] flex items-center justify-between px-6 py-4`}
    >
      <span className="text-white font-semibold text-lg">Menu</span>

      <div className="relative inline-block">
        <div
          role="button"
          tabIndex={0}
          onClick={toggleMenu}
          onKeyDown={handleKeydown}
          className="flex flex-col justify-between h-6 w-[30px] cursor-pointer"
        >
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''
            }`}
          ></span>

          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>

          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''
            }`}
          ></span>
        </div>

        <ul
          className={`absolute top-[calc(100%+0.75rem)] right-0 bg-[#0a0e17] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] list-none m-0 p-0 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[300px]' : 'max-h-0'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="block px-4 py-2.5 text-center text-base text-gray-300 hover:text-white no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;